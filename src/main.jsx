import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const TELEGRAM_URL = 'https://t.me/PrimeDirhamExchange';
const MAPS_URL =
  'https://yandex.com/maps/org/prime_dirham_exchange/239325949037/?ll=55.141933%2C25.085366&utm_source=share&z=21';

const content = {
  ru: {
    label: 'Криптообмен в Дубае',
    navAbout: 'О нас',
    navCalc: 'Калькулятор',
    navBenefits: 'Преимущества',
    navReviews: 'Отзывы',
    navContacts: 'Контакты',

    heroTitle: 'Prime Dirham Exchange',
    heroAccent: 'Dubai',
    heroSubtitle:
      'Премиальный криптообмен в Дубае: быстро, конфиденциально и с персональным сопровождением.',
    primaryCta: 'Связаться с менеджером',
    secondaryCta: 'Открыть карту',

    badge1: 'Dubai Marina / JBR',
    badge2: 'Crypto ⇄ AED / USD',
    badge3: 'Private service',

    trustTitle: 'Обмен без лишних шагов',
    trustText:
      'Свяжитесь с менеджером, уточните сумму и направление обмена, получите условия сделки и приезжайте в офис по точке на карте.',

    calculatorTitle: 'Калькулятор обмена',
    calculatorText:
      'Ориентировочный расчёт по рыночному курсу. Финальный курс и лимиты подтверждает менеджер перед сделкой.',
    giveLabel: 'Отдаёте',
    getLabel: 'Получаете',
    amountLabel: 'Сумма',
    rateLabel: 'Ориентировочный курс',
    updateLabel: 'Обновить курс',
    exactRateCta: 'Узнать точный курс',
    loadingRates: 'Загружаем курсы...',
    rateError:
      'Не удалось загрузить онлайн-курс. Напишите менеджеру для актуального курса.',
    finalRateNote:
      'Курс на сайте справочный. Точные условия фиксируются менеджером в Telegram.',

    benefitsTitle: 'Почему выбирают PDE',
    benefits: [
      ['Быстрое сопровождение', 'Оперативная связь с менеджером в Telegram и сопровождение до завершения сделки.'],
      ['Надёжный процесс', 'Условия обмена согласуются заранее до вашего визита в офис.'],
      ['Удобная локация', 'Офис в Al Habtoor Business Tower, Dubai Marina / JBR, 35 этаж.'],
      ['Персональный подход', 'Формат обслуживания подбирается под сумму, валюту и задачу клиента.'],
    ],

    reviewsTitle: 'Отзывы клиентов',
    reviewsText:
      'Клиенты выбирают Prime Dirham Exchange за скорость, понятные условия и персональное сопровождение.',
    reviewClientLabel: 'клиент Prime Dirham Exchange',
    reviews: [
      ['Алексей', 'Обменивал USDT на дирхамы. Всё заранее согласовали в Telegram, курс подтвердили до визита. В офисе всё прошло быстро и спокойно.'],
      ['Марина', 'Удобная точка в Dubai Marina. Менеджер быстро ответил, объяснил условия и помог с деталями обмена.'],
      ['Дмитрий', 'Нужно было поменять крипту на наличные дирхамы. Всё сделали аккуратно, без ожидания и лишней суеты.'],
      ['Саид', 'Понравился понятный процесс: сначала согласовали сумму и курс, потом я приехал в офис и завершил обмен.'],
      ['Омар', 'Быстрая связь в Telegram, удобный адрес и нормальный деловой подход. Хороший сервис для обмена в Дубае.'],
      ['Джеймс', 'Сервис выглядит профессионально. Все условия подтвердили заранее, поэтому в офисе обмен прошёл без вопросов.'],
      ['Майкл', 'Хорошее расположение рядом с Dubai Marina, быстрые ответы и понятные условия. Использовал бы снова.'],
    ],

    processTitle: 'Как проходит обмен',
    steps: [
      'Напишите менеджеру в Telegram',
      'Уточните сумму и направление',
      'Получите условия и подтверждение',
      'Приезжайте в офис',
    ],

    hoursTitle: 'Часы работы',
    hoursNote: 'Работаем с понедельника по субботу. Воскресенье — выходной.',
    days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    closed: 'Выходной',
    openUntil: 'Открыто до 20:30',

    contactTitle: 'Контакты и адрес',
    contactText:
      'Для актуального курса и записи на обмен напишите менеджеру в Telegram. Адрес открывается через карту.',
    addressLabel: 'Адрес',
    address:
      'Al Habtoor Business Tower, Jumeirah Beach Residence, Dubai Marina, Jumeirah, Dubai, UAE, 35 этаж',
    mapButton: 'Построить маршрут',
    tgButton: 'Написать в Telegram',

    amlTitle: 'AML / KYC',
    amlText:
      'Prime Dirham Exchange соблюдает внутренние процедуры AML/KYC. Компания вправе запросить идентификационные данные клиента и дополнительную информацию по операции в случаях, предусмотренных внутренними правилами комплаенса и применимыми требованиями. Условия проведения сделки, лимиты и формат обслуживания уточняются индивидуально.',

    footer: 'Prime Dirham Exchange — криптообмен в Дубае.',
  },

  en: {
    label: 'Crypto exchange in Dubai',
    navAbout: 'About',
    navCalc: 'Calculator',
    navBenefits: 'Benefits',
    navReviews: 'Reviews',
    navContacts: 'Contacts',

    heroTitle: 'Prime Dirham Exchange',
    heroAccent: 'Dubai',
    heroSubtitle:
      'Premium crypto exchange in Dubai: fast, private, and personally supported from the first message to completion.',
    primaryCta: 'Contact manager',
    secondaryCta: 'Open map',

    badge1: 'Dubai Marina / JBR',
    badge2: 'Crypto ⇄ AED / USD',
    badge3: 'Private service',

    trustTitle: 'Exchange without friction',
    trustText:
      'Contact the manager, share the amount and exchange direction, receive the deal terms, then visit the office using the map location.',

    calculatorTitle: 'Exchange calculator',
    calculatorText:
      'Indicative calculation based on market rates. Final rate and limits are confirmed by the manager before the deal.',
    giveLabel: 'You send',
    getLabel: 'You receive',
    amountLabel: 'Amount',
    rateLabel: 'Indicative rate',
    updateLabel: 'Refresh rates',
    exactRateCta: 'Get exact rate',
    loadingRates: 'Loading rates...',
    rateError: 'Could not load live rates. Contact the manager for the current rate.',
    finalRateNote:
      'The website rate is indicative. Exact terms are confirmed by the manager on Telegram.',

    benefitsTitle: 'Why clients choose PDE',
    benefits: [
      ['Fast communication', 'Quick Telegram contact with the manager and support until the deal is completed.'],
      ['Reliable process', 'Exchange terms are agreed in advance before your office visit.'],
      ['Convenient location', 'Office at Al Habtoor Business Tower, Dubai Marina / JBR, Floor 35.'],
      ['Personal approach', 'Service format is tailored to your amount, currency, and request.'],
    ],

    reviewsTitle: 'Client reviews',
    reviewsText:
      'Clients choose Prime Dirham Exchange for speed, clear terms, and personal support.',
    reviewClientLabel: 'Prime Dirham Exchange client',
    reviews: [
      ['Alexey', 'I exchanged USDT to AED. Everything was agreed on Telegram in advance, and the rate was confirmed before my visit.'],
      ['Marina', 'Convenient Dubai Marina location. The manager replied quickly, explained the terms, and helped with the exchange details.'],
      ['Dmitry', 'I needed to exchange crypto for cash dirhams. Everything was handled smoothly, with no waiting or unnecessary complications.'],
      ['Saeed', 'I liked the clear process: amount and rate were confirmed first, then I visited the office and completed the exchange.'],
      ['Omar', 'Fast communication on Telegram, convenient address, and a professional approach. Good crypto exchange service in Dubai.'],
      ['James', 'The service feels professional. All terms were confirmed in advance, so the office visit was simple and efficient.'],
      ['Michael', 'Good location near Dubai Marina, quick replies, and clear terms. I would use the service again.'],
    ],

    processTitle: 'How it works',
    steps: [
      'Contact the manager on Telegram',
      'Share the amount and direction',
      'Receive terms and confirmation',
      'Visit the office',
    ],

    hoursTitle: 'Working hours',
    hoursNote: 'Open Monday to Saturday. Sunday is closed.',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    closed: 'Closed',
    openUntil: 'Open until 20:30',

    contactTitle: 'Contacts and address',
    contactText:
      'For the current rate and appointment, message the manager on Telegram. The address opens via the map link.',
    addressLabel: 'Address',
    address:
      'Al Habtoor Business Tower, Jumeirah Beach Residence, Dubai Marina, Jumeirah, Dubai, UAE, Floor 35',
    mapButton: 'Get directions',
    tgButton: 'Message on Telegram',

    amlTitle: 'AML / KYC',
    amlText:
      'Prime Dirham Exchange follows internal AML/KYC procedures. The company may request client identification details and additional transaction information where required by internal compliance policies and applicable requirements. Transaction terms, limits, and service format are clarified individually.',

    footer: 'Prime Dirham Exchange — crypto exchange service in Dubai.',
  },

  ar: {
    label: 'صرف العملات الرقمية في دبي',
    navAbout: 'من نحن',
    navCalc: 'الحاسبة',
    navBenefits: 'المزايا',
    navReviews: 'آراء العملاء',
    navContacts: 'التواصل',

    heroTitle: 'برايم درهم للصرافة',
    heroAccent: 'Dubai',
    heroSubtitle:
      'خدمة مميزة لتبادل العملات الرقمية في دبي: سرعة، خصوصية، ومتابعة شخصية حتى إتمام العملية.',
    primaryCta: 'تواصل مع المدير',
    secondaryCta: 'افتح الخريطة',

    badge1: 'Dubai Marina / JBR',
    badge2: 'Crypto ⇄ AED / USD',
    badge3: 'Private service',

    trustTitle: 'تبادل بدون تعقيد',
    trustText:
      'تواصل مع المدير، أرسل المبلغ واتجاه التبادل، احصل على شروط العملية، ثم قم بزيارة المكتب عبر الموقع على الخريطة.',

    calculatorTitle: 'حاسبة التبادل',
    calculatorText:
      'حساب تقريبي حسب أسعار السوق. يتم تأكيد السعر النهائي والحدود من قبل المدير قبل العملية.',
    giveLabel: 'تدفع',
    getLabel: 'تستلم',
    amountLabel: 'المبلغ',
    rateLabel: 'السعر التقريبي',
    updateLabel: 'تحديث الأسعار',
    exactRateCta: 'اعرف السعر الدقيق',
    loadingRates: 'جاري تحميل الأسعار...',
    rateError: 'تعذر تحميل الأسعار المباشرة. تواصل مع المدير للحصول على السعر الحالي.',
    finalRateNote:
      'السعر في الموقع إرشادي. يتم تأكيد الشروط النهائية عبر تيليجرام.',

    benefitsTitle: 'لماذا يختار العملاء PDE',
    benefits: [
      ['تواصل سريع', 'تواصل مباشر وسريع مع المدير عبر تيليجرام حتى إتمام العملية.'],
      ['عملية موثوقة', 'يتم الاتفاق على شروط التبادل مسبقاً قبل زيارة المكتب.'],
      ['موقع مناسب', 'المكتب في Al Habtoor Business Tower، Dubai Marina / JBR، الطابق 35.'],
      ['خدمة شخصية', 'يتم تحديد طريقة الخدمة حسب المبلغ والعملة وطلب العميل.'],
    ],

    reviewsTitle: 'آراء العملاء',
    reviewsText:
      'يختار العملاء Prime Dirham Exchange بسبب السرعة ووضوح الشروط والدعم الشخصي.',
    reviewClientLabel: 'عميل Prime Dirham Exchange',
    reviews: [
      ['أليكسي', 'بدلت USDT إلى الدرهم. تم الاتفاق على كل شيء عبر تيليجرام مسبقاً وتم تأكيد السعر قبل الزيارة.'],
      ['مارينا', 'موقع مناسب في دبي مارينا. رد المدير بسرعة وشرح الشروط وساعدني في تفاصيل التبادل.'],
      ['ديمتري', 'كنت بحاجة إلى تبديل العملات الرقمية إلى دراهم نقدية. تمت العملية بسلاسة وبدون انتظار أو تعقيد.'],
      ['سعيد', 'أعجبني وضوح العملية: تم تأكيد المبلغ والسعر أولاً، ثم زرت المكتب وتمت العملية بسهولة.'],
      ['عمر', 'تواصل سريع عبر تيليجرام، عنوان مناسب، وتعامل احترافي. خدمة جيدة لتبادل العملات الرقمية في دبي.'],
      ['جيمس', 'الخدمة تبدو احترافية. تم تأكيد جميع الشروط مسبقاً، لذلك كانت الزيارة إلى المكتب سهلة وسريعة.'],
      ['مايكل', 'موقع جيد بالقرب من دبي مارينا، ردود سريعة، وشروط واضحة. سأستخدم الخدمة مرة أخرى.'],
    ],

    processTitle: 'كيف تتم العملية',
    steps: [
      'تواصل مع المدير عبر تيليجرام',
      'أرسل المبلغ واتجاه التبادل',
      'استلم الشروط والتأكيد',
      'قم بزيارة المكتب',
    ],

    hoursTitle: 'ساعات العمل',
    hoursNote: 'نعمل من الاثنين إلى السبت. الأحد مغلق.',
    days: ['الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت', 'الأحد'],
    closed: 'مغلق',
    openUntil: 'مفتوح حتى 20:30',

    contactTitle: 'التواصل والعنوان',
    contactText:
      'للحصول على السعر الحالي وحجز موعد، تواصل مع المدير عبر تيليجرام. العنوان متاح عبر رابط الخريطة.',
    addressLabel: 'العنوان',
    address:
      'Al Habtoor Business Tower, Jumeirah Beach Residence, Dubai Marina, Jumeirah, Dubai, UAE, الطابق 35',
    mapButton: 'احصل على الاتجاهات',
    tgButton: 'راسلنا عبر تيليجرام',

    amlTitle: 'AML / KYC',
    amlText:
      'تلتزم Prime Dirham Exchange بإجراءات AML/KYC الداخلية. ويجوز للشركة طلب بيانات التحقق من هوية العميل ومعلومات إضافية عن العملية عند الحاجة وفقاً لسياسات الامتثال الداخلية والمتطلبات المعمول بها. يتم توضيح شروط العملية والحدود وطريقة الخدمة بشكل فردي.',

    footer: 'Prime Dirham Exchange — خدمة تبادل العملات الرقمية في دبي.',
  },
};

