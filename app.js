var Y=[{id:"sphere",short:"Сфера",title:"Чем вы занимаетесь?",hint:"От этого зависит, какие блоки нужны на сайте и что важно показать клиенту.",options:[{id:"services",label:"Услуги и сервис"},{id:"shop",label:"Магазин и товары"},{id:"food",label:"Кафе, еда, доставка"},{id:"beauty",label:"Красота и здоровье"},{id:"education",label:"Обучение и экспертность"},{id:"b2b",label:"Компания для бизнеса"}],ownLabel:"Другое — напишу сам"},{id:"goal",short:"Главная задача",title:"Какая главная задача сайта?",hint:"Если задач несколько — выберите самую важную: под неё строится весь сайт.",options:[{id:"leads",label:"Получать заявки и звонки"},{id:"sell",label:"Продавать онлайн"},{id:"booking",label:"Записывать клиентов на время"},{id:"trust",label:"Рассказать о компании и вызвать доверие"},{id:"portfolio",label:"Показать работы и портфолио"}]},{id:"action",short:"Главное действие",title:"Что человек должен сделать на сайте?",hint:"Одно главное действие — и все кнопки ведут к нему. Так сайт приносит больше обращений.",options:[{id:"form",label:"Оставить заявку"},{id:"messenger",label:"Написать в Telegram или WhatsApp"},{id:"call",label:"Позвонить"},{id:"pay",label:"Купить и оплатить"},{id:"book",label:"Записаться на удобное время"}]},{id:"traffic",short:"Откуда посетители",title:"Откуда к вам придут посетители?",hint:"Отметьте всё, что подходит. Если клиенты ищут вас в Яндексе и Google — сайт стоит настроить под поиск.",multi:!0,options:[{id:"search",label:"Из поиска — Яндекс и Google"},{id:"ads",label:"Из рекламы"},{id:"social",label:"Из соцсетей и Telegram"},{id:"referral",label:"По рекомендациям"},{id:"unknown",label:"Пока не знаю"}]},{id:"current",short:"Сайт сейчас",title:"Есть ли у вас сайт сейчас?",hint:"Если есть — пришлите ссылку своим ответом: посмотрим, что стоит сохранить.",options:[{id:"none",label:"Нет, это будет первый сайт"},{id:"old",label:"Есть, но устарел"},{id:"noLeads",label:"Есть, но не приносит заявок"},{id:"socialOnly",label:"Только соцсети"}],ownLabel:"Пришлю ссылку"},{id:"materials",short:"Что готово",title:"Что уже готово для сайта?",hint:"Отметьте всё, что есть. Чего нет — поможем сделать.",multi:!0,options:[{id:"brand",label:"Логотип и фирменные цвета"},{id:"texts",label:"Тексты о компании и услугах"},{id:"photos",label:"Фото работ или товаров"},{id:"prices",label:"Цены и прайс"},{id:"nothing",label:"Пока ничего"}]},{id:"style",short:"Ощущение от сайта",title:"Каким должен быть сайт по ощущениям?",hint:"Представьте, что клиент открыл сайт. Что он должен почувствовать в первые 3 секунды?",options:[{id:"strict",label:"Строгий и надёжный"},{id:"modern",label:"Современный и лёгкий"},{id:"bold",label:"Яркий и смелый"},{id:"cozy",label:"Тёплый и уютный"},{id:"premium",label:"Дорогой и премиальный"},{id:"unsure",label:"Пока не знаю"}]},{id:"updates",short:"Кто обновляет",title:"Кто будет обновлять сайт после запуска?",hint:"Цены, тексты и фото со временем меняются — лучше заранее решить, кто будет этим заниматься.",options:[{id:"self",label:"Буду менять сам"},{id:"duo",label:"Попрошу DUO"},{id:"rare",label:"Почти ничего не будет меняться"},{id:"unsure",label:"Пока не знаю"}]}],H="own:";function he(e){let t=(a,...i)=>(e[a]??[]).some(r=>i.includes(r)),n=new Set;return(t("goal","sell")||t("action","pay"))&&n.add("onlinePayment"),t("traffic","search")&&n.add("basicSeo"),e.materials?.length&&!t("materials","texts")&&n.add("copywriting"),(t("materials","brand")||t("style","premium","bold"))&&n.add("uniqueDesign"),t("style","modern","bold","premium")&&(n.add("animatedButtons"),n.add("animatedCards")),t("style","modern","premium")&&n.add("scrollReveal"),t("updates","self")&&n.add("adminPanel"),{options:[...n],support:t("updates","duo")}}var v={BASE_PRICE:1e4,INCLUDED_PAGES:3,EXTRA_PAGE_PRICE:3e3,ANIMATED_BUTTONS:1e3,ANIMATED_CARDS:1500,SCROLL_REVEAL_PER_PAGE:500,PAGE_TRANSITIONS:2e3,UNIQUE_DESIGN_PER_PAGE:1e3,COPY_PER_PAGE:500,ONLINE_PAYMENT:6e3,ADMIN_PANEL:8e3,BASIC_SEO:2e3,NORMAL_TERM_DAYS:10,CUSTOM_TERM_MIN_DAYS:5,URGENT_PERCENT:25,SUPPORT_MONTHLY:1500},de=100;var C=[{id:"animatedButtons",title:"Анимированные кнопки",description:"Кнопки на сайте «оживают»: при наведении мышкой меняют цвет и чуть увеличиваются, при нажатии откликаются. Сайт ощущается живым и современным. Работает сразу на всём сайте.",billing:"fixed",price:v.ANIMATED_BUTTONS},{id:"animatedCards",title:"Анимированные плашки",description:"Плашки — это карточки на сайте: услуги, товары, цены. С опцией они приподнимаются и подсвечиваются, когда на них наводят мышку, — посетитель сразу видит, что на них можно нажать. Работает на всём сайте.",billing:"fixed",price:v.ANIMATED_CARDS},{id:"scrollReveal",title:"Появление блоков при прокрутке",description:"Когда посетитель листает страницу, блоки не стоят на месте, а плавно выезжают и проявляются. Страница выглядит аккуратнее и дороже. Цена — за каждую страницу, где это нужно.",billing:"perPage",price:v.SCROLL_REVEAL_PER_PAGE},{id:"pageTransitions",title:"Анимированные переходы между страницами",description:"При переходе между страницами сайта, например с «Главной» на «Услуги», содержимое сменяется плавно, без резкого мигания. Работает на всём сайте.",billing:"fixed",price:v.PAGE_TRANSITIONS},{id:"uniqueDesign",title:"Уникальный дизайн",description:"Рисуем дизайн специально под ваш бизнес: свои цвета, шрифты и расположение блоков. Без опции сайт собирается на аккуратном готовом шаблоне. Цена — за каждую страницу с уникальным дизайном.",billing:"perPage",price:v.UNIQUE_DESIGN_PER_PAGE},{id:"copywriting",title:"Тексты от нас",description:"Без опции тексты для сайта присылаете вы. С опцией мы сами напишем понятные тексты о вашем бизнесе: заголовки, описания услуг, призыв оставить заявку. Цена — за каждую страницу.",billing:"perPage",price:v.COPY_PER_PAGE},{id:"onlinePayment",title:"Онлайн-оплата",description:"Клиенты смогут оплатить товар или услугу прямо на сайте банковской картой — без переводов по номеру телефона и лишней переписки.",billing:"fixed",price:v.ONLINE_PAYMENT},{id:"adminPanel",title:"Админка для самостоятельных правок",description:"Простой кабинет для сайта: вы сами меняете цены и тексты, без программиста. Нажали «Сохранить» — сайт обновился сразу.",billing:"fixed",price:v.ADMIN_PANEL},{id:"basicSeo",title:"Базовое SEO",description:"Настраиваем сайт, чтобы его было проще найти в Яндексе и Google: заголовки страниц, описания для поиска, карта сайта и счётчик посещений. Это базовая настройка, а не продвижение в топ.",billing:"fixed",price:v.BASIC_SEO}],Rn=new Map(C.map(e=>[e.id,e]));function $t(e){let t=Rn.get(e);if(!t)throw new Error(`Unknown site option: ${e}`);return t}var Q=class extends Error{code;constructor(t,n){super(n),this.name="SiteQuoteError",this.code=t}};function ue(){let{CUSTOM_TERM_MIN_DAYS:e,NORMAL_TERM_DAYS:t}=v;return Array.from({length:Math.max(0,t-e)},(n,a)=>e+a)}function Mn(e){return Number.isInteger(e)&&e>=1&&e<=de}function B(e){let{pages:t}=e;if(!Mn(t))throw new Q("INVALID_PAGES",`Количество страниц должно быть целым числом от 1 до ${de}`);let n=[{kind:"base",includedPages:v.INCLUDED_PAGES,amount:v.BASE_PRICE}],a=Math.max(0,t-v.INCLUDED_PAGES);a>0&&n.push({kind:"extraPages",count:a,unitPrice:v.EXTRA_PAGE_PRICE,amount:a*v.EXTRA_PAGE_PRICE});for(let l of C){let u=e.options[l.id];if(u){if(l.billing==="fixed"){if(u.pages!==void 0)throw new Q("OPTION_PAGES_NOT_ALLOWED",`«${l.title}» считается на весь сайт, количество страниц не указывается`);n.push({kind:"option",optionId:l.id,title:l.title,billing:"fixed",unitPrice:l.price,amount:l.price});continue}if(u.pages===void 0)throw new Q("OPTION_PAGES_REQUIRED",`Для «${l.title}» нужно указать количество страниц`);if(!Number.isInteger(u.pages)||u.pages<1||u.pages>t)throw new Q("OPTION_PAGES_OUT_OF_RANGE",`«${l.title}»: количество страниц должно быть от 1 до ${t}`);n.push({kind:"option",optionId:l.id,title:l.title,billing:"perPage",pages:u.pages,unitPrice:l.price,amount:u.pages*l.price})}}if(e.urgentDays!==void 0&&(!e.urgent||!ue().includes(e.urgentDays))){let l=ue();throw new Q("INVALID_TERM",`Свой срок — от ${l[0]} до ${l[l.length-1]} дней`)}let i=n.reduce((l,u)=>l+u.amount,0),r=e.urgent?Math.round(i*v.URGENT_PERCENT/100):0;return{pages:t,lines:n,subtotal:i,urgent:e.urgent,urgentDays:e.urgent?e.urgentDays??null:null,urgentPercent:v.URGENT_PERCENT,urgentSurcharge:r,developmentTotal:i+r,supportMonthly:e.support?v.SUPPORT_MONTHLY:null}}var ae={blue:"#3b82f6",green:"#16a34a",terracotta:"#c2410c",violet:"#7c3aed",rose:"#e11d48",amber:"#d97706",teal:"#0d9488",graphite:"#334155"},S={brand:28,tagline:60,heroTitle:56,heroText:120,cta:22,page:14,sectionTitle:30,sectionText:100,itemName:26,itemText:50,formTitle:36,formText:100},Ke=4;var E=(e,t)=>({type:"string",maxLength:e,description:t}),qa={name:"site_draft",description:"Содержание одностраничного сайта-примера для бизнеса клиента.",input_schema:{type:"object",properties:{brand:E(S.brand,"Короткое название бизнеса"),emoji:E(4,"Один эмодзи, символ бизнеса"),tagline:E(S.tagline,"Заголовок вкладки: название и суть"),heroTitle:E(S.heroTitle,"Главный заголовок первого экрана"),heroText:E(S.heroText,"Подзаголовок: чем полезны клиенту"),cta:E(S.cta,"Текст главной кнопки под главное действие"),pages:{type:"array",minItems:3,maxItems:3,items:E(S.page,"Название страницы"),description:"Главная, каталог или услуги, контакты"},sectionTitle:E(S.sectionTitle,"Заголовок блока с услугами или товарами"),sectionText:E(S.sectionText,"Одна фраза под этим заголовком"),items:{type:"array",minItems:Ke,maxItems:Ke,items:{type:"object",properties:{icon:E(4,"Один эмодзи"),name:E(S.itemName,"Название"),text:E(S.itemText,"Короткое описание")},required:["icon","name","text"]}},formTitle:E(S.formTitle,"Заголовок формы заявки"),formText:E(S.formText,"Пояснение к форме"),palette:{type:"string",enum:Object.keys(ae),description:"Цвет акцента под настроение бизнеса"}},required:["brand","emoji","tagline","heroTitle","heroText","cta","pages","sectionTitle","sectionText","items","formTitle","formText","palette"]}},Fa=["Ты — копирайтер веб-студии DUO. По ответам клиента придумай содержание сайта-примера для ЕГО бизнеса.","Пиши по-русски, коротко, живо и конкретно под его сферу, без канцелярита и восклицаний.","Нельзя: цены, телефоны, адреса, сроки, гарантии, скидки, отзывы, цифры и факты, которых нет в ответах.","Если клиент не назвал бизнес — придумай короткое правдоподобное название.","Строго соблюдай длину полей. Ответь только вызовом инструмента site_draft."].join(" ");function Tt(e){return!!(e.sphere?.length||e.goal?.length)}function yt(e){let t=typeof e=="string"?e.trim():"",n=[...new Intl.Segmenter("ru",{granularity:"grapheme"}).segment(t)][0]?.segment??"";return n&&/\p{Extended_Pictographic}/u.test(n)?n:"✦"}function L(e,t){let n=typeof e=="string"?e.replace(/\s+/g," ").trim():"";return n.length>t?`${n.slice(0,t-1).trimEnd()}…`:n}var ve=class extends Error{};function N(e){if(!e||typeof e!="object")throw new ve("Пустой ответ");let t=e,n=Array.isArray(t.pages)?t.pages:[],a=Array.isArray(t.items)?t.items:[],i={brand:L(t.brand,S.brand),emoji:yt(t.emoji),tagline:L(t.tagline,S.tagline),heroTitle:L(t.heroTitle,S.heroTitle),heroText:L(t.heroText,S.heroText),cta:L(t.cta,S.cta)||"Оставить заявку",pages:[L(n[0],S.page)||"Главная",L(n[1],S.page)||"Услуги",L(n[2],S.page)||"Контакты"],sectionTitle:L(t.sectionTitle,S.sectionTitle),sectionText:L(t.sectionText,S.sectionText),items:a.slice(0,Ke).map(r=>r&&typeof r=="object"?r:{}).map(r=>({icon:yt(r.icon),name:L(r.name,S.itemName),text:L(r.text,S.itemText)})).filter(r=>r.name),formTitle:L(t.formTitle,S.formTitle)||"Оставьте заявку",formText:L(t.formText,S.formText),palette:typeof t.palette=="string"&&t.palette in ae?t.palette:"blue",...t.by==="ai"||t.by==="template"?{by:t.by}:{}};if(!i.brand||!i.heroTitle||i.items.length<3)throw new ve("В ответе не хватает содержания");return i}var $e={brand:"Пекарня «Утро»",emoji:"🥐",tagline:"Пекарня «Утро» — хлеб и выпечка",heroTitle:"Свежий хлеб к завтраку",heroText:"Печём каждое утро из простых продуктов. Закажите к столу или заберите сами.",cta:"Заказать выпечку",pages:["Главная","Выпечка","Контакты"],sectionTitle:"Что печём",sectionText:"Хлеб, круассаны и пироги — с утра.",items:[{icon:"🍞",name:"Хлеб на закваске",text:"Хрустящая корочка"},{icon:"🥐",name:"Круассаны",text:"Сливочное масло"},{icon:"🥧",name:"Пироги",text:"С ягодами и мясом"},{icon:"🍪",name:"Печенье",text:"К чаю"}],formTitle:"Заказать к столу",formText:"Оставьте имя и телефон — перезвоним.",palette:"amber"};var St={services:{brands:["Мастер Плюс","Сервис Рядом","Ловкие руки","Точно в срок"],emoji:"🛠️",what:"сервис",lead:"Берёмся за задачу целиком — от первого обращения до результата.",pages:["Главная","Услуги","Контакты"],sectionTitle:"Чем поможем",sectionText:"Берёмся за задачу целиком и отвечаем за результат.",items:[{icon:"🔧",name:"Выезд мастера",text:"Приедем в удобное время"},{icon:"📋",name:"Диагностика",text:"Найдём причину проблемы"},{icon:"⚙️",name:"Ремонт",text:"Делаем аккуратно"},{icon:"🤝",name:"Обслуживание",text:"Следим, чтобы всё работало"}]},shop:{brands:["Полка","Лавка у дома","Корзина","Вещь"],emoji:"🛍️",what:"магазин",lead:"Выберите нужное в каталоге и оформите заказ онлайн за пару минут.",pages:["Главная","Каталог","Доставка"],sectionTitle:"Популярное",sectionText:"Товары, которые берут чаще всего.",items:[{icon:"🎁",name:"Новинки",text:"Свежие поступления недели"},{icon:"⭐",name:"Хиты продаж",text:"То, что выбирают чаще"},{icon:"🏷️",name:"Наборы",text:"Удобно взять сразу"},{icon:"📦",name:"Подарочные",text:"Красиво упакуем"}]},food:{brands:["Тарелка","Вкусно рядом","Печь и Ко","Обед Дома"],emoji:"🍽️",what:"кафе",lead:"Готовим каждый день из свежих продуктов — заходите или закажите домой.",pages:["Главная","Меню","Контакты"],sectionTitle:"Что попробовать",sectionText:"Готовим каждый день из свежих продуктов.",items:[{icon:"🥗",name:"Завтраки",text:"С утра и до обеда"},{icon:"🍲",name:"Горячее",text:"Сытно и по-домашнему"},{icon:"🍰",name:"Десерты",text:"Печём сами"},{icon:"☕",name:"Напитки",text:"Кофе, чай и лимонады"}]},beauty:{brands:["Студия Лён","Глянец","Тонкая линия","Мята"],emoji:"💅",what:"студия красоты",lead:"Мастера с опытом, спокойная атмосфера и удобная запись онлайн.",pages:["Главная","Услуги","Запись"],sectionTitle:"Услуги студии",sectionText:"Мастера с опытом и стерильные инструменты.",items:[{icon:"💇",name:"Стрижки и укладки",text:"Под ваш стиль"},{icon:"💅",name:"Маникюр",text:"Аккуратно и надолго"},{icon:"✨",name:"Уход за лицом",text:"Чистка и массаж"},{icon:"🌿",name:"Спа-уход",text:"Отдых для тела"}]},education:{brands:["Шаг вперёд","Понятно","Школа Навыка","Учимся"],emoji:"🎓",what:"обучение",lead:"Учим на практике — с первого занятия и в удобном темпе.",pages:["Главная","Курсы","Контакты"],sectionTitle:"Программы",sectionText:"Учим на практике — с первого занятия.",items:[{icon:"📘",name:"Базовый курс",text:"Для старта с нуля"},{icon:"🚀",name:"Интенсив",text:"Быстро и по делу"},{icon:"👥",name:"Группы",text:"Учиться вместе веселее"},{icon:"🎯",name:"Личные занятия",text:"Под ваши цели"}]},b2b:{brands:["Опора","Вектор Про","Северный Ряд","Линия"],emoji:"🏢",what:"компания",lead:"Берём задачи под ключ и отчитываемся по каждому этапу.",pages:["Главная","Решения","Контакты"],sectionTitle:"Для бизнеса",sectionText:"Берём задачи под ключ и отчитываемся по этапам.",items:[{icon:"📊",name:"Аудит",text:"Покажем точки роста"},{icon:"🧩",name:"Внедрение",text:"Настроим под ваши процессы"},{icon:"🛡️",name:"Сопровождение",text:"Поддержка на каждом шаге"},{icon:"📈",name:"Отчётность",text:"Прозрачные результаты"}]}},kt={leads:()=>"Оставьте заявку — и мы свяжемся с вами",sell:()=>"Закажите онлайн в пару кликов",booking:()=>"Запишитесь на удобное время",trust:e=>`Надёжный ${e} рядом с вами`,portfolio:()=>"Посмотрите наши работы"},wt={form:["Оставить заявку","Оставьте заявку"],messenger:["Написать нам","Напишите нам"],call:["Заказать звонок","Перезвоним вам"],pay:["Купить онлайн","Оформить заказ"],book:["Записаться","Записаться онлайн"]},xt={strict:["graphite","blue"],modern:["blue","teal"],bold:["rose","violet"],cozy:["terracotta","amber"],premium:["graphite","violet"],unsure:["blue","green"]},ye=(e,t)=>(e[t]??[]).find(n=>!n.startsWith("own:"));function Te(e,t=0){let n=St[ye(e,"sphere")??""]??St.services,a=n.brands[t%n.brands.length],i=ye(e,"goal")??"leads",[r,l]=wt[ye(e,"action")??"form"]??wt.form,u=xt[ye(e,"style")??"unsure"]??xt.unsure,b=t%n.items.length,y=[...n.items.slice(b),...n.items.slice(0,b)];return N({brand:a,emoji:n.emoji,tagline:`${a} — ${n.what}`,heroTitle:(kt[i]??kt.leads)(n.what),heroText:n.lead,cta:r,pages:n.pages,sectionTitle:n.sectionTitle,sectionText:n.sectionText,items:y,formTitle:l,formText:"Оставьте имя и телефон — заявка сразу придёт нам в Telegram.",palette:u[t%u.length],by:"template"})}var Ve=[{id:"simple",title:"Простой",about:"Аккуратный сайт, который находят в поиске"},{id:"optimal",title:"Оптимальный",about:"Свой стиль, тексты и живые детали"},{id:"full",title:"Всё включено",about:"Все опции: оплата, админка, анимации"}],Cn=["uniqueDesign","copywriting","animatedButtons","scrollReveal","basicSeo"];function Bn(e,t={}){if(e==="simple")return["basicSeo"];if(e==="full")return C.map(i=>i.id);let n=he(t).options,a=new Set(n.length?[...n,"uniqueDesign","basicSeo"]:Cn);return C.map(i=>i.id).filter(i=>a.has(i))}function Et(e,t,n={}){let a={};for(let i of Bn(e,n))a[i]=$t(i).billing==="perPage"?{pages:t}:{};return a}var Ye=[{id:"landing",title:"Сайт или лендинг",about:"Компания, услуги, эксперт",custom:!1},{id:"shop",title:"Интернет-магазин",about:"Каталог, корзина, оплата",custom:!1},{id:"marketplace",title:"Маркетплейс",about:"Много продавцов, кабинеты",custom:!0},{id:"platform",title:"Онлайн-школа или сервис",about:"Курсы, кабинеты, подписки",custom:!0},{id:"bot",title:"Telegram-бот",about:"Заявки, запись, магазин, рассылки",custom:!0}],Qe=[{id:"leads",title:"Приём заявок",about:"Задаёт вопросы и присылает заявку вам"},{id:"booking",title:"Онлайн-запись",about:"Услуга, дата и время, напоминания"},{id:"shop",title:"Магазин в боте",about:"Каталог, корзина, оплата"},{id:"faq",title:"Визитка и ответы на вопросы",about:"Меню, частые вопросы, контакты"},{id:"support",title:"Поддержка клиентов",about:"Переписка через оператора"},{id:"mailing",title:"Рассылки и воронки",about:"Прогрев и автосообщения"},{id:"community",title:"Бот для канала или чата",about:"Платный доступ, модерация"},{id:"ai",title:"ИИ-ассистент",about:"Отвечает нейросетью по вашей базе"},{id:"team",title:"Бот для команды",about:"Задачи, отчёты, уведомления"},{id:"other",title:"Другое",about:"Опишите идею на следующем шаге"}];function Se(e){return Ye.find(t=>t.id===e)}var pe={marketplace:[{id:"catalog",title:"Каталог с поиском и фильтрами"},{id:"sellers",title:"Кабинеты продавцов"},{id:"buyers",title:"Кабинет покупателя"},{id:"payment",title:"Корзина и оплата картой"},{id:"commission",title:"Комиссия с продаж"},{id:"delivery",title:"Доставка и отслеживание"},{id:"reviews",title:"Отзывы и рейтинги"},{id:"chat",title:"Чат покупателя и продавца"},{id:"moderation",title:"Проверка товаров перед публикацией"},{id:"admin",title:"Панель управления площадкой"},{id:"app",title:"Мобильное приложение"}],platform:[{id:"cabinet",title:"Личный кабинет"},{id:"courses",title:"Курсы и уроки"},{id:"subscriptions",title:"Тарифы и подписки"},{id:"payment",title:"Оплата картой"},{id:"schedule",title:"Запись и расписание"},{id:"homework",title:"Тесты и домашние задания"},{id:"certificates",title:"Сертификаты"},{id:"notifications",title:"Уведомления в Telegram и на почту"},{id:"admin",title:"Панель управления"},{id:"app",title:"Мобильное приложение"}],bot:[{id:"menu",title:"Меню и кнопки"},{id:"faq",title:"Ответы на частые вопросы"},{id:"leads",title:"Заявки вам в Telegram"},{id:"catalog",title:"Каталог товаров или услуг"},{id:"payment",title:"Оплата в боте"},{id:"booking",title:"Запись на дату и время"},{id:"reminders",title:"Напоминания клиентам"},{id:"bonus",title:"Промокоды и бонусы"},{id:"mailing",title:"Рассылки по клиентам"},{id:"database",title:"База клиентов (Google-таблица или CRM)"},{id:"integrations",title:"Связь с amoCRM, Битрикс24, 1С"},{id:"access",title:"Платный доступ в канал или чат"},{id:"moderation",title:"Модерация чата"},{id:"ai",title:"Ответы нейросетью"},{id:"voice",title:"Распознавание голосовых"},{id:"admin",title:"Админка прямо в боте"},{id:"stats",title:"Статистика"},{id:"miniapp",title:"Мини-приложение внутри бота"}]},Lt=[{title:"Основа",ids:["menu","faq","leads"]},{title:"Продажи и запись",ids:["catalog","payment","booking","reminders","bonus"]},{title:"Клиенты",ids:["mailing","database","integrations"]},{title:"Каналы и чаты",ids:["access","moderation"]},{title:"Умные функции",ids:["ai","voice"]},{title:"Управление",ids:["admin","stats","miniapp"]}],We={marketplace:["catalog","sellers","buyers","payment"],platform:["cabinet","courses","payment"],bot:["menu","leads"]},Pt={leads:["menu","leads","database"],booking:["menu","booking","reminders","leads"],shop:["menu","catalog","payment","leads"],faq:["menu","faq","leads"],support:["menu","faq","leads","admin"],mailing:["menu","mailing","database","stats"],community:["access","payment","moderation"],ai:["menu","ai","leads"],team:["menu","admin","stats"],other:["menu","leads"]};var Nn=new Intl.NumberFormat("ru-RU",{maximumFractionDigits:0});function f(e){return`${Nn.format(e)} ₽`}function Xe(e,t){let n=e%10,a=e%100;return n===1&&a!==11?t[0]:n>=2&&n<=4&&(a<12||a>14)?t[1]:t[2]}var jn=["страница","страницы","страниц"];var Un=["день","дня","дней"];function j(e){return`${e} ${Xe(e,Un)}`}function W(e){return`${e} ${Xe(e,jn)}`}var x={BASE_PRICE:1e4,FEATURES:{menu:0,faq:0,leads:0,booking:6e3,reminders:2e3,catalog:5e3,payment:6e3,bonus:3e3,mailing:3e3,database:3e3,integrations:8e3,access:6e3,moderation:4e3,ai:1e4,voice:4e3,admin:8e3,stats:3e3,miniapp:1e4},FROM_PRICE:["miniapp","ai"],NORMAL_TERM_DAYS:10,URGENT_TERM_DAYS:5,URGENT_PERCENT:25,SUPPORT_MONTHLY:1500,SERVER_MONTHLY_FROM:300,SERVER_MONTHLY_TO:700};var ke=e=>x.FEATURES[e]??0;function It(e){let n=pe.bot.filter(r=>e.features.includes(r.id)).filter(r=>ke(r.id)>0).map(r=>({id:r.id,title:r.title,amount:ke(r.id),from:x.FROM_PRICE.includes(r.id)})),a=x.BASE_PRICE+n.reduce((r,l)=>r+l.amount,0),i=e.urgent?Math.round(a*x.URGENT_PERCENT/100):0;return{base:x.BASE_PRICE,lines:n,urgent:e.urgent,urgentPercent:x.URGENT_PERCENT,urgentSurcharge:i,developmentTotal:a+i,supportMonthly:e.support?x.SUPPORT_MONTHLY:null,from:n.some(r=>r.from)}}var Ot={beauty:{brief:"Красота и здоровье · записывать клиентов · тёплый и уютный · буду менять сам",options:["uniqueDesign","copywriting","animatedButtons","scrollReveal","pageTransitions","adminPanel","basicSeo"],draft:{brand:"Студия «Мята»",emoji:"🌿",tagline:"Студия «Мята» — уход за волосами и руками",heroTitle:"Красота без спешки в тихой студии",heroText:"Стрижки, окрашивание и маникюр у мастеров, которые слушают. Выберите время — остальное мы возьмём на себя.",cta:"Записаться онлайн",pages:["Главная","Услуги","Запись"],sectionTitle:"Что мы делаем",sectionText:"Четыре направления, в которых мы сильнее всего.",items:[{icon:"✂️",name:"Стрижки",text:"Форма, которая держится неделями"},{icon:"🎨",name:"Окрашивание",text:"Мягкие оттенки под ваш тон"},{icon:"💅",name:"Маникюр",text:"Аккуратное покрытие и уход"},{icon:"🧖",name:"Уход за кожей",text:"Чистка и массаж лица"}],formTitle:"Запишитесь на удобное время",formText:"Оставьте имя и телефон — администратор подтвердит запись в Telegram.",palette:"green",by:"ai"}},b2b:{brief:"Компания для бизнеса · получать заявки · строгий и надёжный · из поиска",options:["copywriting","animatedButtons","scrollReveal","basicSeo"],draft:{brand:"Баланс Про",emoji:"📊",tagline:"Баланс Про — бухгалтерия для малого бизнеса",heroTitle:"Бухгалтерия, о которой можно не думать",heroText:"Ведём учёт, сдаём отчёты и отвечаем на вопросы налоговой. Вы занимаетесь делом — цифры на нас.",cta:"Обсудить задачу",pages:["Главная","Услуги","Контакты"],sectionTitle:"Берём на себя",sectionText:"Всё, что обычно отнимает вечера у владельца бизнеса.",items:[{icon:"📒",name:"Ведение учёта",text:"Первичка, банк и касса"},{icon:"🧾",name:"Отчётность",text:"Налоговая, фонды, статистика"},{icon:"💼",name:"Зарплата и кадры",text:"Расчёты и документы сотрудников"},{icon:"🛡️",name:"Сопровождение проверок",text:"Готовим ответы и документы"}],formTitle:"Расскажите о вашей компании",formText:"Оставьте контакты — бухгалтер свяжется и задаст пару вопросов.",palette:"graphite",by:"ai"}},shop:{brief:"Магазин и товары · продавать онлайн · яркий и смелый · из соцсетей",options:["uniqueDesign","copywriting","animatedButtons","animatedCards","scrollReveal","onlinePayment","basicSeo"],draft:{brand:"Глина и Огонь",emoji:"🏺",tagline:"Глина и Огонь — керамика ручной работы",heroTitle:"Посуда, которую хочется трогать",heroText:"Кружки, тарелки и вазы ручной работы. Каждая вещь чуть другая — выберите свою и оформите заказ онлайн.",cta:"Выбрать посуду",pages:["Главная","Каталог","Доставка"],sectionTitle:"Из новой партии",sectionText:"Обжигаем небольшими партиями — успейте забрать любимую.",items:[{icon:"☕",name:"Кружки",text:"Удобная ручка и толстые стенки"},{icon:"🍽️",name:"Тарелки",text:"Для завтраков и ужинов"},{icon:"🌸",name:"Вазы",text:"Под сухоцветы и живые букеты"},{icon:"🎁",name:"Наборы",text:"Готовый подарок в коробке"}],formTitle:"Остались вопросы?",formText:"Напишите имя и телефон — поможем выбрать и расскажем о доставке.",palette:"rose",by:"ai"}}};function Dt(e){let t=null;document.addEventListener("touchstart",a=>{if(a.touches.length!==1)return;let i=a.target;if(i.closest("textarea, input, select"))return;let r=i.closest(".sheet"),l=i.closest(".full-top")?i.closest(".full"):null,u=r&&r.scrollTop<=0?r:l;if(!u)return;let b=a.touches[0].clientY;t={el:u,kind:u===r?"sheet":"full",startY:b,lastY:b,lastT:performance.now(),speed:0,active:!1}},{passive:!0}),document.addEventListener("touchmove",a=>{if(!t)return;let i=a.touches[0].clientY,r=i-t.startY;if(!t.active){if(r<-6&&(t=null),!t||r<6)return;t.active=!0,t.el.style.animation="none",t.el.style.transition="none"}a.preventDefault();let l=performance.now();t.speed=(i-t.lastY)/Math.max(1,l-t.lastT),t.lastY=i,t.lastT=l,t.el.style.transform=`translateY(${Math.max(0,r)}px)`},{passive:!1});let n=()=>{let a=t;if(t=null,!a?.active)return;let i=a.lastY-a.startY;a.el.style.transition="transform .22s cubic-bezier(.2, .8, .2, 1)",i>110||a.speed>.6?(a.el.style.transform="translateY(100%)",window.setTimeout(()=>a.kind==="sheet"?e.sheet():e.full(),200)):a.el.style.transform=""};document.addEventListener("touchend",n),document.addEventListener("touchcancel",n)}function _t(e,t){let n=document.getElementById("app");if(!n)return;let a=n,i=null,r=0,l=null;document.addEventListener("touchstart",b=>{let y=b.target;b.touches.length!==1||!t()||y.closest("textarea, input, select, .chips, .days, .fs-nav, .fs-scale")||(i={x:b.touches[0].clientX,y:b.touches[0].clientY,t:performance.now()},r=0,l=null,a=y.closest(".sheet, .full")??n)},{passive:!0}),document.addEventListener("touchmove",b=>{if(!i)return;let y=b.touches[0].clientX-i.x,I=b.touches[0].clientY-i.y;if(l===null){if(Math.abs(y)<8&&Math.abs(I)<8)return;if(l=y>0&&Math.abs(y)>Math.abs(I)*1.2,!l)return void(i=null);a.style.transition="none",a.style.animation="none"}b.preventDefault(),r=Math.max(0,y),a.style.transform=`translateX(${a===n?r*.35:r}px)`,a.style.opacity=String(1-Math.min(r/600,.25))},{passive:!1});let u=()=>{if(!i||!l){i=null;return}let b=r/Math.max(1,performance.now()-i.t)>.45&&r>35;i=null;let y=a;y.style.transition="transform .2s ease, opacity .2s ease",y.style.transform="",y.style.opacity="",(r>70||b)&&e()};document.addEventListener("touchend",u),document.addEventListener("touchcancel",u)}var G=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),O=e=>` data-k="${e}"`;function qn(e){let t=n=>e.items[n%Math.max(1,e.items.length)]??{icon:"",name:""};switch(e.kind){case"shop":case"market":return`<div class="lp-grid"${O("catalog")}>${[0,1,2,3].map(n=>`<span class="lp-tile"><i>${t(n).icon}</i><b>${G(t(n).name)}</b>${e.kind==="market"?"<em>★ 4,9</em>":""}<u></u></span>`).join("")}</div>${e.kind==="market"?`<div class="lp-band"${O("sellers")}><b>Стать продавцом</b><u></u></div>`:""}`;case"education":case"platform":return`<div class="lp-rows"${O("courses")}>${[0,1,2].map(n=>`<span class="lp-course"><b>${G(t(n).name)}</b><i style="--p:${[72,40,15][n]}%"></i></span>`).join("")}</div>`;case"b2b":return`<div class="lp-grid"${O("catalog")}>${[0,1,2,3].map(n=>`<span class="lp-tile n"><em>0${n+1}</em><b>${G(t(n).name)}</b></span>`).join("")}</div>`;default:return`<div class="lp-rows"${O("catalog")}>${[0,1,2].map(n=>`<span class="lp-row"><i>${t(n).icon}</i><b>${G(t(n).name)}</b><u></u></span>`).join("")}</div>`}}function we(e,t=""){let n=(e.brand?.trim()[0]??"").toUpperCase();return`
    <div class="lp-phone ${t}" style="--a:${e.accent}" aria-hidden="true">
      <div class="lp-screen"><div class="lp-page">
        <div class="lp-top"${O("brand")}><i class="lp-mark">${G(n)}</i>${e.brand?`<b>${G(e.brand)}</b>`:'<b class="lp-ph"></b>'}${e.cart?`<i class="lp-cart"${O("cart")}></i>`:""}</div>
        <div class="lp-hero${e.unique?" u":""}"${O("hero")}>${e.unique?'<i class="lp-o"></i>':""}<b>${G(e.hero)}</b><em>${G(e.cta)}</em></div>
        ${qn(e)}
        ${e.booking?`<div class="lp-slots"${O("booking")}><i></i><i class="on"></i><i></i><i></i></div>`:""}
        <div class="lp-form"${O("form")}><i></i><i></i><em></em></div>
      </div>${e.chat?`<i class="lp-chat"${O("chat")}></i>`:""}</div>
    </div>`}var Ee=[{id:"received",title:"Заявка получена",short:"Новые"},{id:"discussing",title:"Обсуждаем проект",short:"Обсуждаем"},{id:"inProgress",title:"Сайт в работе",short:"В работе"},{id:"review",title:"На проверке у клиента",short:"На проверке"},{id:"done",title:"Готово",short:"Готово"},{id:"cancelled",title:"Отменена",short:"Отменены"}],Le=e=>Ee.find(t=>t.id===e)??Ee[0],o={folder:null,selected:null,clients:null,leads:null,me:null,filter:"active",query:"",openId:null,sheet:null,busy:!1,error:"",toast:"",noteDraft:"",messageDraft:""},c,At=0;function Mt(e){c=e}var m=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),ze=e=>e.stage!=="done"&&e.stage!=="cancelled",Ze=()=>o.leads?.find(e=>e.id===o.openId)??null,Pe=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),Je=e=>e.toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"});function fe(e){let t=new Date(e),n=Math.round((Date.now()-t.getTime())/6e4);if(n<1)return"только что";if(n<60)return`${n} мин назад`;let a=Math.round((Pe(new Date)-Pe(t))/864e5);return a===0?`сегодня в ${Je(t)}`:a===1?`вчера в ${Je(t)}`:t.toLocaleDateString("ru-RU",{day:"numeric",month:"long"})}function Ie(e){let t=new Date(e),n=Math.round((Pe(t)-Pe(new Date))/864e5);return`${n===0?"сегодня":n===1?"завтра":t.toLocaleDateString("ru-RU",{day:"numeric",month:"long"})} в ${Je(t)}`}var me=e=>new Date(e).getTime()<=Date.now();function Oe(e){let t=new Date;return t.setDate(t.getDate()+e),t.setHours(10,0,0,0),t}function Rt(e){let t=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}T${t(e.getHours())}:${t(e.getMinutes())}`}async function Ct(){o.error="";try{let[e,t]=c.demo?[cs(),{clients:ls()}]:await Promise.all([c.api("/api/admin/leads"),c.api("/api/admin/clients")]);o.me=e.me,o.leads=e.leads,o.clients=t.clients}catch(e){o.error=e.message,o.leads??=[],o.clients??=[]}c.render()}function De(e,t){o.sheet=null,o.folder=e?"leads":t==="warm"||t==="cold"||t==="leads"?t:null,e?(o.openId=e,c.open("desk"),c.open("deskLead")):c.open("desk"),Ct()}function Fn(e){o.leads&&(o.leads=o.leads.map(t=>t.id===e.id?e:t))}function xe(e){o.toast=e,window.clearTimeout(At),At=window.setTimeout(()=>{o.toast="",c.render()},2600)}async function X(e,t,n,a){let i=Ze();if(!i||o.busy)return!1;o.busy=!0,o.error="",c.render();try{if(c.demo)a?.(i);else{let r=await c.api(e,{id:i.id,...t});Fn(r.lead),r.delivered===!1&&(n="Этап изменён, но клиент не получил уведомление — возможно, остановил бота")}return c.haptic("success"),xe(n),!0}catch(r){return c.haptic("error"),o.error=r.message,!1}finally{o.busy=!1,c.render()}}function Bt(e,t){return t==="active"?ze(e):t==="all"?!0:t==="mine"?e.owner?.id===o.me?.id&&ze(e):t==="remind"?e.remind!==null:e.stage===t}function Hn(e,t){if(!t)return!0;let n=t.toLowerCase().replace(/^[@№#\s]+/,"");return String(e.id)===n||e.name.toLowerCase().includes(n)||(e.username??"").toLowerCase().includes(n)}function Gn(){return(o.leads??[]).filter(t=>Bt(t,o.filter)&&Hn(t,o.query.trim())).sort((t,n)=>+!!(n.remind&&me(n.remind.at))-+!!(t.remind&&me(t.remind.at))||n.id-t.id)}function Nt(){let e=o.leads??[];return[["active","Активные"],["received","Новые"],["mine","Мои"],["remind","Напоминания"],["discussing","Обсуждаем"],["inProgress","В работе"],["review","На проверке"],["done","Готово"],["cancelled","Отменены"],["all","Все"]].map(([n,a])=>{let i=e.filter(r=>Bt(r,n)).length;return!i&&n!=="active"&&n!==o.filter?"":`<button class="chip${o.filter===n?" on":""}${n==="received"&&i?" hot":""}" data-desk="filter:${n}">${a}<span class="num">${i}</span></button>`}).join("")}function Kn(e){return e.owner?e.owner.id===o.me?.id?"ведёте вы":`ведёт ${m(e.owner.name)}`:""}function Vn(e){let t=e.remind?`<span class="tag${me(e.remind.at)?" due":""}">⏰ ${me(e.remind.at)?"пора":Ie(e.remind.at)}</span>`:"",n=e.notes.at(-1),a=o.selected!==null,i=o.selected?.has(e.id)??!1;return`
    <button class="d-item st-${e.stage}${a?" picking":""}${i?" picked":""}" data-desk="${a?"pick":"open"}:${e.id}"${a?` aria-pressed="${i}"`:""}>
      ${a?'<span class="pick-box" aria-hidden="true"></span>':""}
      <span class="d-row"><b class="num">№ ${e.id}</b><span class="d-name">${m(e.name)}</span><span class="d-ago">${fe(e.createdAt)}</span></span>
      <span class="d-row d-sub">${e.username?`@${m(e.username)}`:"без @username"}<span class="num">${e.project?"цена после обсуждения":f(e.total)}</span></span>
      <span class="d-tags"><span class="tag stage">${m(Le(e.stage).short==="Новые"?"Новая":e.stageTitle)}</span>${e.owner?`<span class="tag">${Kn(e)}</span>`:""}${t}</span>
      ${n?`<span class="d-note">${m(n.text.slice(0,120))}</span>`:""}
    </button>`}function jt(){let e=Gn();return e.length?e.map(Vn).join(""):`<p class="d-empty">${o.query?"По этому запросу заявок нет. Проверьте номер или имя.":o.filter==="active"?"Активных заявок нет. Новые появятся здесь сами.":"В этом фильтре пусто."}</p>`}function Yn(){let e=o.selected?.size??0;return`
    <div class="bar"><div class="bar-inner">
      <div class="sum"><b class="num">${e}</b><span>${e?"выбрано — нажмите на заявки, чтобы добавить":"нажмите на заявки, чтобы выбрать"}</span></div>
      <button class="btn danger" data-desk="delete-ask"${e?"":" disabled"}>Удалить</button>
    </div></div>`}function Qn(){let e=[...o.selected??[]].sort((t,n)=>t-n);return`
    <div class="sheet-back" data-desk="sheet-close"></div>
    <div class="sheet" role="dialog"><div class="grip"></div>
      <h2>Удалить ${e.length===1?"заявку":`заявки (${e.length})`}?</h2>
      <p>${e.map(t=>`№ ${t}`).join(", ")}. Заявки исчезнут из списка насовсем вместе с заметками — отменить нельзя. Сообщения о них в группе останутся.</p>
      <div class="gap"></div>
      <div class="stack"><button class="btn danger" data-desk="delete-ok"${o.busy?" disabled":""}>${o.busy?"Удаляем":"Удалить насовсем"}</button><button class="btn soft" data-desk="sheet-close">Отмена</button></div>
      ${o.error?`<div class="warn">${m(o.error)}</div>`:""}
    </div>`}var U={leads:{title:"Заявки",about:"Оставили заявку: этапы, заметки, напоминания"},warm:{title:"Тёплые",about:"Ответили на вопросы или посчитали сайт, но заявку не оставили"},cold:{title:"Холодные",about:"Открыли бота или приложение, но до расчёта не дошли"}};function Wn(){let e=o.leads??[],t=o.clients??[],n=e.filter(b=>b.stage==="received").length,a=e.filter(ze).length,i=t.filter(b=>b.temperature==="warm"),r=t.filter(b=>b.temperature==="cold"),l=b=>b.filter(y=>Date.now()-new Date(y.lastSeen).getTime()<864e5).length,u=(b,y,I,F=!1)=>`
    <button class="folder f-${b}${F?" hot":""}" data-desk="folder:${b}">
      <span class="folder-count num">${y}</span>
      <span><b>${U[b].title}</b><small>${I}</small></span>
    </button>`;return`
    <div class="row-between"><h1>Клиенты</h1><button class="btn text inline" data-desk="refresh">Обновить</button></div>
    ${o.error?`<div class="warn">${m(o.error)}</div>`:""}
    <div class="folders">
      ${u("leads",a,n?`Новых: ${n}. ${U.leads.about}`:U.leads.about,n>0)}
      ${u("warm",i.length,l(i)?`За сутки: ${l(i)}. ${U.warm.about}`:U.warm.about)}
      ${u("cold",r.length,l(r)?`За сутки: ${l(r)}. ${U.cold.about}`:U.cold.about)}
    </div>
    <p class="hint small">Тёплым стоит написать первыми: они уже знают цену. Холодным — только если есть повод.</p>`}function Xn(e){return`
    <button class="d-item t-${e.temperature}" data-desk="client:${e.userId}">
      <span class="d-row"><span class="d-name">${m(e.name||"Без имени")}</span><span class="d-ago">${fe(e.lastSeen)}</span></span>
      <span class="d-row d-sub">${e.username?`@${m(e.username)}`:"без @username"}${e.total?`<span class="num">${f(e.total)}</span>`:""}</span>
      <span class="d-tags"><span class="tag stage">${m(e.stepTitle)}${e.detail?`, ${m(e.detail)}`:""}</span><span class="tag">${e.where==="app"?"в приложении":"в боте"}</span></span>
    </button>`}function Ut(e){let t=o.query.trim().toLowerCase().replace(/^@/,""),n=(o.clients??[]).filter(i=>i.temperature===e&&(!t||i.name.toLowerCase().includes(t)||(i.username??"").toLowerCase().includes(t))),a=o.sheet?.kind==="client"?(o.clients??[]).find(i=>i.userId===o.sheet.userId):null;return`
    <h1>${U[e].title}</h1>
    <p class="hint">${U[e].about}.</p>
    <input type="search" id="desk-cq" class="d-search" placeholder="Имя или @username" value="${m(o.query)}" autocomplete="off" enterkeyhint="search">
    <div class="d-list" id="desk-clist">${n.length?n.map(Xn).join(""):`<p class="d-empty">${o.query?"Никого не нашли.":"Пока пусто."}</p>`}</div>
    ${a?zn(a):""}`}function zn(e){return`
    <div class="sheet-back" data-desk="sheet-close"></div>
    <div class="sheet" role="dialog"><div class="grip"></div>
      <h2>${m(e.name||"Без имени")}</h2>
      <p>${e.username?`@${m(e.username)}, `:""}${e.where==="app"?"в приложении":"в боте"}. Последний шаг: ${m(e.stepTitle.toLowerCase())}${e.detail?`, ${m(e.detail)}`:""} — ${fe(e.stepAt)}.${e.total?` Расчёт: ${f(e.total)}.`:""}</p>
      ${e.username?`<div class="gap"></div><button class="btn soft" data-desk="ctg:${m(e.username)}">Открыть чат</button>`:""}
      <div class="gap"></div>
      <textarea id="desk-msg" rows="3" maxlength="3000" placeholder="Здравствуйте! Остались вопросы по расчёту сайта?">${m(o.messageDraft)}</textarea>
      <div class="gap"></div>
      <button class="btn blue" data-desk="cwrite:${e.userId}"${o.busy?" disabled":""}>${o.busy?"Отправляем":"Написать через бота"}</button>
      <p class="hint small">Сообщение придёт от бота DUO с кнопкой «Ответить менеджеру».</p>
      ${o.error?`<div class="warn">${m(o.error)}</div>`:""}
    </div>`}function qt(){let e=o.toast?`<div class="d-toast" role="status">${m(o.toast)}</div>`:"";return o.leads?o.folder===null?e+Wn():o.folder!=="leads"?e+Ut(o.folder):`
    ${e}
    <div class="row-between"><h1>Заявки</h1><span class="d-head-actions">${o.selected?'<button class="btn text inline" data-desk="select-off">Готово</button>':'<button class="btn text inline" data-desk="select-on">Выбрать</button><button class="btn text inline" data-desk="refresh">Обновить</button>'}</span></div>
    ${o.error?`<div class="warn">${m(o.error)}</div>`:""}
    ${o.selected?Yn():""}
    ${o.sheet?.kind==="delete"?Qn():""}
    <input type="search" id="desk-q" class="d-search" placeholder="Номер, имя или @username" value="${m(o.query)}" autocomplete="off" enterkeyhint="search">
    <div class="chips" id="desk-chips">${Nt()}</div>
    <div class="d-list" id="desk-list">${jt()}</div>`:'<h1>Клиенты</h1><div class="lead-card skeleton"></div><div class="lead-card skeleton"></div>'}function Ft(e){if(e.id==="desk-cq"){o.query=e.value;let t=document.getElementById("desk-clist"),n=o.folder;if(t&&(n==="warm"||n==="cold")){let a=document.createElement("div");a.innerHTML=Ut(n),t.innerHTML=a.querySelector("#desk-clist")?.innerHTML??""}return!0}if(e.id==="desk-q"){o.query=e.value;let t=document.getElementById("desk-list"),n=document.getElementById("desk-chips");return t&&(t.innerHTML=jt()),n&&(n.innerHTML=Nt()),!0}return e.id==="desk-note"&&(o.noteDraft=e.value),e.id==="desk-msg"&&(o.messageDraft=e.value),e.id==="desk-note"||e.id==="desk-msg"}function Jn(e){let t=Ee.findIndex(n=>n.id===e.stage);return`
    <section class="d-block">
      <div class="block-head"><h2>Этап</h2><span class="kicker">${fe(e.stageUpdatedAt)}</span></div>
      <div class="d-stages">
        ${Ee.map((n,a)=>{let i=n.id===e.stage?" now":n.id!=="cancelled"&&e.stage!=="cancelled"&&a<t?" done":"";return`<button class="d-stage st-${n.id}${i}${n.id==="cancelled"?" cancel":""}" data-desk="stage:${n.id}"${n.id===e.stage?' aria-current="step"':""}><i></i>${n.title}</button>`}).join("")}
      </div>
      <p class="hint small">Клиент получит уведомление об этапе в боте.</p>
    </section>`}function Zn(e){let t=e.owner?.id===o.me?.id,n=e.owner?t?"Ведёте вы":`Ведёт ${m(e.owner.name)}`:"Никто не ведёт",a=!t&&e.owner&&e.handoff?.from.id===o.me?.id,i=a?`Вы попросили передать — ${m(e.owner.name)} ответит в боте`:t&&e.handoff?`${m(e.handoff.from.name)} просит передать — ответьте в боте`:"Чтобы двое не писали одному клиенту",r=e.owner?t?["Отказаться","drop"]:a?["Ещё раз","ask"]:["Попросить передать","ask"]:["Взять себе","take"];return`
    <div class="d-line"><span><b>${n}</b><small>${i}</small></span><button class="btn ${e.owner?"soft":"blue"} inline" data-desk="owner:${r[1]}">${r[0]}</button></div>`}function es(e){if(e.remind){let t=me(e.remind.at);return`<div class="d-line${t?" due":""}"><span><b>${t?"⏰ Пора заняться заявкой":`⏰ Напомню ${Ie(e.remind.at)}`}</b><small>${t?`Напоминание было ${Ie(e.remind.at)}`:"Бот пришлёт заявку в личные сообщения"}</small></span><button class="btn soft inline" data-desk="remind:clear">${t?"Готово":"Убрать"}</button></div>`}return`
    <div class="d-line col"><span><b>Напомнить мне</b><small>Бот пришлёт заявку в личные сообщения в это время</small></span>
      <div class="d-picks">
        <button class="day" data-desk="remind:2h">Через 2 часа</button>
        <button class="day" data-desk="remind:1d">Завтра в 10:00</button>
        <button class="day" data-desk="remind:3d">Через 3 дня</button>
        <button class="day" data-desk="remind:custom">Своё время</button>
      </div>
    </div>`}function ts(e){return`
    <section class="d-client">
      <div class="d-who"><b>${m(e.name)}</b><span>${e.username?`@${m(e.username)}`:"нет @username — пишите через бота"}</span></div>
      <div class="d-actions">
        ${e.username?'<button class="btn blue" data-desk="tg">Открыть чат</button>':""}
        <button class="btn ${e.username?"soft":"blue"}" data-desk="sheet:message">Написать через бота</button>
      </div>
    </section>`}function ns(e){let t=[...e.notes].reverse();return`
    <section class="d-block">
      <h2>Заметки</h2>
      <textarea id="desk-note" rows="2" maxlength="2000" placeholder="Созвонились, хочет розовый дизайн…">${m(o.noteDraft)}</textarea>
      <button class="btn soft d-add" data-desk="note"${o.busy?" disabled":""}>Добавить заметку</button>
      ${t.length?`<div class="d-notes">${t.map(n=>`<div class="d-n"><p>${m(n.text)}</p><small>${m(n.by.name)}, ${fe(n.at)}</small></div>`).join("")}</div>`:'<p class="hint small">Видят только менеджеры DUO.</p>'}
    </section>`}function ss(e){return e.project?`
    <section class="d-block">
      <h2>${e.project.type==="marketplace"?"Маркетплейс":e.project.type==="bot"?"Telegram-бот":"Онлайн-школа или сервис"}</h2>
      <div class="d-quote">
        ${e.project.kind?`<b>${m(e.project.kind)}</b>`:""}
        ${e.project.features.length?e.project.features.map(t=>`<span>${m(t)}</span>`).join(""):"<span>Функции не выбраны</span>"}
        ${e.project.about?`<b>Идея</b><span>${m(e.project.about)}</span>`:""}
        <strong>Цена — после обсуждения</strong>
      </div>
    </section>`:e.quote?`
    <section class="d-block">
      <h2>Расчёт</h2>
      <div class="d-quote">
        <b>${m(e.quote.title)}</b>
        ${e.quote.items.map(t=>`<span>${m(t)}</span>`).join("")}
        ${e.quote.urgent?`<span>${m(e.quote.urgent)}</span>`:""}
        <strong>${m(e.quote.total)}</strong>
        ${e.quote.support?`<span>${m(e.quote.support)}</span>`:""}
      </div>
    </section>`:""}function as(e){return e.draft?`
    <section class="d-block">
      <h2>${e.draft.by==="template"?"Пример сайта (по шаблону)":"ИИ-пример сайта"}</h2>
      <button class="d-draft" data-desk="draft"><span class="d-draft-emoji">${e.draft.emoji}</span><span><b>${m(e.draft.brand)}</b><small>${m(e.draft.heroTitle)}</small></span><span class="d-draft-open">Открыть</span></button>
      <p class="hint small">Клиент собрал его перед заявкой — видно, чего он ждёт по стилю и текстам.</p>
    </section>`:""}function is(e){return!e.brief.length&&!e.description?"":`
    <section class="d-block">
      <h2>О проекте</h2>
      <dl class="d-brief">
        ${e.brief.map(t=>`<dt>${m(t.question)}</dt><dd>${m(t.answer)}</dd>`).join("")}
        ${e.description?`<dt>Описание</dt><dd>${m(e.description)}</dd>`:""}
      </dl>
    </section>`}var rs={mini_app:"мини-приложение"};function os(e){let t=o.sheet;if(!t)return"";let n="";if(t.kind==="stage")n=`
      <h2>Перевести на «${m(Le(t.stage).title)}»?</h2>
      <p>${m(e.name)} получит уведомление об этапе в боте DUO.</p>
      <div class="gap"></div>
      <div class="stack"><button class="btn blue" data-desk="stage-ok"${o.busy?" disabled":""}>${o.busy?"Сохраняем":"Перевести"}</button><button class="btn soft" data-desk="sheet-close">Отмена</button></div>`;else if(t.kind==="message")n=`
      <h2>Сообщение клиенту</h2>
      <p>${m(e.name)} получит его в боте DUO с кнопкой «Ответить менеджеру». Копия сохранится в заметках.</p>
      <div class="gap"></div>
      <textarea id="desk-msg" rows="4" maxlength="3000" placeholder="Здравствуйте! Когда вам удобно созвониться?">${m(o.messageDraft)}</textarea>
      <div class="gap"></div>
      <button class="btn blue" data-desk="msg-send"${o.busy?" disabled":""}>${o.busy?"Отправляем":"Отправить"}</button>`;else{let a=new Date(Date.now()+3e5);n=`
      <h2>Своё время</h2>
      <p>Бот напомнит об этой заявке вам в личные сообщения.</p>
      <div class="gap"></div>
      <input type="datetime-local" id="desk-at" class="d-at" min="${Rt(a)}" value="${Rt(Oe(1))}">
      <div class="gap"></div>
      <button class="btn blue" data-desk="remind:save"${o.busy?" disabled":""}>Напомнить</button>`}return`
    <div class="sheet-back" data-desk="sheet-close"></div>
    <div class="sheet" role="dialog"><div class="grip"></div>${n}${o.error?`<div class="warn">${m(o.error)}</div>`:""}</div>`}function Ht(){let e=Ze();if(!o.leads)return'<h1>Заявка</h1><div class="lead-card skeleton"></div>';if(!e)return'<h1>Заявка не найдена</h1><p class="lead">Возможно, её номер изменился. Вернитесь к списку.</p><div class="gap"></div><button class="btn soft" data-desk="back">К заявкам</button>';let t=new Date(e.createdAt).toLocaleString("ru-RU",{day:"numeric",month:"long",hour:"2-digit",minute:"2-digit"});return`
    ${o.toast?`<div class="d-toast" role="status">${m(o.toast)}</div>`:""}
    <div class="d-head st-${e.stage}">
      <span class="kicker">${t}${e.source?`, ${m(rs[e.source]??e.source)}`:""}</span>
      <h1 class="num">Заявка № ${e.id}</h1>
      <div class="d-sum"><b class="num">${e.project?"Цена после обсуждения":f(e.total)}</b>${e.supportMonthly?`<span>и ${f(e.supportMonthly)} в месяц за поддержку</span>`:""}</div>
    </div>
    ${o.error&&!o.sheet?`<div class="warn">${m(o.error)}</div>`:""}
    ${ts(e)}
    <section class="d-block">${Zn(e)}${es(e)}</section>
    ${Jn(e)}
    ${as(e)}
    <section class="d-block">
      <h2>Промпт для сайта</h2>
      <p class="hint small">Готовое задание по этой заявке для ИИ-конструктора или разработчика: бриф, страницы, функции, стиль и что уточнить у клиента. Пришлю файлом в чат с ботом.</p>
      <button class="btn soft d-add" data-desk="prompt"${o.busy?" disabled":""}>Прислать промпт файлом</button>
    </section>
    ${ns(e)}
    ${ss(e)}
    ${is(e)}
    ${os(e)}`}function et(e){return o.sheet?(o.sheet=null,o.error="",c.render(),!0):e==="desk"&&o.selected?(o.selected=null,c.render(),!0):e==="desk"&&o.folder!==null?(o.folder=null,o.query="",c.render(),!0):!1}function Gt(e){let t=e.closest("[data-desk]");if(!t)return!1;let[n="",a=""]=(t.dataset.desk??"").split(":"),i=Ze();switch(n){case"refresh":return c.haptic(),o.leads=null,c.render(),Ct(),!0;case"filter":return c.haptic("select"),o.filter=a,c.render(),!0;case"open":return c.haptic(),o.openId=Number(a),o.sheet=null,o.error="",o.noteDraft="",o.messageDraft="",c.open("deskLead"),!0;case"back":return c.back(),!0;case"prompt":return!i||o.busy||(c.haptic(),o.busy=!0,c.render(),(c.demo?Promise.resolve({ok:!0}):c.api("/api/admin/prompt",{id:i.id})).then(()=>{c.haptic("success"),xe("Промпт отправлен в чат с ботом")}).catch(r=>{c.haptic("error"),o.error=r.message}).finally(()=>{o.busy=!1,c.render()})),!0;case"draft":return i?.draft&&c.openSite(i.draft,i.look??{pages:3,options:[],support:!1},i.project?"":f(i.total),`Заявка № ${i.id}, ${i.name}`),!0;case"tg":return i?.username&&c.openLink(`https://t.me/${i.username}`),!0;case"sheet":return c.haptic(),o.error="",o.sheet={kind:"message"},c.render(),document.getElementById("desk-msg")?.focus(),!0;case"sheet-close":return et("deskLead"),!0;case"select-on":return c.haptic(),o.selected=new Set,c.render(),!0;case"select-off":return o.selected=null,c.render(),!0;case"pick":{let r=Number(a);return c.haptic("select"),o.selected?.has(r)?o.selected.delete(r):o.selected?.add(r),c.render(),!0}case"delete-ask":return o.selected?.size&&(c.haptic(),o.error="",o.sheet={kind:"delete"},c.render()),!0;case"delete-ok":{let r=[...o.selected??[]];return!r.length||o.busy||(o.busy=!0,c.render(),(c.demo?Promise.resolve({deleted:r.length}):c.api("/api/admin/delete",{ids:r})).then(({deleted:l})=>{o.leads=(o.leads??[]).filter(u=>!r.includes(u.id)),o.selected=null,o.sheet=null,c.haptic("success"),xe(l===1?"Заявка удалена":`Удалено заявок: ${l}`)}).catch(l=>{c.haptic("error"),o.error=l.message}).finally(()=>{o.busy=!1,c.render()})),!0}case"folder":return c.haptic(),o.selected=null,o.folder=a,o.query="",c.render(),window.scrollTo({top:0}),!0;case"client":return c.haptic(),o.error="",o.messageDraft="",o.sheet={kind:"client",userId:Number(a)},c.render(),!0;case"ctg":return c.openLink(`https://t.me/${a}`),!0;case"cwrite":{let r=o.messageDraft.trim();return r?(o.busy=!0,o.error="",c.render(),(c.demo?Promise.resolve({ok:!0}):c.api("/api/admin/write",{userId:Number(a),text:r})).then(()=>{c.haptic("success"),o.messageDraft="",o.sheet=null,xe("Отправлено клиенту")}).catch(l=>{c.haptic("error"),o.error=l.message}).finally(()=>{o.busy=!1,c.render()}),!0):(o.error="Напишите сообщение",c.haptic("error"),c.render(),!0)}case"stage":return!i||a===i.stage||(c.haptic(),o.error="",o.sheet={kind:"stage",stage:a},c.render()),!0;case"stage-ok":{let r=o.sheet;return r?.kind!=="stage"||X("/api/admin/stage",{stage:r.stage},`Этап: ${Le(r.stage).title}. Клиент уведомлён`,l=>{l.stage=r.stage,l.stageTitle=Le(r.stage).title,l.stageUpdatedAt=new Date().toISOString()}).then(l=>l&&(o.sheet=null)==null&&c.render()),!0}case"owner":{if(a==="ask"){let l=i?.owner?.name??"менеджеру";return X("/api/admin/handoff",{},`Запрос отправлен ${l}`,u=>u.handoff={from:o.me,at:new Date().toISOString()}),!0}let r=a==="take";return X("/api/admin/owner",{take:r},r?"Заявка ваша":"Вы больше не ведёте заявку",l=>l.owner=r?o.me:null),!0}case"remind":{if(a==="custom")return c.haptic(),o.error="",o.sheet={kind:"remind"},c.render(),!0;if(a==="clear")return X("/api/admin/remind",{at:null},"Напоминание убрано",u=>u.remind=null),!0;let r;if(a==="2h")r=new Date(Date.now()+2*36e5);else if(a==="1d")r=Oe(1);else if(a==="3d")r=Oe(3);else{let u=document.getElementById("desk-at")?.value;if(r=u?new Date(u):new Date(NaN),Number.isNaN(r.getTime()))return o.error="Выберите дату и время",c.render(),!0}let l=r.toISOString();return X("/api/admin/remind",{at:l},`Напомню ${Ie(l)}`,u=>u.remind={at:l,adminId:o.me?.id??0}).then(u=>u&&o.sheet&&(o.sheet=null)==null&&c.render()),!0}case"note":{let r=o.noteDraft.trim();return r?(X("/api/admin/note",{text:r},"Заметка сохранена",l=>l.notes.push({at:new Date().toISOString(),by:o.me,text:r})).then(l=>{l&&(o.noteDraft="",c.render())}),!0):(c.haptic("error"),document.getElementById("desk-note")?.focus(),!0)}case"msg-send":{let r=o.messageDraft.trim();return r?(X("/api/admin/message",{text:r},"Отправлено клиенту",l=>l.notes.push({at:new Date().toISOString(),by:o.me,text:`✉️ Написал клиенту: ${r}`})).then(l=>{l&&(o.messageDraft="",o.sheet=null,c.render())}),!0):(o.error="Напишите сообщение",c.haptic("error"),c.render(),!0)}default:return!1}}function ls(){let e=n=>new Date(Date.now()-n*36e5).toISOString(),t=(n,a,i,r,l,u,b,y={})=>({userId:n,name:a,username:i,step:r,stepTitle:l,temperature:b,firstSeen:e(u+2),lastSeen:e(u),stepAt:e(u),where:"bot",detail:null,total:null,...y});return[t(501,"Ольга","olga_flowers","quote","Итог расчёта",2,"warm",{total:21500,where:"app"}),t(502,"Сергей",null,"calc","Расчёт сайта",26,"warm"),t(503,"Марина","marina_k","briefDone","Вопросы пройдены",50,"warm"),t(504,"Артём","artem","brief","Вопросы о проекте",5,"cold",{detail:"вопрос 3 из 8"}),t(505,"Виктор","vik","opened","Открыт бот",30,"cold")]}function cs(){let e={id:1,name:"@denis"},t=a=>new Date(Date.now()-a*36e5).toISOString(),n={supportMonthly:null,source:"mini_app",description:null,quote:{title:"Сайт, 3 страницы",items:["База, до 3 страниц — 10 000 ₽","Онлайн-оплата — 6 000 ₽","Базовое SEO — 2 000 ₽"],urgent:null,total:"Разработка: 18 000 ₽",support:null},draft:null,handoff:null,look:{pages:3,options:["onlinePayment","basicSeo"],support:!1},brief:[{question:"Сфера",answer:"Кафе, еда, доставка"},{question:"Главная задача",answer:"Продавать онлайн"},{question:"Откуда посетители",answer:"Из поиска — Яндекс и Google; Из соцсетей и Telegram"}]};return{me:e,leads:[{...n,draft:N($e),look:{pages:3,options:["uniqueDesign","copywriting","animatedButtons","animatedCards","onlinePayment","basicSeo"],support:!1},id:14,createdAt:t(.3),name:"Анна",username:"anna_coffee",total:18e3,stage:"received",stageTitle:"Заявка получена",stageUpdatedAt:t(.3),notes:[],owner:null,remind:null},{...n,id:13,createdAt:t(5),name:"Игорь",username:null,total:31500,supportMonthly:1500,stage:"discussing",stageTitle:"Обсуждаем проект",stageUpdatedAt:t(3),notes:[{at:t(3),by:e,text:"Созвонились, хочет тёмный сайт. Пришлёт логотип до пятницы."}],owner:e,remind:{at:new Date(Date.now()-6e5).toISOString(),adminId:1}},{...n,id:12,createdAt:t(30),name:"Студия «Лето»",username:"leto_studio",total:24e3,stage:"inProgress",stageTitle:"Сайт в работе",stageUpdatedAt:t(20),notes:[],owner:{id:2,name:"@mrsubo"},remind:{at:Oe(1).toISOString(),adminId:2}},{...n,id:9,createdAt:t(240),name:"Михаил",username:"misha",total:13e3,stage:"done",stageTitle:"Готово",stageUpdatedAt:t(100),notes:[],owner:e,remind:null}]}}var g=window.Telegram?.WebApp,A=!!(g&&g.platform!=="unknown"),q=!!g?.initData,D=new URLSearchParams(location.search),ie=D.get("channel"),_=D.get("demo"),ut="https://t.me/duodevops_bot",ne=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function d(e="tap"){let t=g?.HapticFeedback;t&&(e==="select"?t.selectionChanged():e==="soft"?t.impactOccurred("soft"):e==="success"||e==="error"?t.notificationOccurred(e):t.impactOccurred("light"))}async function R(e,t={}){let n=await fetch(`https://77-110-111-44.sslip.io${e}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({initData:g?.initData??"",...t})}),a=await n.json().catch(()=>({}));if(!n.ok)throw new Error(a.error??"Не получилось связаться с сервером. Попробуйте ещё раз.");return a}var Kt=[{id:"received",title:"Заявка получена"},{id:"discussing",title:"Обсуждаем проект"},{id:"inProgress",title:"Сайт в работе"},{id:"review",title:"На проверке у вас"},{id:"done",title:"Готово"}];function an(){document.documentElement.dataset.theme="dark";let e="#0B0C0E";g?.setHeaderColor(e),g?.setBackgroundColor(e),g?.setBottomBarColor?.(e)}an();g?.onEvent?.("themeChanged",an);function rn(){let e=g?.safeAreaInset,t=g?.contentSafeAreaInset,n=document.documentElement.style;n.setProperty("--tg-top",`${(e?.top??0)+(t?.top??0)}px`),n.setProperty("--tg-bottom",`${(e?.bottom??0)+(t?.bottom??0)}px`)}rn();for(let e of["safeAreaChanged","contentSafeAreaChanged","fullscreenChanged","viewportChanged"])g?.onEvent?.(e,rn);var s={screen:D.get("desk")||D.get("lead")||D.get("demo")||D.get("example")||D.get("open")?"home":"start",product:"site",history:[],siteType:null,botKind:null,botUrgent:!1,botSupport:!1,features:[],about:"",briefStep:0,answers:{},ownOpen:!1,pages:3,options:{},urgent:!1,urgentDays:ue()[0]??5,support:!1,name:g?.initDataUnsafe?.user?.first_name??"",supportText:"",custom:!1,openOpt:null,sentLead:null,shownTotal:0,error:"",busy:!1,sent:null,leads:null,stageVideo:null,isAdmin:_==="desk"||_==="admin",draft:null,draftFor:"",ai:_==="ai"?{left:2,perDay:2}:null,aiBusy:!1,aiError:"",briefComplete:!1,consent:!1,consentError:!1,adminCounts:_==="admin"?{fresh:1,active:3}:null},M=()=>({pages:s.pages,options:s.options,urgent:s.urgent,...s.urgent?{urgentDays:s.urgentDays}:{},support:s.support}),P=document.getElementById("app");try{localStorage.getItem("duo-product")==="bot"&&(s.product="bot")}catch{}function on(e){let t=document.createElement("div");t.className="warn",t.style.cssText="position:fixed;left:12px;right:12px;top:12px;z-index:99",t.textContent=`Ошибка приложения: ${e}`,document.body.appendChild(t)}window.addEventListener("error",e=>on(e.message||"неизвестная ошибка"));window.addEventListener("unhandledrejection",e=>on(String(e.reason?.message??e.reason)));var p=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Z=e=>C.find(t=>t.id===e),ds={brand:"Зерно",emoji:"☕",tab:"Кофейня «Зерно» — свежая обжарка",heroTitle:"Свежая обжарка каждый день",heroText:"Кофе из зёрен, которые мы обжариваем сами. Заходите или забронируйте столик.",cta:"Оставить заявку",pages:["Главная","Меню","Контакты"],sectionTitle:"Популярное",catalogText:"Кофе, выпечка и десерты — всё свежее.",contactsText:"Ждём вас каждый день. Можно забронировать столик заранее.",items:[{icon:"☕",name:"Эспрессо",text:"Двойная обжарка"},{icon:"🥐",name:"Круассан",text:"Печём с утра"},{icon:"🍰",name:"Чизкейк",text:"По нашему рецепту"},{icon:"🥛",name:"Капучино",text:"На вашем молоке"},{icon:"🍪",name:"Печенье",text:"К любому кофе"},{icon:"🧋",name:"Раф",text:"Ванильный и пряный"}],formTitle:"Забронировать столик",formText:"Оставьте имя и телефон — заявка сразу придёт нам в Telegram."};function us(e){return{brand:e.brand,emoji:e.emoji,tab:e.tagline,heroTitle:e.heroTitle,heroText:e.heroText,cta:e.cta,pages:e.pages,sectionTitle:e.sectionTitle,catalogText:e.sectionText,contactsText:e.formText,items:e.items,formTitle:e.formTitle,formText:e.formText,accent:ae[e.palette]}}function pt(e,t=null){if(t==="marketplace")return"market";if(t==="platform")return"platform";if(t==="shop")return"shop";let n=(e.sphere??[]).find(i=>!i.startsWith(H));if(n==="shop"||n==="food"||n==="beauty"||n==="education"||n==="b2b"||n==="services")return n;let a=e.goal?.[0];return a==="sell"||e.action?.[0]==="pay"?"shop":a==="booking"||e.action?.[0]==="book"?"beauty":"services"}function mt(e,t,n=!1,a=!1,i=null,r="services"){return{pages:t,on:l=>!!e[l],urgent:n,support:a,c:i?us(i):ds,texts:!!e.copywriting||!!i,kind:r}}function ln(){let e={uniqueDesign:{pages:3},animatedButtons:{},animatedCards:{},scrollReveal:{pages:3},pageTransitions:{}};return s.features.includes("payment")&&(e.onlinePayment={}),e}var Re={marketplace:{heroTitle:"Всё нужное от проверенных продавцов",heroText:"Сравнивайте предложения, читайте отзывы и оплачивайте картой в один клик.",cta:"Смотреть каталог"},platform:{heroTitle:"Учитесь в своём темпе",heroText:"Курсы, задания и прогресс — в личном кабинете. Начните с первого урока.",cta:"Начать учиться"}};function ps(){let e=mt(ln(),3,!1,!1,s.draft,pt(s.answers,s.siteType));return s.draft?.by==="ai"?e:{...e,c:{...e.c,...Re[s.siteType==="marketplace"?"marketplace":"platform"]}}}var ms=()=>Se(s.siteType)?.custom?ps():mt(s.options,s.pages,s.urgent,s.support,s.draft,pt(s.answers,s.siteType)),h={open:!1,device:"phone",page:"home",cart:0,other:null},J=()=>h.other?.look??ms(),fs=["home","menu","contacts"],T=(e,t,n=70)=>e?p(t):`<span class="ph" style="width:${n}%"></span>`;function gs(e){let t=["Заявка за минуту","Ответ в Telegram"];return e.on("onlinePayment")&&t.push("Оплата онлайн"),e.support&&t.push("На связи после запуска"),`<ul class="fs-perks">${t.map(n=>`<li>${n}</li>`).join("")}</ul>`}function bs(e,t,n){let a=e.texts,i=e.on("onlinePayment"),r=e.on("animatedButtons")?" anim":"";return`<div class="fs-cards${e.on("animatedCards")?" lift":""}${n}" data-opt="animatedCards scrollReveal">${e.c.items.slice(0,t).map(({icon:l,name:u,text:b,price:y},I)=>`
      <article class="fs-card" style="--i:${I}">
        <div class="fs-card-pic"><span>${l}</span></div>
        <div class="fs-card-body">
          <b>${T(a,u,60)}</b>
          <span class="fs-card-sub">${T(a,b,80)}</span>
          <div class="fs-card-foot">
            ${y&&a?`<span class="fs-price">${p(y)}</span>`:""}
            ${i?`<button class="fs-buy${r}" data-buy data-opt="onlinePayment">Купить</button>`:`<button class="fs-more-btn" data-press="cta">${a?"Оставить заявку":"Кнопка"}</button>`}
          </div>
        </div>
      </article>`).join("")}</div>`}function Vt(e,t){let n=e.texts,a=[["Оставляете заявку","Пара полей — имя и телефон."],["Обсуждаем детали","Уточняем задачу и удобное время."],["Делаем и показываем","Результат — без сюрпризов."]];return`
    <section class="fs-steps${t}" data-opt="scrollReveal">
      <h2>${T(n,"Как мы работаем",50)}</h2>
      <ol>${a.map(([i,r])=>`<li><b>${T(n,i,60)}</b><span>${T(n,r,80)}</span></li>`).join("")}</ol>
    </section>`}function tt(e,t){let n=e.texts;return`
    <section class="fs-form${t}" data-opt="scrollReveal">
      <div class="fs-form-text">
        <h3>${T(n,e.c.formTitle,55)}</h3>
        <p>${T(n,e.c.formText,85)}</p>
      </div>
      <div class="fs-inputs"><input class="fs-input" placeholder="Имя" autocomplete="off"><input class="fs-input" placeholder="Телефон" inputmode="tel" autocomplete="off"></div>
      <button class="fs-btn${e.on("animatedButtons")?" anim":""}" data-press="send" data-opt="animatedButtons">${n?"Отправить заявку":"Кнопка"}</button>
    </section>`}var hs={shop:["1 290 ₽","890 ₽","2 450 ₽","1 690 ₽","3 100 ₽","740 ₽"],food:["390 ₽","520 ₽","280 ₽","190 ₽","450 ₽","310 ₽"]},ft=(e,t)=>e.c.items[t]?.price??hs[e.kind]?.[t%6]??"",be=(e,t)=>Array.from({length:t},(n,a)=>e.c.items[a%e.c.items.length]);function vs(e,t,n=!1){let a=e.on("animatedButtons")?" anim":"";return e.on("onlinePayment")?`<button class="fs-buy${a}${n?" sm":""}" data-buy data-opt="onlinePayment">${t}</button>`:`<button class="fs-more-btn${n?" sm":""}" data-press="cta">Заказать</button>`}function je(e){return`<div class="fs-chips">${e.map((t,n)=>`<button class="fs-chip${n===0?" on":""}" data-chip>${p(t)}</button>`).join("")}</div>`}function $s(e,t,n){let a=e.texts,i=e.on("animatedCards")?" lift":"";return`
    <div class="mk-search"><input class="fs-input" placeholder="Поиск по каталогу" autocomplete="off"></div>
    ${je(["Все",...e.c.items.map(r=>r.name)])}
    <div class="mk-grid${i}${n}" data-opt="animatedCards scrollReveal">
      ${be(e,t).map((r,l)=>`
        <article class="mk-card">
          <div class="mk-pic"><span>${r.icon}</span>${l===0?'<i class="mk-badge">Хит</i>':""}</div>
          <b>${T(a,r.name,70)}</b>
          <span class="mk-sub">${T(a,r.text,80)}</span>
          <div class="mk-foot"><span class="fs-price">${a?ft(e,l):""}</span>${vs(e,"В корзину",!0)}</div>
        </article>`).join("")}
    </div>`}function ys(e,t,n){let a=e.texts,i=e.on("animatedCards")?" lift":"";return`
    ${je(e.c.items.map(r=>r.name))}
    <div class="fd-list${i}${n}" data-opt="animatedCards scrollReveal">
      ${be(e,t).map((r,l)=>`
        <article class="fd-row">
          <span class="fd-pic">${r.icon}</span>
          <span class="fd-text"><b>${T(a,r.name,60)}</b><small>${T(a,r.text,80)}</small></span>
          <span class="fd-side"><span class="fs-price">${a?ft(e,l):""}</span>${e.on("onlinePayment")?'<button class="fd-add" data-buy data-opt="onlinePayment" aria-label="Добавить">+</button>':'<button class="fd-add ghost" data-press="cta" aria-label="Заказать">→</button>'}</span>
        </article>`).join("")}
    </div>`}function Ts(e,t){let n=e.texts,a=["Сегодня","Завтра","Пт","Сб","Вс"],i=["10:00","12:30","15:00","17:30","19:00"];return`
    <section class="bk${t}" data-opt="scrollReveal">
      <h2>${T(n,"Выберите время",50)}</h2>
      ${je(a)}
      <div class="bk-times">${i.map((r,l)=>`<button class="bk-time${l===1?" on":""}" data-slot="${r}">${r}</button>`).join("")}</div>
      <button class="fs-btn${e.on("animatedButtons")?" anim":""} bk-go" data-press="book" data-opt="animatedButtons">${n?"Записаться на 12:30":"Кнопка"}</button>
    </section>`}function Ss(e,t,n,a){let i=e.texts;return`
    <div class="sv-list${e.on("animatedCards")?" lift":""}${n}" data-opt="animatedCards scrollReveal">
      ${be(e,t).map(l=>`
        <article class="sv-row">
          <span class="fd-pic">${l.icon}</span>
          <span class="fd-text"><b>${T(i,l.name,60)}</b><small>${T(i,l.text,80)}</small></span>
          <button class="fs-more-btn sm" data-press="cta">${i?a:"Кнопка"}</button>
        </article>`).join("")}
    </div>`}function cn(e,t,n){let a=e.texts,i=[["Онлайн","С нуля"],["Группа","Практика"],["Онлайн","Интенсив"],["Лично","Под ваши цели"]];return`
    <div class="ed-grid${e.on("animatedCards")?" lift":""}${n}" data-opt="animatedCards scrollReveal">
      ${be(e,t).map((l,u)=>`
        <article class="ed-card">
          <div class="ed-top"><span class="fd-pic">${l.icon}</span><span class="ed-tags">${(i[u%4]??[]).map(b=>`<i>${b}</i>`).join("")}</span></div>
          <b>${T(a,l.name,60)}</b>
          <small>${T(a,l.text,80)}</small>
          <button class="fs-more-btn" data-press="cta">${a?"Записаться на курс":"Кнопка"}</button>
        </article>`).join("")}
    </div>`}function ks(e,t,n){let a=["Мастерская Север","Дом и сад","Студия Лён","Ремесло","Город мастеров","Своё дело"],i=e.on("animatedCards")?" lift":"";return`
    <div class="mk-search"><input class="fs-input" placeholder="Поиск среди тысяч товаров" autocomplete="off"></div>
    ${je(["Все",...e.c.items.map(r=>r.name)])}
    <div class="mk-grid${i}${n}" data-opt="animatedCards scrollReveal">
      ${be(e,t).map((r,l)=>`
        <article class="mk-card">
          <div class="mk-pic"><span>${r.icon}</span>${l===0?'<i class="mk-badge">Хит</i>':""}</div>
          <b>${p(r.name)}</b>
          <span class="mk-seller">${p(a[l%a.length])} <em>★ 4,${9-l%3}</em></span>
          <div class="mk-foot"><span class="fs-price">${ft({...e,kind:"shop"},l)}</span><button class="fs-buy sm" data-buy>В корзину</button></div>
        </article>`).join("")}
    </div>
    <section class="mk-sell${n}">
      <b>Продавайте у нас</b>
      <p>Свой кабинет, товары, заказы и выплаты — всё в одном месте.</p>
      <button class="fs-btn" data-site="seller">Стать продавцом</button>
    </section>`}function ws(e,t,n){return`
    ${cn(e,t,n)}
    <section class="pl-cab${n}">
      <div class="pl-head"><b>Личный кабинет</b><button class="fs-more-btn sm" data-site="cabinet">Войти</button></div>
      ${e.c.items.slice(0,3).map((a,i)=>`<div class="pl-row"><span>${p(a.name)}</span><i style="--p:${[72,40,15][i]}%"></i><small>${[72,40,15][i]}%</small></div>`).join("")}
    </section>`}function xs(e,t){let n=e.texts;return`
    <div class="b2-grid${e.on("animatedCards")?" lift":""}${t}" data-opt="animatedCards scrollReveal">
      ${e.c.items.slice(0,4).map((i,r)=>`
        <article class="b2-card">
          <span class="b2-num">0${r+1}</span>
          <span class="fd-pic">${i.icon}</span>
          <b>${T(n,i.name,60)}</b>
          <small>${T(n,i.text,80)}</small>
        </article>`).join("")}
    </div>`}var Es={services:[["Как быстро вы отвечаете?","Заявка приходит нам в Telegram сразу — отвечаем в рабочее время."],["Можно ли обсудить задачу заранее?","Да, оставьте заявку — уточним детали и предложим решение."],["Где вы работаете?","Расскажем при обсуждении: всё зависит от задачи."]],shop:[["Как оформить заказ?","Добавьте товары в корзину и оплатите картой на сайте."],["Есть ли доставка?","Да — способы доставки покажем при оформлении заказа."],["Можно ли вернуть товар?","Да, условия возврата — в разделе «Доставка»."]],food:[["Как заказать доставку?","Добавьте блюда в заказ и оформите его на сайте."],["Можно ли забрать самому?","Да, выберите самовывоз при оформлении."],["Есть ли меню для детей?","Спросите нас — подскажем, что подойдёт."]],beauty:[["Как записаться?","Выберите услугу и удобное время — запись придёт нам сразу."],["Можно ли перенести запись?","Да, напишите нам — подберём другое время."],["Какие материалы вы используете?","Расскажем на консультации — подберём под вас."]],education:[["Подойдёт ли курс новичку?","Да, есть программы с нуля — подскажем, с чего начать."],["Как проходят занятия?","Онлайн или в группе — формат указан у каждого курса."],["Что будет после курса?","Практические навыки и материалы, к которым можно вернуться."]],market:[["Как стать продавцом?","Зарегистрируйтесь и добавьте товары в кабинете — после проверки они появятся в каталоге."],["Как оплатить заказ?","Картой на сайте; деньги продавец получает после доставки."],["Что если товар не подошёл?","Оформите возврат в кабинете покупателя."]],platform:[["Как начать заниматься?","Зарегистрируйтесь, выберите курс или тариф — доступ откроется сразу."],["Где мои материалы?","В личном кабинете: уроки, задания и прогресс."],["Можно ли отменить подписку?","Да, в кабинете, в любой момент."]],b2b:[["С какими компаниями вы работаете?","С малым и средним бизнесом — расскажите о задаче."],["Как начать работу?","Оставьте заявку — проведём встречу и предложим план."],["Как вы отчитываетесь?","По каждому этапу — понятно и вовремя."]]};function Ls(e,t){let n=e.texts;return`
    <section class="fs-faq${t}" data-opt="scrollReveal">
      <h2>${T(n,"Частые вопросы",50)}</h2>
      ${Es[e.kind].map(([a,i],r)=>`<div class="faq-item${r===0?" open":""}"><button class="faq-q" data-faq aria-expanded="${r===0}"><span>${T(n,a,70)}</span><i aria-hidden="true"></i></button><div class="faq-a"><p>${T(n,i,90)}</p></div></div>`).join("")}
    </section>`}function Ps(e){if(!e.texts)return"";let n=[e.c.brand,...e.c.items.map(a=>a.name)].map(a=>`<span>${p(a)}</span><i>✦</i>`).join("");return`<div class="fs-marquee" aria-hidden="true"><div class="fs-marquee-track">${n}${n}</div></div>`}function Yt(e,t,n){switch(e.kind){case"shop":return $s(e,t,n);case"food":return ys(e,t,n);case"beauty":return`${Ss(e,Math.min(t,4),n,"Записаться")}${Ts(e,n)}`;case"education":return cn(e,Math.min(t,4),n);case"b2b":return xs(e,n);case"market":return ks(e,t,n);case"platform":return ws(e,Math.min(t,4),n);default:return bs(e,t,n)}}function dn(e,t){let n=e.texts,a=e.c,i=e.on("uniqueDesign"),r=e.on("scrollReveal")?" rv":"",l=e.on("animatedButtons")?" anim":"";return t==="menu"?`
      <section class="fs-head fs-page-head${r}" data-opt="scrollReveal"><h2>${T(n,a.pages[1],30)}</h2><p>${T(n,a.catalogText,75)}</p></section>
      ${Yt(e,6,r)}
      ${tt(e,r)}`:t==="contacts"?`
      <section class="fs-head fs-page-head${r}" data-opt="scrollReveal"><h2>${T(n,a.pages[2],40)}</h2><p>${T(n,a.contactsText,80)}</p></section>
      ${tt(e,r)}
      ${Vt(e,r)}`:`
    <section class="fs-hero ${i?"unique":"template"} k-${e.kind}" data-opt="uniqueDesign">
      ${i?'<div class="fs-hero-art" aria-hidden="true"><span class="o o1"></span><span class="o o2"></span><span class="o o3"></span></div>':""}
      <div class="fs-hero-text">
        <h1 data-opt="copywriting">${n?p(a.heroTitle):'<span class="ph" style="width:90%"></span><span class="ph" style="width:60%"></span>'}</h1>
        <p>${T(n,a.heroText,85)}</p>
        <div class="fs-hero-actions">
          <button class="fs-btn${l}" data-press="cta" data-opt="animatedButtons">${n?p(a.cta):"Кнопка"}</button>
          <button class="fs-btn ghost" data-page="menu">${n?p(a.pages[1]):"Кнопка"}</button>
        </div>
        ${n?gs(e):""}
      </div>
    </section>
    <section class="fs-head${r}" data-opt="scrollReveal"><h2>${T(n,a.sectionTitle,40)}</h2><p>${T(n,a.catalogText,75)}</p></section>
    ${Yt(e,e.kind==="shop"||e.kind==="market"?4:3,r)}
    ${i?Ps(e):""}
    ${e.kind==="shop"||e.kind==="food"||e.kind==="market"?"":Vt(e,r)}
    ${Ls(e,r)}
    ${tt(e,r)}`}var Qt=e=>(e.trim()[0]??"D").toUpperCase();function _e(){let e=J(),t=e.texts,n=e.c,i=fs.slice(0,Math.min(3,e.pages)).map((r,l)=>`<button class="${r===h.page?"on":""}" data-page="${r}">${t?p(n.pages[l]):'<span class="ph" style="width:44px"></span>'}</button>`).join("")+(e.pages>3?`<span class="fs-more">ещё ${W(e.pages-3)}</span>`:"");return`
    <div class="fs-site ${h.device} ${e.on("uniqueDesign")?"unique":"template"} k-${e.kind}"${n.accent?` style="--accent:${n.accent}"`:""}>
      <header class="fs-header">
        <button class="fs-brand" data-page="home"><span class="fs-mark">${p(Qt(n.brand))}</span><b class="fs-logo">${t?p(n.brand):'<span class="ph" style="width:60px"></span>'}</b></button>
        <nav class="fs-nav" data-opt="pageTransitions">${i}</nav>
        ${(e.kind==="shop"||e.kind==="market")&&e.on("onlinePayment")?`<button class="mk-cart" data-site="cart" aria-label="Корзина">Корзина<i class="num">${h.cart}</i></button>`:""}
        ${e.kind==="platform"?'<button class="mk-cart" data-site="cabinet">Войти</button>':""}
      </header>
      <main class="fs-main">${dn(e,h.page)}</main>
      <footer class="fs-foot">
        <div class="fs-foot-brand"><span class="fs-mark">${p(Qt(n.brand))}</span><b>${t?p(n.brand):""}</b></div>
        ${t?`<p>${p(n.tab)}</p>`:""}
        <div class="fs-foot-row"><span>© ${t?p(n.brand):""}</span><span>Сайт сделан в DUO</span></div>
      </footer>
      ${e.support?'<button class="fs-chat" data-site="chat" data-opt="support" aria-label="Чат"></button>':""}
    </div>`}function Is(){let e=document.getElementById("full");return e||(e=document.createElement("div"),e.id="full",document.body.appendChild(e),e.addEventListener("click",Ds)),e}function Ue(){let e=Is();if(!h.open){e.innerHTML="",document.body.classList.remove("lock");return}if(document.body.classList.add("lock"),h.other){let n=h.other;e.innerHTML=`
    <div class="full" role="dialog" aria-label="Сайт на весь экран">
      <div class="full-top">
        <button class="full-close" data-full="close">Закрыть</button>
        <div class="seg2" role="tablist">
          <button role="tab" class="${h.device==="phone"?"on":""}" data-device="phone" aria-selected="${h.device==="phone"}">Телефон</button>
          <button role="tab" class="${h.device==="desktop"?"on":""}" data-device="desktop" aria-selected="${h.device==="desktop"}">Компьютер</button>
        </div>
      </div>
      <div class="full-scroll" id="full-scroll">
        ${h.device==="desktop"?`<div class="fs-scale"><div class="fs-canvas">${_e()}</div></div>`:_e()}
      </div>
      <div class="fs-toast" role="status" aria-live="polite"></div>
      <div class="full-bottom">
        <div class="sum">${n.sum?`<b class="num">${n.sum}</b>`:""}<span>${p(n.note)}</span></div>
        <button class="btn blue" data-full="close">Закрыть</button>
      </div>
    </div>`,Me(),rt();return}h.device=window.innerWidth>=gt?"desktop":"phone";let t=B(M());e.innerHTML=`
    <div class="full own" role="dialog" aria-label="Ваш сайт">
      <div class="full-top">
        <button class="full-close" data-full="close">Назад</button>
        <b class="full-title">Ваш сайт</b>
        <button class="full-another" data-full="another">Ещё вариант</button>
      </div>
      <div class="full-scroll" id="full-scroll">
        <p class="fs-note">Пример по вашим ответам. Настоящий дизайн и тексты сделает DUO.</p>
        ${h.device==="desktop"?`<div class="fs-scale"><div class="fs-canvas">${_e()}</div></div>`:_e()}
      </div>
      <div class="fs-toast" role="status" aria-live="polite"></div>
      <div class="full-bottom">
        ${qe()?'<div class="sum"><b>Цена</b><span>после обсуждения</span></div>':`<div class="sum"><b class="num">${f(t.developmentTotal)}</b><span>${t.supportMonthly?`и ${f(t.supportMonthly)} в месяц`:"предварительно"}</span></div>`}
        <button class="btn blue" data-full="lead">Оставить заявку</button>
      </div>
    </div>`,Me(),rt()}var gt=720,Wt=0;function z(e){let t=document.querySelector("#full .fs-toast");t&&(t.textContent=e,t.classList.add("show"),window.clearTimeout(Wt),Wt=window.setTimeout(()=>t.classList.remove("show"),2600))}function Me(){let e=document.querySelector(".fs-scale"),t=document.querySelector(".fs-canvas");if(!e||!t)return;let n=e.clientWidth/1100;t.style.transform=`scale(${n})`,e.style.height=`${Math.ceil(t.offsetHeight*n)}px`}var Xt=window.innerWidth>=gt;window.addEventListener("resize",()=>{let e=window.innerWidth>=gt;if(h.open&&!h.other&&e!==Xt){let t=document.getElementById("full-scroll")?.scrollTop??0;Ue();let n=document.getElementById("full-scroll");n&&(n.scrollTop=t)}Xt=e,Me()});var ge=null;function rt(){ge?.disconnect();let e=document.querySelectorAll("#full .rv");if(e.length){if(ne()||!("IntersectionObserver"in window)){e.forEach(t=>t.classList.add("in"));return}ge=new IntersectionObserver(t=>{for(let n of t)n.isIntersecting&&(n.target.classList.add("in"),ge?.unobserve(n.target))},{root:document.getElementById("full-scroll"),threshold:.12}),e.forEach(t=>ge.observe(t))}}function Ce(){d("soft"),h.open=!0,h.page="home",Ue(),ne()||document.querySelector("#full .full")?.classList.add("zoom")}function Os(e,t,n,a){let i={};for(let r of t.options)C.some(l=>l.id===r)&&(i[r]=Z(r).billing==="perPage"?{pages:t.pages}:{});h.other={look:mt(i,t.pages,!1,t.support,e),draft:e,sum:n,note:a},Ce()}function oe(){h.open=!1,h.cart=0,h.other=null,ge?.disconnect(),Ue()}function zt(e){if(e===h.page)return;d("select"),h.page=e;let t=document.querySelector("#full .fs-main"),n=document.getElementById("full-scroll");if(document.querySelectorAll("#full .fs-nav [data-page]").forEach(i=>i.classList.toggle("on",i.dataset.page===e)),!t)return;let a=()=>{t.innerHTML=dn(J(),e),n?.scrollTo({top:0}),Me(),rt()};if(!J().on("pageTransitions")||ne())return a();t.classList.add("leave"),window.setTimeout(()=>{a(),t.classList.remove("leave"),t.classList.add("enter"),window.setTimeout(()=>t.classList.remove("enter"),420)},220)}function Ds(e){let t=e.target.closest("[data-full], [data-device], [data-page], [data-press], [data-buy], [data-site], [data-chip], [data-slot], [data-faq]");if(!t)return;let n=t.dataset;if(n.site==="cabinet")return z("Личный кабинет: заказы, покупки и настройки — после входа");if(n.site==="seller")return z("Продавцы регистрируются сами и ведут свои товары в кабинете");if(n.site==="chat")return z("Поддержка после запуска: правки и помощь по сайту");if(n.site==="cart")return z(h.cart?`В корзине ${h.cart} — дальше оплата картой прямо на сайте`:"Корзина пока пустая — добавьте товар");if(n.faq!==void 0){d("select");let a=t.parentElement,i=!a?.classList.contains("open");a?.parentElement?.querySelectorAll(".faq-item.open").forEach(r=>r.classList.remove("open")),a?.classList.toggle("open",i),t.setAttribute("aria-expanded",String(i));return}if(n.chip!==void 0){d("select"),t.parentElement?.querySelectorAll(".fs-chip").forEach(a=>a.classList.toggle("on",a===t));return}if(n.slot){d("select"),t.parentElement?.querySelectorAll(".bk-time").forEach(i=>i.classList.toggle("on",i===t));let a=document.querySelector("#full .bk-go");a&&J().texts&&(a.textContent=`Записаться на ${n.slot}`);return}if(n.press==="book")return d("success"),z("Запись подтверждена — на вашем сайте она сразу придёт вам в Telegram");if(n.buy!==void 0){d(J().on("animatedButtons")?"soft":"tap"),h.cart+=1;let a=document.querySelector("#full .mk-cart i");return a&&(a.textContent=String(h.cart),a.classList.remove("bump"),a.offsetWidth,a.classList.add("bump")),z(J().kind==="food"?"Добавлено в заказ — оплата картой прямо на сайте":"Товар в корзине — дальше оплата картой прямо на сайте")}if(n.press==="send")return d("success"),z("Заявка отправлена — на вашем сайте она сразу придёт вам в Telegram");if(n.press==="cta"){d(J().on("animatedButtons")?"soft":"tap");let a=document.querySelector("#full .fs-form");return a?a.scrollIntoView({behavior:ne()?"auto":"smooth",block:"center"}):zt("contacts")}if(n.full==="close")return d(),oe();if(n.full==="another")return void hn(!0);if(n.full==="lead")return d(),oe(),k("summary");if(n.device&&n.device!==h.device)return d("select"),h.device=n.device,h.page="home",Ue();if(n.page)return zt(n.page)}var Jt=0;function k(e,t=!0){let n=s.screen!==e;s.sentLead&&e!=="summary"&&e!=="botSummary"&&pn(),t&&n&&s.history.push(s.screen),s.screen=e,s.error="",ot=-1,h.open&&oe(),$(),window.scrollTo({top:0}),n&&!ne()&&(P.classList.remove("slide-f","slide-b"),P.offsetWidth,P.classList.add(t?"slide-f":"slide-b"),window.clearTimeout(Jt),Jt=window.setTimeout(()=>P.classList.remove("slide-f","slide-b"),420))}function ce(){if(h.open)return oe();if((s.screen==="desk"||s.screen==="deskLead")&&et(s.screen))return;if(s.screen==="brief"&&s.briefStep>0)return s.briefStep-=1,s.ownOpen=!1,$();let e=s.history.pop();e&&k(e,!1)}g?.BackButton.onClick(ce);document.addEventListener("keydown",e=>{e.key==="Escape"&&h.open&&ce()});function re(e,t,n=!0){return`
    <div class="bar"><div class="bar-inner">
      <div class="sum">${e}</div>
      <button class="btn${n?" blue":" off"}" id="bar-action"${n?"":" disabled"}>${t}</button>
    </div></div>`}function un(){let e=Ge();if(e&&e.screen.startsWith("bot")===(s.product==="bot"))return In(e);s.history=["home"],k(s.product==="bot"?"botKind":"sphere",!1)}function pn(){Object.assign(s,{siteType:null,botKind:null,botUrgent:!1,botSupport:!1,features:[],about:"",answers:{},pages:v.INCLUDED_PAGES,options:{},urgent:!1,support:!1,draft:null,draftFor:"",consent:!1,consentError:!1,sentLead:null,openOpt:null,shownTotal:0})}var bt="https://danildenis.github.io/duo-portfolio/";function _s(){return`
    <section class="start">
      <h1 class="home2-title">Что хотите создать?</h1>
      <p class="home2-lead">Выберите — дальше покажем, как мы работаем.</p>
      <div class="start-cards">
        <button class="start-card" data-product="site">
          <span class="create-ico">${wn}</span>
          <span class="start-text"><b>Сайт</b><small>Лендинг, магазин, сайт компании</small></span>
        </button>
        <button class="start-card" data-product="bot">
          <span class="create-ico">${xn}</span>
          <span class="start-text"><b>Telegram-бот</b><small>Заявки, запись, магазин, рассылки</small></span>
        </button>
      </div>
    </section>`}function As(){let e=s.product==="bot";return`
    <section class="home2">
      <div class="home2-head">
        <div class="product-switch" role="tablist" aria-label="Что создаём">
          <button role="tab" class="${e?"":"on"}" aria-selected="${!e}" data-product="site">Сайт</button>
          <button role="tab" class="${e?"on":""}" aria-selected="${e}" data-product="bot">Telegram-бот</button>
        </div>
        ${e?`<h1 class="home2-title">Telegram-бот для вашего бизнеса <span>от ${f(x.BASE_PRICE)}</span></h1>
               <p class="home2-lead">Ответьте на три вопроса и сразу увидите цену. Без звонков и встреч.</p>`:`<h1 class="home2-title">Сайт для вашего бизнеса <span>от ${f(v.BASE_PRICE)}</span></h1>
               <p class="home2-lead">Ответьте на четыре вопроса и сразу увидите цену. Без звонков и встреч.</p>`}
      </div>
      ${Ta()}
      <div class="home2-how">
        <span class="label">Как это работает</span>
        <div class="panel">
          ${e?`<div class="how-row"><span class="num">01</span><div><b>Расчёт здесь</b><small>Для чего бот и что он умеет — цена сразу</small></div></div>
                 <div class="how-row"><span class="num">02</span><div><b>Обсуждение в Telegram</b><small>Уточняем задачу, цену и срок</small></div></div>
                 <div class="how-row"><span class="num">03</span><div><b>Сценарии и запуск</b><small>Сначала схема диалогов, потом бот</small></div></div>`:`<div class="how-row"><span class="num">01</span><div><b>Расчёт здесь</b><small>Пара минут, цена сразу</small></div></div>
                 <div class="how-row"><span class="num">02</span><div><b>Обсуждение в Telegram</b><small>Уточняем задачу и итоговую цену</small></div></div>
                 <div class="how-row"><span class="num">03</span><div><b>Дизайн и запуск</b><small>Сначала первый экран, потом весь сайт</small></div></div>`}
        </div>
      </div>
      ${A?q?"":'<div class="warn">Откройте приложение кнопкой «Открыть приложение» в меню бота — тогда будут видны ваши заявки.</div>':'<div class="warn">Чтобы отправить заявку, откройте приложение из бота DUO в Telegram.</div>'}
      <div class="home2-grow"></div>
      <button class="btn-primary" data-action="create">${e?"Создать бота":"Создать сайт"}</button>
    </section>`}var ot=-1;function Rs(){let e=Y[s.briefStep],t=ot!==s.briefStep;ot=s.briefStep;let n=s.answers[e.id]??[],a=n.find(r=>r.startsWith(H)),i=Y.length;return`
    ${Fe(2,`вопрос ${s.briefStep+1} из ${i}`,s.briefStep/i)}
    ${ht()}
    <div class="row-between brief-skip"><span></span><button class="btn text inline" data-action="skip-brief">Пропустить вопросы</button></div>
    <div class="q-in${t?" fresh":""}">
      <h1 class="q-title">${p(e.title)}</h1>
      <p class="hint">${p(e.hint)}</p>
      <div class="gap"></div>
      <div class="stack">
        ${e.options.map((r,l)=>`<button class="choice${e.multi?" multi":""}${n.includes(r.id)?" on":""}" data-answer="${l}" style="--i:${l}"><span class="mark"></span>${p(r.label)}</button>`).join("")}
        <button class="choice${a?" on":""}" data-action="own" style="--i:${e.options.length}"><span class="mark"></span>${p(a?a.slice(H.length):e.ownLabel??"Свой ответ")}</button>
        ${s.ownOpen?`<textarea id="own" rows="3" maxlength="300" placeholder="Коротко, своими словами">${p(a?.slice(H.length)??"")}</textarea>`:""}
      </div>
    </div>
    <div class="gap"></div>
    <button class="btn text" data-action="next-q">Пропустить вопрос</button>
    ${Ms(e,n)}`}function Ms(e,t){if(s.ownOpen)return re("<span>Свой ответ</span>","Готово");if(e.multi){let n=t.length;return re(n?`<b class="num">Выбрано: ${n}</b>`:"<span>Можно выбрать несколько</span>","Далее",n>0)}return t.length?re("<span>Ответ выбран</span>","Далее"):""}function Cs(e){let t=Z(e);return t.billing==="fixed"?`+${f(t.price)}`:`+${f(t.price)} за стр.`}var Bs={animatedButtons:"Кнопки откликаются на нажатие",animatedCards:"Карточки услуг и товаров оживают при касании",scrollReveal:"Блоки плавно появляются при прокрутке",pageTransitions:"Страницы сменяются плавно",uniqueDesign:"Дизайн под ваш бизнес, а не готовый шаблон",copywriting:"Тексты о вашем деле напишем мы",onlinePayment:"Оплата картой прямо на сайте",adminPanel:"Сами меняете тексты, цены и фото",basicSeo:"Настройка, чтобы сайт находили в Яндексе и Google"},Ns=()=>Se(s.siteType),qe=()=>!!Ns()?.custom;function le(e,t=s.pages){let n=Et(e,t,s.answers);return s.siteType==="shop"&&e!=="simple"&&(n.onlinePayment={}),n}var js={animatedButtons:"живые кнопки",animatedCards:"живые карточки",scrollReveal:"плавное появление блоков",pageTransitions:"плавные переходы",uniqueDesign:"свой дизайн",copywriting:"тексты от DUO",onlinePayment:"оплата картой",adminPanel:"админка",basicSeo:"SEO"};function Us(e){if(e==="full")return"Все опции из прайса";let n=Object.keys(le(e)).map(a=>js[a]).join(", ");return n?n[0].toUpperCase()+n.slice(1):"Только база"}function mn(){let e=n=>Object.keys(n).filter(a=>n[a]).sort().join(","),t=e(s.options);return Ve.find(n=>e(le(n.id))===t)?.id??null}function Fe(e,t,n=.5){return`
    <div class="steps4" role="progressbar" aria-valuemin="1" aria-valuemax="4" aria-valuenow="${e}">
      ${[1,2,3,4].map(a=>`<i class="${a<e?"done":a===e?"now":""}"${a===e?` style="--f:${Math.max(.12,n)}"`:""}></i>`).join("")}
    </div>
    <span class="kicker num">Шаг ${e} из 4: ${t}</span>`}function qs(e){let t={landing:{answers:{sphere:["beauty"],style:["premium"]},kind:"services",variant:1},shop:{answers:{sphere:["shop"],goal:["sell"],action:["pay"],style:["bold"]},kind:"shop",variant:0},marketplace:{answers:{sphere:["shop"],goal:["sell"],style:["modern"]},kind:"market",variant:2},platform:{answers:{sphere:["education"],style:["cozy"]},kind:"platform",variant:0},bot:{answers:{sphere:["services"]},kind:"services",variant:0}},{answers:n,kind:a,variant:i}=t[e],r=Te(n,i),l=e==="marketplace"?Re.marketplace:e==="platform"?Re.platform:{heroTitle:r.heroTitle,cta:r.cta};return{kind:a,brand:r.brand,accent:ae[r.palette],hero:l.heroTitle,cta:l.cta,items:r.items,unique:e!=="shop",cart:e==="shop"||e==="marketplace",chat:!1,booking:e==="landing"}}function Fs(){return`
    ${Fe(1,"тип сайта")}
    <h1 class="step-h">Какой сайт вам нужен?</h1>
    <div class="types">
      ${Ye.map((e,t)=>`
        <button class="type${s.siteType===e.id?" on":""}" data-type="${e.id}" style="--d:${t*-1.6}s">
          <span class="type-phone">${we(qs(e.id),"scroll")}</span>
          <span class="type-text"><b>${p(e.title)}</b><small>${p(e.about)}</small><em class="${e.custom?"":"now"}">${e.custom?"Цена после обсуждения":"Цена сразу"}</em></span>
        </button>`).join("")}
    </div>
    <p class="hint small">Не уверены — выберите ближайший вариант. Менеджер поможет уточнить.</p>`}var fn={services:"сайт услуг",shop:"интернет-магазин",food:"сайт кафе с меню",beauty:"сайт с онлайн-записью",education:"сайт с курсами",b2b:"сайт компании",market:"маркетплейс",platform:"онлайн-школа"};function gn(){let t=(s.draft&&s.draftFor===lt()?s.draft:null)??Te(Ae(),0),n=qe(),a=n?ln():s.options,i=pt(s.answers,s.siteType),r=n&&t.by!=="ai"?Re[s.siteType==="marketplace"?"marketplace":"platform"]:{heroTitle:t.heroTitle,cta:t.cta};return{kind:i,brand:t.brand,accent:ae[t.palette],hero:r.heroTitle,cta:r.cta,items:t.items,unique:!!a.uniqueDesign,cart:(i==="shop"||i==="market"||i==="food")&&!!a.onlinePayment,chat:!n&&s.support,booking:i==="beauty"||(s.answers.action??[]).includes("book")}}function Hs(e){return[[`brand:${e.brand}`,`Название: ${e.brand}`,"brand"],[`kind:${e.kind}`,`Это ${fn[e.kind]}`,"catalog"],[`color:${e.accent}`,"Подобрали цвет","hero"],[`cta:${e.cta}`,`Кнопка «${e.cta}»`,"hero"],[`hero:${e.hero}`,"Заголовок под вашу задачу","hero"],...e.unique?[["unique","Свой дизайн первого экрана","hero"]]:[],...e.cart?[["cart","Корзина и оплата картой","cart"]]:[],...e.booking?[["booking","Запись на удобное время","booking"]]:[],...e.chat?[["chat","Чат поддержки","chat"]]:[]]}var nt=new Set,V=null,bn=()=>!!(V&&Date.now()-V.at<900);function ht(){let e=gn(),t=Hs(e),n=nt.size?t.find(([a])=>!nt.has(a)):void 0;return nt=new Set(t.map(([a])=>a)),n&&(V={text:n[1],part:n[2],at:Date.now()}),`
    <div class="live">
      <div class="live-phone">${we(e)}</div>
      <div class="live-info">
        <span class="live-label">Ваш сайт</span>
        <b>${p(e.brand??"")}</b>
        <small>${fn[e.kind]}</small>
        <span class="live-add${V?" on":""}${bn()?" show":""}">${V?`+ ${p(V.text)}`:"Меняется с каждым ответом"}</span>
      </div>
    </div>`}function Gs(){!V||!bn()||document.querySelector(`.live [data-k="${V.part}"]`)?.classList.add("lp-flash")}function Ks(){let e=he(s.answers).options.length>0,t=mn(),n=Ve.map(i=>{let r=B({pages:s.pages,options:le(i.id),urgent:!1,support:!1}).developmentTotal,l=t===i.id;return`
      <button class="pk${l?" on":""}" data-package="${i.id}" aria-pressed="${l}">
        <span class="pk-radio" aria-hidden="true"></span>
        <span class="pk-body">
          <span class="pk-head"><b>${i.title}</b>${i.id==="optimal"?`<span class="pk-tag">${e?"по вашим ответам":"советуем"}</span>`:""}</span>
          <span class="pk-about">${i.about}</span>
          <span class="pk-list">${p(Us(i.id))}</span>
        </span>
        <span class="pk-price num">${f(r)}</span>
      </button>`}).join(""),a=C.map(i=>{let r=!!s.options[i.id];return`
      <button class="opt${r?" on":""}" data-toggle="${i.id}" aria-pressed="${r}">
        <span class="opt-check" aria-hidden="true"></span>
        <span class="opt-text"><b>${p(i.title)}</b><small>${Bs[i.id]}</small></span>
        <span class="opt-price num">${Cs(i.id)}</span>
      </button>`}).join("");return`
    ${Fe(3,"пакет")}
    ${ht()}
    <h1 class="step-h">Выберите пакет</h1>
    <p class="lead">Цена за ${W(s.pages)}. В базе: адаптив, форма заявки в Telegram, подключение домена.</p>
    <div class="pks">${n}</div>
    ${t?"":'<p class="hint small pk-own">Сейчас свой набор опций — выберите пакет, чтобы начать заново.</p>'}

    <div class="pages-row">
      <span><b>Страниц на сайте</b><small>до ${v.INCLUDED_PAGES} — в базе, дальше ${f(v.EXTRA_PAGE_PRICE)} за страницу</small></span>
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
        <button class="segment${s.urgent?"":" on"}" data-urgent="0"><b>Обычный</b><span>до ${j(v.NORMAL_TERM_DAYS)}, без доплаты</span></button>
        <button class="segment${s.urgent?" on":""}" data-urgent="1"><b>Быстрее</b><span>+${v.URGENT_PERCENT}% к стоимости</span></button>
      </div>
      ${s.urgent?`<div class="days">${ue().map(i=>`<button class="day${s.urgentDays===i?" on":""}" data-days="${i}">${j(i)}</button>`).join("")}</div>`:""}
      <button class="opt switch${s.support?" on":""}" data-support aria-pressed="${s.support}">
        <span class="opt-check" aria-hidden="true"></span>
        <span class="opt-text"><b>Поддержка после запуска</b><small>Правки и помощь по сайту</small></span>
        <span class="opt-price num">${f(v.SUPPORT_MONTHLY)} в мес.</span>
      </button>
    </div>`:""}
    ${Qs("Показать мой сайт")}`}var Vs=e=>e%10===1&&e%100!==11?"функция":e%10>=2&&e%10<=4&&(e%100<12||e%100>14)?"функции":"функций";function Ys(){let e=s.siteType==="marketplace"?"marketplace":"platform";return`
    ${Fe(3,"функции")}
    ${ht()}
    <h1 class="step-h">Что должно быть в ${e==="marketplace"?"маркетплейсе":"проекте"}?</h1>
    <p class="lead">Отметьте всё, что нужно. Это не окончательно — состав и цену обсудите с менеджером.</p>
    <div class="feats">
      ${pe[e].map(t=>`<button class="feat${s.features.includes(t.id)?" on":""}" data-feature="${t.id}" aria-pressed="${s.features.includes(t.id)}"><span class="opt-check" aria-hidden="true"></span>${p(t.title)}</button>`).join("")}
    </div>
    <h2 class="sub-h">Идея своими словами</h2>
    <textarea id="about" rows="4" maxlength="1000" placeholder="Например: площадка, где мастера продают изделия ручной работы">${p(s.about)}</textarea>
    <p class="hint small">Можно пропустить.</p>
    ${re(`<b class="num">${s.features.length}</b><span>${Vs(s.features.length)} выбрано</span>`,"Показать мой сайт")}`}function Qs(e,t=!0){let n=B(M());return re(`<b class="num" id="total" data-to="${n.developmentTotal}">${f(s.shownTotal||n.developmentTotal)}</b><span>${n.supportMonthly?`и ${f(n.supportMonthly)} в месяц`:"предварительно"}</span>`,e,t)}var Ws=0;function Xs(){let e=gn();return s.ai&&s.ai.left>0&&(e.brand=null),`
    <div class="making" role="status" aria-live="polite">
      <div class="making-phone">${we(e,"build")}</div>
      <b>Собираем ваш сайт</b>
      <div class="ai-steps"><span>Придумываем название</span><span>Пишем тексты</span><span>Подбираем цвет</span></div>
    </div>`}function Ae(){let e={...s.answers},t=s.siteType==="shop"||s.siteType==="marketplace";if(!e.sphere?.length){let n=t?"shop":s.siteType==="platform"?"education":null;n&&(e.sphere=[n])}return t&&!e.goal?.length&&(e.goal=["sell"]),e}async function zs(){let e=s.ai;if(_==="ai")return await new Promise(t=>window.setTimeout(t,2200)),N($e);if(e&&e.left>0&&Tt(Ae()))try{let{draft:t,left:n}=await R("/api/draft",{input:M(),brief:Ae()});return e.left=n,N(t)}catch{}return await new Promise(t=>window.setTimeout(t,1400)),Te(Ae(),Ws++)}var st=null,lt=()=>JSON.stringify([s.siteType,s.answers]);async function hn(e=!1){if(!s.aiBusy){if(qe()||(K("calc"),q&&R("/api/quote",{input:M()}).catch(()=>{})),s.draft&&!e&&s.draftFor===lt())return h.page="home",Ce();d("soft"),s.aiBusy=!0,h.open&&oe(),st??=document.body.appendChild(document.createElement("div")),st.innerHTML=Xs();try{s.draft=await zs(),s.draftFor=lt(),d("success")}finally{s.aiBusy=!1,st.innerHTML=""}Ln(),Ce()}}function vn(){if(qe())return s.features.length||(s.features=[...We[s.siteType==="marketplace"?"marketplace":"platform"]]),k("features");Object.keys(s.options).length||(s.options=le("optimal")),k("calc")}function Js(){return`
    <h1>Поддержка DUO</h1>
    <p class="lead">Вопрос или проблема — одним сообщением. Менеджер ответит вам в Telegram.</p>
    <div class="gap"></div>
    <textarea id="support" rows="7" maxlength="1000" placeholder="Например: можно ли сделать сайт с онлайн-записью?">${p(s.supportText)}</textarea>
    ${s.error?`<div class="warn">${p(s.error)}</div>`:""}
    ${re("<span>Ответим в Telegram</span>",s.busy?"Отправляем":"Отправить",A&&!s.busy)}`}function Zs(){let e=s.sent??{title:"Готово",text:""};return`
    <div class="center">
      <div class="done-mark"><svg width="38" height="38" viewBox="0 0 40 40"><path class="tick" d="M10 21 L17 28 L30 13" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <h1>${p(e.title)}</h1>
      <p class="lead">${p(e.text)}</p>
    </div>
    <div class="gap"></div>
    <div class="stack">
      ${q||_?'<button class="btn blue" data-go="leads">На каком этапе заявка</button>':""}
      ${ie?`<button class="btn soft" data-link="${p(ie)}">Канал DUO</button>`:""}
      <button class="btn soft" data-action="home">В начало</button>
      ${A?'<button class="btn text" data-action="close">Закрыть приложение</button>':""}
    </div>`}var $n='<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 9H4M8 5 4 9l4 4"/></svg>',ct='<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 10 10 4M5 4h5v5"/></svg>',ee='<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#0B0C0E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 6.2 5 8.5l4.5-5"/></svg>';function se(e,t=!1,n=4){return`
    <div class="step-top">
      <button class="round-back" data-action="back" aria-label="Назад">${$n}</button>
      <span class="num">Шаг ${e} из ${n}</span>
      ${t?'<button class="skip" data-action="skip-sphere">Пропустить</button>':'<span class="sp44"></span>'}
    </div>
    <div class="seg4 step-seg" style="grid-template-columns:repeat(${n},minmax(0,1fr))">${Array.from({length:n},(a,i)=>`<i class="${i<e?"done":""}"></i>`).join("")}</div>`}function yn(e,t="bar-action"){let n=B(M());return`
    <div class="pricebar">
      <span><b class="num" id="total" data-to="${n.developmentTotal}">${f(s.shownTotal||n.developmentTotal)}</b><small>предварительно</small></span>
      <button class="btn-primary" id="${t}">${e}</button>
    </div>`}var ea=[["services","Услуги и сервис"],["shop","Магазин и товары"],["food","Кафе, еда, доставка"],["beauty","Красота и здоровье"],["education","Обучение и экспертность"],["b2b","Компания для бизнеса"],[`${H}Другое`,"Другое"]];function ta(){let e=s.answers.sphere?.[0];return`
    ${se(1,!0)}
    <h1 class="step-title">Чем вы занимаетесь?</h1>
    <p class="step-lead">Подберём блоки сайта под вашу сферу.</p>
    <div class="panel list" role="radiogroup" aria-label="Сфера бизнеса">
      ${ea.map(([t,n])=>`
        <button class="row radio${e===t?" on":""}" role="radio" aria-checked="${e===t}" data-sphere="${p(t)}">
          <span>${n}</span><span class="dot" aria-hidden="true">${e===t?ee:""}</span>
        </button>`).join("")}
    </div>
    <div class="stepbar"><button class="btn-primary" id="bar-action"${e?"":" disabled"}>Далее</button></div>`}var na=["Главная","Услуги и цены","Контакты","О нас","Портфолио","Отзывы","Блог","Вопросы и ответы"],Tn=12;function sa(){let e=s.pages,t=v.INCLUDED_PAGES;return`
    ${se(2)}
    <h1 class="step-title">Сколько страниц?</h1>
    <p class="step-lead">${t===3?"Три страницы":W(t)} входят в базу. Каждая следующая +${f(v.EXTRA_PAGE_PRICE)}.</p>
    <div class="panel glass pages2">
      <div class="pages2-head">
        <span>Страниц на сайте</span>
        <span class="stepper2">
          <button data-pages="-1" aria-label="Меньше страниц"${e<=1?" disabled":""}>−</button>
          <b class="num" aria-live="polite">${e}</b>
          <button class="plus" data-pages="1" aria-label="Больше страниц"${e>=Tn?" disabled":""}>+</button>
        </span>
      </div>
      <ol class="pages2-list">
        ${Array.from({length:e},(n,a)=>`<li><span class="num">${String(a+1).padStart(2,"0")}</span><span>${na[a]??`Страница ${a+1}`}</span><em class="${a>=t?"extra":""}">${a>=t?`+${f(v.EXTRA_PAGE_PRICE)}`:"в базе"}</em></li>`).join("")}
      </ol>
    </div>
    <p class="step-note">Названия примерные: состав страниц уточним вместе.</p>
    <button class="text-link" data-href="${bt}">Посмотреть примеры сайтов ${ct}</button>
    ${yn("Далее")}`}var Sn=[{title:"Анимация",items:[{id:"animatedButtons",name:"Анимированные кнопки",desc:"Кнопки плавно реагируют на наведение и нажатие."},{id:"animatedCards",name:"Анимированные плашки",desc:"Карточки и плашки мягко двигаются и подсвечиваются."},{id:"scrollReveal",name:"Появление блоков",desc:"Блоки плавно появляются при прокрутке страницы."},{id:"pageTransitions",name:"Переходы между страницами",desc:"Плавная смена страниц вместо резкого перехода."}]},{title:"Дизайн и тексты",items:[{id:"uniqueDesign",name:"Уникальный дизайн",desc:"Рисуем дизайн под ваш бизнес: свои цвета, шрифты и расположение блоков. Без опции сайт собирается на аккуратном готовом шаблоне."},{id:"copywriting",name:"Тексты от нас",desc:"Пишем тексты для страниц сами, по вашим ответам."}]},{title:"Функции",items:[{id:"onlinePayment",name:"Онлайн-оплата",desc:"Оплата картой прямо на сайте."},{id:"adminPanel",name:"Админка",desc:"Меняйте тексты, цены и фото сами, без нас."},{id:"basicSeo",name:"Базовое SEO",desc:"Базовая настройка, чтобы сайт находили в поиске."}]}],aa=e=>Sn.flatMap(t=>t.items).find(t=>t.id===e)?.name??Z(e).title;function He(e,t,n){return`<button class="switch${e?" on":""}" role="switch" aria-checked="${e}" aria-label="${p(n)}" ${t}><span></span></button>`}function ia(){return`
    ${se(3)}
    <h1 class="step-title">Что добавить?</h1>
    <p class="step-lead">Всё необязательно. Нажмите на название, чтобы узнать, что даёт опция.</p>
    <div class="opt-groups">
      ${Sn.map(e=>`
        <div class="opt-group">
          <span class="label">${e.title}</span>
          <div class="panel list">
            ${e.items.map(t=>{let n=s.options[t.id],a=!!n,i=Z(t.id).billing==="perPage",r=s.openOpt===t.id;return`
                <div class="opt2${a?" on":""}">
                  <div class="opt2-row">
                    <button class="opt2-name" data-open-opt="${t.id}" aria-expanded="${r}"><span>${t.name}</span><small class="num">+${f(Z(t.id).price)}${i?" за страницу":""}</small></button>
                    ${He(a,`data-toggle="${t.id}"`,t.name)}
                  </div>
                  ${r?`<p class="opt2-desc">${t.desc}</p>`:""}
                  ${a&&i?`<div class="opt2-count"><span>На скольких страницах</span><span class="mini-stepper"><button data-opt-pages="${t.id}:-1" aria-label="Меньше"${(n?.pages??1)<=1?" disabled":""}>−</button><b class="num">${n?.pages??s.pages}</b><button data-opt-pages="${t.id}:1" aria-label="Больше"${(n?.pages??1)>=s.pages?" disabled":""}>+</button></span></div>`:""}
                </div>`}).join("")}
          </div>
        </div>`).join("")}
    </div>
    ${yn("Далее")}`}function kn(){let e=B(M()),t=e.lines.map(n=>n.kind==="base"?{name:`База, до ${n.includedPages} ${n.includedPages===1?"страницы":"страниц"}`,sum:f(n.amount)}:n.kind==="extraPages"?{name:`Ещё ${W(n.count)}`,sum:f(n.amount)}:{name:`${aa(n.optionId)}${n.billing==="perPage"&&n.pages?` · ${n.pages} стр.`:""}`,sum:f(n.amount)});return e.urgent&&t.push({name:`Срочно, до ${j(v.CUSTOM_TERM_MIN_DAYS)} · +${e.urgentPercent}%`,sum:f(e.urgentSurcharge)}),t}var ra='<svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13V3M6 6.5 10 2.5l4 4M4 10v6.5h12V10"/></svg>';function oa(){let e=B(M()),t=new Date().toLocaleDateString("ru-RU",{day:"numeric",month:"long",year:"numeric"}),n=s.sentLead;return`
    ${se(4)}
    <h1 class="step-title">Ваш расчёт</h1>
    <div class="check2">
      <div class="check2-meta"><span>Сайт · ${W(s.pages)}</span><span>${t.replace(" г.","")}</span></div>
      <div class="check2-rows">${kn().map(a=>`<div><span>${p(a.name)}</span><span class="num">${a.sum}</span></div>`).join("")}</div>
      <hr>
      <div class="check2-total"><span>Итого</span><b class="num">${f(e.developmentTotal)}</b></div>
      ${e.supportMonthly?`<div class="check2-support">+ поддержка ${f(e.supportMonthly)} в месяц</div>`:""}
      <p>Домен и хостинг оплачиваются отдельно. Итоговую сумму уточним в разговоре.</p>
    </div>
    <span class="label sum-label">Срок</span>
    <div class="seg-term" role="radiogroup" aria-label="Срок">
      <button role="radio" aria-checked="${!s.urgent}" class="${s.urgent?"":"on"}" data-urgent="0"><b>Обычный</b><small>до ${j(v.NORMAL_TERM_DAYS)}</small></button>
      <button role="radio" aria-checked="${s.urgent}" class="${s.urgent?"on":""}" data-urgent="1"><b>Срочно</b><small>до ${j(v.CUSTOM_TERM_MIN_DAYS)} · +${v.URGENT_PERCENT}%</small></button>
    </div>
    <div class="panel switch-line">
      <span><b>Поддержка после запуска</b><small>${f(v.SUPPORT_MONTHLY)} в месяц</small></span>
      ${He(s.support,"data-support","Поддержка после запуска")}
    </div>
    <button class="btn-ghost" data-action="share">${ra} Поделиться расчётом</button>
    <div class="send-area">
      ${n?`<div class="sent-box">${ee.replace("#0B0C0E","#B9CCFF")} Заявка № ${n} отправлена</div>
             <button class="text-link center" data-tab="status">Смотреть статус заявки →</button>`:`<label class="consent2${s.consentError?" error":""}">
               <input type="checkbox" id="consent"${s.consent?" checked":""}>
               <span class="box" aria-hidden="true">${ee}</span>
               <span>Даю согласие на обработку персональных данных. <button class="link" data-privacy>Политика</button></span>
             </label>
             ${s.error?`<div class="warn">${p(s.error)}</div>`:""}
             ${A?"":'<p class="step-note center">Отправить заявку можно, открыв приложение из бота DUO.</p>'}
             <button class="btn-primary" id="bar-action"${!A||s.busy||!s.consent?" disabled":""}>${s.busy?"Отправляем":"Отправить заявку"}</button>`}
      <span class="step-note center">Данил или Денис напишут вам в Telegram</span>
    </div>`}function la(){let e=B(M());return["Мой предварительный расчёт сайта в DUO","",`Сайт · ${W(s.pages)}`,...kn().map(t=>`· ${t.name} — ${t.sum}`),"",`Итого: ${f(e.developmentTotal)}`,...e.supportMonthly?[`Поддержка: ${f(e.supportMonthly)} в месяц`]:[],"","Посчитать свой сайт — в боте @duodevops_bot"].join(`
