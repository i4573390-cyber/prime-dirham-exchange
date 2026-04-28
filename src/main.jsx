import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const TELEGRAM_URL = 'https://t.me/PrimeDirhamExchange';
const MAPS_URL = 'https://yandex.com/maps/org/prime_dirham_exchange/239325949037/?ll=55.141933%2C25.085366&utm_source=share&z=21';

const content = {
  ru: {
    label: 'Криптообмен в Дубае',
    navAbout: 'О нас',
    navBenefits: 'Преимущества',
    navContacts: 'Контакты',
    heroTitle: 'Prime Dirham Exchange',
    heroAccent: 'Dubai',
    heroSubtitle: 'Премиальный криптообмен в Дубае: быстро, конфиденциально и с персональным сопровождением.',
    primaryCta: 'Связаться с менеджером',
    secondaryCta: 'Открыть карту',
    badge1: 'Dubai Marina / JBR',
    badge2: 'Crypto ⇄ AED / USD',
    badge3: 'Private service',
    trustTitle: 'Обмен без лишних шагов',
    trustText: 'Свяжитесь с менеджером, уточните сумму и направление обмена, получите условия сделки и приезжайте в офис по точке на карте.',
    benefitsTitle: 'Почему выбирают PDE',
    benefits: [
      ['Быстрое сопровождение', 'Оперативная связь с менеджером в Telegram и сопровождение до завершения сделки.'],
      ['Надёжный процесс', 'Условия обмена согласуются заранее до вашего визита в офис.'],
      ['Удобная локация', 'Офис в Al Habtoor Business Tower, Dubai Marina / JBR, 35 этаж.'],
      ['Персональный подход', 'Формат обслуживания подбирается под сумму, валюту и задачу клиента.']
    ],
    processTitle: 'Как проходит обмен',
    steps: ['Напишите менеджеру в Telegram', 'Уточните сумму и направление', 'Получите условия и подтверждение', 'Приезжайте в офис'],
    hoursTitle: 'Часы работы',
    hoursNote: 'Работаем с понедельника по субботу. Воскресенье — выходной.',
    days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    closed: 'Выходной',
    openUntil: 'Открыто до 20:30',
    contactTitle: 'Контакты и адрес',
    contactText: 'Для актуального курса и записи на обмен напишите менеджеру в Telegram. Адрес открывается через карту.',
    addressLabel: 'Адрес',
    address: 'Al Habtoor Business Tower, Jumeirah Beach Residence, Dubai Marina, Jumeirah, Dubai, UAE, 35 этаж',
    mapButton: 'Построить маршрут',
    tgButton: 'Написать в Telegram',
    amlTitle: 'AML / KYC',
    amlText: 'Prime Dirham Exchange соблюдает внутренние процедуры AML/KYC. Компания вправе запросить идентификационные данные клиента и дополнительную информацию по операции в случаях, предусмотренных внутренними правилами комплаенса и применимыми требованиями. Условия проведения сделки, лимиты и формат обслуживания уточняются индивидуально.',
    footer: 'Prime Dirham Exchange — криптообмен в Дубае.'
  },
  en: {
    label: 'Crypto exchange in Dubai',
    navAbout: 'About',
    navBenefits: 'Benefits',
    navContacts: 'Contacts',
    heroTitle: 'Prime Dirham Exchange',
    heroAccent: 'Dubai',
    heroSubtitle: 'Premium crypto exchange in Dubai: fast, private, and personally supported from the first message to completion.',
    primaryCta: 'Contact manager',
    secondaryCta: 'Open map',
    badge1: 'Dubai Marina / JBR',
    badge2: 'Crypto ⇄ AED / USD',
    badge3: 'Private service',
    trustTitle: 'Exchange without friction',
    trustText: 'Contact the manager, share the amount and exchange direction, receive the deal terms, then visit the office using the map location.',
    benefitsTitle: 'Why clients choose PDE',
    benefits: [
      ['Fast communication', 'Quick Telegram contact with the manager and support until the deal is completed.'],
      ['Reliable process', 'Exchange terms are agreed in advance before your office visit.'],
      ['Convenient location', 'Office at Al Habtoor Business Tower, Dubai Marina / JBR, Floor 35.'],
      ['Personal approach', 'Service format is tailored to your amount, currency, and request.']
    ],
    processTitle: 'How it works',
    steps: ['Contact the manager on Telegram', 'Share the amount and direction', 'Receive terms and confirmation', 'Visit the office'],
    hoursTitle: 'Working hours',
    hoursNote: 'Open Monday to Saturday. Sunday is closed.',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    closed: 'Closed',
    openUntil: 'Open until 20:30',
    contactTitle: 'Contacts and address',
    contactText: 'For the current rate and appointment, message the manager on Telegram. The address opens via the map link.',
    addressLabel: 'Address',
    address: 'Al Habtoor Business Tower, Jumeirah Beach Residence, Dubai Marina, Jumeirah, Dubai, UAE, Floor 35',
    mapButton: 'Get directions',
    tgButton: 'Message on Telegram',
    amlTitle: 'AML / KYC',
    amlText: 'Prime Dirham Exchange follows internal AML/KYC procedures. The company may request client identification details and additional transaction information where required by internal compliance policies and applicable requirements. Transaction terms, limits, and service format are clarified individually.',
    footer: 'Prime Dirham Exchange — crypto exchange service in Dubai.'
  },
  ar: {
    label: 'صرف العملات الرقمية في دبي',
    navAbout: 'من نحن',
    navBenefits: 'المزايا',
    navContacts: 'التواصل',
    heroTitle: 'برايم درهم للصرافة',
    heroAccent: 'Dubai',
    heroSubtitle: 'خدمة مميزة لتبادل العملات الرقمية في دبي: سرعة، خصوصية، ومتابعة شخصية حتى إتمام العملية.',
    primaryCta: 'تواصل مع المدير',
    secondaryCta: 'افتح الخريطة',
    badge1: 'Dubai Marina / JBR',
    badge2: 'Crypto ⇄ AED / USD',
    badge3: 'Private service',
    trustTitle: 'تبادل بدون تعقيد',
    trustText: 'تواصل مع المدير، أرسل المبلغ واتجاه التبادل، احصل على شروط العملية، ثم قم بزيارة المكتب عبر الموقع على الخريطة.',
    benefitsTitle: 'لماذا يختار العملاء PDE',
    benefits: [
      ['تواصل سريع', 'تواصل مباشر وسريع مع المدير عبر تيليجرام حتى إتمام العملية.'],
      ['عملية موثوقة', 'يتم الاتفاق على شروط التبادل مسبقاً قبل زيارة المكتب.'],
      ['موقع مناسب', 'المكتب في Al Habtoor Business Tower، Dubai Marina / JBR، الطابق 35.'],
      ['خدمة شخصية', 'يتم تحديد طريقة الخدمة حسب المبلغ والعملة وطلب العميل.']
    ],
    processTitle: 'كيف تتم العملية',
    steps: ['تواصل مع المدير عبر تيليجرام', 'أرسل المبلغ واتجاه التبادل', 'استلم الشروط والتأكيد', 'قم بزيارة المكتب'],
    hoursTitle: 'ساعات العمل',
    hoursNote: 'نعمل من الاثنين إلى السبت. الأحد مغلق.',
    days: ['الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت', 'الأحد'],
    closed: 'مغلق',
    openUntil: 'مفتوح حتى 20:30',
    contactTitle: 'التواصل والعنوان',
    contactText: 'للحصول على السعر الحالي وحجز موعد، تواصل مع المدير عبر تيليجرام. العنوان متاح عبر رابط الخريطة.',
    addressLabel: 'العنوان',
    address: 'Al Habtoor Business Tower, Jumeirah Beach Residence, Dubai Marina, Jumeirah, Dubai, UAE, الطابق 35',
    mapButton: 'احصل على الاتجاهات',
    tgButton: 'راسلنا عبر تيليجرام',
    amlTitle: 'AML / KYC',
    amlText: 'تلتزم Prime Dirham Exchange بإجراءات AML/KYC الداخلية. ويجوز للشركة طلب بيانات التحقق من هوية العميل ومعلومات إضافية عن العملية عند الحاجة وفقاً لسياسات الامتثال الداخلية والمتطلبات المعمول بها. يتم توضيح شروط العملية والحدود وطريقة الخدمة بشكل فردي.',
    footer: 'Prime Dirham Exchange — خدمة تبادل العملات الرقمية في دبي.'
  }
};