const langs = [
  { id: 'ru', name: 'RU' },
  { id: 'en', name: 'EN' },
  { id: 'ar', name: 'عربي' },
];

const assets = [
  { code: 'AED', name: 'Dirham', type: 'fiat' },
  { code: 'USD', name: 'Dollar', type: 'fiat' },
  { code: 'EUR', name: 'Euro', type: 'fiat' },
  { code: 'RUB', name: 'Ruble', type: 'fiat' },
  { code: 'USDT', name: 'Tether', type: 'crypto', id: 'tether' },
  { code: 'USDC', name: 'USD Coin', type: 'crypto', id: 'usd-coin' },
  { code: 'BTC', name: 'Bitcoin', type: 'crypto', id: 'bitcoin' },
  { code: 'ETH', name: 'Ethereum', type: 'crypto', id: 'ethereum' },
  { code: 'SOL', name: 'Solana', type: 'crypto', id: 'solana' },
  { code: 'BNB', name: 'BNB', type: 'crypto', id: 'binancecoin' },
];

function formatNumber(value, code) {
  if (!Number.isFinite(value)) return '—';

  if (['BTC', 'ETH'].includes(code)) {
    return value.toLocaleString('en-US', { maximumFractionDigits: 8 });
  }

  if (['SOL', 'BNB'].includes(code)) {
    return value.toLocaleString('en-US', { maximumFractionDigits: 5 });
  }

  return value.toLocaleString('en-US', { maximumFractionDigits: 2 });
}

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

