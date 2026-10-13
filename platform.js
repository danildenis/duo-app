/*
 * Платформенный слой DUO: одно приложение для Telegram и VK.
 *
 * В Telegram ничего не меняется — работает родной window.Telegram.WebApp.
 * В VK (в адресе есть vk_app_id и sign) поверх VK Bridge собирается объект
 * с тем же интерфейсом, что Telegram.WebApp, поэтому app.js не нужно трогать.
 *
 * Бэкенд отличает платформу по initData: в VK оно начинается с "vk:",
 * дальше — параметры запуска VK (vk_*&sign), их надо проверить по подписи.
 */
(function () {
  // ==== Настройки VK — заполнить ====
  var VK = {
    groupId: 0,                    // ID сообщества DUO (число, без минуса)
    appId: 0,                      // ID мини-приложения
    botUsername: 'duodevops_bot',  // username TG-бота, ссылки на него ведём в сообщения сообщества
  };

  var params = new URLSearchParams(location.search);
  var isVK = params.has('vk_app_id') && params.has('sign');
  window.DUO_PLATFORM = isVK ? 'vk' : 'telegram';

  if (!isVK || !window.vkBridge) {
    if (isVK) console.error('VK Bridge не загрузился');
    window.__platformReady = Promise.resolve();
    return;
  }

  var bridge = window.vkBridge;
  var send = function (method, data) {
    try { return bridge.send(method, data || {}); } catch (e) { return Promise.reject(e); }
  };
  var quiet = function (method, data) { send(method, data).catch(function () {}); };

  var groupId = VK.groupId || Number(params.get('vk_group_id')) || 0;
  var appId = VK.appId || Number(params.get('vk_app_id')) || 0;
  var appLink = 'https://vk.com/app' + appId;
  var groupChat = groupId ? 'https://vk.me/club' + groupId : appLink;

  // ---- события (аналог Telegram onEvent) ----
  var handlers = {};
  var emit = function (name) { (handlers[name] || []).forEach(function (fn) { try { fn(); } catch (e) {} }); };

  // ---- кнопка «Назад» через историю браузера (в VK нет нативной) ----
  var backShown = false, backCbs = [];
  window.addEventListener('popstate', function () {
    if (!backShown) return;
    history.pushState({ duoBack: 1 }, '');
    backCbs.forEach(function (fn) { try { fn(); } catch (e) {} });
  });

  // ---- перевод ссылок t.me в VK ----
  function mapLink(url) {
    var u = String(url);
    if (u.indexOf('https://t.me/share/url') === 0) return { share: true };
    if (u.indexOf('https://t.me/' + VK.botUsername) === 0) return { url: groupChat };
    return { url: u };
  }
  function openUrl(url) {
    var m = mapLink(url);
    if (m.share) return quiet('VKWebAppShare', { link: appLink });
    window.open(m.url, '_blank');
  }

  var user = {
    id: Number(params.get('vk_user_id')) || 0,
    first_name: '',
    allows_write_to_pm: false,
  };

  var WebApp = {
    platform: 'vk',
    version: '9.0',
    initData: 'vk:' + location.search.slice(1),
    initDataUnsafe: { user: user },
    safeAreaInset: { top: 0, bottom: 0, left: 0, right: 0 },
    contentSafeAreaInset: { top: 0, bottom: 0, left: 0, right: 0 },
    isVersionAtLeast: function () { return true; },
    ready: function () {},
    expand: function () {},
    disableVerticalSwipes: function () {},
    close: function () { quiet('VKWebAppClose', { status: 'success' }); },
    setHeaderColor: function (color) {
      quiet('VKWebAppSetViewSettings', { status_bar_style: 'light', action_bar_color: color, navigation_bar_color: color });
    },
    setBackgroundColor: function () {},
    setBottomBarColor: function () {},
    onEvent: function (name, fn) { (handlers[name] = handlers[name] || []).push(fn); },
    openLink: function (url) { window.open(url, '_blank'); },
    openTelegramLink: openUrl,
    requestWriteAccess: function () {
      if (!groupId || user.allows_write_to_pm) return;
      send('VKWebAppAllowMessagesFromGroup', { group_id: groupId })
        .then(function (r) { user.allows_write_to_pm = !!(r && r.result); })
        .catch(function () {});
    },
    HapticFeedback: {
      impactOccurred: function (style) { quiet('VKWebAppTapticImpactOccurred', { style: style === 'soft' ? 'light' : style }); },
      notificationOccurred: function (type) { quiet('VKWebAppTapticNotificationOccurred', { type: type }); },
      selectionChanged: function () { quiet('VKWebAppTapticSelectionChanged'); },
    },
    BackButton: {
      show: function () {
        if (backShown) return;
        backShown = true;
        if (!(history.state && history.state.duoBack)) history.pushState({ duoBack: 1 }, '');
      },
      hide: function () { backShown = false; },
      onClick: function (fn) { backCbs.push(fn); },
    },
    MainButton: { show: function () {}, hide: function () {}, setText: function () {}, onClick: function () {} },
    // Хранилище VK: ключ до 100 символов, значение до 4096 символов
    CloudStorage: {
      getItem: function (key, cb) {
        send('VKWebAppStorageGet', { keys: [key] })
          .then(function (r) { var v = r && r.keys && r.keys[0] ? r.keys[0].value : ''; cb && cb(null, v || null); })
          .catch(function (e) { cb && cb(e, null); });
      },
      setItem: function (key, value, cb) {
        send('VKWebAppStorageSet', { key: key, value: String(value) })
          .then(function () { cb && cb(null, true); })
          .catch(function (e) { cb && cb(e, false); });
      },
      removeItem: function (key, cb) {
        send('VKWebAppStorageSet', { key: key, value: '' })
          .then(function () { cb && cb(null, true); })
          .catch(function (e) { cb && cb(e, false); });
      },
    },
  };

  window.Telegram = window.Telegram || {};
  window.Telegram.WebApp = WebApp;

  // Отступы под вырезы/шапку VK
  bridge.subscribe(function (e) {
    var d = e && e.detail;
    if (d && d.type === 'VKWebAppUpdateConfig' && d.data && d.data.insets) {
      WebApp.safeAreaInset = Object.assign({ left: 0, right: 0 }, d.data.insets);
      emit('safeAreaChanged');
    }
  });

  // Ждём инициализацию и имя пользователя (не дольше 1,5 с), потом стартует app.js
  var timeout = new Promise(function (r) { setTimeout(r, 1500); });
  window.__platformReady = Promise.race([
    send('VKWebAppInit')
      .then(function () { return send('VKWebAppGetUserInfo'); })
      .then(function (info) { if (info && info.first_name) user.first_name = info.first_name; })
      .catch(function () {}),
    timeout,
  ]);
})();
