var F=[{id:"sphere",short:"Сфера",title:"Чем вы занимаетесь?",hint:"От этого зависит, какие блоки нужны на сайте и что важно показать клиенту.",options:[{id:"services",label:"Услуги и сервис"},{id:"shop",label:"Магазин и товары"},{id:"food",label:"Кафе, еда, доставка"},{id:"beauty",label:"Красота и здоровье"},{id:"education",label:"Обучение и экспертность"},{id:"b2b",label:"Компания для бизнеса"}],ownLabel:"Другое — напишу сам"},{id:"goal",short:"Главная задача",title:"Какая главная задача сайта?",hint:"Если задач несколько — выберите самую важную: под неё строится весь сайт.",options:[{id:"leads",label:"Получать заявки и звонки"},{id:"sell",label:"Продавать онлайн"},{id:"booking",label:"Записывать клиентов на время"},{id:"trust",label:"Рассказать о компании и вызвать доверие"},{id:"portfolio",label:"Показать работы и портфолио"}]},{id:"action",short:"Главное действие",title:"Что человек должен сделать на сайте?",hint:"Одно главное действие — и все кнопки ведут к нему. Так сайт приносит больше обращений.",options:[{id:"form",label:"Оставить заявку"},{id:"messenger",label:"Написать в Telegram или WhatsApp"},{id:"call",label:"Позвонить"},{id:"pay",label:"Купить и оплатить"},{id:"book",label:"Записаться на удобное время"}]},{id:"traffic",short:"Откуда посетители",title:"Откуда к вам придут посетители?",hint:"Отметьте всё, что подходит. Если клиенты ищут вас в Яндексе и Google — сайт стоит настроить под поиск.",multi:!0,options:[{id:"search",label:"Из поиска — Яндекс и Google"},{id:"ads",label:"Из рекламы"},{id:"social",label:"Из соцсетей и Telegram"},{id:"referral",label:"По рекомендациям"},{id:"unknown",label:"Пока не знаю"}]},{id:"current",short:"Сайт сейчас",title:"Есть ли у вас сайт сейчас?",hint:"Если есть — пришлите ссылку своим ответом: посмотрим, что стоит сохранить.",options:[{id:"none",label:"Нет, это будет первый сайт"},{id:"old",label:"Есть, но устарел"},{id:"noLeads",label:"Есть, но не приносит заявок"},{id:"socialOnly",label:"Только соцсети"}],ownLabel:"Пришлю ссылку"},{id:"materials",short:"Что готово",title:"Что уже готово для сайта?",hint:"Отметьте всё, что есть. Чего нет — поможем сделать.",multi:!0,options:[{id:"brand",label:"Логотип и фирменные цвета"},{id:"texts",label:"Тексты о компании и услугах"},{id:"photos",label:"Фото работ или товаров"},{id:"prices",label:"Цены и прайс"},{id:"nothing",label:"Пока ничего"}]},{id:"style",short:"Ощущение от сайта",title:"Каким должен быть сайт по ощущениям?",hint:"Представьте, что клиент открыл сайт. Что он должен почувствовать в первые 3 секунды?",options:[{id:"strict",label:"Строгий и надёжный"},{id:"modern",label:"Современный и лёгкий"},{id:"bold",label:"Яркий и смелый"},{id:"cozy",label:"Тёплый и уютный"},{id:"premium",label:"Дорогой и премиальный"},{id:"unsure",label:"Пока не знаю"}]},{id:"updates",short:"Кто обновляет",title:"Кто будет обновлять сайт после запуска?",hint:"Цены, тексты и фото со временем меняются — лучше заранее решить, кто будет этим заниматься.",options:[{id:"self",label:"Буду менять сам"},{id:"duo",label:"Попрошу DUO"},{id:"rare",label:"Почти ничего не будет меняться"},{id:"unsure",label:"Пока не знаю"}]}],q="own:";function fe(e){let t=(a,...i)=>(e[a]??[]).some(r=>i.includes(r)),n=new Set;return(t("goal","sell")||t("action","pay"))&&n.add("onlinePayment"),t("traffic","search")&&n.add("basicSeo"),e.materials?.length&&!t("materials","texts")&&n.add("copywriting"),(t("materials","brand")||t("style","premium","bold"))&&n.add("uniqueDesign"),t("style","modern","bold","premium")&&(n.add("animatedButtons"),n.add("animatedCards")),t("style","modern","premium")&&n.add("scrollReveal"),t("updates","self")&&n.add("adminPanel"),{options:[...n],support:t("updates","duo")}}var h={BASE_PRICE:1e4,INCLUDED_PAGES:3,EXTRA_PAGE_PRICE:3e3,ANIMATED_BUTTONS:1e3,ANIMATED_CARDS:1500,SCROLL_REVEAL_PER_PAGE:500,PAGE_TRANSITIONS:2e3,UNIQUE_DESIGN_PER_PAGE:1e3,COPY_PER_PAGE:500,ONLINE_PAYMENT:6e3,ADMIN_PANEL:8e3,BASIC_SEO:2e3,NORMAL_TERM_DAYS:10,CUSTOM_TERM_MIN_DAYS:5,URGENT_PERCENT:25,SUPPORT_MONTHLY:1500},oe=100;var _=[{id:"animatedButtons",title:"Анимированные кнопки",description:"Кнопки на сайте «оживают»: при наведении мышкой меняют цвет и чуть увеличиваются, при нажатии откликаются. Сайт ощущается живым и современным. Работает сразу на всём сайте.",billing:"fixed",price:h.ANIMATED_BUTTONS},{id:"animatedCards",title:"Анимированные плашки",description:"Плашки — это карточки на сайте: услуги, товары, цены. С опцией они приподнимаются и подсвечиваются, когда на них наводят мышку, — посетитель сразу видит, что на них можно нажать. Работает на всём сайте.",billing:"fixed",price:h.ANIMATED_CARDS},{id:"scrollReveal",title:"Появление блоков при прокрутке",description:"Когда посетитель листает страницу, блоки не стоят на месте, а плавно выезжают и проявляются. Страница выглядит аккуратнее и дороже. Цена — за каждую страницу, где это нужно.",billing:"perPage",price:h.SCROLL_REVEAL_PER_PAGE},{id:"pageTransitions",title:"Анимированные переходы между страницами",description:"При переходе между страницами сайта, например с «Главной» на «Услуги», содержимое сменяется плавно, без резкого мигания. Работает на всём сайте.",billing:"fixed",price:h.PAGE_TRANSITIONS},{id:"uniqueDesign",title:"Уникальный дизайн",description:"Рисуем дизайн специально под ваш бизнес: свои цвета, шрифты и расположение блоков. Без опции сайт собирается на аккуратном готовом шаблоне. Цена — за каждую страницу с уникальным дизайном.",billing:"perPage",price:h.UNIQUE_DESIGN_PER_PAGE},{id:"copywriting",title:"Тексты от нас",description:"Без опции тексты для сайта присылаете вы. С опцией мы сами напишем понятные тексты о вашем бизнесе: заголовки, описания услуг, призыв оставить заявку. Цена — за каждую страницу.",billing:"perPage",price:h.COPY_PER_PAGE},{id:"onlinePayment",title:"Онлайн-оплата",description:"Клиенты смогут оплатить товар или услугу прямо на сайте банковской картой — без переводов по номеру телефона и лишней переписки.",billing:"fixed",price:h.ONLINE_PAYMENT},{id:"adminPanel",title:"Админка для самостоятельных правок",description:"Простой кабинет для сайта: вы сами меняете цены и тексты, без программиста. Нажали «Сохранить» — сайт обновился сразу.",billing:"fixed",price:h.ADMIN_PANEL},{id:"basicSeo",title:"Базовое SEO",description:"Настраиваем сайт, чтобы его было проще найти в Яндексе и Google: заголовки страниц, описания для поиска, карта сайта и счётчик посещений. Это базовая настройка, а не продвижение в топ.",billing:"fixed",price:h.BASIC_SEO}],vn=new Map(_.map(e=>[e.id,e]));function mt(e){let t=vn.get(e);if(!t)throw new Error(`Unknown site option: ${e}`);return t}var G=class extends Error{code;constructor(t,n){super(n),this.name="SiteQuoteError",this.code=t}};function le(){let{CUSTOM_TERM_MIN_DAYS:e,NORMAL_TERM_DAYS:t}=h;return Array.from({length:Math.max(0,t-e)},(n,a)=>e+a)}function $n(e){return Number.isInteger(e)&&e>=1&&e<=oe}function M(e){let{pages:t}=e;if(!$n(t))throw new G("INVALID_PAGES",`Количество страниц должно быть целым числом от 1 до ${oe}`);let n=[{kind:"base",includedPages:h.INCLUDED_PAGES,amount:h.BASE_PRICE}],a=Math.max(0,t-h.INCLUDED_PAGES);a>0&&n.push({kind:"extraPages",count:a,unitPrice:h.EXTRA_PAGE_PRICE,amount:a*h.EXTRA_PAGE_PRICE});for(let l of _){let u=e.options[l.id];if(u){if(l.billing==="fixed"){if(u.pages!==void 0)throw new G("OPTION_PAGES_NOT_ALLOWED",`«${l.title}» считается на весь сайт, количество страниц не указывается`);n.push({kind:"option",optionId:l.id,title:l.title,billing:"fixed",unitPrice:l.price,amount:l.price});continue}if(u.pages===void 0)throw new G("OPTION_PAGES_REQUIRED",`Для «${l.title}» нужно указать количество страниц`);if(!Number.isInteger(u.pages)||u.pages<1||u.pages>t)throw new G("OPTION_PAGES_OUT_OF_RANGE",`«${l.title}»: количество страниц должно быть от 1 до ${t}`);n.push({kind:"option",optionId:l.id,title:l.title,billing:"perPage",pages:u.pages,unitPrice:l.price,amount:u.pages*l.price})}}if(e.urgentDays!==void 0&&(!e.urgent||!le().includes(e.urgentDays))){let l=le();throw new G("INVALID_TERM",`Свой срок — от ${l[0]} до ${l[l.length-1]} дней`)}let i=n.reduce((l,u)=>l+u.amount,0),r=e.urgent?Math.round(i*h.URGENT_PERCENT/100):0;return{pages:t,lines:n,subtotal:i,urgent:e.urgent,urgentDays:e.urgent?e.urgentDays??null:null,urgentPercent:h.URGENT_PERCENT,urgentSurcharge:r,developmentTotal:i+r,supportMonthly:e.support?h.SUPPORT_MONTHLY:null}}var J={blue:"#3b82f6",green:"#16a34a",terracotta:"#c2410c",violet:"#7c3aed",rose:"#e11d48",amber:"#d97706",teal:"#0d9488",graphite:"#334155"},k={brand:28,tagline:60,heroTitle:56,heroText:120,cta:22,page:14,sectionTitle:30,sectionText:100,itemName:26,itemText:50,formTitle:36,formText:100},Ue=4;var x=(e,t)=>({type:"string",maxLength:e,description:t}),ya={name:"site_draft",description:"Содержание одностраничного сайта-примера для бизнеса клиента.",input_schema:{type:"object",properties:{brand:x(k.brand,"Короткое название бизнеса"),emoji:x(4,"Один эмодзи, символ бизнеса"),tagline:x(k.tagline,"Заголовок вкладки: название и суть"),heroTitle:x(k.heroTitle,"Главный заголовок первого экрана"),heroText:x(k.heroText,"Подзаголовок: чем полезны клиенту"),cta:x(k.cta,"Текст главной кнопки под главное действие"),pages:{type:"array",minItems:3,maxItems:3,items:x(k.page,"Название страницы"),description:"Главная, каталог или услуги, контакты"},sectionTitle:x(k.sectionTitle,"Заголовок блока с услугами или товарами"),sectionText:x(k.sectionText,"Одна фраза под этим заголовком"),items:{type:"array",minItems:Ue,maxItems:Ue,items:{type:"object",properties:{icon:x(4,"Один эмодзи"),name:x(k.itemName,"Название"),text:x(k.itemText,"Короткое описание")},required:["icon","name","text"]}},formTitle:x(k.formTitle,"Заголовок формы заявки"),formText:x(k.formText,"Пояснение к форме"),palette:{type:"string",enum:Object.keys(J),description:"Цвет акцента под настроение бизнеса"}},required:["brand","emoji","tagline","heroTitle","heroText","cta","pages","sectionTitle","sectionText","items","formTitle","formText","palette"]}},Sa=["Ты — копирайтер веб-студии DUO. По ответам клиента придумай содержание сайта-примера для ЕГО бизнеса.","Пиши по-русски, коротко, живо и конкретно под его сферу, без канцелярита и восклицаний.","Нельзя: цены, телефоны, адреса, сроки, гарантии, скидки, отзывы, цифры и факты, которых нет в ответах.","Если клиент не назвал бизнес — придумай короткое правдоподобное название.","Строго соблюдай длину полей. Ответь только вызовом инструмента site_draft."].join(" ");function gt(e){return!!(e.sphere?.length||e.goal?.length)}function ft(e){let t=typeof e=="string"?e.trim():"",n=[...new Intl.Segmenter("ru",{granularity:"grapheme"}).segment(t)][0]?.segment??"";return n&&/\p{Extended_Pictographic}/u.test(n)?n:"✦"}function E(e,t){let n=typeof e=="string"?e.replace(/\s+/g," ").trim():"";return n.length>t?`${n.slice(0,t-1).trimEnd()}…`:n}var ge=class extends Error{};function C(e){if(!e||typeof e!="object")throw new ge("Пустой ответ");let t=e,n=Array.isArray(t.pages)?t.pages:[],a=Array.isArray(t.items)?t.items:[],i={brand:E(t.brand,k.brand),emoji:ft(t.emoji),tagline:E(t.tagline,k.tagline),heroTitle:E(t.heroTitle,k.heroTitle),heroText:E(t.heroText,k.heroText),cta:E(t.cta,k.cta)||"Оставить заявку",pages:[E(n[0],k.page)||"Главная",E(n[1],k.page)||"Услуги",E(n[2],k.page)||"Контакты"],sectionTitle:E(t.sectionTitle,k.sectionTitle),sectionText:E(t.sectionText,k.sectionText),items:a.slice(0,Ue).map(r=>r&&typeof r=="object"?r:{}).map(r=>({icon:ft(r.icon),name:E(r.name,k.itemName),text:E(r.text,k.itemText)})).filter(r=>r.name),formTitle:E(t.formTitle,k.formTitle)||"Оставьте заявку",formText:E(t.formText,k.formText),palette:typeof t.palette=="string"&&t.palette in J?t.palette:"blue",...t.by==="ai"||t.by==="template"?{by:t.by}:{}};if(!i.brand||!i.heroTitle||i.items.length<3)throw new ge("В ответе не хватает содержания");return i}var be={brand:"Пекарня «Утро»",emoji:"🥐",tagline:"Пекарня «Утро» — хлеб и выпечка",heroTitle:"Свежий хлеб к завтраку",heroText:"Печём каждое утро из простых продуктов. Закажите к столу или заберите сами.",cta:"Заказать выпечку",pages:["Главная","Выпечка","Контакты"],sectionTitle:"Что печём",sectionText:"Хлеб, круассаны и пироги — с утра.",items:[{icon:"🍞",name:"Хлеб на закваске",text:"Хрустящая корочка"},{icon:"🥐",name:"Круассаны",text:"Сливочное масло"},{icon:"🥧",name:"Пироги",text:"С ягодами и мясом"},{icon:"🍪",name:"Печенье",text:"К чаю"}],formTitle:"Заказать к столу",formText:"Оставьте имя и телефон — перезвоним.",palette:"amber"};var bt={services:{brands:["Мастер Плюс","Сервис Рядом","Ловкие руки","Точно в срок"],emoji:"🛠️",what:"сервис",lead:"Берёмся за задачу целиком — от первого обращения до результата.",pages:["Главная","Услуги","Контакты"],sectionTitle:"Чем поможем",sectionText:"Берёмся за задачу целиком и отвечаем за результат.",items:[{icon:"🔧",name:"Выезд мастера",text:"Приедем в удобное время"},{icon:"📋",name:"Диагностика",text:"Найдём причину проблемы"},{icon:"⚙️",name:"Ремонт",text:"Делаем аккуратно"},{icon:"🤝",name:"Обслуживание",text:"Следим, чтобы всё работало"}]},shop:{brands:["Полка","Лавка у дома","Корзина","Вещь"],emoji:"🛍️",what:"магазин",lead:"Выберите нужное в каталоге и оформите заказ онлайн за пару минут.",pages:["Главная","Каталог","Доставка"],sectionTitle:"Популярное",sectionText:"Товары, которые берут чаще всего.",items:[{icon:"🎁",name:"Новинки",text:"Свежие поступления недели"},{icon:"⭐",name:"Хиты продаж",text:"То, что выбирают чаще"},{icon:"🏷️",name:"Наборы",text:"Удобно взять сразу"},{icon:"📦",name:"Подарочные",text:"Красиво упакуем"}]},food:{brands:["Тарелка","Вкусно рядом","Печь и Ко","Обед Дома"],emoji:"🍽️",what:"кафе",lead:"Готовим каждый день из свежих продуктов — заходите или закажите домой.",pages:["Главная","Меню","Контакты"],sectionTitle:"Что попробовать",sectionText:"Готовим каждый день из свежих продуктов.",items:[{icon:"🥗",name:"Завтраки",text:"С утра и до обеда"},{icon:"🍲",name:"Горячее",text:"Сытно и по-домашнему"},{icon:"🍰",name:"Десерты",text:"Печём сами"},{icon:"☕",name:"Напитки",text:"Кофе, чай и лимонады"}]},beauty:{brands:["Студия Лён","Глянец","Тонкая линия","Мята"],emoji:"💅",what:"студия красоты",lead:"Мастера с опытом, спокойная атмосфера и удобная запись онлайн.",pages:["Главная","Услуги","Запись"],sectionTitle:"Услуги студии",sectionText:"Мастера с опытом и стерильные инструменты.",items:[{icon:"💇",name:"Стрижки и укладки",text:"Под ваш стиль"},{icon:"💅",name:"Маникюр",text:"Аккуратно и надолго"},{icon:"✨",name:"Уход за лицом",text:"Чистка и массаж"},{icon:"🌿",name:"Спа-уход",text:"Отдых для тела"}]},education:{brands:["Шаг вперёд","Понятно","Школа Навыка","Учимся"],emoji:"🎓",what:"обучение",lead:"Учим на практике — с первого занятия и в удобном темпе.",pages:["Главная","Курсы","Контакты"],sectionTitle:"Программы",sectionText:"Учим на практике — с первого занятия.",items:[{icon:"📘",name:"Базовый курс",text:"Для старта с нуля"},{icon:"🚀",name:"Интенсив",text:"Быстро и по делу"},{icon:"👥",name:"Группы",text:"Учиться вместе веселее"},{icon:"🎯",name:"Личные занятия",text:"Под ваши цели"}]},b2b:{brands:["Опора","Вектор Про","Северный Ряд","Линия"],emoji:"🏢",what:"компания",lead:"Берём задачи под ключ и отчитываемся по каждому этапу.",pages:["Главная","Решения","Контакты"],sectionTitle:"Для бизнеса",sectionText:"Берём задачи под ключ и отчитываемся по этапам.",items:[{icon:"📊",name:"Аудит",text:"Покажем точки роста"},{icon:"🧩",name:"Внедрение",text:"Настроим под ваши процессы"},{icon:"🛡️",name:"Сопровождение",text:"Поддержка на каждом шаге"},{icon:"📈",name:"Отчётность",text:"Прозрачные результаты"}]}},ht={leads:()=>"Оставьте заявку — и мы свяжемся с вами",sell:()=>"Закажите онлайн в пару кликов",booking:()=>"Запишитесь на удобное время",trust:e=>`Надёжный ${e} рядом с вами`,portfolio:()=>"Посмотрите наши работы"},vt={form:["Оставить заявку","Оставьте заявку"],messenger:["Написать нам","Напишите нам"],call:["Заказать звонок","Перезвоним вам"],pay:["Купить онлайн","Оформить заказ"],book:["Записаться","Записаться онлайн"]},$t={strict:["graphite","blue"],modern:["blue","teal"],bold:["rose","violet"],cozy:["terracotta","amber"],premium:["graphite","violet"],unsure:["blue","green"]},he=(e,t)=>(e[t]??[]).find(n=>!n.startsWith("own:"));function ve(e,t=0){let n=bt[he(e,"sphere")??""]??bt.services,a=n.brands[t%n.brands.length],i=he(e,"goal")??"leads",[r,l]=vt[he(e,"action")??"form"]??vt.form,u=$t[he(e,"style")??"unsure"]??$t.unsure,f=t%n.items.length,y=[...n.items.slice(f),...n.items.slice(0,f)];return C({brand:a,emoji:n.emoji,tagline:`${a} — ${n.what}`,heroTitle:(ht[i]??ht.leads)(n.what),heroText:n.lead,cta:r,pages:n.pages,sectionTitle:n.sectionTitle,sectionText:n.sectionText,items:y,formTitle:l,formText:"Оставьте имя и телефон — заявка сразу придёт нам в Telegram.",palette:u[t%u.length],by:"template"})}var He=[{id:"simple",title:"Простой",about:"Аккуратный сайт, который находят в поиске"},{id:"optimal",title:"Оптимальный",about:"Свой стиль, тексты и живые детали"},{id:"full",title:"Всё включено",about:"Все опции: оплата, админка, анимации"}],yn=["uniqueDesign","copywriting","animatedButtons","scrollReveal","basicSeo"];function Sn(e,t={}){if(e==="simple")return["basicSeo"];if(e==="full")return _.map(i=>i.id);let n=fe(t).options,a=new Set(n.length?[...n,"uniqueDesign","basicSeo"]:yn);return _.map(i=>i.id).filter(i=>a.has(i))}function yt(e,t,n={}){let a={};for(let i of Sn(e,n))a[i]=mt(i).billing==="perPage"?{pages:t}:{};return a}var Fe=[{id:"landing",title:"Сайт или лендинг",about:"Компания, услуги, эксперт",custom:!1},{id:"shop",title:"Интернет-магазин",about:"Каталог, корзина, оплата",custom:!1},{id:"marketplace",title:"Маркетплейс",about:"Много продавцов, кабинеты",custom:!0},{id:"platform",title:"Онлайн-школа или сервис",about:"Курсы, кабинеты, подписки",custom:!0}];function $e(e){return Fe.find(t=>t.id===e)}var St={marketplace:[{id:"catalog",title:"Каталог с поиском и фильтрами"},{id:"sellers",title:"Кабинеты продавцов"},{id:"buyers",title:"Кабинет покупателя"},{id:"payment",title:"Корзина и оплата картой"},{id:"commission",title:"Комиссия с продаж"},{id:"delivery",title:"Доставка и отслеживание"},{id:"reviews",title:"Отзывы и рейтинги"},{id:"chat",title:"Чат покупателя и продавца"},{id:"moderation",title:"Проверка товаров перед публикацией"},{id:"admin",title:"Панель управления площадкой"},{id:"app",title:"Мобильное приложение"}],platform:[{id:"cabinet",title:"Личный кабинет"},{id:"courses",title:"Курсы и уроки"},{id:"subscriptions",title:"Тарифы и подписки"},{id:"payment",title:"Оплата картой"},{id:"schedule",title:"Запись и расписание"},{id:"homework",title:"Тесты и домашние задания"},{id:"certificates",title:"Сертификаты"},{id:"notifications",title:"Уведомления в Telegram и на почту"},{id:"admin",title:"Панель управления"},{id:"app",title:"Мобильное приложение"}]},kt={marketplace:["catalog","sellers","buyers","payment"],platform:["cabinet","courses","payment"]};var kn=new Intl.NumberFormat("ru-RU",{maximumFractionDigits:0});function v(e){return`${kn.format(e)} ₽`}function Ge(e,t){let n=e%10,a=e%100;return n===1&&a!==11?t[0]:n>=2&&n<=4&&(a<12||a>14)?t[1]:t[2]}var Tn=["страница","страницы","страниц"];var wn=["день","дня","дней"];function Z(e){return`${e} ${Ge(e,wn)}`}function V(e){return`${e} ${Ge(e,Tn)}`}var Tt={beauty:{brief:"Красота и здоровье · записывать клиентов · тёплый и уютный · буду менять сам",options:["uniqueDesign","copywriting","animatedButtons","scrollReveal","pageTransitions","adminPanel","basicSeo"],draft:{brand:"Студия «Мята»",emoji:"🌿",tagline:"Студия «Мята» — уход за волосами и руками",heroTitle:"Красота без спешки в тихой студии",heroText:"Стрижки, окрашивание и маникюр у мастеров, которые слушают. Выберите время — остальное мы возьмём на себя.",cta:"Записаться онлайн",pages:["Главная","Услуги","Запись"],sectionTitle:"Что мы делаем",sectionText:"Четыре направления, в которых мы сильнее всего.",items:[{icon:"✂️",name:"Стрижки",text:"Форма, которая держится неделями"},{icon:"🎨",name:"Окрашивание",text:"Мягкие оттенки под ваш тон"},{icon:"💅",name:"Маникюр",text:"Аккуратное покрытие и уход"},{icon:"🧖",name:"Уход за кожей",text:"Чистка и массаж лица"}],formTitle:"Запишитесь на удобное время",formText:"Оставьте имя и телефон — администратор подтвердит запись в Telegram.",palette:"green",by:"ai"}},b2b:{brief:"Компания для бизнеса · получать заявки · строгий и надёжный · из поиска",options:["copywriting","animatedButtons","scrollReveal","basicSeo"],draft:{brand:"Баланс Про",emoji:"📊",tagline:"Баланс Про — бухгалтерия для малого бизнеса",heroTitle:"Бухгалтерия, о которой можно не думать",heroText:"Ведём учёт, сдаём отчёты и отвечаем на вопросы налоговой. Вы занимаетесь делом — цифры на нас.",cta:"Обсудить задачу",pages:["Главная","Услуги","Контакты"],sectionTitle:"Берём на себя",sectionText:"Всё, что обычно отнимает вечера у владельца бизнеса.",items:[{icon:"📒",name:"Ведение учёта",text:"Первичка, банк и касса"},{icon:"🧾",name:"Отчётность",text:"Налоговая, фонды, статистика"},{icon:"💼",name:"Зарплата и кадры",text:"Расчёты и документы сотрудников"},{icon:"🛡️",name:"Сопровождение проверок",text:"Готовим ответы и документы"}],formTitle:"Расскажите о вашей компании",formText:"Оставьте контакты — бухгалтер свяжется и задаст пару вопросов.",palette:"graphite",by:"ai"}},shop:{brief:"Магазин и товары · продавать онлайн · яркий и смелый · из соцсетей",options:["uniqueDesign","copywriting","animatedButtons","animatedCards","scrollReveal","onlinePayment","basicSeo"],draft:{brand:"Глина и Огонь",emoji:"🏺",tagline:"Глина и Огонь — керамика ручной работы",heroTitle:"Посуда, которую хочется трогать",heroText:"Кружки, тарелки и вазы ручной работы. Каждая вещь чуть другая — выберите свою и оформите заказ онлайн.",cta:"Выбрать посуду",pages:["Главная","Каталог","Доставка"],sectionTitle:"Из новой партии",sectionText:"Обжигаем небольшими партиями — успейте забрать любимую.",items:[{icon:"☕",name:"Кружки",text:"Удобная ручка и толстые стенки"},{icon:"🍽️",name:"Тарелки",text:"Для завтраков и ужинов"},{icon:"🌸",name:"Вазы",text:"Под сухоцветы и живые букеты"},{icon:"🎁",name:"Наборы",text:"Готовый подарок в коробке"}],formTitle:"Остались вопросы?",formText:"Напишите имя и телефон — поможем выбрать и расскажем о доставке.",palette:"rose",by:"ai"}}};function wt(e){let t=null;document.addEventListener("touchstart",a=>{if(a.touches.length!==1)return;let i=a.target;if(i.closest("textarea, input, select"))return;let r=i.closest(".sheet"),l=i.closest(".full-top")?i.closest(".full"):null,u=r&&r.scrollTop<=0?r:l;if(!u)return;let f=a.touches[0].clientY;t={el:u,kind:u===r?"sheet":"full",startY:f,lastY:f,lastT:performance.now(),speed:0,active:!1}},{passive:!0}),document.addEventListener("touchmove",a=>{if(!t)return;let i=a.touches[0].clientY,r=i-t.startY;if(!t.active){if(r<-6&&(t=null),!t||r<6)return;t.active=!0,t.el.style.animation="none",t.el.style.transition="none"}a.preventDefault();let l=performance.now();t.speed=(i-t.lastY)/Math.max(1,l-t.lastT),t.lastY=i,t.lastT=l,t.el.style.transform=`translateY(${Math.max(0,r)}px)`},{passive:!1});let n=()=>{let a=t;if(t=null,!a?.active)return;let i=a.lastY-a.startY;a.el.style.transition="transform .22s cubic-bezier(.2, .8, .2, 1)",i>110||a.speed>.6?(a.el.style.transform="translateY(100%)",window.setTimeout(()=>a.kind==="sheet"?e.sheet():e.full(),200)):a.el.style.transform=""};document.addEventListener("touchend",n),document.addEventListener("touchcancel",n)}function xt(e,t){let n=document.getElementById("app");if(!n)return;let a=n,i=null,r=0,l=null;document.addEventListener("touchstart",f=>{let y=f.target;f.touches.length!==1||!t()||y.closest("textarea, input, select, .chips, .days, .fs-nav, .fs-scale")||(i={x:f.touches[0].clientX,y:f.touches[0].clientY,t:performance.now()},r=0,l=null,a=y.closest(".sheet, .full")??n)},{passive:!0}),document.addEventListener("touchmove",f=>{if(!i)return;let y=f.touches[0].clientX-i.x,P=f.touches[0].clientY-i.y;if(l===null){if(Math.abs(y)<8&&Math.abs(P)<8)return;if(l=y>0&&Math.abs(y)>Math.abs(P)*1.2,!l)return void(i=null);a.style.transition="none",a.style.animation="none"}f.preventDefault(),r=Math.max(0,y),a.style.transform=`translateX(${a===n?r*.35:r}px)`,a.style.opacity=String(1-Math.min(r/600,.25))},{passive:!1});let u=()=>{if(!i||!l){i=null;return}let f=r/Math.max(1,performance.now()-i.t)>.45&&r>35;i=null;let y=a;y.style.transition="transform .2s ease, opacity .2s ease",y.style.transform="",y.style.opacity="",(r>70||f)&&e()};document.addEventListener("touchend",u),document.addEventListener("touchcancel",u)}var U=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),O=e=>` data-k="${e}"`;function xn(e){let t=n=>e.items[n%Math.max(1,e.items.length)]??{icon:"",name:""};switch(e.kind){case"shop":case"market":return`<div class="lp-grid"${O("catalog")}>${[0,1,2,3].map(n=>`<span class="lp-tile"><i>${t(n).icon}</i><b>${U(t(n).name)}</b>${e.kind==="market"?"<em>★ 4,9</em>":""}<u></u></span>`).join("")}</div>${e.kind==="market"?`<div class="lp-band"${O("sellers")}><b>Стать продавцом</b><u></u></div>`:""}`;case"education":case"platform":return`<div class="lp-rows"${O("courses")}>${[0,1,2].map(n=>`<span class="lp-course"><b>${U(t(n).name)}</b><i style="--p:${[72,40,15][n]}%"></i></span>`).join("")}</div>`;case"b2b":return`<div class="lp-grid"${O("catalog")}>${[0,1,2,3].map(n=>`<span class="lp-tile n"><em>0${n+1}</em><b>${U(t(n).name)}</b></span>`).join("")}</div>`;default:return`<div class="lp-rows"${O("catalog")}>${[0,1,2].map(n=>`<span class="lp-row"><i>${t(n).icon}</i><b>${U(t(n).name)}</b><u></u></span>`).join("")}</div>`}}function ye(e,t=""){let n=(e.brand?.trim()[0]??"").toUpperCase();return`
    <div class="lp-phone ${t}" style="--a:${e.accent}" aria-hidden="true">
      <div class="lp-screen"><div class="lp-page">
        <div class="lp-top"${O("brand")}><i class="lp-mark">${U(n)}</i>${e.brand?`<b>${U(e.brand)}</b>`:'<b class="lp-ph"></b>'}${e.cart?`<i class="lp-cart"${O("cart")}></i>`:""}</div>
        <div class="lp-hero${e.unique?" u":""}"${O("hero")}>${e.unique?'<i class="lp-o"></i>':""}<b>${U(e.hero)}</b><em>${U(e.cta)}</em></div>
        ${xn(e)}
        ${e.booking?`<div class="lp-slots"${O("booking")}><i></i><i class="on"></i><i></i><i></i></div>`:""}
        <div class="lp-form"${O("form")}><i></i><i></i><em></em></div>
      </div>${e.chat?`<i class="lp-chat"${O("chat")}></i>`:""}</div>
    </div>`}var ke=[{id:"received",title:"Заявка получена",short:"Новые"},{id:"discussing",title:"Обсуждаем проект",short:"Обсуждаем"},{id:"inProgress",title:"Сайт в работе",short:"В работе"},{id:"review",title:"На проверке у клиента",short:"На проверке"},{id:"done",title:"Готово",short:"Готово"},{id:"cancelled",title:"Отменена",short:"Отменены"}],Te=e=>ke.find(t=>t.id===e)??ke[0],o={folder:null,selected:null,clients:null,leads:null,me:null,filter:"active",query:"",openId:null,sheet:null,busy:!1,error:"",toast:"",noteDraft:"",messageDraft:""},c,Et=0;function Dt(e){c=e}var p=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Ve=e=>e.stage!=="done"&&e.stage!=="cancelled",Qe=()=>o.leads?.find(e=>e.id===o.openId)??null,we=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),Ye=e=>e.toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"});function de(e){let t=new Date(e),n=Math.round((Date.now()-t.getTime())/6e4);if(n<1)return"только что";if(n<60)return`${n} мин назад`;let a=Math.round((we(new Date)-we(t))/864e5);return a===0?`сегодня в ${Ye(t)}`:a===1?`вчера в ${Ye(t)}`:t.toLocaleDateString("ru-RU",{day:"numeric",month:"long"})}function xe(e){let t=new Date(e),n=Math.round((we(t)-we(new Date))/864e5);return`${n===0?"сегодня":n===1?"завтра":t.toLocaleDateString("ru-RU",{day:"numeric",month:"long"})} в ${Ye(t)}`}var ce=e=>new Date(e).getTime()<=Date.now();function Ee(e){let t=new Date;return t.setDate(t.getDate()+e),t.setHours(10,0,0,0),t}function Lt(e){let t=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}T${t(e.getHours())}:${t(e.getMinutes())}`}async function It(){o.error="";try{let[e,t]=c.demo?[Qn(),{clients:Yn()}]:await Promise.all([c.api("/api/admin/leads"),c.api("/api/admin/clients")]);o.me=e.me,o.leads=e.leads,o.clients=t.clients}catch(e){o.error=e.message,o.leads??=[],o.clients??=[]}c.render()}function Le(e,t){o.sheet=null,o.folder=e?"leads":t==="warm"||t==="cold"||t==="leads"?t:null,e?(o.openId=e,c.open("desk"),c.open("deskLead")):c.open("desk"),It()}function En(e){o.leads&&(o.leads=o.leads.map(t=>t.id===e.id?e:t))}function Se(e){o.toast=e,window.clearTimeout(Et),Et=window.setTimeout(()=>{o.toast="",c.render()},2600)}async function Y(e,t,n,a){let i=Qe();if(!i||o.busy)return!1;o.busy=!0,o.error="",c.render();try{if(c.demo)a?.(i);else{let r=await c.api(e,{id:i.id,...t});En(r.lead),r.delivered===!1&&(n="Этап изменён, но клиент не получил уведомление — возможно, остановил бота")}return c.haptic("success"),Se(n),!0}catch(r){return c.haptic("error"),o.error=r.message,!1}finally{o.busy=!1,c.render()}}function Pt(e,t){return t==="active"?Ve(e):t==="all"?!0:t==="mine"?e.owner?.id===o.me?.id&&Ve(e):t==="remind"?e.remind!==null:e.stage===t}function Ln(e,t){if(!t)return!0;let n=t.toLowerCase().replace(/^[@№#\s]+/,"");return String(e.id)===n||e.name.toLowerCase().includes(n)||(e.username??"").toLowerCase().includes(n)}function Dn(){return(o.leads??[]).filter(t=>Pt(t,o.filter)&&Ln(t,o.query.trim())).sort((t,n)=>+!!(n.remind&&ce(n.remind.at))-+!!(t.remind&&ce(t.remind.at))||n.id-t.id)}function Ot(){let e=o.leads??[];return[["active","Активные"],["received","Новые"],["mine","Мои"],["remind","Напоминания"],["discussing","Обсуждаем"],["inProgress","В работе"],["review","На проверке"],["done","Готово"],["cancelled","Отменены"],["all","Все"]].map(([n,a])=>{let i=e.filter(r=>Pt(r,n)).length;return!i&&n!=="active"&&n!==o.filter?"":`<button class="chip${o.filter===n?" on":""}${n==="received"&&i?" hot":""}" data-desk="filter:${n}">${a}<span class="num">${i}</span></button>`}).join("")}function In(e){return e.owner?e.owner.id===o.me?.id?"ведёте вы":`ведёт ${p(e.owner.name)}`:""}function Pn(e){let t=e.remind?`<span class="tag${ce(e.remind.at)?" due":""}">⏰ ${ce(e.remind.at)?"пора":xe(e.remind.at)}</span>`:"",n=e.notes.at(-1),a=o.selected!==null,i=o.selected?.has(e.id)??!1;return`
    <button class="d-item st-${e.stage}${a?" picking":""}${i?" picked":""}" data-desk="${a?"pick":"open"}:${e.id}"${a?` aria-pressed="${i}"`:""}>
      ${a?'<span class="pick-box" aria-hidden="true"></span>':""}
      <span class="d-row"><b class="num">№ ${e.id}</b><span class="d-name">${p(e.name)}</span><span class="d-ago">${de(e.createdAt)}</span></span>
      <span class="d-row d-sub">${e.username?`@${p(e.username)}`:"без @username"}<span class="num">${e.project?"цена после обсуждения":v(e.total)}</span></span>
      <span class="d-tags"><span class="tag stage">${p(Te(e.stage).short==="Новые"?"Новая":e.stageTitle)}</span>${e.owner?`<span class="tag">${In(e)}</span>`:""}${t}</span>
      ${n?`<span class="d-note">${p(n.text.slice(0,120))}</span>`:""}
    </button>`}function At(){let e=Dn();return e.length?e.map(Pn).join(""):`<p class="d-empty">${o.query?"По этому запросу заявок нет. Проверьте номер или имя.":o.filter==="active"?"Активных заявок нет. Новые появятся здесь сами.":"В этом фильтре пусто."}</p>`}function On(){let e=o.selected?.size??0;return`
    <div class="bar"><div class="bar-inner">
      <div class="sum"><b class="num">${e}</b><span>${e?"выбрано — нажмите на заявки, чтобы добавить":"нажмите на заявки, чтобы выбрать"}</span></div>
      <button class="btn danger" data-desk="delete-ask"${e?"":" disabled"}>Удалить</button>
    </div></div>`}function An(){let e=[...o.selected??[]].sort((t,n)=>t-n);return`
    <div class="sheet-back" data-desk="sheet-close"></div>
    <div class="sheet" role="dialog"><div class="grip"></div>
      <h2>Удалить ${e.length===1?"заявку":`заявки (${e.length})`}?</h2>
      <p>${e.map(t=>`№ ${t}`).join(", ")}. Заявки исчезнут из списка насовсем вместе с заметками — отменить нельзя. Сообщения о них в группе останутся.</p>
      <div class="gap"></div>
      <div class="stack"><button class="btn danger" data-desk="delete-ok"${o.busy?" disabled":""}>${o.busy?"Удаляем":"Удалить насовсем"}</button><button class="btn soft" data-desk="sheet-close">Отмена</button></div>
      ${o.error?`<div class="warn">${p(o.error)}</div>`:""}
    </div>`}var B={leads:{title:"Заявки",about:"Оставили заявку: этапы, заметки, напоминания"},warm:{title:"Тёплые",about:"Ответили на вопросы или посчитали сайт, но заявку не оставили"},cold:{title:"Холодные",about:"Открыли бота или приложение, но до расчёта не дошли"}};function _n(){let e=o.leads??[],t=o.clients??[],n=e.filter(f=>f.stage==="received").length,a=e.filter(Ve).length,i=t.filter(f=>f.temperature==="warm"),r=t.filter(f=>f.temperature==="cold"),l=f=>f.filter(y=>Date.now()-new Date(y.lastSeen).getTime()<864e5).length,u=(f,y,P,j=!1)=>`
    <button class="folder f-${f}${j?" hot":""}" data-desk="folder:${f}">
      <span class="folder-count num">${y}</span>
      <span><b>${B[f].title}</b><small>${P}</small></span>
    </button>`;return`
    <div class="row-between"><h1>Клиенты</h1><button class="btn text inline" data-desk="refresh">Обновить</button></div>
    ${o.error?`<div class="warn">${p(o.error)}</div>`:""}
    <div class="folders">
      ${u("leads",a,n?`Новых: ${n}. ${B.leads.about}`:B.leads.about,n>0)}
      ${u("warm",i.length,l(i)?`За сутки: ${l(i)}. ${B.warm.about}`:B.warm.about)}
      ${u("cold",r.length,l(r)?`За сутки: ${l(r)}. ${B.cold.about}`:B.cold.about)}
    </div>
    <p class="hint small">Тёплым стоит написать первыми: они уже знают цену. Холодным — только если есть повод.</p>`}function Rn(e){return`
    <button class="d-item t-${e.temperature}" data-desk="client:${e.userId}">
      <span class="d-row"><span class="d-name">${p(e.name||"Без имени")}</span><span class="d-ago">${de(e.lastSeen)}</span></span>
      <span class="d-row d-sub">${e.username?`@${p(e.username)}`:"без @username"}${e.total?`<span class="num">${v(e.total)}</span>`:""}</span>
      <span class="d-tags"><span class="tag stage">${p(e.stepTitle)}${e.detail?`, ${p(e.detail)}`:""}</span><span class="tag">${e.where==="app"?"в приложении":"в боте"}</span></span>
    </button>`}function _t(e){let t=o.query.trim().toLowerCase().replace(/^@/,""),n=(o.clients??[]).filter(i=>i.temperature===e&&(!t||i.name.toLowerCase().includes(t)||(i.username??"").toLowerCase().includes(t))),a=o.sheet?.kind==="client"?(o.clients??[]).find(i=>i.userId===o.sheet.userId):null;return`
    <h1>${B[e].title}</h1>
    <p class="hint">${B[e].about}.</p>
    <input type="search" id="desk-cq" class="d-search" placeholder="Имя или @username" value="${p(o.query)}" autocomplete="off" enterkeyhint="search">
    <div class="d-list" id="desk-clist">${n.length?n.map(Rn).join(""):`<p class="d-empty">${o.query?"Никого не нашли.":"Пока пусто."}</p>`}</div>
    ${a?Mn(a):""}`}function Mn(e){return`
    <div class="sheet-back" data-desk="sheet-close"></div>
    <div class="sheet" role="dialog"><div class="grip"></div>
      <h2>${p(e.name||"Без имени")}</h2>
      <p>${e.username?`@${p(e.username)}, `:""}${e.where==="app"?"в приложении":"в боте"}. Последний шаг: ${p(e.stepTitle.toLowerCase())}${e.detail?`, ${p(e.detail)}`:""} — ${de(e.stepAt)}.${e.total?` Расчёт: ${v(e.total)}.`:""}</p>
      ${e.username?`<div class="gap"></div><button class="btn soft" data-desk="ctg:${p(e.username)}">Открыть чат</button>`:""}
      <div class="gap"></div>
      <textarea id="desk-msg" rows="3" maxlength="3000" placeholder="Здравствуйте! Остались вопросы по расчёту сайта?">${p(o.messageDraft)}</textarea>
      <div class="gap"></div>
      <button class="btn blue" data-desk="cwrite:${e.userId}"${o.busy?" disabled":""}>${o.busy?"Отправляем":"Написать через бота"}</button>
      <p class="hint small">Сообщение придёт от бота DUO с кнопкой «Ответить менеджеру».</p>
      ${o.error?`<div class="warn">${p(o.error)}</div>`:""}
    </div>`}function Rt(){let e=o.toast?`<div class="d-toast" role="status">${p(o.toast)}</div>`:"";return o.leads?o.folder===null?e+_n():o.folder!=="leads"?e+_t(o.folder):`
    ${e}
    <div class="row-between"><h1>Заявки</h1><span class="d-head-actions">${o.selected?'<button class="btn text inline" data-desk="select-off">Готово</button>':'<button class="btn text inline" data-desk="select-on">Выбрать</button><button class="btn text inline" data-desk="refresh">Обновить</button>'}</span></div>
    ${o.error?`<div class="warn">${p(o.error)}</div>`:""}
    ${o.selected?On():""}
    ${o.sheet?.kind==="delete"?An():""}
    <input type="search" id="desk-q" class="d-search" placeholder="Номер, имя или @username" value="${p(o.query)}" autocomplete="off" enterkeyhint="search">
    <div class="chips" id="desk-chips">${Ot()}</div>
    <div class="d-list" id="desk-list">${At()}</div>`:'<h1>Клиенты</h1><div class="lead-card skeleton"></div><div class="lead-card skeleton"></div>'}function Mt(e){if(e.id==="desk-cq"){o.query=e.value;let t=document.getElementById("desk-clist"),n=o.folder;if(t&&(n==="warm"||n==="cold")){let a=document.createElement("div");a.innerHTML=_t(n),t.innerHTML=a.querySelector("#desk-clist")?.innerHTML??""}return!0}if(e.id==="desk-q"){o.query=e.value;let t=document.getElementById("desk-list"),n=document.getElementById("desk-chips");return t&&(t.innerHTML=At()),n&&(n.innerHTML=Ot()),!0}return e.id==="desk-note"&&(o.noteDraft=e.value),e.id==="desk-msg"&&(o.messageDraft=e.value),e.id==="desk-note"||e.id==="desk-msg"}function Cn(e){let t=ke.findIndex(n=>n.id===e.stage);return`
    <section class="d-block">
      <div class="block-head"><h2>Этап</h2><span class="kicker">${de(e.stageUpdatedAt)}</span></div>
      <div class="d-stages">
        ${ke.map((n,a)=>{let i=n.id===e.stage?" now":n.id!=="cancelled"&&e.stage!=="cancelled"&&a<t?" done":"";return`<button class="d-stage st-${n.id}${i}${n.id==="cancelled"?" cancel":""}" data-desk="stage:${n.id}"${n.id===e.stage?' aria-current="step"':""}><i></i>${n.title}</button>`}).join("")}
      </div>
      <p class="hint small">Клиент получит уведомление об этапе в боте.</p>
    </section>`}function Bn(e){let t=e.owner?.id===o.me?.id,n=e.owner?t?"Ведёте вы":`Ведёт ${p(e.owner.name)}`:"Никто не ведёт",a=!t&&e.owner&&e.handoff?.from.id===o.me?.id,i=a?`Вы попросили передать — ${p(e.owner.name)} ответит в боте`:t&&e.handoff?`${p(e.handoff.from.name)} просит передать — ответьте в боте`:"Чтобы двое не писали одному клиенту",r=e.owner?t?["Отказаться","drop"]:a?["Ещё раз","ask"]:["Попросить передать","ask"]:["Взять себе","take"];return`
    <div class="d-line"><span><b>${n}</b><small>${i}</small></span><button class="btn ${e.owner?"soft":"blue"} inline" data-desk="owner:${r[1]}">${r[0]}</button></div>`}function Nn(e){if(e.remind){let t=ce(e.remind.at);return`<div class="d-line${t?" due":""}"><span><b>${t?"⏰ Пора заняться заявкой":`⏰ Напомню ${xe(e.remind.at)}`}</b><small>${t?`Напоминание было ${xe(e.remind.at)}`:"Бот пришлёт заявку в личные сообщения"}</small></span><button class="btn soft inline" data-desk="remind:clear">${t?"Готово":"Убрать"}</button></div>`}return`
    <div class="d-line col"><span><b>Напомнить мне</b><small>Бот пришлёт заявку в личные сообщения в это время</small></span>
      <div class="d-picks">
        <button class="day" data-desk="remind:2h">Через 2 часа</button>
        <button class="day" data-desk="remind:1d">Завтра в 10:00</button>
        <button class="day" data-desk="remind:3d">Через 3 дня</button>
        <button class="day" data-desk="remind:custom">Своё время</button>
      </div>
    </div>`}function jn(e){return`
    <section class="d-client">
      <div class="d-who"><b>${p(e.name)}</b><span>${e.username?`@${p(e.username)}`:"нет @username — пишите через бота"}</span></div>
      <div class="d-actions">
        ${e.username?'<button class="btn blue" data-desk="tg">Открыть чат</button>':""}
        <button class="btn ${e.username?"soft":"blue"}" data-desk="sheet:message">Написать через бота</button>
      </div>
    </section>`}function qn(e){let t=[...e.notes].reverse();return`
    <section class="d-block">
      <h2>Заметки</h2>
      <textarea id="desk-note" rows="2" maxlength="2000" placeholder="Созвонились, хочет розовый дизайн…">${p(o.noteDraft)}</textarea>
      <button class="btn soft d-add" data-desk="note"${o.busy?" disabled":""}>Добавить заметку</button>
      ${t.length?`<div class="d-notes">${t.map(n=>`<div class="d-n"><p>${p(n.text)}</p><small>${p(n.by.name)}, ${de(n.at)}</small></div>`).join("")}</div>`:'<p class="hint small">Видят только менеджеры DUO.</p>'}
    </section>`}function Un(e){return e.project?`
    <section class="d-block">
      <h2>${e.project.type==="marketplace"?"Маркетплейс":"Онлайн-школа или сервис"}</h2>
      <div class="d-quote">
        ${e.project.features.length?e.project.features.map(t=>`<span>${p(t)}</span>`).join(""):"<span>Функции не выбраны</span>"}
        ${e.project.about?`<b>Идея</b><span>${p(e.project.about)}</span>`:""}
        <strong>Цена — после обсуждения</strong>
      </div>
    </section>`:e.quote?`
    <section class="d-block">
      <h2>Расчёт</h2>
      <div class="d-quote">
        <b>${p(e.quote.title)}</b>
        ${e.quote.items.map(t=>`<span>${p(t)}</span>`).join("")}
        ${e.quote.urgent?`<span>${p(e.quote.urgent)}</span>`:""}
        <strong>${p(e.quote.total)}</strong>
        ${e.quote.support?`<span>${p(e.quote.support)}</span>`:""}
      </div>
    </section>`:""}function Hn(e){return e.draft?`
    <section class="d-block">
      <h2>${e.draft.by==="template"?"Пример сайта (по шаблону)":"ИИ-пример сайта"}</h2>
      <button class="d-draft" data-desk="draft"><span class="d-draft-emoji">${e.draft.emoji}</span><span><b>${p(e.draft.brand)}</b><small>${p(e.draft.heroTitle)}</small></span><span class="d-draft-open">Открыть</span></button>
      <p class="hint small">Клиент собрал его перед заявкой — видно, чего он ждёт по стилю и текстам.</p>
    </section>`:""}function Fn(e){return!e.brief.length&&!e.description?"":`
    <section class="d-block">
      <h2>О проекте</h2>
      <dl class="d-brief">
        ${e.brief.map(t=>`<dt>${p(t.question)}</dt><dd>${p(t.answer)}</dd>`).join("")}
        ${e.description?`<dt>Описание</dt><dd>${p(e.description)}</dd>`:""}
      </dl>
    </section>`}var Gn={mini_app:"мини-приложение"};function Vn(e){let t=o.sheet;if(!t)return"";let n="";if(t.kind==="stage")n=`
      <h2>Перевести на «${p(Te(t.stage).title)}»?</h2>
      <p>${p(e.name)} получит уведомление об этапе в боте DUO.</p>
      <div class="gap"></div>
      <div class="stack"><button class="btn blue" data-desk="stage-ok"${o.busy?" disabled":""}>${o.busy?"Сохраняем":"Перевести"}</button><button class="btn soft" data-desk="sheet-close">Отмена</button></div>`;else if(t.kind==="message")n=`
      <h2>Сообщение клиенту</h2>
      <p>${p(e.name)} получит его в боте DUO с кнопкой «Ответить менеджеру». Копия сохранится в заметках.</p>
      <div class="gap"></div>
      <textarea id="desk-msg" rows="4" maxlength="3000" placeholder="Здравствуйте! Когда вам удобно созвониться?">${p(o.messageDraft)}</textarea>
      <div class="gap"></div>
      <button class="btn blue" data-desk="msg-send"${o.busy?" disabled":""}>${o.busy?"Отправляем":"Отправить"}</button>`;else{let a=new Date(Date.now()+3e5);n=`
      <h2>Своё время</h2>
      <p>Бот напомнит об этой заявке вам в личные сообщения.</p>
      <div class="gap"></div>
      <input type="datetime-local" id="desk-at" class="d-at" min="${Lt(a)}" value="${Lt(Ee(1))}">
      <div class="gap"></div>
      <button class="btn blue" data-desk="remind:save"${o.busy?" disabled":""}>Напомнить</button>`}return`
    <div class="sheet-back" data-desk="sheet-close"></div>
    <div class="sheet" role="dialog"><div class="grip"></div>${n}${o.error?`<div class="warn">${p(o.error)}</div>`:""}</div>`}function Ct(){let e=Qe();if(!o.leads)return'<h1>Заявка</h1><div class="lead-card skeleton"></div>';if(!e)return'<h1>Заявка не найдена</h1><p class="lead">Возможно, её номер изменился. Вернитесь к списку.</p><div class="gap"></div><button class="btn soft" data-desk="back">К заявкам</button>';let t=new Date(e.createdAt).toLocaleString("ru-RU",{day:"numeric",month:"long",hour:"2-digit",minute:"2-digit"});return`
    ${o.toast?`<div class="d-toast" role="status">${p(o.toast)}</div>`:""}
    <div class="d-head st-${e.stage}">
      <span class="kicker">${t}${e.source?`, ${p(Gn[e.source]??e.source)}`:""}</span>
      <h1 class="num">Заявка № ${e.id}</h1>
      <div class="d-sum"><b class="num">${e.project?"Цена после обсуждения":v(e.total)}</b>${e.supportMonthly?`<span>и ${v(e.supportMonthly)} в месяц за поддержку</span>`:""}</div>
    </div>
    ${o.error&&!o.sheet?`<div class="warn">${p(o.error)}</div>`:""}
    ${jn(e)}
    <section class="d-block">${Bn(e)}${Nn(e)}</section>
    ${Cn(e)}
    ${Hn(e)}
    <section class="d-block">
      <h2>Промпт для сайта</h2>
      <p class="hint small">Готовое задание по этой заявке для ИИ-конструктора или разработчика: бриф, страницы, функции, стиль и что уточнить у клиента. Пришлю файлом в чат с ботом.</p>
      <button class="btn soft d-add" data-desk="prompt"${o.busy?" disabled":""}>Прислать промпт файлом</button>
    </section>
    ${qn(e)}
    ${Un(e)}
    ${Fn(e)}
    ${Vn(e)}`}function We(e){return o.sheet?(o.sheet=null,o.error="",c.render(),!0):e==="desk"&&o.selected?(o.selected=null,c.render(),!0):e==="desk"&&o.folder!==null?(o.folder=null,o.query="",c.render(),!0):!1}function Bt(e){let t=e.closest("[data-desk]");if(!t)return!1;let[n="",a=""]=(t.dataset.desk??"").split(":"),i=Qe();switch(n){case"refresh":return c.haptic(),o.leads=null,c.render(),It(),!0;case"filter":return c.haptic("select"),o.filter=a,c.render(),!0;case"open":return c.haptic(),o.openId=Number(a),o.sheet=null,o.error="",o.noteDraft="",o.messageDraft="",c.open("deskLead"),!0;case"back":return c.back(),!0;case"prompt":return!i||o.busy||(c.haptic(),o.busy=!0,c.render(),(c.demo?Promise.resolve({ok:!0}):c.api("/api/admin/prompt",{id:i.id})).then(()=>{c.haptic("success"),Se("Промпт отправлен в чат с ботом")}).catch(r=>{c.haptic("error"),o.error=r.message}).finally(()=>{o.busy=!1,c.render()})),!0;case"draft":return i?.draft&&c.openSite(i.draft,i.look??{pages:3,options:[],support:!1},i.project?"":v(i.total),`Заявка № ${i.id}, ${i.name}`),!0;case"tg":return i?.username&&c.openLink(`https://t.me/${i.username}`),!0;case"sheet":return c.haptic(),o.error="",o.sheet={kind:"message"},c.render(),document.getElementById("desk-msg")?.focus(),!0;case"sheet-close":return We("deskLead"),!0;case"select-on":return c.haptic(),o.selected=new Set,c.render(),!0;case"select-off":return o.selected=null,c.render(),!0;case"pick":{let r=Number(a);return c.haptic("select"),o.selected?.has(r)?o.selected.delete(r):o.selected?.add(r),c.render(),!0}case"delete-ask":return o.selected?.size&&(c.haptic(),o.error="",o.sheet={kind:"delete"},c.render()),!0;case"delete-ok":{let r=[...o.selected??[]];return!r.length||o.busy||(o.busy=!0,c.render(),(c.demo?Promise.resolve({deleted:r.length}):c.api("/api/admin/delete",{ids:r})).then(({deleted:l})=>{o.leads=(o.leads??[]).filter(u=>!r.includes(u.id)),o.selected=null,o.sheet=null,c.haptic("success"),Se(l===1?"Заявка удалена":`Удалено заявок: ${l}`)}).catch(l=>{c.haptic("error"),o.error=l.message}).finally(()=>{o.busy=!1,c.render()})),!0}case"folder":return c.haptic(),o.selected=null,o.folder=a,o.query="",c.render(),window.scrollTo({top:0}),!0;case"client":return c.haptic(),o.error="",o.messageDraft="",o.sheet={kind:"client",userId:Number(a)},c.render(),!0;case"ctg":return c.openLink(`https://t.me/${a}`),!0;case"cwrite":{let r=o.messageDraft.trim();return r?(o.busy=!0,o.error="",c.render(),(c.demo?Promise.resolve({ok:!0}):c.api("/api/admin/write",{userId:Number(a),text:r})).then(()=>{c.haptic("success"),o.messageDraft="",o.sheet=null,Se("Отправлено клиенту")}).catch(l=>{c.haptic("error"),o.error=l.message}).finally(()=>{o.busy=!1,c.render()}),!0):(o.error="Напишите сообщение",c.haptic("error"),c.render(),!0)}case"stage":return!i||a===i.stage||(c.haptic(),o.error="",o.sheet={kind:"stage",stage:a},c.render()),!0;case"stage-ok":{let r=o.sheet;return r?.kind!=="stage"||Y("/api/admin/stage",{stage:r.stage},`Этап: ${Te(r.stage).title}. Клиент уведомлён`,l=>{l.stage=r.stage,l.stageTitle=Te(r.stage).title,l.stageUpdatedAt=new Date().toISOString()}).then(l=>l&&(o.sheet=null)==null&&c.render()),!0}case"owner":{if(a==="ask"){let l=i?.owner?.name??"менеджеру";return Y("/api/admin/handoff",{},`Запрос отправлен ${l}`,u=>u.handoff={from:o.me,at:new Date().toISOString()}),!0}let r=a==="take";return Y("/api/admin/owner",{take:r},r?"Заявка ваша":"Вы больше не ведёте заявку",l=>l.owner=r?o.me:null),!0}case"remind":{if(a==="custom")return c.haptic(),o.error="",o.sheet={kind:"remind"},c.render(),!0;if(a==="clear")return Y("/api/admin/remind",{at:null},"Напоминание убрано",u=>u.remind=null),!0;let r;if(a==="2h")r=new Date(Date.now()+2*36e5);else if(a==="1d")r=Ee(1);else if(a==="3d")r=Ee(3);else{let u=document.getElementById("desk-at")?.value;if(r=u?new Date(u):new Date(NaN),Number.isNaN(r.getTime()))return o.error="Выберите дату и время",c.render(),!0}let l=r.toISOString();return Y("/api/admin/remind",{at:l},`Напомню ${xe(l)}`,u=>u.remind={at:l,adminId:o.me?.id??0}).then(u=>u&&o.sheet&&(o.sheet=null)==null&&c.render()),!0}case"note":{let r=o.noteDraft.trim();return r?(Y("/api/admin/note",{text:r},"Заметка сохранена",l=>l.notes.push({at:new Date().toISOString(),by:o.me,text:r})).then(l=>{l&&(o.noteDraft="",c.render())}),!0):(c.haptic("error"),document.getElementById("desk-note")?.focus(),!0)}case"msg-send":{let r=o.messageDraft.trim();return r?(Y("/api/admin/message",{text:r},"Отправлено клиенту",l=>l.notes.push({at:new Date().toISOString(),by:o.me,text:`✉️ Написал клиенту: ${r}`})).then(l=>{l&&(o.messageDraft="",o.sheet=null,c.render())}),!0):(o.error="Напишите сообщение",c.haptic("error"),c.render(),!0)}default:return!1}}function Yn(){let e=n=>new Date(Date.now()-n*36e5).toISOString(),t=(n,a,i,r,l,u,f,y={})=>({userId:n,name:a,username:i,step:r,stepTitle:l,temperature:f,firstSeen:e(u+2),lastSeen:e(u),stepAt:e(u),where:"bot",detail:null,total:null,...y});return[t(501,"Ольга","olga_flowers","quote","Итог расчёта",2,"warm",{total:21500,where:"app"}),t(502,"Сергей",null,"calc","Расчёт сайта",26,"warm"),t(503,"Марина","marina_k","briefDone","Вопросы пройдены",50,"warm"),t(504,"Артём","artem","brief","Вопросы о проекте",5,"cold",{detail:"вопрос 3 из 8"}),t(505,"Виктор","vik","opened","Открыт бот",30,"cold")]}function Qn(){let e={id:1,name:"@denis"},t=a=>new Date(Date.now()-a*36e5).toISOString(),n={supportMonthly:null,source:"mini_app",description:null,quote:{title:"Сайт, 3 страницы",items:["База, до 3 страниц — 10 000 ₽","Онлайн-оплата — 6 000 ₽","Базовое SEO — 2 000 ₽"],urgent:null,total:"Разработка: 18 000 ₽",support:null},draft:null,handoff:null,look:{pages:3,options:["onlinePayment","basicSeo"],support:!1},brief:[{question:"Сфера",answer:"Кафе, еда, доставка"},{question:"Главная задача",answer:"Продавать онлайн"},{question:"Откуда посетители",answer:"Из поиска — Яндекс и Google; Из соцсетей и Telegram"}]};return{me:e,leads:[{...n,draft:C(be),look:{pages:3,options:["uniqueDesign","copywriting","animatedButtons","animatedCards","onlinePayment","basicSeo"],support:!1},id:14,createdAt:t(.3),name:"Анна",username:"anna_coffee",total:18e3,stage:"received",stageTitle:"Заявка получена",stageUpdatedAt:t(.3),notes:[],owner:null,remind:null},{...n,id:13,createdAt:t(5),name:"Игорь",username:null,total:31500,supportMonthly:1500,stage:"discussing",stageTitle:"Обсуждаем проект",stageUpdatedAt:t(3),notes:[{at:t(3),by:e,text:"Созвонились, хочет тёмный сайт. Пришлёт логотип до пятницы."}],owner:e,remind:{at:new Date(Date.now()-6e5).toISOString(),adminId:1}},{...n,id:12,createdAt:t(30),name:"Студия «Лето»",username:"leto_studio",total:24e3,stage:"inProgress",stageTitle:"Сайт в работе",stageUpdatedAt:t(20),notes:[],owner:{id:2,name:"@mrsubo"},remind:{at:Ee(1).toISOString(),adminId:2}},{...n,id:9,createdAt:t(240),name:"Михаил",username:"misha",total:13e3,stage:"done",stageTitle:"Готово",stageUpdatedAt:t(100),notes:[],owner:e,remind:null}]}}var g=window.Telegram?.WebApp,N=!!(g&&g.platform!=="unknown"),R=!!g?.initData,pe=new URLSearchParams(location.search),te=pe.get("channel"),L=pe.get("demo"),rt="https://t.me/duodevops_bot",z=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function d(e="tap"){let t=g?.HapticFeedback;t&&(e==="select"?t.selectionChanged():e==="soft"?t.impactOccurred("soft"):e==="success"||e==="error"?t.notificationOccurred(e):t.impactOccurred("light"))}async function A(e,t={}){let n=await fetch(`https://77-110-111-44.sslip.io${e}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({initData:g?.initData??"",...t})}),a=await n.json().catch(()=>({}));if(!n.ok)throw new Error(a.error??"Не получилось связаться с сервером. Попробуйте ещё раз.");return a}var Nt=[{id:"received",title:"Заявка получена"},{id:"discussing",title:"Обсуждаем проект"},{id:"inProgress",title:"Сайт в работе"},{id:"review",title:"На проверке у вас"},{id:"done",title:"Готово"}];function Wt(){document.documentElement.dataset.theme="dark";let e="#0B0C0E";g?.setHeaderColor(e),g?.setBackgroundColor(e),g?.setBottomBarColor?.(e)}Wt();g?.onEvent?.("themeChanged",Wt);var s={screen:"home",history:[],siteType:null,features:[],about:"",briefStep:0,answers:{},ownOpen:!1,pages:3,options:{},urgent:!1,urgentDays:le()[0]??5,support:!1,name:g?.initDataUnsafe?.user?.first_name??"",supportText:"",custom:!1,openOpt:null,sentLead:null,shownTotal:0,error:"",busy:!1,sent:null,leads:null,stageVideo:null,isAdmin:L==="desk"||L==="admin",draft:null,draftFor:"",ai:L==="ai"?{left:2,perDay:2}:null,aiBusy:!1,aiError:"",briefComplete:!1,consent:!1,consentError:!1,adminCounts:L==="admin"?{fresh:1,active:3}:null},I=()=>({pages:s.pages,options:s.options,urgent:s.urgent,...s.urgent?{urgentDays:s.urgentDays}:{},support:s.support}),D=document.getElementById("app");function Kt(e){let t=document.createElement("div");t.className="warn",t.style.cssText="position:fixed;left:12px;right:12px;top:12px;z-index:99",t.textContent=`Ошибка приложения: ${e}`,document.body.appendChild(t)}window.addEventListener("error",e=>Kt(e.message||"неизвестная ошибка"));window.addEventListener("unhandledrejection",e=>Kt(String(e.reason?.message??e.reason)));var m=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),K=e=>_.find(t=>t.id===e),Wn={brand:"Зерно",emoji:"☕",tab:"Кофейня «Зерно» — свежая обжарка",heroTitle:"Свежая обжарка каждый день",heroText:"Кофе из зёрен, которые мы обжариваем сами. Заходите или забронируйте столик.",cta:"Оставить заявку",pages:["Главная","Меню","Контакты"],sectionTitle:"Популярное",catalogText:"Кофе, выпечка и десерты — всё свежее.",contactsText:"Ждём вас каждый день. Можно забронировать столик заранее.",items:[{icon:"☕",name:"Эспрессо",text:"Двойная обжарка"},{icon:"🥐",name:"Круассан",text:"Печём с утра"},{icon:"🍰",name:"Чизкейк",text:"По нашему рецепту"},{icon:"🥛",name:"Капучино",text:"На вашем молоке"},{icon:"🍪",name:"Печенье",text:"К любому кофе"},{icon:"🧋",name:"Раф",text:"Ванильный и пряный"}],formTitle:"Забронировать столик",formText:"Оставьте имя и телефон — заявка сразу придёт нам в Telegram."};function Kn(e){return{brand:e.brand,emoji:e.emoji,tab:e.tagline,heroTitle:e.heroTitle,heroText:e.heroText,cta:e.cta,pages:e.pages,sectionTitle:e.sectionTitle,catalogText:e.sectionText,contactsText:e.formText,items:e.items,formTitle:e.formTitle,formText:e.formText,accent:J[e.palette]}}function ot(e,t=null){if(t==="marketplace")return"market";if(t==="platform")return"platform";if(t==="shop")return"shop";let n=(e.sphere??[]).find(i=>!i.startsWith(q));if(n==="shop"||n==="food"||n==="beauty"||n==="education"||n==="b2b"||n==="services")return n;let a=e.goal?.[0];return a==="sell"||e.action?.[0]==="pay"?"shop":a==="booking"||e.action?.[0]==="book"?"beauty":"services"}function lt(e,t,n=!1,a=!1,i=null,r="services"){return{pages:t,on:l=>!!e[l],urgent:n,support:a,c:i?Kn(i):Wn,texts:!!e.copywriting||!!i,kind:r}}function Xt(){let e={uniqueDesign:{pages:3},animatedButtons:{},animatedCards:{},scrollReveal:{pages:3},pageTransitions:{}};return s.features.includes("payment")&&(e.onlinePayment={}),e}var Pe={marketplace:{heroTitle:"Всё нужное от проверенных продавцов",heroText:"Сравнивайте предложения, читайте отзывы и оплачивайте картой в один клик.",cta:"Смотреть каталог"},platform:{heroTitle:"Учитесь в своём темпе",heroText:"Курсы, задания и прогресс — в личном кабинете. Начните с первого урока.",cta:"Начать учиться"}};function Xn(){let e=lt(Xt(),3,!1,!1,s.draft,ot(s.answers,s.siteType));return s.draft?.by==="ai"?e:{...e,c:{...e.c,...Pe[s.siteType==="marketplace"?"marketplace":"platform"]}}}var zn=()=>$e(s.siteType)?.custom?Xn():lt(s.options,s.pages,s.urgent,s.support,s.draft,ot(s.answers,s.siteType)),b={open:!1,device:"phone",page:"home",cart:0,other:null},W=()=>b.other?.look??zn(),Jn=["home","menu","contacts"],S=(e,t,n=70)=>e?m(t):`<span class="ph" style="width:${n}%"></span>`;function Zn(e){let t=["Заявка за минуту","Ответ в Telegram"];return e.on("onlinePayment")&&t.push("Оплата онлайн"),e.support&&t.push("На связи после запуска"),`<ul class="fs-perks">${t.map(n=>`<li>${n}</li>`).join("")}</ul>`}function es(e,t,n){let a=e.texts,i=e.on("onlinePayment"),r=e.on("animatedButtons")?" anim":"";return`<div class="fs-cards${e.on("animatedCards")?" lift":""}${n}" data-opt="animatedCards scrollReveal">${e.c.items.slice(0,t).map(({icon:l,name:u,text:f,price:y},P)=>`
      <article class="fs-card" style="--i:${P}">
        <div class="fs-card-pic"><span>${l}</span></div>
        <div class="fs-card-body">
          <b>${S(a,u,60)}</b>
          <span class="fs-card-sub">${S(a,f,80)}</span>
          <div class="fs-card-foot">
            ${y&&a?`<span class="fs-price">${m(y)}</span>`:""}
            ${i?`<button class="fs-buy${r}" data-buy data-opt="onlinePayment">Купить</button>`:`<button class="fs-more-btn" data-press="cta">${a?"Оставить заявку":"Кнопка"}</button>`}
          </div>
        </div>
      </article>`).join("")}</div>`}function jt(e,t){let n=e.texts,a=[["Оставляете заявку","Пара полей — имя и телефон."],["Обсуждаем детали","Уточняем задачу и удобное время."],["Делаем и показываем","Результат — без сюрпризов."]];return`
    <section class="fs-steps${t}" data-opt="scrollReveal">
      <h2>${S(n,"Как мы работаем",50)}</h2>
      <ol>${a.map(([i,r])=>`<li><b>${S(n,i,60)}</b><span>${S(n,r,80)}</span></li>`).join("")}</ol>
    </section>`}function Ke(e,t){let n=e.texts;return`
    <section class="fs-form${t}" data-opt="scrollReveal">
      <div class="fs-form-text">
        <h3>${S(n,e.c.formTitle,55)}</h3>
        <p>${S(n,e.c.formText,85)}</p>
      </div>
      <div class="fs-inputs"><input class="fs-input" placeholder="Имя" autocomplete="off"><input class="fs-input" placeholder="Телефон" inputmode="tel" autocomplete="off"></div>
      <button class="fs-btn${e.on("animatedButtons")?" anim":""}" data-press="send" data-opt="animatedButtons">${n?"Отправить заявку":"Кнопка"}</button>
    </section>`}var ts={shop:["1 290 ₽","890 ₽","2 450 ₽","1 690 ₽","3 100 ₽","740 ₽"],food:["390 ₽","520 ₽","280 ₽","190 ₽","450 ₽","310 ₽"]},ct=(e,t)=>e.c.items[t]?.price??ts[e.kind]?.[t%6]??"",me=(e,t)=>Array.from({length:t},(n,a)=>e.c.items[a%e.c.items.length]);function ns(e,t,n=!1){let a=e.on("animatedButtons")?" anim":"";return e.on("onlinePayment")?`<button class="fs-buy${a}${n?" sm":""}" data-buy data-opt="onlinePayment">${t}</button>`:`<button class="fs-more-btn${n?" sm":""}" data-press="cta">Заказать</button>`}function Ce(e){return`<div class="fs-chips">${e.map((t,n)=>`<button class="fs-chip${n===0?" on":""}" data-chip>${m(t)}</button>`).join("")}</div>`}function ss(e,t,n){let a=e.texts,i=e.on("animatedCards")?" lift":"";return`
    <div class="mk-search"><input class="fs-input" placeholder="Поиск по каталогу" autocomplete="off"></div>
    ${Ce(["Все",...e.c.items.map(r=>r.name)])}
    <div class="mk-grid${i}${n}" data-opt="animatedCards scrollReveal">
      ${me(e,t).map((r,l)=>`
        <article class="mk-card">
          <div class="mk-pic"><span>${r.icon}</span>${l===0?'<i class="mk-badge">Хит</i>':""}</div>
          <b>${S(a,r.name,70)}</b>
          <span class="mk-sub">${S(a,r.text,80)}</span>
          <div class="mk-foot"><span class="fs-price">${a?ct(e,l):""}</span>${ns(e,"В корзину",!0)}</div>
        </article>`).join("")}
    </div>`}function as(e,t,n){let a=e.texts,i=e.on("animatedCards")?" lift":"";return`
    ${Ce(e.c.items.map(r=>r.name))}
    <div class="fd-list${i}${n}" data-opt="animatedCards scrollReveal">
      ${me(e,t).map((r,l)=>`
        <article class="fd-row">
          <span class="fd-pic">${r.icon}</span>
          <span class="fd-text"><b>${S(a,r.name,60)}</b><small>${S(a,r.text,80)}</small></span>
          <span class="fd-side"><span class="fs-price">${a?ct(e,l):""}</span>${e.on("onlinePayment")?'<button class="fd-add" data-buy data-opt="onlinePayment" aria-label="Добавить">+</button>':'<button class="fd-add ghost" data-press="cta" aria-label="Заказать">→</button>'}</span>
        </article>`).join("")}
    </div>`}function is(e,t){let n=e.texts,a=["Сегодня","Завтра","Пт","Сб","Вс"],i=["10:00","12:30","15:00","17:30","19:00"];return`
    <section class="bk${t}" data-opt="scrollReveal">
      <h2>${S(n,"Выберите время",50)}</h2>
      ${Ce(a)}
      <div class="bk-times">${i.map((r,l)=>`<button class="bk-time${l===1?" on":""}" data-slot="${r}">${r}</button>`).join("")}</div>
      <button class="fs-btn${e.on("animatedButtons")?" anim":""} bk-go" data-press="book" data-opt="animatedButtons">${n?"Записаться на 12:30":"Кнопка"}</button>
    </section>`}function rs(e,t,n,a){let i=e.texts;return`
    <div class="sv-list${e.on("animatedCards")?" lift":""}${n}" data-opt="animatedCards scrollReveal">
      ${me(e,t).map(l=>`
        <article class="sv-row">
          <span class="fd-pic">${l.icon}</span>
          <span class="fd-text"><b>${S(i,l.name,60)}</b><small>${S(i,l.text,80)}</small></span>
          <button class="fs-more-btn sm" data-press="cta">${i?a:"Кнопка"}</button>
        </article>`).join("")}
    </div>`}function zt(e,t,n){let a=e.texts,i=[["Онлайн","С нуля"],["Группа","Практика"],["Онлайн","Интенсив"],["Лично","Под ваши цели"]];return`
    <div class="ed-grid${e.on("animatedCards")?" lift":""}${n}" data-opt="animatedCards scrollReveal">
      ${me(e,t).map((l,u)=>`
        <article class="ed-card">
          <div class="ed-top"><span class="fd-pic">${l.icon}</span><span class="ed-tags">${(i[u%4]??[]).map(f=>`<i>${f}</i>`).join("")}</span></div>
          <b>${S(a,l.name,60)}</b>
          <small>${S(a,l.text,80)}</small>
          <button class="fs-more-btn" data-press="cta">${a?"Записаться на курс":"Кнопка"}</button>
        </article>`).join("")}
    </div>`}function os(e,t,n){let a=["Мастерская Север","Дом и сад","Студия Лён","Ремесло","Город мастеров","Своё дело"],i=e.on("animatedCards")?" lift":"";return`
    <div class="mk-search"><input class="fs-input" placeholder="Поиск среди тысяч товаров" autocomplete="off"></div>
    ${Ce(["Все",...e.c.items.map(r=>r.name)])}
    <div class="mk-grid${i}${n}" data-opt="animatedCards scrollReveal">
      ${me(e,t).map((r,l)=>`
        <article class="mk-card">
          <div class="mk-pic"><span>${r.icon}</span>${l===0?'<i class="mk-badge">Хит</i>':""}</div>
          <b>${m(r.name)}</b>
          <span class="mk-seller">${m(a[l%a.length])} <em>★ 4,${9-l%3}</em></span>
          <div class="mk-foot"><span class="fs-price">${ct({...e,kind:"shop"},l)}</span><button class="fs-buy sm" data-buy>В корзину</button></div>
        </article>`).join("")}
    </div>
    <section class="mk-sell${n}">
      <b>Продавайте у нас</b>
      <p>Свой кабинет, товары, заказы и выплаты — всё в одном месте.</p>
      <button class="fs-btn" data-site="seller">Стать продавцом</button>
    </section>`}function ls(e,t,n){return`
    ${zt(e,t,n)}
    <section class="pl-cab${n}">
      <div class="pl-head"><b>Личный кабинет</b><button class="fs-more-btn sm" data-site="cabinet">Войти</button></div>
      ${e.c.items.slice(0,3).map((a,i)=>`<div class="pl-row"><span>${m(a.name)}</span><i style="--p:${[72,40,15][i]}%"></i><small>${[72,40,15][i]}%</small></div>`).join("")}
    </section>`}function cs(e,t){let n=e.texts;return`
    <div class="b2-grid${e.on("animatedCards")?" lift":""}${t}" data-opt="animatedCards scrollReveal">
      ${e.c.items.slice(0,4).map((i,r)=>`
        <article class="b2-card">
          <span class="b2-num">0${r+1}</span>
          <span class="fd-pic">${i.icon}</span>
          <b>${S(n,i.name,60)}</b>
          <small>${S(n,i.text,80)}</small>
        </article>`).join("")}
    </div>`}var ds={services:[["Как быстро вы отвечаете?","Заявка приходит нам в Telegram сразу — отвечаем в рабочее время."],["Можно ли обсудить задачу заранее?","Да, оставьте заявку — уточним детали и предложим решение."],["Где вы работаете?","Расскажем при обсуждении: всё зависит от задачи."]],shop:[["Как оформить заказ?","Добавьте товары в корзину и оплатите картой на сайте."],["Есть ли доставка?","Да — способы доставки покажем при оформлении заказа."],["Можно ли вернуть товар?","Да, условия возврата — в разделе «Доставка»."]],food:[["Как заказать доставку?","Добавьте блюда в заказ и оформите его на сайте."],["Можно ли забрать самому?","Да, выберите самовывоз при оформлении."],["Есть ли меню для детей?","Спросите нас — подскажем, что подойдёт."]],beauty:[["Как записаться?","Выберите услугу и удобное время — запись придёт нам сразу."],["Можно ли перенести запись?","Да, напишите нам — подберём другое время."],["Какие материалы вы используете?","Расскажем на консультации — подберём под вас."]],education:[["Подойдёт ли курс новичку?","Да, есть программы с нуля — подскажем, с чего начать."],["Как проходят занятия?","Онлайн или в группе — формат указан у каждого курса."],["Что будет после курса?","Практические навыки и материалы, к которым можно вернуться."]],market:[["Как стать продавцом?","Зарегистрируйтесь и добавьте товары в кабинете — после проверки они появятся в каталоге."],["Как оплатить заказ?","Картой на сайте; деньги продавец получает после доставки."],["Что если товар не подошёл?","Оформите возврат в кабинете покупателя."]],platform:[["Как начать заниматься?","Зарегистрируйтесь, выберите курс или тариф — доступ откроется сразу."],["Где мои материалы?","В личном кабинете: уроки, задания и прогресс."],["Можно ли отменить подписку?","Да, в кабинете, в любой момент."]],b2b:[["С какими компаниями вы работаете?","С малым и средним бизнесом — расскажите о задаче."],["Как начать работу?","Оставьте заявку — проведём встречу и предложим план."],["Как вы отчитываетесь?","По каждому этапу — понятно и вовремя."]]};function us(e,t){let n=e.texts;return`
    <section class="fs-faq${t}" data-opt="scrollReveal">
      <h2>${S(n,"Частые вопросы",50)}</h2>
      ${ds[e.kind].map(([a,i],r)=>`<div class="faq-item${r===0?" open":""}"><button class="faq-q" data-faq aria-expanded="${r===0}"><span>${S(n,a,70)}</span><i aria-hidden="true"></i></button><div class="faq-a"><p>${S(n,i,90)}</p></div></div>`).join("")}
    </section>`}function ps(e){if(!e.texts)return"";let n=[e.c.brand,...e.c.items.map(a=>a.name)].map(a=>`<span>${m(a)}</span><i>✦</i>`).join("");return`<div class="fs-marquee" aria-hidden="true"><div class="fs-marquee-track">${n}${n}</div></div>`}function qt(e,t,n){switch(e.kind){case"shop":return ss(e,t,n);case"food":return as(e,t,n);case"beauty":return`${rs(e,Math.min(t,4),n,"Записаться")}${is(e,n)}`;case"education":return zt(e,Math.min(t,4),n);case"b2b":return cs(e,n);case"market":return os(e,t,n);case"platform":return ls(e,Math.min(t,4),n);default:return es(e,t,n)}}function Jt(e,t){let n=e.texts,a=e.c,i=e.on("uniqueDesign"),r=e.on("scrollReveal")?" rv":"",l=e.on("animatedButtons")?" anim":"";return t==="menu"?`
      <section class="fs-head fs-page-head${r}" data-opt="scrollReveal"><h2>${S(n,a.pages[1],30)}</h2><p>${S(n,a.catalogText,75)}</p></section>
      ${qt(e,6,r)}
      ${Ke(e,r)}`:t==="contacts"?`
      <section class="fs-head fs-page-head${r}" data-opt="scrollReveal"><h2>${S(n,a.pages[2],40)}</h2><p>${S(n,a.contactsText,80)}</p></section>
      ${Ke(e,r)}
      ${jt(e,r)}`:`
    <section class="fs-hero ${i?"unique":"template"} k-${e.kind}" data-opt="uniqueDesign">
      ${i?'<div class="fs-hero-art" aria-hidden="true"><span class="o o1"></span><span class="o o2"></span><span class="o o3"></span></div>':""}
      <div class="fs-hero-text">
        <h1 data-opt="copywriting">${n?m(a.heroTitle):'<span class="ph" style="width:90%"></span><span class="ph" style="width:60%"></span>'}</h1>
        <p>${S(n,a.heroText,85)}</p>
        <div class="fs-hero-actions">
          <button class="fs-btn${l}" data-press="cta" data-opt="animatedButtons">${n?m(a.cta):"Кнопка"}</button>
          <button class="fs-btn ghost" data-page="menu">${n?m(a.pages[1]):"Кнопка"}</button>
        </div>
        ${n?Zn(e):""}
      </div>
    </section>
    <section class="fs-head${r}" data-opt="scrollReveal"><h2>${S(n,a.sectionTitle,40)}</h2><p>${S(n,a.catalogText,75)}</p></section>
    ${qt(e,e.kind==="shop"||e.kind==="market"?4:3,r)}
    ${i?ps(e):""}
    ${e.kind==="shop"||e.kind==="food"||e.kind==="market"?"":jt(e,r)}
    ${us(e,r)}
    ${Ke(e,r)}`}var Ut=e=>(e.trim()[0]??"D").toUpperCase();function De(){let e=W(),t=e.texts,n=e.c,i=Jn.slice(0,Math.min(3,e.pages)).map((r,l)=>`<button class="${r===b.page?"on":""}" data-page="${r}">${t?m(n.pages[l]):'<span class="ph" style="width:44px"></span>'}</button>`).join("")+(e.pages>3?`<span class="fs-more">ещё ${V(e.pages-3)}</span>`:"");return`
    <div class="fs-site ${b.device} ${e.on("uniqueDesign")?"unique":"template"} k-${e.kind}"${n.accent?` style="--accent:${n.accent}"`:""}>
      <header class="fs-header">
        <button class="fs-brand" data-page="home"><span class="fs-mark">${m(Ut(n.brand))}</span><b class="fs-logo">${t?m(n.brand):'<span class="ph" style="width:60px"></span>'}</b></button>
        <nav class="fs-nav" data-opt="pageTransitions">${i}</nav>
        ${(e.kind==="shop"||e.kind==="market")&&e.on("onlinePayment")?`<button class="mk-cart" data-site="cart" aria-label="Корзина">Корзина<i class="num">${b.cart}</i></button>`:""}
        ${e.kind==="platform"?'<button class="mk-cart" data-site="cabinet">Войти</button>':""}
      </header>
      <main class="fs-main">${Jt(e,b.page)}</main>
      <footer class="fs-foot">
        <div class="fs-foot-brand"><span class="fs-mark">${m(Ut(n.brand))}</span><b>${t?m(n.brand):""}</b></div>
        ${t?`<p>${m(n.tab)}</p>`:""}
        <div class="fs-foot-row"><span>© ${t?m(n.brand):""}</span><span>Сайт сделан в DUO</span></div>
      </footer>
      ${e.support?'<button class="fs-chat" data-site="chat" data-opt="support" aria-label="Чат"></button>':""}
    </div>`}function ms(){let e=document.getElementById("full");return e||(e=document.createElement("div"),e.id="full",document.body.appendChild(e),e.addEventListener("click",gs)),e}function Be(){let e=ms();if(!b.open){e.innerHTML="",document.body.classList.remove("lock");return}if(document.body.classList.add("lock"),b.other){let n=b.other;e.innerHTML=`
    <div class="full" role="dialog" aria-label="Сайт на весь экран">
      <div class="full-top">
        <button class="full-close" data-full="close">Закрыть</button>
        <div class="seg2" role="tablist">
          <button role="tab" class="${b.device==="phone"?"on":""}" data-device="phone" aria-selected="${b.device==="phone"}">Телефон</button>
          <button role="tab" class="${b.device==="desktop"?"on":""}" data-device="desktop" aria-selected="${b.device==="desktop"}">Компьютер</button>
        </div>
      </div>
      <div class="full-scroll" id="full-scroll">
        ${b.device==="desktop"?`<div class="fs-scale"><div class="fs-canvas">${De()}</div></div>`:De()}
      </div>
      <div class="fs-toast" role="status" aria-live="polite"></div>
      <div class="full-bottom">
        <div class="sum">${n.sum?`<b class="num">${n.sum}</b>`:""}<span>${m(n.note)}</span></div>
        <button class="btn blue" data-full="close">Закрыть</button>
      </div>
    </div>`,Oe(),et();return}b.device=window.innerWidth>=dt?"desktop":"phone";let t=M(I());e.innerHTML=`
    <div class="full own" role="dialog" aria-label="Ваш сайт">
      <div class="full-top">
        <button class="full-close" data-full="close">Назад</button>
        <b class="full-title">Ваш сайт</b>
        <button class="full-another" data-full="another">Ещё вариант</button>
      </div>
      <div class="full-scroll" id="full-scroll">
        <p class="fs-note">Пример по вашим ответам. Настоящий дизайн и тексты сделает DUO.</p>
        ${b.device==="desktop"?`<div class="fs-scale"><div class="fs-canvas">${De()}</div></div>`:De()}
      </div>
      <div class="fs-toast" role="status" aria-live="polite"></div>
      <div class="full-bottom">
        ${ae()?'<div class="sum"><b>Цена</b><span>после обсуждения</span></div>':`<div class="sum"><b class="num">${v(t.developmentTotal)}</b><span>${t.supportMonthly?`и ${v(t.supportMonthly)} в месяц`:"предварительно"}</span></div>`}
        <button class="btn blue" data-full="lead">Оставить заявку</button>
      </div>
    </div>`,Oe(),et()}var dt=720,Ht=0;function Q(e){let t=document.querySelector("#full .fs-toast");t&&(t.textContent=e,t.classList.add("show"),window.clearTimeout(Ht),Ht=window.setTimeout(()=>t.classList.remove("show"),2600))}function Oe(){let e=document.querySelector(".fs-scale"),t=document.querySelector(".fs-canvas");if(!e||!t)return;let n=e.clientWidth/1100;t.style.transform=`scale(${n})`,e.style.height=`${Math.ceil(t.offsetHeight*n)}px`}var Ft=window.innerWidth>=dt;window.addEventListener("resize",()=>{let e=window.innerWidth>=dt;if(b.open&&!b.other&&e!==Ft){let t=document.getElementById("full-scroll")?.scrollTop??0;Be();let n=document.getElementById("full-scroll");n&&(n.scrollTop=t)}Ft=e,Oe()});var ue=null;function et(){ue?.disconnect();let e=document.querySelectorAll("#full .rv");if(e.length){if(z()||!("IntersectionObserver"in window)){e.forEach(t=>t.classList.add("in"));return}ue=new IntersectionObserver(t=>{for(let n of t)n.isIntersecting&&(n.target.classList.add("in"),ue?.unobserve(n.target))},{root:document.getElementById("full-scroll"),threshold:.12}),e.forEach(t=>ue.observe(t))}}function Ae(){d("soft"),b.open=!0,b.page="home",Be(),z()||document.querySelector("#full .full")?.classList.add("zoom")}function fs(e,t,n,a){let i={};for(let r of t.options)_.some(l=>l.id===r)&&(i[r]=K(r).billing==="perPage"?{pages:t.pages}:{});b.other={look:lt(i,t.pages,!1,t.support,e),draft:e,sum:n,note:a},Ae()}function se(){b.open=!1,b.cart=0,b.other=null,ue?.disconnect(),Be()}function Gt(e){if(e===b.page)return;d("select"),b.page=e;let t=document.querySelector("#full .fs-main"),n=document.getElementById("full-scroll");if(document.querySelectorAll("#full .fs-nav [data-page]").forEach(i=>i.classList.toggle("on",i.dataset.page===e)),!t)return;let a=()=>{t.innerHTML=Jt(W(),e),n?.scrollTo({top:0}),Oe(),et()};if(!W().on("pageTransitions")||z())return a();t.classList.add("leave"),window.setTimeout(()=>{a(),t.classList.remove("leave"),t.classList.add("enter"),window.setTimeout(()=>t.classList.remove("enter"),420)},220)}function gs(e){let t=e.target.closest("[data-full], [data-device], [data-page], [data-press], [data-buy], [data-site], [data-chip], [data-slot], [data-faq]");if(!t)return;let n=t.dataset;if(n.site==="cabinet")return Q("Личный кабинет: заказы, покупки и настройки — после входа");if(n.site==="seller")return Q("Продавцы регистрируются сами и ведут свои товары в кабинете");if(n.site==="chat")return Q("Поддержка после запуска: правки и помощь по сайту");if(n.site==="cart")return Q(b.cart?`В корзине ${b.cart} — дальше оплата картой прямо на сайте`:"Корзина пока пустая — добавьте товар");if(n.faq!==void 0){d("select");let a=t.parentElement,i=!a?.classList.contains("open");a?.parentElement?.querySelectorAll(".faq-item.open").forEach(r=>r.classList.remove("open")),a?.classList.toggle("open",i),t.setAttribute("aria-expanded",String(i));return}if(n.chip!==void 0){d("select"),t.parentElement?.querySelectorAll(".fs-chip").forEach(a=>a.classList.toggle("on",a===t));return}if(n.slot){d("select"),t.parentElement?.querySelectorAll(".bk-time").forEach(i=>i.classList.toggle("on",i===t));let a=document.querySelector("#full .bk-go");a&&W().texts&&(a.textContent=`Записаться на ${n.slot}`);return}if(n.press==="book")return d("success"),Q("Запись подтверждена — на вашем сайте она сразу придёт вам в Telegram");if(n.buy!==void 0){d(W().on("animatedButtons")?"soft":"tap"),b.cart+=1;let a=document.querySelector("#full .mk-cart i");return a&&(a.textContent=String(b.cart),a.classList.remove("bump"),a.offsetWidth,a.classList.add("bump")),Q(W().kind==="food"?"Добавлено в заказ — оплата картой прямо на сайте":"Товар в корзине — дальше оплата картой прямо на сайте")}if(n.press==="send")return d("success"),Q("Заявка отправлена — на вашем сайте она сразу придёт вам в Telegram");if(n.press==="cta"){d(W().on("animatedButtons")?"soft":"tap");let a=document.querySelector("#full .fs-form");return a?a.scrollIntoView({behavior:z()?"auto":"smooth",block:"center"}):Gt("contacts")}if(n.full==="close")return d(),se();if(n.full==="another")return void an(!0);if(n.full==="lead")return d(),se(),w("summary");if(n.device&&n.device!==b.device)return d("select"),b.device=n.device,b.page="home",Be();if(n.page)return Gt(n.page)}var Vt=0;function w(e,t=!0){let n=s.screen!==e;s.sentLead&&e!=="summary"&&Zt(),t&&n&&s.history.push(s.screen),s.screen=e,s.error="",tt=-1,b.open&&se(),$(),window.scrollTo({top:0}),n&&!z()&&(D.classList.remove("slide-f","slide-b"),D.offsetWidth,D.classList.add(t?"slide-f":"slide-b"),window.clearTimeout(Vt),Vt=window.setTimeout(()=>D.classList.remove("slide-f","slide-b"),420))}function re(){if(b.open)return se();if((s.screen==="desk"||s.screen==="deskLead")&&We(s.screen))return;if(s.screen==="brief"&&s.briefStep>0)return s.briefStep-=1,s.ownOpen=!1,$();let e=s.history.pop();e&&w(e,!1)}g?.BackButton.onClick(re);document.addEventListener("keydown",e=>{e.key==="Escape"&&b.open&&re()});function ne(e,t,n=!0){return`
    <div class="bar"><div class="bar-inner">
      <div class="sum">${e}</div>
      <button class="btn${n?" blue":" off"}" id="bar-action"${n?"":" disabled"}>${t}</button>
    </div></div>`}function Zt(){Object.assign(s,{answers:{},pages:h.INCLUDED_PAGES,options:{},urgent:!1,support:!1,draft:null,draftFor:"",consent:!1,consentError:!1,sentLead:null,openOpt:null,shownTotal:0})}var ut="https://danildenis.github.io/duo-portfolio/";function bs(){return`
    <section class="home2">
      <div class="home2-head">
        <span class="label">Сайты · Telegram-боты</span>
        <h1 class="home2-title">Сайт для вашего бизнеса <span>от ${v(h.BASE_PRICE)}</span></h1>
        <p class="home2-lead">Ответьте на четыре вопроса и сразу увидите цену. Без звонков и встреч.</p>
      </div>
      ${Zs()}
      <div class="home2-how">
        <span class="label">Как это работает</span>
        <div class="panel">
          <div class="how-row"><span class="num">01</span><div><b>Расчёт здесь</b><small>Пара минут, цена сразу</small></div></div>
          <div class="how-row"><span class="num">02</span><div><b>Обсуждение в Telegram</b><small>Уточняем задачу и итоговую цену</small></div></div>
          <div class="how-row"><span class="num">03</span><div><b>Дизайн и запуск</b><small>Сначала первый экран, потом весь сайт</small></div></div>
        </div>
      </div>
      ${N?R?"":'<div class="warn">Откройте приложение кнопкой «Открыть приложение» в меню бота — тогда будут видны ваши заявки.</div>':'<div class="warn">Чтобы отправить заявку, откройте приложение из бота DUO в Telegram.</div>'}
      <div class="home2-grow"></div>
      <button class="btn-primary" data-go="sphere">Создать сайт</button>
    </section>`}var tt=-1;function hs(){let e=F[s.briefStep],t=tt!==s.briefStep;tt=s.briefStep;let n=s.answers[e.id]??[],a=n.find(r=>r.startsWith(q)),i=F.length;return`
    ${Ne(2,`вопрос ${s.briefStep+1} из ${i}`,s.briefStep/i)}
    ${pt()}
    <div class="row-between brief-skip"><span></span><button class="btn text inline" data-action="skip-brief">Пропустить вопросы</button></div>
    <div class="q-in${t?" fresh":""}">
      <h1 class="q-title">${m(e.title)}</h1>
      <p class="hint">${m(e.hint)}</p>
      <div class="gap"></div>
      <div class="stack">
        ${e.options.map((r,l)=>`<button class="choice${e.multi?" multi":""}${n.includes(r.id)?" on":""}" data-answer="${l}" style="--i:${l}"><span class="mark"></span>${m(r.label)}</button>`).join("")}
        <button class="choice${a?" on":""}" data-action="own" style="--i:${e.options.length}"><span class="mark"></span>${m(a?a.slice(q.length):e.ownLabel??"Свой ответ")}</button>
        ${s.ownOpen?`<textarea id="own" rows="3" maxlength="300" placeholder="Коротко, своими словами">${m(a?.slice(q.length)??"")}</textarea>`:""}
      </div>
    </div>
    <div class="gap"></div>
    <button class="btn text" data-action="next-q">Пропустить вопрос</button>
    ${vs(e,n)}`}function vs(e,t){if(s.ownOpen)return ne("<span>Свой ответ</span>","Готово");if(e.multi){let n=t.length;return ne(n?`<b class="num">Выбрано: ${n}</b>`:"<span>Можно выбрать несколько</span>","Далее",n>0)}return t.length?ne("<span>Ответ выбран</span>","Далее"):""}function $s(e){let t=K(e);return t.billing==="fixed"?`+${v(t.price)}`:`+${v(t.price)} за стр.`}var ys={animatedButtons:"Кнопки откликаются на нажатие",animatedCards:"Карточки услуг и товаров оживают при касании",scrollReveal:"Блоки плавно появляются при прокрутке",pageTransitions:"Страницы сменяются плавно",uniqueDesign:"Дизайн под ваш бизнес, а не готовый шаблон",copywriting:"Тексты о вашем деле напишем мы",onlinePayment:"Оплата картой прямо на сайте",adminPanel:"Сами меняете тексты, цены и фото",basicSeo:"Настройка, чтобы сайт находили в Яндексе и Google"},Ss=()=>$e(s.siteType),ae=()=>!!Ss()?.custom;function ie(e,t=s.pages){let n=yt(e,t,s.answers);return s.siteType==="shop"&&e!=="simple"&&(n.onlinePayment={}),n}var ks={animatedButtons:"живые кнопки",animatedCards:"живые карточки",scrollReveal:"плавное появление блоков",pageTransitions:"плавные переходы",uniqueDesign:"свой дизайн",copywriting:"тексты от DUO",onlinePayment:"оплата картой",adminPanel:"админка",basicSeo:"SEO"};function Ts(e){if(e==="full")return"Все опции из прайса";let n=Object.keys(ie(e)).map(a=>ks[a]).join(", ");return n?n[0].toUpperCase()+n.slice(1):"Только база"}function en(){let e=n=>Object.keys(n).filter(a=>n[a]).sort().join(","),t=e(s.options);return He.find(n=>e(ie(n.id))===t)?.id??null}function Ne(e,t,n=.5){return`
    <div class="steps4" role="progressbar" aria-valuemin="1" aria-valuemax="4" aria-valuenow="${e}">
      ${[1,2,3,4].map(a=>`<i class="${a<e?"done":a===e?"now":""}"${a===e?` style="--f:${Math.max(.12,n)}"`:""}></i>`).join("")}
    </div>
    <span class="kicker num">Шаг ${e} из 4: ${t}</span>`}function ws(e){let t={landing:{answers:{sphere:["beauty"],style:["premium"]},kind:"services",variant:1},shop:{answers:{sphere:["shop"],goal:["sell"],action:["pay"],style:["bold"]},kind:"shop",variant:0},marketplace:{answers:{sphere:["shop"],goal:["sell"],style:["modern"]},kind:"market",variant:2},platform:{answers:{sphere:["education"],style:["cozy"]},kind:"platform",variant:0}},{answers:n,kind:a,variant:i}=t[e],r=ve(n,i),l=e==="marketplace"?Pe.marketplace:e==="platform"?Pe.platform:{heroTitle:r.heroTitle,cta:r.cta};return{kind:a,brand:r.brand,accent:J[r.palette],hero:l.heroTitle,cta:l.cta,items:r.items,unique:e!=="shop",cart:e==="shop"||e==="marketplace",chat:!1,booking:e==="landing"}}function xs(){return`
    ${Ne(1,"тип сайта")}
    <h1 class="step-h">Какой сайт вам нужен?</h1>
    <div class="types">
      ${Fe.map((e,t)=>`
        <button class="type${s.siteType===e.id?" on":""}" data-type="${e.id}" style="--d:${t*-1.6}s">
          <span class="type-phone">${ye(ws(e.id),"scroll")}</span>
          <span class="type-text"><b>${m(e.title)}</b><small>${m(e.about)}</small><em class="${e.custom?"":"now"}">${e.custom?"Цена после обсуждения":"Цена сразу"}</em></span>
        </button>`).join("")}
    </div>
    <p class="hint small">Не уверены — выберите ближайший вариант. Менеджер поможет уточнить.</p>`}var tn={services:"сайт услуг",shop:"интернет-магазин",food:"сайт кафе с меню",beauty:"сайт с онлайн-записью",education:"сайт с курсами",b2b:"сайт компании",market:"маркетплейс",platform:"онлайн-школа"};function nn(){let t=(s.draft&&s.draftFor===nt()?s.draft:null)??ve(Ie(),0),n=ae(),a=n?Xt():s.options,i=ot(s.answers,s.siteType),r=n&&t.by!=="ai"?Pe[s.siteType==="marketplace"?"marketplace":"platform"]:{heroTitle:t.heroTitle,cta:t.cta};return{kind:i,brand:t.brand,accent:J[t.palette],hero:r.heroTitle,cta:r.cta,items:t.items,unique:!!a.uniqueDesign,cart:(i==="shop"||i==="market"||i==="food")&&!!a.onlinePayment,chat:!n&&s.support,booking:i==="beauty"||(s.answers.action??[]).includes("book")}}function Es(e){return[[`brand:${e.brand}`,`Название: ${e.brand}`,"brand"],[`kind:${e.kind}`,`Это ${tn[e.kind]}`,"catalog"],[`color:${e.accent}`,"Подобрали цвет","hero"],[`cta:${e.cta}`,`Кнопка «${e.cta}»`,"hero"],[`hero:${e.hero}`,"Заголовок под вашу задачу","hero"],...e.unique?[["unique","Свой дизайн первого экрана","hero"]]:[],...e.cart?[["cart","Корзина и оплата картой","cart"]]:[],...e.booking?[["booking","Запись на удобное время","booking"]]:[],...e.chat?[["chat","Чат поддержки","chat"]]:[]]}var Xe=new Set,H=null,sn=()=>!!(H&&Date.now()-H.at<900);function pt(){let e=nn(),t=Es(e),n=Xe.size?t.find(([a])=>!Xe.has(a)):void 0;return Xe=new Set(t.map(([a])=>a)),n&&(H={text:n[1],part:n[2],at:Date.now()}),`
    <div class="live">
      <div class="live-phone">${ye(e)}</div>
      <div class="live-info">
        <span class="live-label">Ваш сайт</span>
        <b>${m(e.brand??"")}</b>
        <small>${tn[e.kind]}</small>
        <span class="live-add${H?" on":""}${sn()?" show":""}">${H?`+ ${m(H.text)}`:"Меняется с каждым ответом"}</span>
      </div>
    </div>`}function Ls(){!H||!sn()||document.querySelector(`.live [data-k="${H.part}"]`)?.classList.add("lp-flash")}function Ds(){let e=fe(s.answers).options.length>0,t=en(),n=He.map(i=>{let r=M({pages:s.pages,options:ie(i.id),urgent:!1,support:!1}).developmentTotal,l=t===i.id;return`
      <button class="pk${l?" on":""}" data-package="${i.id}" aria-pressed="${l}">
        <span class="pk-radio" aria-hidden="true"></span>
        <span class="pk-body">
          <span class="pk-head"><b>${i.title}</b>${i.id==="optimal"?`<span class="pk-tag">${e?"по вашим ответам":"советуем"}</span>`:""}</span>
          <span class="pk-about">${i.about}</span>
          <span class="pk-list">${m(Ts(i.id))}</span>
        </span>
        <span class="pk-price num">${v(r)}</span>
      </button>`}).join(""),a=_.map(i=>{let r=!!s.options[i.id];return`
      <button class="opt${r?" on":""}" data-toggle="${i.id}" aria-pressed="${r}">
        <span class="opt-check" aria-hidden="true"></span>
        <span class="opt-text"><b>${m(i.title)}</b><small>${ys[i.id]}</small></span>
        <span class="opt-price num">${$s(i.id)}</span>
      </button>`}).join("");return`
    ${Ne(3,"пакет")}
    ${pt()}
    <h1 class="step-h">Выберите пакет</h1>
    <p class="lead">Цена за ${V(s.pages)}. В базе: адаптив, форма заявки в Telegram, подключение домена.</p>
    <div class="pks">${n}</div>
    ${t?"":'<p class="hint small pk-own">Сейчас свой набор опций — выберите пакет, чтобы начать заново.</p>'}

    <div class="pages-row">
      <span><b>Страниц на сайте</b><small>до ${h.INCLUDED_PAGES} — в базе, дальше ${v(h.EXTRA_PAGE_PRICE)} за страницу</small></span>
      <span class="stepper">
        <button data-pages="-1" aria-label="Меньше страниц">−</button>
        <b class="num">${s.pages}</b>
        <button data-pages="1" aria-label="Больше страниц">+</button>
      </span>
    </div>

    <button class="more-toggle${s.custom?" open":""}" data-action="custom" aria-expanded="${s.custom}">Настроить самому<i aria-hidden="true"></i></button>
    ${s.custom?`
    <div class="custom">
      <div class="opts">${a}</div>
      <h2 class="sub-h">Срок</h2>
      <div class="segments">
        <button class="segment${s.urgent?"":" on"}" data-urgent="0"><b>Обычный</b><span>до ${Z(h.NORMAL_TERM_DAYS)}, без доплаты</span></button>
        <button class="segment${s.urgent?" on":""}" data-urgent="1"><b>Быстрее</b><span>+${h.URGENT_PERCENT}% к стоимости</span></button>
      </div>
      ${s.urgent?`<div class="days">${le().map(i=>`<button class="day${s.urgentDays===i?" on":""}" data-days="${i}">${Z(i)}</button>`).join("")}</div>`:""}
      <button class="opt switch${s.support?" on":""}" data-support aria-pressed="${s.support}">
        <span class="opt-check" aria-hidden="true"></span>
        <span class="opt-text"><b>Поддержка после запуска</b><small>Правки и помощь по сайту</small></span>
        <span class="opt-price num">${v(h.SUPPORT_MONTHLY)} в мес.</span>
      </button>
    </div>`:""}
    ${Os("Показать мой сайт")}`}var Is=e=>e%10===1&&e%100!==11?"функция":e%10>=2&&e%10<=4&&(e%100<12||e%100>14)?"функции":"функций";function Ps(){let e=s.siteType==="marketplace"?"marketplace":"platform";return`
    ${Ne(3,"функции")}
    ${pt()}
    <h1 class="step-h">Что должно быть в ${e==="marketplace"?"маркетплейсе":"проекте"}?</h1>
    <p class="lead">Отметьте всё, что нужно. Это не окончательно — состав и цену обсудите с менеджером.</p>
    <div class="feats">
      ${St[e].map(t=>`<button class="feat${s.features.includes(t.id)?" on":""}" data-feature="${t.id}" aria-pressed="${s.features.includes(t.id)}"><span class="opt-check" aria-hidden="true"></span>${m(t.title)}</button>`).join("")}
    </div>
    <h2 class="sub-h">Идея своими словами</h2>
    <textarea id="about" rows="4" maxlength="1000" placeholder="Например: площадка, где мастера продают изделия ручной работы">${m(s.about)}</textarea>
    <p class="hint small">Можно пропустить.</p>
    ${ne(`<b class="num">${s.features.length}</b><span>${Is(s.features.length)} выбрано</span>`,"Показать мой сайт")}`}function Os(e,t=!0){let n=M(I());return ne(`<b class="num" id="total" data-to="${n.developmentTotal}">${v(s.shownTotal||n.developmentTotal)}</b><span>${n.supportMonthly?`и ${v(n.supportMonthly)} в месяц`:"предварительно"}</span>`,e,t)}var As=0;function _s(){let e=nn();return s.ai&&s.ai.left>0&&(e.brand=null),`
    <div class="making" role="status" aria-live="polite">
      <div class="making-phone">${ye(e,"build")}</div>
      <b>Собираем ваш сайт</b>
      <div class="ai-steps"><span>Придумываем название</span><span>Пишем тексты</span><span>Подбираем цвет</span></div>
    </div>`}function Ie(){let e={...s.answers},t=s.siteType==="shop"||s.siteType==="marketplace";if(!e.sphere?.length){let n=t?"shop":s.siteType==="platform"?"education":null;n&&(e.sphere=[n])}return t&&!e.goal?.length&&(e.goal=["sell"]),e}async function Rs(){let e=s.ai;if(L==="ai")return await new Promise(t=>window.setTimeout(t,2200)),C(be);if(e&&e.left>0&&gt(Ie()))try{let{draft:t,left:n}=await A("/api/draft",{input:I(),brief:Ie()});return e.left=n,C(t)}catch{}return await new Promise(t=>window.setTimeout(t,1400)),ve(Ie(),As++)}var ze=null,nt=()=>JSON.stringify([s.siteType,s.answers]);async function an(e=!1){if(!s.aiBusy){if(ae()||(ee("calc"),R&&A("/api/quote",{input:I()}).catch(()=>{})),s.draft&&!e&&s.draftFor===nt())return b.page="home",Ae();d("soft"),s.aiBusy=!0,b.open&&se(),ze??=document.body.appendChild(document.createElement("div")),ze.innerHTML=_s();try{s.draft=await Rs(),s.draftFor=nt(),d("success")}finally{s.aiBusy=!1,ze.innerHTML=""}pn(),Ae()}}function rn(){if(ae())return s.features.length||(s.features=[...kt[s.siteType==="marketplace"?"marketplace":"platform"]]),w("features");Object.keys(s.options).length||(s.options=ie("optimal")),w("calc")}function Ms(){return`
    <h1>Поддержка DUO</h1>
    <p class="lead">Вопрос или проблема — одним сообщением. Менеджер ответит вам в Telegram.</p>
    <div class="gap"></div>
    <textarea id="support" rows="7" maxlength="1000" placeholder="Например: можно ли сделать сайт с онлайн-записью?">${m(s.supportText)}</textarea>
    ${s.error?`<div class="warn">${m(s.error)}</div>`:""}
    ${ne("<span>Ответим в Telegram</span>",s.busy?"Отправляем":"Отправить",N&&!s.busy)}`}function Cs(){let e=s.sent??{title:"Готово",text:""};return`
    <div class="center">
      <div class="done-mark"><svg width="38" height="38" viewBox="0 0 40 40"><path class="tick" d="M10 21 L17 28 L30 13" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <h1>${m(e.title)}</h1>
      <p class="lead">${m(e.text)}</p>
    </div>
    <div class="gap"></div>
    <div class="stack">
      ${R||L?'<button class="btn blue" data-go="leads">На каком этапе заявка</button>':""}
      ${te?`<button class="btn soft" data-link="${m(te)}">Канал DUO</button>`:""}
      <button class="btn soft" data-action="home">В начало</button>
      ${N?'<button class="btn text" data-action="close">Закрыть приложение</button>':""}
    </div>`}var Bs='<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 9H4M8 5 4 9l4 4"/></svg>',st='<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 10 10 4M5 4h5v5"/></svg>',_e='<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#0B0C0E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 6.2 5 8.5l4.5-5"/></svg>';function je(e,t=!1){return`
    <div class="step-top">
      <button class="round-back" data-action="back" aria-label="Назад">${Bs}</button>
      <span class="num">Шаг ${e} из 4</span>
      ${t?'<button class="skip" data-action="skip-sphere">Пропустить</button>':'<span class="sp44"></span>'}
    </div>
    <div class="seg4 step-seg">${[1,2,3,4].map(n=>`<i class="${n<=e?"done":""}"></i>`).join("")}</div>`}function on(e,t="bar-action"){let n=M(I());return`
    <div class="pricebar">
      <span><b class="num" id="total" data-to="${n.developmentTotal}">${v(s.shownTotal||n.developmentTotal)}</b><small>предварительно</small></span>
      <button class="btn-primary" id="${t}">${e}</button>
    </div>`}var Ns=[["services","Услуги и сервис"],["shop","Магазин и товары"],["food","Кафе, еда, доставка"],["beauty","Красота и здоровье"],["education","Обучение и экспертность"],["b2b","Компания для бизнеса"],[`${q}Другое`,"Другое"]];function js(){let e=s.answers.sphere?.[0];return`
    ${je(1,!0)}
    <h1 class="step-title">Чем вы занимаетесь?</h1>
    <p class="step-lead">Подберём блоки сайта под вашу сферу.</p>
    <div class="panel list" role="radiogroup" aria-label="Сфера бизнеса">
      ${Ns.map(([t,n])=>`
        <button class="row radio${e===t?" on":""}" role="radio" aria-checked="${e===t}" data-sphere="${m(t)}">
          <span>${n}</span><span class="dot" aria-hidden="true">${e===t?_e:""}</span>
        </button>`).join("")}
    </div>
    <div class="stepbar"><button class="btn-primary" id="bar-action">Далее</button></div>`}var qs=["Главная","Услуги и цены","Контакты","О нас","Портфолио","Отзывы","Блог","Вопросы и ответы"],ln=12;function Us(){let e=s.pages,t=h.INCLUDED_PAGES;return`
    ${je(2)}
    <h1 class="step-title">Сколько страниц?</h1>
    <p class="step-lead">${t===3?"Три страницы":V(t)} входят в базу. Каждая следующая +${v(h.EXTRA_PAGE_PRICE)}.</p>
    <div class="panel glass pages2">
      <div class="pages2-head">
        <span>Страниц на сайте</span>
        <span class="stepper2">
          <button data-pages="-1" aria-label="Меньше страниц"${e<=1?" disabled":""}>−</button>
          <b class="num" aria-live="polite">${e}</b>
          <button class="plus" data-pages="1" aria-label="Больше страниц"${e>=ln?" disabled":""}>+</button>
        </span>
      </div>
      <ol class="pages2-list">
        ${Array.from({length:e},(n,a)=>`<li><span class="num">${String(a+1).padStart(2,"0")}</span><span>${qs[a]??`Страница ${a+1}`}</span><em class="${a>=t?"extra":""}">${a>=t?`+${v(h.EXTRA_PAGE_PRICE)}`:"в базе"}</em></li>`).join("")}
      </ol>
    </div>
    <p class="step-note">Названия примерные: состав страниц уточним вместе.</p>
    <button class="text-link" data-href="${ut}">Посмотреть примеры сайтов ${st}</button>
    ${on("Далее")}`}var cn=[{title:"Анимация",items:[{id:"animatedButtons",name:"Анимированные кнопки",desc:"Кнопки плавно реагируют на наведение и нажатие."},{id:"animatedCards",name:"Анимированные плашки",desc:"Карточки и плашки мягко двигаются и подсвечиваются."},{id:"scrollReveal",name:"Появление блоков",desc:"Блоки плавно появляются при прокрутке страницы."},{id:"pageTransitions",name:"Переходы между страницами",desc:"Плавная смена страниц вместо резкого перехода."}]},{title:"Дизайн и тексты",items:[{id:"uniqueDesign",name:"Уникальный дизайн",desc:"Рисуем дизайн под ваш бизнес: свои цвета, шрифты и расположение блоков. Без опции сайт собирается на аккуратном готовом шаблоне."},{id:"copywriting",name:"Тексты от нас",desc:"Пишем тексты для страниц сами, по вашим ответам."}]},{title:"Функции",items:[{id:"onlinePayment",name:"Онлайн-оплата",desc:"Оплата картой прямо на сайте."},{id:"adminPanel",name:"Админка",desc:"Меняйте тексты, цены и фото сами, без нас."},{id:"basicSeo",name:"Базовое SEO",desc:"Базовая настройка, чтобы сайт находили в поиске."}]}],Hs=e=>cn.flatMap(t=>t.items).find(t=>t.id===e)?.name??K(e).title;function dn(e,t,n){return`<button class="switch${e?" on":""}" role="switch" aria-checked="${e}" aria-label="${m(n)}" ${t}><span></span></button>`}function Fs(){return`
    ${je(3)}
    <h1 class="step-title">Что добавить?</h1>
    <p class="step-lead">Всё необязательно. Нажмите на название, чтобы узнать, что даёт опция.</p>
    <div class="opt-groups">
      ${cn.map(e=>`
        <div class="opt-group">
          <span class="label">${e.title}</span>
          <div class="panel list">
            ${e.items.map(t=>{let n=s.options[t.id],a=!!n,i=K(t.id).billing==="perPage",r=s.openOpt===t.id;return`
                <div class="opt2${a?" on":""}">
                  <div class="opt2-row">
                    <button class="opt2-name" data-open-opt="${t.id}" aria-expanded="${r}"><span>${t.name}</span><small class="num">+${v(K(t.id).price)}${i?" за страницу":""}</small></button>
                    ${dn(a,`data-toggle="${t.id}"`,t.name)}
                  </div>
                  ${r?`<p class="opt2-desc">${t.desc}</p>`:""}
                  ${a&&i?`<div class="opt2-count"><span>На скольких страницах</span><span class="mini-stepper"><button data-opt-pages="${t.id}:-1" aria-label="Меньше"${(n?.pages??1)<=1?" disabled":""}>−</button><b class="num">${n?.pages??s.pages}</b><button data-opt-pages="${t.id}:1" aria-label="Больше"${(n?.pages??1)>=s.pages?" disabled":""}>+</button></span></div>`:""}
                </div>`}).join("")}
          </div>
        </div>`).join("")}
    </div>
    ${on("Далее")}`}function un(){let e=M(I()),t=e.lines.map(n=>n.kind==="base"?{name:`База, до ${n.includedPages} ${n.includedPages===1?"страницы":"страниц"}`,sum:v(n.amount)}:n.kind==="extraPages"?{name:`Ещё ${V(n.count)}`,sum:v(n.amount)}:{name:`${Hs(n.optionId)}${n.billing==="perPage"&&n.pages?` · ${n.pages} стр.`:""}`,sum:v(n.amount)});return e.urgent&&t.push({name:`Срочно, до ${Z(h.CUSTOM_TERM_MIN_DAYS)} · +${e.urgentPercent}%`,sum:v(e.urgentSurcharge)}),t}var Gs='<svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13V3M6 6.5 10 2.5l4 4M4 10v6.5h12V10"/></svg>';function Vs(){let e=M(I()),t=new Date().toLocaleDateString("ru-RU",{day:"numeric",month:"long",year:"numeric"}),n=s.sentLead;return`
    ${je(4)}
    <h1 class="step-title">Ваш расчёт</h1>
    <div class="check2">
      <div class="check2-meta"><span>Сайт · ${V(s.pages)}</span><span>${t.replace(" г.","")}</span></div>
      <div class="check2-rows">${un().map(a=>`<div><span>${m(a.name)}</span><span class="num">${a.sum}</span></div>`).join("")}</div>
      <hr>
      <div class="check2-total"><span>Итого</span><b class="num">${v(e.developmentTotal)}</b></div>
      ${e.supportMonthly?`<div class="check2-support">+ поддержка ${v(e.supportMonthly)} в месяц</div>`:""}
      <p>Домен и хостинг оплачиваются отдельно. Итоговую сумму уточним в разговоре.</p>
    </div>
    <span class="label sum-label">Срок</span>
    <div class="seg-term" role="radiogroup" aria-label="Срок">
      <button role="radio" aria-checked="${!s.urgent}" class="${s.urgent?"":"on"}" data-urgent="0"><b>Обычный</b><small>до ${Z(h.NORMAL_TERM_DAYS)}</small></button>
      <button role="radio" aria-checked="${s.urgent}" class="${s.urgent?"on":""}" data-urgent="1"><b>Срочно</b><small>до ${Z(h.CUSTOM_TERM_MIN_DAYS)} · +${h.URGENT_PERCENT}%</small></button>
    </div>
    <div class="panel switch-line">
      <span><b>Поддержка после запуска</b><small>${v(h.SUPPORT_MONTHLY)} в месяц</small></span>
      ${dn(s.support,"data-support","Поддержка после запуска")}
    </div>
    <button class="btn-ghost" data-action="share">${Gs} Поделиться расчётом</button>
    <div class="send-area">
      ${n?`<div class="sent-box">${_e.replace("#0B0C0E","#B9CCFF")} Заявка № ${n} отправлена</div>
             <button class="text-link center" data-tab="status">Смотреть статус заявки →</button>`:`<label class="consent2${s.consentError?" error":""}">
               <input type="checkbox" id="consent"${s.consent?" checked":""}>
               <span class="box" aria-hidden="true">${_e}</span>
               <span>Даю согласие на обработку персональных данных. <button class="link" data-privacy>Политика</button></span>
             </label>
             ${s.error?`<div class="warn">${m(s.error)}</div>`:""}
             ${N?"":'<p class="step-note center">Отправить заявку можно, открыв приложение из бота DUO.</p>'}
             <button class="btn-primary" id="bar-action"${!N||s.busy?" disabled":""}>${s.busy?"Отправляем":"Отправить заявку"}</button>`}
      <span class="step-note center">Данил или Денис напишут вам в Telegram</span>
    </div>`}function Ys(){let e=M(I());return["Мой предварительный расчёт сайта в DUO","",`Сайт · ${V(s.pages)}`,...un().map(t=>`· ${t.name} — ${t.sum}`),"",`Итого: ${v(e.developmentTotal)}`,...e.supportMonthly?[`Поддержка: ${v(e.supportMonthly)} в месяц`]:[],"","Посчитать свой сайт — в боте @duodevops_bot"].join(`
`)}function Qs(){d();let e=`https://t.me/share/url?url=${encodeURIComponent(rt)}&text=${encodeURIComponent(Ys())}`;N&&g?.openTelegramLink?g.openTelegramLink(e):window.open(e,"_blank")}var Ws={received:"Скоро напишем вам в Telegram",discussing:"Уточняем детали и итоговую цену",inProgress:"Делаем дизайн и страницы",review:"Показываем результат на согласование",done:"Сайт запущен"};function Ks(){let e=r=>new Date(r).toLocaleDateString("ru-RU",{day:"numeric",month:"long"});if(!s.leads)return'<h1 class="page-title">Ваша заявка</h1><div class="lead2 skeleton"></div>';if(!s.leads.length)return`
      <h1 class="page-title">Ваша заявка</h1>
      <div class="panel empty2">
        <b>Заявок пока нет</b>
        <p>Посчитайте сайт за пару минут — здесь будет видно, на каком этапе работа.</p>
        <button class="btn-primary" data-go="sphere">Создать сайт</button>
      </div>`;let[t,...n]=s.leads,a=t.stageIndex<0,i=Nt.map((r,l)=>{let u=a?"next":l<t.stageIndex||l===t.stageIndex&&l===Nt.length-1?"done":l===t.stageIndex?"now":"next",f=l===0?e(t.createdAt):Ws[r.id]??"";return`<li class="st-${u}"><span class="st-dot" aria-hidden="true">${u==="done"?_e.replace("#0B0C0E","#fff"):""}</span><div><b>${m(r.title)}</b><small>${m(f)}</small></div></li>`}).join("");return`
    <h1 class="page-title">Ваша заявка</h1>
    <div class="lead2">
      <div class="lead2-top"><span class="num">№ ${String(t.id).padStart(4,"0")} · ${e(t.createdAt)}</span><span class="badge">${m(t.stageTitle)}</span></div>
      <div class="lead2-main">
        <span><b>${m(t.title??"Сайт")}</b><small>${m((t.items??[]).join(", ")||"Без опций")}</small></span>
        <span class="lead2-sum">${t.custom?"<b>после обсуждения</b>":`<b class="num">${v(t.total)}</b>`}<small>предварительно</small></span>
      </div>
    </div>
    ${a?'<p class="step-note">Заявка отменена. Напишите нам, если хотите вернуться к ней.</p>':`<span class="label sum-label">Этапы</span><ol class="stages2">${i}</ol>`}
    ${n.length?`<span class="label sum-label">Другие заявки</span><div class="panel list">${n.map(r=>`<div class="row"><span>№ ${String(r.id).padStart(4,"0")} · ${e(r.createdAt)}</span><em>${m(r.stageTitle)}</em></div>`).join("")}</div>`:""}
    <button class="btn-ghost" data-href-tg="${rt}">Написать нам в Telegram</button>`}function Xs(){let e=(t,n,a)=>`<button class="row link-row" ${a}><span><b>${t}</b><small>${m(n)}</small></span>${st}</button>`;return`
    <h1 class="page-title">Контакты</h1>
    <span class="label sum-label">Наши работы</span>
    <button class="row-card" data-href="${ut}"><span>Все работы в портфолио</span>${st}</button>
    <span class="label sum-label">Связаться</span>
    <div class="panel list">
      ${e("Telegram-бот","@duodevops_bot",`data-href-tg="${rt}"`)}
      ${te?e("Telegram-канал",te.replace(/^https?:\/\//,""),`data-href-tg="${m(te)}"`):""}
      ${e("Задать вопрос","Ответим в Telegram",'data-go="support"')}
    </div>
    <div class="team">
      <div><b>Данил</b><small>Дизайн и общение с клиентами</small></div>
      <div><b>Денис</b><small>Код, хостинг и поддержка</small></div>
    </div>`}var X="duo-progress-v1",zs=30;function pn(){let e=s.screen;if(e!=="sphere"&&e!=="pages"&&e!=="options"&&e!=="summary"||s.sentLead)return;let t={v:1,at:Date.now(),screen:e,siteType:s.siteType,features:s.features,about:s.about,answers:s.answers,briefStep:s.briefStep,briefComplete:s.briefComplete,pages:s.pages,options:s.options,urgent:s.urgent,urgentDays:s.urgentDays,support:s.support,draft:s.draft,draftFor:s.draftFor,name:s.name};try{localStorage.setItem(X,JSON.stringify(t))}catch{}let n=JSON.stringify({...t,draft:null});try{n.length<4e3&&g?.CloudStorage?.setItem(X,n)}catch{}}function qe(){try{let e=JSON.parse(localStorage.getItem(X)??"null");return!e||e.v!==1||Date.now()-e.at>zs*864e5?null:e}catch{return null}}function mn(){try{g?.CloudStorage?.removeItem(X)}catch{}try{localStorage.removeItem(X)}catch{}}function fn(e){Object.assign(s,{siteType:$e(e.siteType)?e.siteType:null,features:e.features??[],about:e.about??"",answers:e.answers??{},briefStep:Math.min(Math.max(0,e.briefStep),F.length-1),briefComplete:!!e.briefComplete,pages:e.pages,options:e.options??{},urgent:!!e.urgent,urgentDays:e.urgentDays,support:!!e.support,name:e.name||s.name});try{s.draft=e.draft?C(e.draft):null,s.draftFor=e.draftFor??"",M(I())}catch{s.pages=3,s.options={},s.urgent=!1,s.draft=null}s.history=["home"],w(gn[e.screen]?e.screen:"sphere",!1)}function Js(e){return{sphere:"Сфера",pages:"Страницы",options:"Опции",summary:"Итог"}[e.screen]??"Сфера"}var gn={sphere:1,pages:2,options:3,summary:4};function Zs(){let e=qe();if(!e)return"";let t=gn[e.screen]??1;return`
    <button class="resume2" data-action="resume">
      <span class="resume2-top">
        <span><b>Продолжить расчёт</b><small>Шаг ${t} из 4 · ${m(Js(e))}</small></span>
        <span class="round-btn" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg></span>
      </span>
      <span class="seg4">${[1,2,3,4].map(n=>`<i class="${n<t?"done":n===t?"now":""}"></i>`).join("")}</span>
    </button>`}function ea(){if(bn.includes(s.screen))return"";let e=s.screen==="desk"||s.screen==="deskLead";return`
    <header class="appbar">
      <button class="appbar-home" data-action="home" aria-label="На главную"><img src="duo-logo-white.svg" alt="duo" class="appbar-logo"></button>
      <span class="appbar-actions">
        ${s.isAdmin&&!e?`<button class="admin-btn" data-go="desk">Админ${s.adminCounts?.fresh?`<i class="num">${s.adminCounts.fresh}</i>`:""}</button>`:""}
        ${s.screen==="home"?`<button class="pill-link" data-href="${ut}">Наши работы</button>`:""}
      </span>
    </header>`}var ta=[{id:"home",label:"Главная",icon:'<path d="M4 10.5L12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z"/>'},{id:"site",label:"Сайт",icon:'<rect x="3.5" y="4.5" width="17" height="15" rx="3"/><path d="M3.5 9h17M12 12.5v4M10 14.5h4"/>'},{id:"status",label:"Заявка",icon:'<circle cx="12" cy="12" r="8.5"/><path d="M8.3 12.2l2.6 2.6 4.9-5.3"/>'},{id:"contacts",label:"Контакты",icon:'<path d="M5 18.5V7a2.5 2.5 0 0 1 2.5-2.5h9A2.5 2.5 0 0 1 19 7v6.5a2.5 2.5 0 0 1-2.5 2.5H8.5z"/><path d="M9 9.5h6M9 12.5h4"/>'}],Re={home:"home",sphere:"site",pages:"site",options:"site",summary:"site",type:"site",brief:"site",calc:"site",features:"site",leads:"status",sent:"contacts",support:"contacts",contacts:"contacts"},bn=["sphere","pages","options","summary"];function na(){let e=Re[s.screen];return e?`
    <nav class="tabbar" aria-label="Меню приложения">
      ${ta.map(t=>`<button class="tab${t.id===e?" on":""}" data-tab="${t.id}" aria-label="${t.label}"${t.id===e?' aria-current="page"':""}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${t.icon}</svg>
          ${t.id===e?`<span>${t.label}</span>`:""}
        </button>`).join("")}
    </nav>`:""}function sa(e){if(!(Re[s.screen]===e&&e!=="site")){if(d("select"),e==="home")return s.history=[],w("home",!1);if(e==="site"){if(Re[s.screen]==="site")return;let t=qe();return t?fn(t):(s.history=["home"],w("sphere",!1))}if(s.history=["home"],e==="status")return R||L==="leads"?at():N&&g?g.sendData(JSON.stringify({v:1,type:"leads"})):at();w("contacts",!1)}}function $(){let e={home:bs,type:xs,brief:hs,calc:Ds,features:Ps,summary:Vs,support:Ms,sent:Cs,leads:Ks,sphere:js,pages:Us,options:Fs,contacts:Xs,desk:Rt,deskLead:Ct};D.innerHTML=ea()+e[s.screen]()+na(),D.classList.toggle("with-tabs",!!Re[s.screen]),D.classList.toggle("step",bn.includes(s.screen)),D.dataset.screen=s.screen,Ls(),s.screen==="home"?g?.BackButton.hide():g?.BackButton.show(),g?.MainButton.hide();let t=s.screen==="brief"?s.ownOpen?ra:Me:s.screen==="sphere"?()=>{d(),ee("briefDone"),w("pages")}:s.screen==="pages"?()=>{d(),w("options")}:s.screen==="options"?()=>{d(),ee("calc"),w("summary"),R&&A("/api/quote",{input:I()}).catch(()=>{})}:s.screen==="summary"?oa:s.screen==="support"?la:null,n=document.getElementById("bar-action");n&&t&&(n.onclick=t);let a=document.getElementById("total");if(a){let i=Number(a.dataset.to);a.dataset.cur=String(s.shownTotal||i),aa(a,i),s.shownTotal=i}pn(),s.screen==="brief"&&ee("brief",s.briefStep+1),s.screen==="sphere"&&ee("brief",1),s.screen==="sent"&&s.sent?.confetti&&(s.sent.confetti=!1,window.setTimeout(ia,180))}function aa(e,t){let n=Number(e.dataset.cur??t);if(e.dataset.cur=String(t),n===t||z()){e.textContent=v(t);return}e.classList.remove("bump"),e.offsetWidth,e.classList.add("bump");let a=performance.now(),i=r=>{let l=Math.min(1,(r-a)/480),u=1-(1-l)**3;e.textContent=v(Math.round(n+(t-n)*u)),l<1&&e.dataset.cur===String(t)&&requestAnimationFrame(i)};requestAnimationFrame(i)}function ia(){if(z())return;let e=document.createElement("canvas");e.className="confetti",document.body.appendChild(e);let t=e.getContext("2d");if(!t)return e.remove();let n=Math.min(2,window.devicePixelRatio||1),a=window.innerWidth,i=window.innerHeight;e.width=a*n,e.height=i*n,t.scale(n,n);let r=["#3b82f6","#3b82f6","#0b0b0b","#ffffff"],l=document.documentElement.dataset.theme==="dark",u=Array.from({length:120},()=>{let P=-Math.PI/2+(Math.random()-.5)*2.2,j=6+Math.random()*9;return{x:a/2+(Math.random()-.5)*40,y:Math.min(200,i*.28),vx:Math.cos(P)*j,vy:Math.sin(P)*j,s:5+Math.random()*6,r:Math.random()*Math.PI,vr:(Math.random()-.5)*.4,c:r[Math.floor(Math.random()*r.length)],round:Math.random()<.3}}),f=performance.now(),y=P=>{let j=P-f;t.clearRect(0,0,a,i);let hn=j<1100?1:Math.max(0,1-(j-1100)/500);for(let T of u)T.vy+=.32,T.vx*=.985,T.vy*=.985,T.x+=T.vx,T.y+=T.vy,T.r+=T.vr,t.save(),t.globalAlpha=hn,t.translate(T.x,T.y),t.rotate(T.r),t.fillStyle=T.c,t.strokeStyle=l?"rgba(255,255,255,.25)":"rgba(11,11,11,.12)",t.lineWidth=1,t.beginPath(),T.round?t.arc(0,0,T.s/2,0,Math.PI*2):t.rect(-T.s/2,-T.s/4,T.s,T.s/2),t.fill(),t.stroke(),t.restore();j<1600?requestAnimationFrame(y):e.remove()};requestAnimationFrame(y)}function Me(){s.ownOpen=!1,s.briefStep<F.length-1?(s.briefStep+=1,$(),window.scrollTo({top:0})):(ee("briefDone"),s.briefComplete||(s.briefComplete=!0,d("success")),rn())}var Yt="";function ee(e,t){let n=`${e}:${t??""}`;!R||n===Yt||(Yt=n,A("/api/track",{step:e,...t?{question:t}:{}}).catch(()=>{}))}function ra(){let e=F[s.briefStep],t=document.getElementById("own")?.value.trim()??"",n=e.multi?(s.answers[e.id]??[]).filter(a=>!a.startsWith(q)&&a!=="nothing"&&a!=="unknown"):[];t&&(s.answers[e.id]=[...n,`${q}${t}`]),d("select"),Me()}function oa(){let e=s.name.trim();if(!s.consent)return d("error"),s.consentError=!0,s.error="Отметьте согласие на обработку персональных данных — без него заявку отправить нельзя.",$();if(!(!g||!N||s.busy)){if(R){d(),s.busy=!0,$();let t=ae();(t?A("/api/project",{project:{type:s.siteType,features:s.features,about:s.about},brief:s.answers,name:e,consent:!0,...s.draft?{draft:s.draft}:{}}):A("/api/lead",{input:I(),brief:s.answers,name:e,consent:!0,...s.draft?{draft:s.draft}:{}})).then(({leadId:a})=>{d("success"),s.sentLead=a,mn(),s.leads=null}).catch(a=>{s.error=a.message,d("error")}).finally(()=>{s.busy=!1,s.screen==="summary"&&$()});return}if(ae())return s.error="Откройте приложение кнопкой «Открыть приложение» в меню бота и отправьте заявку ещё раз.",$();d("success"),g.sendData(JSON.stringify({v:1,type:"lead",input:I(),brief:s.answers,name:e,consent:!0}))}}function la(){let e=document.getElementById("support")?.value.trim()??"";if(s.supportText=e,!e)return d("error"),s.error="Напишите сообщение.",$();if(!(!g||!N||s.busy)){if(R){d(),s.busy=!0,$(),A("/api/support",{text:e}).then(()=>{d("success"),s.sent={title:"Сообщение отправлено",text:"Менеджер DUO ответит вам в Telegram, в чате с ботом."},s.supportText="",s.history=["home"],w("sent",!1)}).catch(t=>{s.error=t.message,d("error")}).finally(()=>{s.busy=!1,s.screen==="support"&&$()});return}g.sendData(JSON.stringify({v:1,type:"support",text:e}))}}function ca(e){s.options[e]?(delete s.options[e],d("select")):(s.options[e]=K(e).billing==="perPage"?{pages:s.pages}:{},d("soft"))}function da(){let e=Date.now();return[{id:42,createdAt:new Date(e-864e5*2).toISOString(),total:11500,stage:"discussing",stageIndex:1,stageTitle:"Обсуждаем проект",stageNote:"Уточняем детали.",title:"Сайт · 3 страницы",items:["Появление блоков при прокрутке"]},{id:17,createdAt:new Date(e-864e5*30).toISOString(),total:13e3,stage:"done",stageIndex:4,stageTitle:"Готово",stageNote:"Сайт готов. Спасибо, что выбрали DUO!",title:"Сайт · 3 страницы",items:[]}]}function at(){if(s.leads=null,s.stageVideo=null,w("leads"),!R){window.setTimeout(()=>{s.leads=L==="leads"?da():[],s.screen==="leads"&&$()},350);return}A("/api/leads").then(({leads:e})=>s.leads=e).catch(()=>s.leads=[]).finally(()=>s.screen==="leads"&&$())}D.addEventListener("click",e=>{let t=e.target;if((s.screen==="desk"||s.screen==="deskLead")&&Bt(t))return;let n=t.closest("button, [data-toggle], [data-action]");if(!n)return;let a=n.dataset;if(a.tab)return sa(a.tab);if(a.action==="back")return d(),re();if(a.sphere)return d("select"),s.answers.sphere=[a.sphere],$();if(a.action==="skip-sphere")return d(),w("pages");if(a.openOpt)return d(),s.openOpt=s.openOpt===a.openOpt?null:a.openOpt,$();if(a.optPages){let[i,r]=a.optPages.split(":"),l=s.options[i];return l?.pages&&(s.options[i]={pages:Math.min(s.pages,Math.max(1,l.pages+Number(r)))}),d("select"),$()}if(a.hrefTg)return d(),g?.openTelegramLink?g.openTelegramLink(a.hrefTg):void window.open(a.hrefTg,"_blank");if(a.action==="share")return Qs();if(a.href)return d(),g?.openLink?g.openLink(a.href):void window.open(a.href,"_blank");if(a.type){d("select");let i=s.siteType!==a.type;s.siteType=a.type,i&&(s.options={},s.features=[]),$(),window.setTimeout(()=>{s.briefStep=0,w("brief")},220);return}if(a.feature)return d("select"),s.features=s.features.includes(a.feature)?s.features.filter(i=>i!==a.feature):[...s.features,a.feature],$();if(a.action==="custom")return d(),s.custom=!s.custom,$();if(a.go)return d(),a.go==="brief"&&(s.briefStep=0),a.go==="leads"?at():a.go==="desk"?Le():w(a.go);if(a.privacy!==void 0){let i="https://danildenis.github.io/duo-app/privacy.html";return g?.openLink?g.openLink(i):void window.open(i,"_blank")}if(a.action==="example")return void an();if(a.action==="resume"){let i=qe();return d(),i?fn(i):$()}if(a.action==="restart")return d(),mn(),Zt(),$();if(a.action==="ai-brief")return d(),s.briefStep=0,w("brief");if(a.video){d();let i=Number(a.video);return s.stageVideo=s.stageVideo===i?null:i,$()}if(a.action==="home")return s.screen==="home"?window.scrollTo({top:0,behavior:"smooth"}):(d(),s.history=[],w("home",!1));if(a.action==="close")return g?.close();if(a.package)return d("select"),s.options=ie(a.package),$();if(a.send==="leads"&&g)return g.sendData(JSON.stringify({v:1,type:"leads"}));if(a.link)return g?.openTelegramLink?g.openTelegramLink(a.link):void window.open(a.link,"_blank");if(a.answer!==void 0){d("select");let i=F[s.briefStep],r=i.options[Number(a.answer)];if(!i.multi){s.answers[i.id]=[r.id],$(),window.setTimeout(Me,280);return}let l=s.answers[i.id]??[],u=l.includes(r.id)?l.filter(y=>y!==r.id):[...l,r.id],f=["nothing","unknown"];return u=f.includes(r.id)&&u.includes(r.id)?[r.id]:u.filter(y=>!f.includes(y)||y===r.id),s.answers[i.id]=u,$()}if(a.action==="own"){d(),s.ownOpen=!0,$(),document.getElementById("own")?.focus();return}if(a.action==="next-q")return d(),Me();if(a.action==="skip-brief")return d(),rn();if(a.toggle&&ca(a.toggle),a.pages){let i=en();if(s.pages=Math.min(s.screen==="pages"?ln:oe,Math.max(1,s.pages+Number(a.pages))),d("select"),i)s.options=ie(i);else for(let[r,l]of Object.entries(s.options))l?.pages&&(s.options[r]={pages:s.pages})}if(a.urgent!==void 0){let i=a.urgent==="1";i!==s.urgent&&d("select"),s.urgent=i}a.days&&(d("select"),s.urgentDays=Number(a.days)),a.support!==void 0&&(d("select"),s.support=!s.support),$()});D.addEventListener("keydown",e=>{let t=e.target;(e.key==="Enter"||e.key===" ")&&(t.dataset.toggle||t.dataset.peek||t.dataset.zone||t.dataset.full)&&(e.preventDefault(),t.click())});D.addEventListener("change",e=>{let t=e.target;t.id==="consent"&&(s.consent=t.checked,t.checked&&(d("select"),s.consentError=!1,s.error.startsWith("Отметьте согласие")&&(s.error=""),t.closest(".consent")?.classList.remove("error"),document.querySelector(".warn")?.remove()))});D.addEventListener("input",e=>{let t=e.target;Mt(t)||(t.id==="name"&&(s.name=t.value),t.id==="support"&&(s.supportText=t.value),t.id==="about"&&(s.about=t.value))});Dt({api:A,haptic:d,render:$,open:e=>w(e),back:re,openSite:(e,t,n,a)=>fs(e,t,n,a),openLink:e=>g?.openTelegramLink?g.openTelegramLink(e):void window.open(e,"_blank"),demo:L==="desk"||L==="admin"});var Qt=pe.get("desk"),it=Number(pe.get("lead"))||void 0;R&&A("/api/session").then(e=>{if(te??=e.channelUrl,s.isAdmin=!!e.isAdmin,s.ai=e.aiDraft??null,s.isAdmin&&(Qt||it))return Le(it,Qt??void 0);s.isAdmin&&A("/api/admin/leads").then(({leads:t})=>{s.adminCounts={fresh:t.filter(n=>n.stage==="received").length,active:t.filter(n=>n.stage!=="done"&&n.stage!=="cancelled").length},s.screen==="home"&&$()}).catch(()=>{}),s.screen==="home"&&$()}).catch(()=>{});g?.ready();g?.expand();g?.disableVerticalSwipes?.();xt(()=>{d("soft"),re()},()=>s.screen!=="home"||b.open);wt({sheet:()=>{d("soft"),re()},full:()=>{d("soft"),se()}});L==="desk"&&window.setTimeout(()=>Le(it),0);var Je=Tt[pe.get("example")??""];if(Je){s.pages=3;for(let e of Je.options)s.options[e]=K(e).billing==="perPage"?{pages:3}:{};s.draft=C(Je.draft),s.screen="summary",s.history=["home"],window.setTimeout(Ae,300)}L==="sent"&&(s.sentLead=42,s.history=["home"],s.screen="summary");$();try{g?.CloudStorage?.getItem(X,(e,t)=>{if(!(e||!t))try{let n=JSON.parse(t),a=qe();if(n.v!==1||a&&a.at>=n.at)return;localStorage.setItem(X,t),s.screen==="home"&&$()}catch{}})}catch{}var Ze=document.getElementById("splash");if(Ze){let e=performance.now(),t=()=>{Ze.classList.add("out"),window.setTimeout(()=>Ze.remove(),600)};window.setTimeout(t,Math.max(0,1300-e))}