const langs = [
  { id: 'ru', name: 'RU' },
  { id: 'en', name: 'EN' },
  { id: 'ar', name: 'عربي' }
];

function LogoMark() {
  return (
    <div className="logo">
      <div className="logoBox">PDE</div>
      <div>
        <div className="logoTitle">PDE</div>
        <div className="logoText">Prime Dirham Exchange</div>
      </div>
    </div>
  );
}

function App() {
  const [lang, setLang] = useState('ru');
  const t = content[lang];
  const isRtl = lang === 'ar';

  return (
    <main dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="bgGlow" />
      <header className="header">
        <LogoMark />
        <nav>
          <a href="#about">{t.navAbout}</a>
          <a href="#benefits">{t.navBenefits}</a>
          <a href="#contacts">{t.navContacts}</a>
        </nav>
        <div className="langSwitch">
          <span>🌐</span>
          {langs.map(item => (
            <button key={item.id} onClick={() => setLang(item.id)} className={lang === item.id ? 'active' : ''}>
              {item.name}
            </button>
          ))}
        </div>
      </header>

      <section id="about" className="hero">
        <div className="heroText">
          <div className="pill">★ {t.label}</div>
          <h1>{t.heroTitle}<span>{t.heroAccent}</span></h1>
          <p>{t.heroSubtitle}</p>
          <div className="actions">
            <a className="btn primary" href={TELEGRAM_URL} target="_blank">↗ {t.primaryCta}</a>
            <a className="btn secondary" href={MAPS_URL} target="_blank">⌖ {t.secondaryCta}</a>
          </div>
          <div className="badges">
            <span>{t.badge1}</span>
            <span>{t.badge2}</span>
            <span>{t.badge3}</span>
          </div>
        </div>

        <div className="posterWrap">
          <div className="poster">
            <LogoMark />
            <div className="posterScreen">
              <div className="skyline">DXB</div>
              <div className="posterCenter">
                <div className="bigLogo">PDE</div>
                <div className="posterTitle">Prime Dirham Exchange</div>
                <div className="line" />
                <div className="arabic">برايم درهم للصرافة</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="trustTitle">⇄ {t.trustTitle}</div>
        <p>{t.trustText}</p>
      </section>

      <section id="benefits" className="section">
        <h2>{t.benefitsTitle}</h2>
        <div className="grid4">
          {t.benefits.map((b, i) => (
            <div className="card" key={b[0]}>
              <div className="icon">{['↗','✓','⌖','◷'][i]}</div>
              <h3>{b[0]}</h3>
              <p>{b[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section process">
        <h2>{t.processTitle}</h2>
        <div className="steps">
          {t.steps.map((step, i) => (
            <div className="step" key={step}>
              <b>{i + 1}</b>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section hours">
        <div>
          <div className="pill">◷ {t.openUntil}</div>
          <h2>{t.hoursTitle}</h2>
          <p>{t.hoursNote}</p>
        </div>
        <div className="hoursCard">
          {t.days.map((day, i) => (
            <div className="hourRow" key={day}>
              <span>{day}</span>
              <strong className={i === 6 ? 'closed' : ''}>{i === 6 ? t.closed : '09:00–20:30'}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="aml">
        <h3>✓ {t.amlTitle}</h3>
        <p>{t.amlText}</p>
      </section>

      <section id="contacts" className="contacts">
        <div className="contactText">
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
          <div className="address">
            <small>{t.addressLabel}</small>
            <strong>{t.address}</strong>
          </div>
          <div className="actions">
            <a className="btn primary" href={TELEGRAM_URL} target="_blank">↗ {t.tgButton}</a>
            <a className="btn secondary" href={MAPS_URL} target="_blank">⌖ {t.mapButton}</a>
          </div>
        </div>
        <a className="map" href={MAPS_URL} target="_blank">
          <div className="pin">⌖</div>
          <div className="mapLabel">
            <b>Prime Dirham Exchange</b>
            <span>Yandex Maps location</span>
          </div>
        </a>
      </section>

      <footer>{t.footer}</footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