`)}function ca(){d();let e=`https://t.me/share/url?url=${encodeURIComponent(ut)}&text=${encodeURIComponent(la())}`;A&&g?.openTelegramLink?g.openTelegramLink(e):window.open(e,"_blank")}var da={received:"Скоро напишем вам в Telegram",discussing:"Уточняем детали и итоговую цену",inProgress:"Делаем дизайн и страницы",review:"Показываем результат на согласование",done:"Сайт запущен"};function ua(){let e=r=>new Date(r).toLocaleDateString("ru-RU",{day:"numeric",month:"long"});if(!s.leads)return'<h1 class="page-title">Ваша заявка</h1><div class="lead2 skeleton"></div>';if(!s.leads.length)return`
      <h1 class="page-title">Ваша заявка</h1>
      <div class="panel empty2">
        <b>Заявок пока нет</b>
        <p>Посчитайте сайт за пару минут — здесь будет видно, на каком этапе работа.</p>
        <button class="btn-primary" data-action="create">${s.product==="bot"?"Создать бота":"Создать сайт"}</button>
      </div>`;let[t,...n]=s.leads,a=t.stageIndex<0,i=Kt.map((r,l)=>{let u=a?"next":l<t.stageIndex||l===t.stageIndex&&l===Kt.length-1?"done":l===t.stageIndex?"now":"next",b=l===0?e(t.createdAt):da[r.id]??"";return`<li class="st-${u}"><span class="st-dot" aria-hidden="true">${u==="done"?ee.replace("#0B0C0E","#fff"):""}</span><div><b>${p(r.title)}</b><small>${p(b)}</small></div></li>`}).join("");return`
    <h1 class="page-title">Ваша заявка</h1>
    <div class="lead2">
      <div class="lead2-top"><span class="num">№ ${String(t.id).padStart(4,"0")} · ${e(t.createdAt)}</span><span class="badge">${p(t.stageTitle)}</span></div>
      <div class="lead2-main">
        <span><b>${p(t.title??"Сайт")}</b><small>${p((t.items??[]).join(", ")||"Без опций")}</small></span>
        <span class="lead2-sum">${t.custom?"<b>после обсуждения</b>":`<b class="num">${f(t.total)}</b>`}<small>предварительно</small></span>
      </div>
    </div>
    ${a?'<p class="step-note">Заявка отменена. Напишите нам, если хотите вернуться к ней.</p>':`<span class="label sum-label">Этапы</span><ol class="stages2">${i}</ol>`}
    ${n.length?`<span class="label sum-label">Другие заявки</span><div class="panel list">${n.map(r=>`<div class="row"><span>№ ${String(r.id).padStart(4,"0")} · ${e(r.createdAt)}</span><em>${p(r.stageTitle)}</em></div>`).join("")}</div>`:""}
    <button class="btn-ghost" data-href-tg="${ut}">Написать нам в Telegram</button>`}function pa(){let e=(t,n,a)=>`<button class="row link-row" ${a}><span><b>${t}</b><small>${p(n)}</small></span>${ct}</button>`;return`
    <h1 class="page-title">Контакты</h1>
    <span class="label sum-label">Наши работы</span>
    <button class="row-card" data-href="${bt}"><span>Все работы в портфолио</span>${ct}</button>
    <span class="label sum-label">Связаться</span>
    <div class="panel list">
      ${e("Telegram-бот","@duodevops_bot",`data-href-tg="${ut}"`)}
      ${ie?e("Telegram-канал",ie.replace(/^https?:\/\//,""),`data-href-tg="${p(ie)}"`):""}
      ${e("Instagram","@duo_devops",'data-href="https://instagram.com/duo_devops"')}
      ${e("Задать вопрос","Ответим в Telegram",'data-go="support"')}
    </div>
    <div class="team">
      <div><b>Данил</b><small>Дизайн и общение с клиентами</small></div>
      <div><b>Денис</b><small>Код, хостинг и поддержка</small></div>
    </div>`}var Zt='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"/></svg>',wn='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="3"/><path d="M3.5 9h17"/></svg>',xn='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 4.5 3.8 11.2c-.8.3-.8 1.4 0 1.7l4 1.4 1.6 4.8c.2.7 1.1.9 1.6.4l2.3-2.2 4 3c.6.4 1.4.1 1.6-.6l2.9-13.6c.2-.9-.6-1.6-1.3-1.2Z"/><path d="m8 14.2 9-6.2"/></svg>';function ma(){return`
    <div class="step-top">
      <button class="round-back" data-action="back" aria-label="Назад">${$n}</button>
      <span class="num">Новый проект</span>
      <span class="sp44"></span>
    </div>
    <h1 class="step-title">Что хотите создать?</h1>
    <p class="step-lead">Выберите — дальше несколько коротких вопросов.</p>
    <div class="panel list create-list">
      <button class="row create-row" data-create="site">
        <span class="create-ico">${wn}</span>
        <span class="create-text"><b>Сайт</b><small>Лендинг, магазин, сайт компании</small><em class="now">Цена сразу</em></span>
        ${Zt}
      </button>
      <button class="row create-row" data-create="bot">
        <span class="create-ico">${xn}</span>
        <span class="create-text"><b>Telegram-бот</b><small>Заявки, запись, магазин, рассылки</small><em class="now">Цена сразу</em></span>
        ${Zt}
      </button>
    </div>`}function fa(){return`
    ${se(1,!1,3)}
    <h1 class="step-title">Для чего нужен бот?</h1>
    <p class="step-lead">Выберите главное — функции добавите на следующем шаге.</p>
    <div class="panel list" role="radiogroup" aria-label="Для чего бот">
      ${Qe.map(e=>`
        <button class="row radio tall${s.botKind===e.id?" on":""}" role="radio" aria-checked="${s.botKind===e.id}" data-bot-kind="${e.id}">
          <span class="row-text"><b>${e.title}</b><small>${e.about}</small></span><span class="dot" aria-hidden="true">${s.botKind===e.id?ee:""}</span>
        </button>`).join("")}
    </div>
    <div class="stepbar"><button class="btn-primary" id="bar-action"${s.botKind?"":" disabled"}>Далее</button></div>`}var en=e=>pe.bot.find(t=>t.id===e),En=()=>It({features:s.features,urgent:s.botUrgent,support:s.botSupport});function ga(e){let t=En();return`
    <div class="pricebar">
      <span><b class="num">${t.from?"от ":""}<span id="total" data-to="${t.developmentTotal}">${f(s.shownTotal||t.developmentTotal)}</span></b><small>предварительно</small></span>
      <button class="btn-primary" id="bar-action">${e}</button>
    </div>`}function ba(){let e=s.features.length;return`
    ${se(2,!1,3)}
    <h1 class="step-title">Что должен уметь бот?</h1>
    <p class="step-lead">Отметили обычное для такого бота — добавьте или уберите. База ${f(x.BASE_PRICE)}: меню, ответы на вопросы, заявки вам в Telegram.</p>
    <div class="opt-groups">
      ${Lt.map(t=>`
        <div class="opt-group">
          <span class="label">${t.title}</span>
          <div class="panel list">
            ${t.ids.map(n=>{let a=s.features.includes(n),i=ke(n),r=i?`+${x.FROM_PRICE.includes(n)?"от ":""}${f(i)}`:"в базе";return`<div class="opt2${a?" on":""}"><div class="opt2-row"><span class="opt2-name"><span>${p(en(n).title)}</span><small class="num">${r}</small></span>${He(a,`data-feature="${n}"`,en(n).title)}</div></div>`}).join("")}
          </div>
        </div>`).join("")}
    </div>
    ${ga("Далее")}`}function ha(){let e=Qe.find(i=>i.id===s.botKind),t=En(),n=new Date().toLocaleDateString("ru-RU",{day:"numeric",month:"long",year:"numeric"}).replace(" г.",""),a=s.sentLead;return`
    ${se(3,!1,3)}
    <h1 class="step-title">Ваш бот</h1>
    <div class="check2">
      <div class="check2-meta"><span>Telegram-бот</span><span>${n}</span></div>
      <div class="check2-rows">
        <div><span>База: ${p(e?.title.toLowerCase()??"бот")}</span><span class="num">${f(t.base)}</span></div>
        ${t.lines.map(i=>`<div><span>${p(i.title)}</span><span class="num">${i.from?"от ":""}${f(i.amount)}</span></div>`).join("")}
        ${t.urgent?`<div><span>Срочно, до ${j(x.URGENT_TERM_DAYS)} · +${t.urgentPercent}%</span><span class="num">${f(t.urgentSurcharge)}</span></div>`:""}
      </div>
      <hr>
      <div class="check2-total"><span>Итого</span><b class="num">${t.from?"<small>от</small> ":""}${f(t.developmentTotal)}</b></div>
      ${t.supportMonthly?`<div class="check2-support">+ поддержка ${f(t.supportMonthly)} в месяц</div>`:""}
      <p>Сервер для бота оплачивается отдельно, обычно ${x.SERVER_MONTHLY_FROM}–${x.SERVER_MONTHLY_TO} ₽ в месяц. Итоговую сумму уточним в разговоре.</p>
    </div>
    <span class="label sum-label">Срок</span>
    <div class="seg-term" role="radiogroup" aria-label="Срок">
      <button role="radio" aria-checked="${!s.botUrgent}" class="${s.botUrgent?"":"on"}" data-bot-urgent="0"><b>Обычный</b><small>до ${j(x.NORMAL_TERM_DAYS)}</small></button>
      <button role="radio" aria-checked="${s.botUrgent}" class="${s.botUrgent?"on":""}" data-bot-urgent="1"><b>Срочно</b><small>до ${j(x.URGENT_TERM_DAYS)} · +${x.URGENT_PERCENT}%</small></button>
    </div>
    <div class="panel switch-line">
      <span><b>Поддержка после запуска</b><small>${f(x.SUPPORT_MONTHLY)} в месяц</small></span>
      ${He(s.botSupport,"data-bot-support","Поддержка после запуска")}
    </div>
    <span class="label sum-label">Идея своими словами</span>
    <textarea id="about" rows="4" maxlength="1000" placeholder="Например: бот для записи в барбершоп, 3 мастера, напоминание за день">${p(s.about)}</textarea>
    <div class="send-area">
      ${a?`<div class="sent-box">${ee.replace("#0B0C0E","#B9CCFF")} Заявка № ${a} отправлена</div>
             <button class="text-link center" data-tab="status">Смотреть статус заявки →</button>`:`<label class="consent2${s.consentError?" error":""}">
               <input type="checkbox" id="consent"${s.consent?" checked":""}>
               <span class="box" aria-hidden="true">${ee}</span>
               <span>Даю согласие на обработку персональных данных. <button class="link" data-privacy>Политика</button></span>
             </label>
             ${s.error?`<div class="warn">${p(s.error)}</div>`:""}
             ${A?"":'<p class="step-note center">Отправить заявку можно, открыв приложение из бота DUO.</p>'}
             <button class="btn-primary" id="bar-action"${!A||s.busy||!s.consent?" disabled":""}>${s.busy?"Отправляем":"Отправить заявку"}</button>`}
      <span class="step-note center">Данил или Денис напишут вам в Telegram</span>
    </div>`}var te="duo-progress-v1",va=30;function Ln(){let e=s.screen;if(!(e in vt)||s.sentLead)return;let t={v:1,at:Date.now(),screen:e,siteType:s.siteType,botKind:s.botKind,botUrgent:s.botUrgent,botSupport:s.botSupport,features:s.features,about:s.about,answers:s.answers,briefStep:s.briefStep,briefComplete:s.briefComplete,pages:s.pages,options:s.options,urgent:s.urgent,urgentDays:s.urgentDays,support:s.support,draft:s.draft,draftFor:s.draftFor,name:s.name};try{localStorage.setItem(te,JSON.stringify(t))}catch{}let n=JSON.stringify({...t,draft:null});try{n.length<4e3&&g?.CloudStorage?.setItem(te,n)}catch{}}function Ge(){try{let e=JSON.parse(localStorage.getItem(te)??"null");return!e||e.v!==1||Date.now()-e.at>va*864e5?null:e}catch{return null}}function Pn(){try{g?.CloudStorage?.removeItem(te)}catch{}try{localStorage.removeItem(te)}catch{}}function In(e){Object.assign(s,{siteType:Se(e.siteType)?e.siteType:null,botKind:e.botKind??null,botUrgent:!!e.botUrgent,botSupport:!!e.botSupport,features:e.features??[],about:e.about??"",answers:e.answers??{},briefStep:Math.min(Math.max(0,e.briefStep),Y.length-1),briefComplete:!!e.briefComplete,pages:e.pages,options:e.options??{},urgent:!!e.urgent,urgentDays:e.urgentDays,support:!!e.support,name:e.name||s.name});try{s.draft=e.draft?N(e.draft):null,s.draftFor=e.draftFor??"",B(M())}catch{s.pages=3,s.options={},s.urgent=!1,s.draft=null}let t=vt[e.screen]?e.screen:"sphere",n=t.startsWith("bot")?["botKind","botFeatures","botSummary"]:["sphere","pages","options","summary"];s.product=t.startsWith("bot")?"bot":"site",s.history=["home",...n.slice(0,n.indexOf(t))],k(t,!1)}function $a(e){return{sphere:"Сфера",pages:"Страницы",options:"Опции",summary:"Итог",botKind:"Для чего бот",botFeatures:"Функции",botSummary:"Заявка"}[e.screen]??"Сфера"}var vt={sphere:1,pages:2,options:3,summary:4,botKind:1,botFeatures:2,botSummary:3},ya=e=>e.startsWith("bot")?3:4;function Ta(){let e=Ge();if(!e)return"";let t=vt[e.screen]??1,n=ya(e.screen);return`
    <button class="resume2" data-action="resume">
      <span class="resume2-top">
        <span><b>${e.screen.startsWith("bot")?"Продолжить: Telegram-бот":"Продолжить расчёт"}</b><small>Шаг ${t} из ${n} · ${p($a(e))}</small></span>
        <span class="round-btn" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg></span>
      </span>
      <span class="seg4" style="grid-template-columns:repeat(${n},minmax(0,1fr))">${Array.from({length:n},(a,i)=>`<i class="${i<t?"done":""}"></i>`).join("")}</span>
    </button>`}function Sa(){if(On.includes(s.screen))return"";let e=s.screen==="desk"||s.screen==="deskLead";return`
    <header class="appbar">
      <button class="appbar-home" data-action="home" aria-label="На главную"><img src="duo-logo-white.svg" alt="duo" class="appbar-logo"></button>
      <span class="appbar-actions">
        ${s.isAdmin&&!e?`<button class="admin-btn" data-go="desk">Админ${s.adminCounts?.fresh?`<i class="num">${s.adminCounts.fresh}</i>`:""}</button>`:""}
        ${s.screen==="home"?`<button class="pill-link" data-href="${bt}">Наши работы</button>`:""}
      </span>
    </header>`}var ka=[{id:"home",label:"Главная",icon:'<path d="M4 10.5L12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z"/>'},{id:"site",label:"Создать",icon:'<rect x="3.5" y="4.5" width="17" height="15" rx="3"/><path d="M3.5 9h17M12 12.5v4M10 14.5h4"/>'},{id:"status",label:"Заявка",icon:'<circle cx="12" cy="12" r="8.5"/><path d="M8.3 12.2l2.6 2.6 4.9-5.3"/>'},{id:"contacts",label:"Контакты",icon:'<path d="M5 18.5V7a2.5 2.5 0 0 1 2.5-2.5h9A2.5 2.5 0 0 1 19 7v6.5a2.5 2.5 0 0 1-2.5 2.5H8.5z"/><path d="M9 9.5h6M9 12.5h4"/>'}],Be={home:"home",create:"site",botKind:"site",botFeatures:"site",botSummary:"site",sphere:"site",pages:"site",options:"site",summary:"site",type:"site",brief:"site",calc:"site",features:"site",leads:"status",sent:"contacts",support:"contacts",contacts:"contacts"},On=["create","botKind","botFeatures","botSummary","sphere","pages","options","summary"];function wa(){let e=Be[s.screen];return e?`
    <nav class="tabbar" aria-label="Меню приложения">
      ${ka.map(t=>`<button class="tab${t.id===e?" on":""}" data-tab="${t.id}" aria-label="${t.label}"${t.id===e?' aria-current="page"':""}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${t.icon}</svg>
          ${t.id===e?`<span>${t.label}</span>`:""}
        </button>`).join("")}
    </nav>`:""}function Dn(e){if(!(Be[s.screen]===e&&e!=="site")){if(d("select"),e==="home")return s.history=[],k("home",!1);if(e==="site")return Be[s.screen]==="site"?void 0:un();if(s.history=["home"],e==="status")return _n();k("contacts",!1)}}function $(){let e={home:As,type:Fs,brief:Rs,calc:Ks,features:Ys,summary:oa,support:Js,sent:Zs,leads:ua,start:_s,create:ma,botKind:fa,botFeatures:ba,botSummary:ha,sphere:ta,pages:sa,options:ia,contacts:pa,desk:qt,deskLead:Ht};P.innerHTML=Sa()+e[s.screen]()+wa(),P.classList.toggle("with-tabs",!!Be[s.screen]),P.classList.toggle("step",On.includes(s.screen)),P.dataset.screen=s.screen,Gs(),s.screen==="home"||s.screen==="start"?g?.BackButton.hide():g?.BackButton.show(),g?.MainButton.hide();let t=s.screen==="brief"?s.ownOpen?La:Ne:s.screen==="botKind"?()=>{d(),K("briefDone"),k("botFeatures")}:s.screen==="botFeatures"?()=>{d(),K("calc"),k("botSummary")}:s.screen==="botSummary"?nn:s.screen==="sphere"?()=>{d(),K("briefDone"),k("pages")}:s.screen==="pages"?()=>{d(),k("options")}:s.screen==="options"?()=>{d(),K("calc"),k("summary"),q&&R("/api/quote",{input:M()}).catch(()=>{})}:s.screen==="summary"?nn:s.screen==="support"?Ia:null,n=document.getElementById("bar-action");n&&t&&(n.onclick=t);let a=document.getElementById("total");if(a){let i=Number(a.dataset.to);a.dataset.cur=String(s.shownTotal||i),xa(a,i),s.shownTotal=i}Ln(),s.screen==="brief"&&K("brief",s.briefStep+1),s.screen==="sphere"&&K("brief",1),s.screen==="sent"&&s.sent?.confetti&&(s.sent.confetti=!1,window.setTimeout(Ea,180))}function xa(e,t){let n=Number(e.dataset.cur??t);if(e.dataset.cur=String(t),n===t||ne()){e.textContent=f(t);return}e.classList.remove("bump"),e.offsetWidth,e.classList.add("bump");let a=performance.now(),i=r=>{let l=Math.min(1,(r-a)/480),u=1-(1-l)**3;e.textContent=f(Math.round(n+(t-n)*u)),l<1&&e.dataset.cur===String(t)&&requestAnimationFrame(i)};requestAnimationFrame(i)}function Ea(){if(ne())return;let e=document.createElement("canvas");e.className="confetti",document.body.appendChild(e);let t=e.getContext("2d");if(!t)return e.remove();let n=Math.min(2,window.devicePixelRatio||1),a=window.innerWidth,i=window.innerHeight;e.width=a*n,e.height=i*n,t.scale(n,n);let r=["#3b82f6","#3b82f6","#0b0b0b","#ffffff"],l=document.documentElement.dataset.theme==="dark",u=Array.from({length:120},()=>{let I=-Math.PI/2+(Math.random()-.5)*2.2,F=6+Math.random()*9;return{x:a/2+(Math.random()-.5)*40,y:Math.min(200,i*.28),vx:Math.cos(I)*F,vy:Math.sin(I)*F,s:5+Math.random()*6,r:Math.random()*Math.PI,vr:(Math.random()-.5)*.4,c:r[Math.floor(Math.random()*r.length)],round:Math.random()<.3}}),b=performance.now(),y=I=>{let F=I-b;t.clearRect(0,0,a,i);let An=F<1100?1:Math.max(0,1-(F-1100)/500);for(let w of u)w.vy+=.32,w.vx*=.985,w.vy*=.985,w.x+=w.vx,w.y+=w.vy,w.r+=w.vr,t.save(),t.globalAlpha=An,t.translate(w.x,w.y),t.rotate(w.r),t.fillStyle=w.c,t.strokeStyle=l?"rgba(255,255,255,.25)":"rgba(11,11,11,.12)",t.lineWidth=1,t.beginPath(),w.round?t.arc(0,0,w.s/2,0,Math.PI*2):t.rect(-w.s/2,-w.s/4,w.s,w.s/2),t.fill(),t.stroke(),t.restore();F<1600?requestAnimationFrame(y):e.remove()};requestAnimationFrame(y)}function Ne(){s.ownOpen=!1,s.briefStep<Y.length-1?(s.briefStep+=1,$(),window.scrollTo({top:0})):(K("briefDone"),s.briefComplete||(s.briefComplete=!0,d("success")),vn())}var tn="";function K(e,t){let n=`${e}:${t??""}`;!q||n===tn||(tn=n,R("/api/track",{step:e,...t?{question:t}:{}}).catch(()=>{}))}function La(){let e=Y[s.briefStep],t=document.getElementById("own")?.value.trim()??"",n=e.multi?(s.answers[e.id]??[]).filter(a=>!a.startsWith(H)&&a!=="nothing"&&a!=="unknown"):[];t&&(s.answers[e.id]=[...n,`${H}${t}`]),d("select"),Ne()}function nn(){let e=s.name.trim();if(!s.consent)return d("error"),s.consentError=!0,s.error="Отметьте согласие на обработку персональных данных — без него заявку отправить нельзя.",$();if(!(!g||!A||s.busy)){if(q){d(),s.busy=!0,$();let t=s.screen==="botSummary",n=t;(t?R("/api/project",{project:{type:"bot",kind:s.botKind,features:s.features,about:s.about,urgent:s.botUrgent,support:s.botSupport},brief:s.answers,name:e,consent:!0,...s.draft?{draft:s.draft}:{}}):R("/api/lead",{input:M(),brief:s.answers,name:e,consent:!0,...s.draft?{draft:s.draft}:{}})).then(({leadId:i})=>{d("success"),s.sentLead=i,Pn(),s.leads=null,Pa()}).catch(i=>{s.error=i.message,d("error")}).finally(()=>{s.busy=!1,(s.screen==="summary"||s.screen==="botSummary")&&$()});return}s.error="Откройте приложение кнопкой «Открыть» в боте DUO и отправьте заявку ещё раз.",$()}}function Pa(){if(!(!g?.requestWriteAccess||g.initDataUnsafe.user?.allows_write_to_pm)&&!(g.isVersionAtLeast&&!g.isVersionAtLeast("6.9")))try{g.requestWriteAccess()}catch{}}function Ia(){let e=document.getElementById("support")?.value.trim()??"";if(s.supportText=e,!e)return d("error"),s.error="Напишите сообщение.",$();if(!(!g||!A||s.busy)){if(q){d(),s.busy=!0,$(),R("/api/support",{text:e}).then(()=>{d("success"),s.sent={title:"Сообщение отправлено",text:"Менеджер DUO ответит вам в Telegram, в чате с ботом."},s.supportText="",s.history=["home"],k("sent",!1)}).catch(t=>{s.error=t.message,d("error")}).finally(()=>{s.busy=!1,s.screen==="support"&&$()});return}s.error="Откройте приложение кнопкой «Открыть» в боте DUO и отправьте сообщение ещё раз.",$()}}function Oa(e){s.options[e]?(delete s.options[e],d("select")):(s.options[e]=Z(e).billing==="perPage"?{pages:s.pages}:{},d("soft"))}function Da(){let e=Date.now();return[{id:42,createdAt:new Date(e-864e5*2).toISOString(),total:11500,stage:"discussing",stageIndex:1,stageTitle:"Обсуждаем проект",stageNote:"Уточняем детали.",title:"Сайт · 3 страницы",items:["Появление блоков при прокрутке"]},{id:17,createdAt:new Date(e-864e5*30).toISOString(),total:13e3,stage:"done",stageIndex:4,stageTitle:"Готово",stageNote:"Сайт готов. Спасибо, что выбрали DUO!",title:"Сайт · 3 страницы",items:[]}]}function _n(){if(s.leads=null,s.stageVideo=null,k("leads"),!q){window.setTimeout(()=>{s.leads=_==="leads"?Da():[],s.screen==="leads"&&$()},350);return}R("/api/leads").then(({leads:e})=>s.leads=e).catch(()=>s.leads=[]).finally(()=>s.screen==="leads"&&$())}P.addEventListener("click",e=>{let t=e.target;if((s.screen==="desk"||s.screen==="deskLead")&&Gt(t))return;let n=t.closest("button, [data-toggle], [data-action]");if(!n)return;let a=n.dataset;if(a.tab)return Dn(a.tab);if(a.action==="back")return d(),ce();if(a.product){d("select"),s.product=a.product;try{localStorage.setItem("duo-product",s.product)}catch{}return s.screen==="start"?(s.history=[],k("home",!1)):$()}if(a.action==="create")return d(),un();if(a.create)return d(),k(a.create==="bot"?"botKind":"sphere");if(a.botUrgent!==void 0)return d("select"),s.botUrgent=a.botUrgent==="1",$();if(a.botSupport!==void 0)return d("select"),s.botSupport=!s.botSupport,$();if(a.botKind)return d("select"),s.botKind!==a.botKind&&(s.features=[...Pt[a.botKind]??We.bot]),s.botKind=a.botKind,$();if(a.sphere)return d("select"),s.answers.sphere=[a.sphere],$();if(a.action==="skip-sphere")return d(),k("pages");if(a.openOpt)return d(),s.openOpt=s.openOpt===a.openOpt?null:a.openOpt,$();if(a.optPages){let[i,r]=a.optPages.split(":"),l=s.options[i];return l?.pages&&(s.options[i]={pages:Math.min(s.pages,Math.max(1,l.pages+Number(r)))}),d("select"),$()}if(a.hrefTg)return d(),g?.openTelegramLink?g.openTelegramLink(a.hrefTg):void window.open(a.hrefTg,"_blank");if(a.action==="share")return ca();if(a.href)return d(),g?.openLink?g.openLink(a.href):void window.open(a.href,"_blank");if(a.type){d("select");let i=s.siteType!==a.type;s.siteType=a.type,i&&(s.options={},s.features=[]),$(),window.setTimeout(()=>{s.briefStep=0,k("brief")},220);return}if(a.feature)return d("select"),s.features=s.features.includes(a.feature)?s.features.filter(i=>i!==a.feature):[...s.features,a.feature],$();if(a.action==="custom")return d(),s.custom=!s.custom,$();if(a.go)return d(),a.go==="brief"&&(s.briefStep=0),a.go==="leads"?_n():a.go==="desk"?De():k(a.go);if(a.privacy!==void 0){let i="https://danildenis.github.io/duo-app/privacy.html";return g?.openLink?g.openLink(i):void window.open(i,"_blank")}if(a.action==="example")return void hn();if(a.action==="resume"){let i=Ge();return d(),i?In(i):$()}if(a.action==="restart")return d(),Pn(),pn(),$();if(a.action==="ai-brief")return d(),s.briefStep=0,k("brief");if(a.video){d();let i=Number(a.video);return s.stageVideo=s.stageVideo===i?null:i,$()}if(a.action==="home")return s.screen==="home"?window.scrollTo({top:0,behavior:"smooth"}):(d(),s.history=[],k("home",!1));if(a.action==="close")return g?.close();if(a.package)return d("select"),s.options=le(a.package),$();if(a.link)return g?.openTelegramLink?g.openTelegramLink(a.link):void window.open(a.link,"_blank");if(a.answer!==void 0){d("select");let i=Y[s.briefStep],r=i.options[Number(a.answer)];if(!i.multi){s.answers[i.id]=[r.id],$(),window.setTimeout(Ne,280);return}let l=s.answers[i.id]??[],u=l.includes(r.id)?l.filter(y=>y!==r.id):[...l,r.id],b=["nothing","unknown"];return u=b.includes(r.id)&&u.includes(r.id)?[r.id]:u.filter(y=>!b.includes(y)||y===r.id),s.answers[i.id]=u,$()}if(a.action==="own"){d(),s.ownOpen=!0,$(),document.getElementById("own")?.focus();return}if(a.action==="next-q")return d(),Ne();if(a.action==="skip-brief")return d(),vn();if(a.toggle&&Oa(a.toggle),a.pages){let i=mn();if(s.pages=Math.min(s.screen==="pages"?Tn:de,Math.max(1,s.pages+Number(a.pages))),d("select"),i)s.options=le(i);else for(let[r,l]of Object.entries(s.options))l?.pages&&(s.options[r]={pages:s.pages})}if(a.urgent!==void 0){let i=a.urgent==="1";i!==s.urgent&&d("select"),s.urgent=i}a.days&&(d("select"),s.urgentDays=Number(a.days)),a.support!==void 0&&(d("select"),s.support=!s.support),$()});P.addEventListener("keydown",e=>{let t=e.target;(e.key==="Enter"||e.key===" ")&&(t.dataset.toggle||t.dataset.peek||t.dataset.zone||t.dataset.full)&&(e.preventDefault(),t.click())});P.addEventListener("change",e=>{let t=e.target;if(t.id==="consent"){s.consent=t.checked;let n=document.getElementById("bar-action");n&&s.screen==="summary"&&(n.disabled=!t.checked||!A||s.busy),t.checked&&(d("select"),s.consentError=!1,s.error.startsWith("Отметьте согласие")&&(s.error=""),t.closest(".consent")?.classList.remove("error"),document.querySelector(".warn")?.remove())}});P.addEventListener("input",e=>{let t=e.target;Ft(t)||(t.id==="name"&&(s.name=t.value),t.id==="support"&&(s.supportText=t.value),t.id==="about"&&(s.about=t.value))});Mt({api:R,haptic:d,render:$,open:e=>k(e),back:ce,openSite:(e,t,n,a)=>Os(e,t,n,a),openLink:e=>g?.openTelegramLink?g.openTelegramLink(e):void window.open(e,"_blank"),demo:_==="desk"||_==="admin"});var sn=D.get("desk"),dt=Number(D.get("lead"))||void 0;q&&R("/api/session").then(e=>{if(ie??=e.channelUrl,s.isAdmin=!!e.isAdmin,s.ai=e.aiDraft??null,s.isAdmin&&(sn||dt))return De(dt,sn??void 0);s.isAdmin&&R("/api/admin/leads").then(({leads:t})=>{s.adminCounts={fresh:t.filter(n=>n.stage==="received").length,active:t.filter(n=>n.stage!=="done"&&n.stage!=="cancelled").length},s.screen==="home"&&$()}).catch(()=>{}),s.screen==="home"&&$()}).catch(()=>{});g?.ready();g?.expand();g?.disableVerticalSwipes?.();_t(()=>{d("soft"),ce()},()=>s.screen!=="home"&&s.screen!=="start"||h.open);Dt({sheet:()=>{d("soft"),ce()},full:()=>{d("soft"),oe()}});_==="desk"&&window.setTimeout(()=>De(dt),0);var at=Ot[D.get("example")??""];if(at){s.pages=3;for(let e of at.options)s.options[e]=Z(e).billing==="perPage"?{pages:3}:{};s.draft=N(at.draft),s.screen="summary",s.history=["home"],window.setTimeout(Ce,300)}D.get("open")==="status"&&window.setTimeout(()=>Dn("status"),0);_==="sent"&&(s.sentLead=42,s.history=["home"],s.screen="summary");$();try{g?.CloudStorage?.getItem(te,(e,t)=>{if(!(e||!t))try{let n=JSON.parse(t),a=Ge();if(n.v!==1||a&&a.at>=n.at)return;localStorage.setItem(te,t),s.screen==="home"&&$()}catch{}})}catch{}var it=document.getElementById("splash");if(it){let e=performance.now(),t=()=>{it.classList.add("out"),window.setTimeout(()=>it.remove(),600)};window.setTimeout(t,Math.max(0,1300-e))}