function ExchangeCalculator({ t }) {
  const [amount, setAmount] = useState('1000');
  const [from, setFrom] = useState('USDT');
  const [to, setTo] = useState('AED');
  const [usdValue, setUsdValue] = useState({
    USD: 1,
    AED: 1 / 3.6725,
    USDT: 1,
    USDC: 1,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function loadRates() {
    setLoading(true);
    setError(false);

    try {
      const [fiatRes, cryptoRes] = await Promise.all([
        fetch('https://open.er-api.com/v6/latest/USD'),
        fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=tether,usd-coin,bitcoin,ethereum,solana,binancecoin&vs_currencies=usd'
        ),
      ]);

      const fiat = await fiatRes.json();
      const crypto = await cryptoRes.json();
      const next = { USD: 1 };

      ['AED', 'EUR', 'RUB'].forEach((code) => {
        if (fiat?.rates?.[code]) {
          next[code] = 1 / fiat.rates[code];
        }
      });

      assets
        .filter((asset) => asset.type === 'crypto')
        .forEach((asset) => {
          if (crypto?.[asset.id]?.usd) {
            next[asset.code] = crypto[asset.id].usd;
          }
        });

      setUsdValue((prev) => ({ ...prev, ...next }));
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadRates();
  }, []);

  const result = useMemo(() => {
    const value = Number(String(amount).replace(',', '.'));

    if (!value || !usdValue[from] || !usdValue[to]) return 0;

    return (value * usdValue[from]) / usdValue[to];
  }, [amount, from, to, usdValue]);

  const rate = usdValue[from] && usdValue[to] ? usdValue[from] / usdValue[to] : 0;

  return (
    <section id="calculator" className="section calculatorSection">
      <div className="calculatorWrap">
        <div>
          <div className="pill">⇄ Live rates</div>
          <h2>{t.calculatorTitle}</h2>
          <p>{t.calculatorText}</p>
          <small>{t.finalRateNote}</small>

          {error && <div className="rateError">{t.rateError}</div>}
        </div>

        <div className="calculatorCard">
          <label>{t.amountLabel}</label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            inputMode="decimal"
          />

          <div className="calcGrid">
            <div>
              <label>{t.giveLabel}</label>
              <select value={from} onChange={(e) => setFrom(e.target.value)}>
                {assets.map((asset) => (
                  <option key={asset.code} value={asset.code}>
                    {asset.code} — {asset.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>{t.getLabel}</label>
              <select value={to} onChange={(e) => setTo(e.target.value)}>
                {assets.map((asset) => (
                  <option key={asset.code} value={asset.code}>
                    {asset.code} — {asset.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="calcResult">
            <span>{t.getLabel}</span>
            <strong>
              {formatNumber(result, to)} <em>{to}</em>
            </strong>
            <p>
              {t.rateLabel}: 1 {from} ≈ {formatNumber(rate, to)} {to}
            </p>
          </div>

          <a
            className="calcActionBtn"
            href={TELEGRAM_URL}
            target="_blank"
            rel="noreferrer"
          >
            ↗ {t.exactRateCta}
          </a>
        </div>
      </div>
    </section>
  );
}

function ReviewsCarousel({ t }) {
  return (
    <section id="reviews" className="section reviewsSection">
      <div className="reviewsHeader">
        <div>
          <div className="pill">★★★★★</div>
          <h2>{t.reviewsTitle}</h2>
          <p>{t.reviewsText}</p>
        </div>
      </div>

      <div className="reviewsCarousel">
        {t.reviews.map((review, index) => (
          <article className="reviewCard" key={`${review[0]}-${index}`}>
            <div className="reviewTop">
              <div className="reviewAvatar">{review[0].slice(0, 1)}</div>
              <div>
                <strong>{review[0]}</strong>
                <small>{t.reviewClientLabel}</small>
              </div>
            </div>

            <div className="reviewStars">★★★★★</div>

            <p>“{review[1]}”</p>
          </article>
        ))}
      </div>
    </section>
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
          <a href="#calculator">{t.navCalc}</a>
          <a href="#benefits">{t.navBenefits}</a>
          <a href="#reviews">{t.navReviews}</a>
          <a href="#contacts">{t.navContacts}</a>
        </nav>

        <div className="langSwitch">
          <span>🌐</span>
          {langs.map((item) => (
            <button
              key={item.id}
              onClick={() => setLang(item.id)}
              className={lang === item.id ? 'active' : ''}
            >
              {item.name}
            </button>
          ))}
        </div>
      </header>

      <section id="about" className="hero">
        <div className="heroText">
          <div className="pill">★ {t.label}</div>

          <h1>
            {t.heroTitle}
            <span>{t.heroAccent}</span>
          </h1>

          <p>{t.heroSubtitle}</p>

          <div className="actions">
            <a className="btn primary" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
              ↗ {t.primaryCta}
            </a>

            <a className="btn secondary" href={MAPS_URL} target="_blank" rel="noreferrer">
              ⌖ {t.secondaryCta}
            </a>
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

      <ExchangeCalculator t={t} />

      <section id="benefits" className="section">
        <h2>{t.benefitsTitle}</h2>

        <div className="grid4">
          {t.benefits.map((b, i) => (
            <div className="card" key={b[0]}>
              <div className="icon">{['↗', '✓', '⌖', '◷'][i]}</div>
              <h3>{b[0]}</h3>
              <p>{b[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <ReviewsCarousel t={t} />

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
              <strong className={i === 6 ? 'closed' : ''}>
                {i === 6 ? t.closed : '09:00–20:30'}
              </strong>
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
            <a className="btn primary" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
              ↗ {t.tgButton}
            </a>

            <a className="btn secondary" href={MAPS_URL} target="_blank" rel="noreferrer">
              ⌖ {t.mapButton}
            </a>
          </div>
        </div>

        <div className="map mapEmbed">
          <iframe
            title="Prime Dirham Exchange on Yandex Maps"
            src="https://yandex.com/map-widget/v1/?oid=239325949037&ol=biz&ll=55.141933%2C25.085366&z=21"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          <a className="mapOpen" href={MAPS_URL} target="_blank" rel="noreferrer">
            <span>↗</span>
            <strong>{t.mapButton}</strong>
          </a>
        </div>
      </section>

      <footer>{t.footer}</footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
