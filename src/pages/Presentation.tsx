import Icon from "@/components/ui/icon";
import PptxGenJS from "pptxgenjs";

const teamMembers = [
  {
    name: "Елена Сидорова",
    role: "Технический директор",
    experience: "18 лет опыта в инженерном проектировании",
    icon: "UserCheck",
  },
  {
    name: "Александр Иванов",
    role: "Главный инженер",
    experience: "15 лет в промышленном строительстве",
    icon: "HardHat",
  },
  {
    name: "Сергей Волков",
    role: "Начальник монтажного отдела",
    experience: "14 лет в монтажных работах",
    icon: "Wrench",
  },
  {
    name: "Михаил Петров",
    role: "Руководитель производства",
    experience: "12 лет в металлообработке",
    icon: "Factory",
  },
  {
    name: "Дмитрий Козлов",
    role: "Главный конструктор",
    experience: "10 лет в проектировании",
    icon: "Compass",
  },
  {
    name: "Ольга Новикова",
    role: "Начальник отдела качества",
    experience: "8 лет контроля качества",
    icon: "ShieldCheck",
  },
];

const equipmentCards = [
  {
    title: "Лазерная резка",
    spec: "до 20 мм",
    icon: "Zap",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
  },
  {
    title: "Плазменная резка",
    spec: "до 50 мм",
    icon: "Flame",
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-600",
  },
  {
    title: "Гибочные прессы ЧПУ",
    spec: "длина до 2500 мм, толщина до 8 мм",
    icon: "ArrowDownUp",
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600",
  },
  {
    title: "Вальцовочное оборудование",
    spec: "длина до 2500 мм, толщина до 10 мм",
    icon: "RotateCcw",
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-600",
  },
  {
    title: "Токарные станки ЧПУ",
    spec: "диаметр до 500 мм, длина до 2000 мм, точность 0.01 мм",
    icon: "CircleDot",
    color: "bg-cyan-50 border-cyan-200",
    iconColor: "text-cyan-600",
  },
  {
    title: "Фрезерные станки ЧПУ",
    spec: "до 2000x800x600 мм, точность ±0.05 мм",
    icon: "Cog",
    color: "bg-indigo-50 border-indigo-200",
    iconColor: "text-indigo-600",
  },
  {
    title: "Сварка MMA / MIG/MAG / TIG",
    spec: "нагрузка до 100 тонн на узел",
    icon: "Sparkles",
    color: "bg-red-50 border-red-200",
    iconColor: "text-red-600",
  },
  {
    title: "Покраска и защита",
    spec: "порошковая покраска, цинкование, антикоррозионная защита",
    icon: "Paintbrush",
    color: "bg-yellow-50 border-yellow-200",
    iconColor: "text-yellow-700",
  },
];

const advantages = [
  {
    icon: "Building2",
    title: "Полный цикл производства",
    text: "Все операции в одном месте — экономия времени и логистики",
  },
  {
    icon: "Warehouse",
    title: "Собственная база 3000+ м²",
    text: "Современное оборудование для любых задач",
  },
  {
    icon: "CalendarCheck",
    title: "13 лет опыта",
    text: "500+ выполненных проектов для промышленных предприятий",
  },
  {
    icon: "Users",
    title: "60+ профессионалов",
    text: "Квалифицированные инженеры, сварщики, конструкторы",
  },
  {
    icon: "Award",
    title: "Сертификация",
    text: "ISO 9001:2015, лицензия МЧС, допуск СРО",
  },
  {
    icon: "Scale",
    title: "Любые объемы",
    text: "От единичных изделий до крупных промышленных заказов",
  },
  {
    icon: "Target",
    title: "Точность до 0.01 мм",
    text: "ЧПУ-станки обеспечивают высочайшую точность обработки",
  },
  {
    icon: "ShieldCheck",
    title: "Гарантия качества",
    text: "Гарантия на все виды работ, система контроля качества",
  },
  {
    icon: "Clock",
    title: "Сжатые сроки",
    text: "От 24 часов для срочных заказов",
  },
  {
    icon: "FileText",
    title: "Прозрачность",
    text: "Прозрачное ценообразование и документооборот",
  },
];

const PRIMARY_COLOR = "1B3A5C";
const SECONDARY_COLOR = "E8A54B";
const DARK_COLOR = "1A1A2E";
const LIGHT_BG = "F5F7FA";
const WHITE = "FFFFFF";
const MUTED = "6B7280";

function generatePptx() {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE";
  pptx.author = "ИТЦ Сибири";
  pptx.company = "ООО «Инженерно-технологический центр Сибири»";
  pptx.subject = "Презентация компании";
  pptx.title = "ИТЦ Сибири — Презентация компании";

  // --- SLIDE 1: COVER ---
  const slide1 = pptx.addSlide();
  slide1.background = { color: PRIMARY_COLOR };
  slide1.addShape(pptx.ShapeType.ellipse, {
    x: 9.5, y: -1.5, w: 4.5, h: 4.5,
    fill: { color: WHITE, transparency: 95 },
  });
  slide1.addShape(pptx.ShapeType.ellipse, {
    x: -1.5, y: 4.5, w: 3.5, h: 3.5,
    fill: { color: WHITE, transparency: 95 },
  });
  slide1.addText("ООО «Инженерно-технологический центр Сибири»", {
    x: 0.5, y: 1.0, w: 12.3, h: 0.5,
    fontSize: 12, color: "A0B8D0", align: "center",
    charSpacing: 4, bold: true,
  });
  slide1.addText("ИТЦ Сибири", {
    x: 0.5, y: 1.8, w: 12.3, h: 1.2,
    fontSize: 48, color: WHITE, align: "center", bold: true,
  });
  slide1.addText("Надежный партнер в металлообработке\nи производстве металлоконструкций с 2013 года", {
    x: 1.5, y: 3.2, w: 10.3, h: 1.0,
    fontSize: 18, color: "C0D0E0", align: "center", lineSpacingMultiple: 1.3,
  });
  slide1.addText("г. Красноярск", {
    x: 0.5, y: 4.4, w: 12.3, h: 0.4,
    fontSize: 12, color: "8899AA", align: "center",
  });
  const stats = [
    { value: "13 лет", label: "на рынке" },
    { value: "500+", label: "проектов" },
    { value: "60+", label: "специалистов" },
  ];
  stats.forEach((s, i) => {
    const x = 3.2 + i * 2.6;
    slide1.addShape(pptx.ShapeType.roundRect, {
      x, y: 5.2, w: 2.2, h: 1.1, rectRadius: 0.1,
      fill: { color: WHITE, transparency: 88 },
      line: { color: WHITE, transparency: 80, width: 1 },
    });
    slide1.addText(s.value, {
      x, y: 5.2, w: 2.2, h: 0.7,
      fontSize: 22, color: WHITE, bold: true, align: "center", valign: "bottom",
    });
    slide1.addText(s.label, {
      x, y: 5.85, w: 2.2, h: 0.4,
      fontSize: 9, color: "8899AA", align: "center", valign: "top",
    });
  });

  // --- SLIDE 2: ABOUT ---
  const slide2 = pptx.addSlide();
  slide2.background = { color: WHITE };
  slide2.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 7.5, fill: { color: PRIMARY_COLOR },
  });
  slide2.addText("О компании", {
    x: 0.5, y: 0.3, w: 4, h: 0.4,
    fontSize: 11, color: PRIMARY_COLOR, bold: true, charSpacing: 3,
  });
  slide2.addText("Опыт на рынке", {
    x: 0.5, y: 0.7, w: 6, h: 0.6,
    fontSize: 30, color: DARK_COLOR, bold: true,
  });
  slide2.addText(
    "На рынке с 2013 года. Начинали как небольшая производственная мастерская, выросли в крупное предприятие с собственной производственной базой.\n\nСегодня ИТЦ Сибири — один из ведущих производителей металлоконструкций в Красноярском крае с более чем 500 выполненными проектами для промышленных предприятий Сибири.\n\nНаша миссия — обеспечивать надежными и качественными металлоконструкциями промышленные предприятия региона.",
    {
      x: 0.5, y: 1.5, w: 6, h: 3.5,
      fontSize: 13, color: MUTED, lineSpacingMultiple: 1.4, valign: "top",
    }
  );
  const facts = [
    "13 лет на рынке (с 2013 года)",
    "500+ выполненных проектов",
    "Собственная производственная база",
    "Работаем с предприятиями Сибири",
  ];
  facts.forEach((f, i) => {
    slide2.addShape(pptx.ShapeType.roundRect, {
      x: 7, y: 1.5 + i * 0.85, w: 5.8, h: 0.7, rectRadius: 0.08,
      fill: { color: LIGHT_BG },
    });
    slide2.addText(`●  ${f}`, {
      x: 7.2, y: 1.5 + i * 0.85, w: 5.4, h: 0.7,
      fontSize: 12, color: DARK_COLOR, bold: true, valign: "middle",
    });
  });
  slide2.addShape(pptx.ShapeType.roundRect, {
    x: 7, y: 5.0, w: 5.8, h: 1.2, rectRadius: 0.1,
    fill: { color: "EEF2F7" }, line: { color: "D0DAE5", width: 1 },
  });
  slide2.addText("Сертификация и допуски", {
    x: 7.2, y: 5.0, w: 5.4, h: 0.5,
    fontSize: 11, color: DARK_COLOR, bold: true, valign: "bottom",
  });
  slide2.addText("ISO 9001:2015  •  Лицензия МЧС  •  Допуск СРО", {
    x: 7.2, y: 5.5, w: 5.4, h: 0.5,
    fontSize: 11, color: PRIMARY_COLOR, bold: true, valign: "top",
  });
  slide2.addText("660020, Красноярский край, г. Красноярск, ул. Дудинская, д. 5", {
    x: 0.5, y: 6.8, w: 12, h: 0.4,
    fontSize: 10, color: MUTED, align: "left",
  });

  // --- SLIDE 3: PRODUCTION ---
  const slide3 = pptx.addSlide();
  slide3.background = { color: LIGHT_BG };
  slide3.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 7.5, fill: { color: PRIMARY_COLOR },
  });
  slide3.addText("Производство", {
    x: 0.5, y: 0.3, w: 4, h: 0.4,
    fontSize: 11, color: PRIMARY_COLOR, bold: true, charSpacing: 3,
  });
  slide3.addText("Производственные мощности", {
    x: 0.5, y: 0.7, w: 10, h: 0.6,
    fontSize: 30, color: DARK_COLOR, bold: true,
  });
  const prodStats = [
    { value: "3000+ м²", label: "производственных площадей" },
    { value: "8 типов", label: "технологий обработки" },
    { value: "0.01 мм", label: "точность обработки" },
  ];
  prodStats.forEach((s, i) => {
    const x = 0.5 + i * 4.2;
    slide3.addShape(pptx.ShapeType.roundRect, {
      x, y: 1.5, w: 3.8, h: 1.1, rectRadius: 0.1,
      fill: { color: WHITE }, line: { color: "E0E5EA", width: 1 },
    });
    slide3.addText(s.value, {
      x, y: 1.5, w: 3.8, h: 0.7,
      fontSize: 22, color: PRIMARY_COLOR, bold: true, align: "center", valign: "bottom",
    });
    slide3.addText(s.label, {
      x, y: 2.15, w: 3.8, h: 0.4,
      fontSize: 9, color: MUTED, align: "center", valign: "top",
    });
  });
  slide3.addText("Собственная производственная база с современным оборудованием. Полный цикл производства: от резки до покраски.", {
    x: 0.5, y: 2.8, w: 12, h: 0.5,
    fontSize: 12, color: MUTED,
  });
  const eqColors = ["D6E8FF", "FFEAD6", "D6F5E0", "E8D6FF", "D6F0F5", "DDD6FF", "FFD6D6", "FFF5D6"];
  equipmentCards.forEach((eq, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 6.3;
    const y = 3.5 + row * 1.05;
    slide3.addShape(pptx.ShapeType.roundRect, {
      x, y, w: 5.9, h: 0.9, rectRadius: 0.08,
      fill: { color: eqColors[i] },
    });
    slide3.addText(eq.title, {
      x: x + 0.2, y, w: 5.5, h: 0.45,
      fontSize: 11, color: DARK_COLOR, bold: true, valign: "bottom",
    });
    slide3.addText(eq.spec, {
      x: x + 0.2, y: y + 0.4, w: 5.5, h: 0.4,
      fontSize: 10, color: MUTED, valign: "top",
    });
  });

  // --- SLIDE 4: TEAM ---
  const slide4 = pptx.addSlide();
  slide4.background = { color: WHITE };
  slide4.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 7.5, fill: { color: PRIMARY_COLOR },
  });
  slide4.addText("Команда", {
    x: 0.5, y: 0.3, w: 4, h: 0.4,
    fontSize: 11, color: PRIMARY_COLOR, bold: true, charSpacing: 3,
  });
  slide4.addText("Персонал и команда", {
    x: 0.5, y: 0.7, w: 10, h: 0.6,
    fontSize: 30, color: DARK_COLOR, bold: true,
  });
  slide4.addText("Более 60 квалифицированных специалистов: аттестованные сварщики с сертификацией, инженеры, конструкторы и контролеры качества.", {
    x: 0.5, y: 1.4, w: 12, h: 0.6,
    fontSize: 13, color: MUTED, lineSpacingMultiple: 1.3,
  });
  teamMembers.forEach((m, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.5 + col * 4.2;
    const y = 2.3 + row * 2.4;
    slide4.addShape(pptx.ShapeType.roundRect, {
      x, y, w: 3.8, h: 2.0, rectRadius: 0.1,
      fill: { color: LIGHT_BG }, line: { color: "E0E5EA", width: 1 },
    });
    slide4.addShape(pptx.ShapeType.ellipse, {
      x: x + 0.2, y: y + 0.25, w: 0.6, h: 0.6,
      fill: { color: "DDE5F0" },
    });
    slide4.addText(m.name.split(" ").map(w => w[0]).join(""), {
      x: x + 0.2, y: y + 0.25, w: 0.6, h: 0.6,
      fontSize: 14, color: PRIMARY_COLOR, bold: true, align: "center", valign: "middle",
    });
    slide4.addText(m.name, {
      x: x + 1.0, y: y + 0.25, w: 2.6, h: 0.35,
      fontSize: 12, color: DARK_COLOR, bold: true, valign: "bottom",
    });
    slide4.addText(m.role, {
      x: x + 1.0, y: y + 0.55, w: 2.6, h: 0.3,
      fontSize: 10, color: PRIMARY_COLOR, bold: true, valign: "top",
    });
    slide4.addText(m.experience, {
      x: x + 0.3, y: y + 1.1, w: 3.2, h: 0.6,
      fontSize: 10, color: MUTED, valign: "top",
    });
  });

  // --- SLIDE 5: WHY US ---
  const slide5 = pptx.addSlide();
  slide5.background = { color: PRIMARY_COLOR };
  slide5.addText("Преимущества", {
    x: 0.5, y: 0.3, w: 4, h: 0.4,
    fontSize: 11, color: SECONDARY_COLOR, bold: true, charSpacing: 3,
  });
  slide5.addText("Почему стоит работать с нами", {
    x: 0.5, y: 0.7, w: 12, h: 0.6,
    fontSize: 30, color: WHITE, bold: true,
  });
  advantages.forEach((a, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 6.3;
    const y = 1.6 + row * 1.1;
    slide5.addShape(pptx.ShapeType.roundRect, {
      x, y, w: 5.9, h: 0.95, rectRadius: 0.08,
      fill: { color: WHITE, transparency: 88 },
      line: { color: WHITE, transparency: 85, width: 1 },
    });
    slide5.addText(a.title, {
      x: x + 0.3, y, w: 5.3, h: 0.5,
      fontSize: 12, color: WHITE, bold: true, valign: "bottom",
    });
    slide5.addText(a.text, {
      x: x + 0.3, y: y + 0.45, w: 5.3, h: 0.4,
      fontSize: 10, color: "A0B8D0", valign: "top",
    });
  });

  // --- SLIDE 6: CONTACTS ---
  const slide6 = pptx.addSlide();
  slide6.background = { color: DARK_COLOR };
  slide6.addText("Свяжитесь с нами", {
    x: 0.5, y: 1.5, w: 12.3, h: 0.8,
    fontSize: 34, color: WHITE, bold: true, align: "center",
  });
  slide6.addText("ООО «Инженерно-технологический центр Сибири»", {
    x: 0.5, y: 2.3, w: 12.3, h: 0.5,
    fontSize: 13, color: "888899", align: "center",
  });
  const contacts = [
    { label: "Телефон", value: "+7 (391) 214-55-01" },
    { label: "Email", value: "info@itc-sibiri.ru" },
    { label: "Адрес", value: "660020, г. Красноярск,\nул. Дудинская, д. 5" },
    { label: "Режим работы", value: "Пн-Пт 8:00-17:00" },
  ];
  contacts.forEach((c, i) => {
    const x = 0.8 + i * 3.1;
    slide6.addShape(pptx.ShapeType.roundRect, {
      x, y: 3.3, w: 2.8, h: 1.8, rectRadius: 0.1,
      fill: { color: WHITE, transparency: 95 },
      line: { color: WHITE, transparency: 90, width: 1 },
    });
    slide6.addText(c.label, {
      x, y: 3.4, w: 2.8, h: 0.5,
      fontSize: 9, color: "666677", align: "center", valign: "bottom",
    });
    slide6.addText(c.value, {
      x, y: 3.9, w: 2.8, h: 1.0,
      fontSize: 12, color: WHITE, bold: true, align: "center", valign: "middle",
    });
  });
  slide6.addText(`© ${new Date().getFullYear()} ООО «Инженерно-технологический центр Сибири». Все права защищены.`, {
    x: 0.5, y: 6.5, w: 12.3, h: 0.4,
    fontSize: 8, color: "555566", align: "center",
  });

  pptx.writeFile({ fileName: "ИТЦ_Сибири_Презентация.pptx" });
}

const Presentation = () => {
  return (
    <>
      <style>{`
        @media print {
          .print-hide {
            display: none !important;
          }
          html, body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          @page {
            size: A4;
            margin: 0;
          }
          .print-break {
            page-break-before: auto;
          }
          section {
            page-break-inside: auto;
            page-break-before: auto;
            page-break-after: auto;
          }
        }
      `}</style>

      <div className="min-h-screen bg-white text-foreground font-sans">
        <div className="print-hide fixed top-6 right-6 z-50 flex gap-2">
          <button
            onClick={generatePptx}
            className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg shadow-lg hover:opacity-90 transition-opacity text-sm font-semibold"
          >
            <Icon name="Download" size={18} />
            Скачать PowerPoint
          </button>
        </div>

        {/* ===== SECTION 1: COVER ===== */}
        <section className="relative bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full -translate-x-1/2 -translate-y-1/2" />

          <div className="relative max-w-5xl mx-auto px-8 py-24 text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                <Icon name="Factory" size={40} className="text-white" />
              </div>
            </div>

            <p className="text-white/70 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              ООО «Инженерно-технологический центр Сибири»
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              ИТЦ Сибири
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              Надежный партнер в металлообработке и производстве
              металлоконструкций с 2013 года
            </p>

            <div className="flex items-center justify-center gap-2 text-white/60 text-sm mb-10">
              <Icon name="MapPin" size={16} />
              <span>г. Красноярск</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                { value: "13 лет", label: "на рынке", icon: "Calendar" },
                { value: "500+", label: "проектов", icon: "FolderCheck" },
                { value: "60+", label: "специалистов", icon: "Users" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 flex items-center gap-3"
                >
                  <Icon
                    name={stat.icon}
                    size={22}
                    className="text-secondary"
                  />
                  <div className="text-left">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-white/60 text-xs uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: ABOUT ===== */}
        <section className="bg-white print-break">
          <div className="max-w-5xl mx-auto px-8 py-20">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name="Building2" size={20} className="text-primary" />
              </div>
              <p className="text-primary font-semibold uppercase text-sm tracking-wider">
                О компании
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
              Опыт на рынке
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  <span className="font-semibold text-foreground">
                    На рынке с 2013 года.
                  </span>{" "}
                  Начинали как небольшая производственная мастерская, выросли в
                  крупное предприятие с собственной производственной базой.
                </p>
                <p>
                  Сегодня ИТЦ Сибири — один из ведущих производителей
                  металлоконструкций в Красноярском крае с более чем{" "}
                  <span className="font-semibold text-foreground">
                    500 выполненными проектами
                  </span>{" "}
                  для промышленных предприятий Сибири.
                </p>
                <p>
                  Наша миссия — обеспечивать надежными и качественными
                  металлоконструкциями промышленные предприятия региона, используя
                  современные технологии и профессиональный подход к каждому
                  проекту.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: "Calendar",
                    text: "13 лет на рынке (с 2013 года)",
                  },
                  {
                    icon: "FolderCheck",
                    text: "500+ выполненных проектов",
                  },
                  {
                    icon: "Factory",
                    text: "Собственная производственная база",
                  },
                  {
                    icon: "MapPin",
                    text: "Работаем с предприятиями Сибири",
                  },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon
                        name={item.icon}
                        size={20}
                        className="text-primary"
                      />
                    </div>
                    <p className="text-foreground font-medium">{item.text}</p>
                  </div>
                ))}

                <div className="mt-6 p-5 bg-primary/5 border border-primary/10 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Award" size={18} className="text-primary" />
                    <span className="font-semibold text-foreground text-sm">
                      Сертификация и допуски
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["ISO 9001:2015", "Лицензия МЧС", "Допуск СРО"].map(
                      (cert) => (
                        <span
                          key={cert}
                          className="inline-flex items-center gap-1.5 bg-white border border-primary/20 text-primary text-xs font-semibold px-3 py-1.5 rounded-full"
                        >
                          <Icon name="BadgeCheck" size={14} />
                          {cert}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-muted-foreground mt-4">
                  <Icon
                    name="MapPin"
                    size={16}
                    className="text-primary shrink-0 mt-0.5"
                  />
                  <span>
                    660020, Красноярский край, г. Красноярск, ул. Дудинская, д.
                    5
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: PRODUCTION ===== */}
        <section className="bg-muted/40 print-break">
          <div className="max-w-5xl mx-auto px-8 py-20">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name="Settings" size={20} className="text-primary" />
              </div>
              <p className="text-primary font-semibold uppercase text-sm tracking-wider">
                Производство
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Производственные мощности
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {[
                {
                  value: "3000+",
                  unit: "м²",
                  label: "производственных площадей",
                },
                {
                  value: "8",
                  unit: "типов",
                  label: "технологий обработки",
                },
                {
                  value: "0.01",
                  unit: "мм",
                  label: "точность обработки",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-5 border border-border text-center"
                >
                  <div className="text-3xl font-bold text-primary">
                    {stat.value}
                    <span className="text-lg font-semibold text-muted-foreground ml-1">
                      {stat.unit}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground mb-8 text-lg">
              Собственная производственная база с современным оборудованием.
              Полный цикл производства: от резки до покраски.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {equipmentCards.map((eq) => (
                <div
                  key={eq.title}
                  className={`${eq.color} border rounded-xl p-5 flex items-start gap-4`}
                >
                  <div
                    className={`w-11 h-11 rounded-lg bg-white flex items-center justify-center shrink-0 ${eq.iconColor}`}
                  >
                    <Icon name={eq.icon} size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm mb-1">
                      {eq.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">{eq.spec}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: TEAM ===== */}
        <section className="bg-white print-break">
          <div className="max-w-5xl mx-auto px-8 py-20">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name="Users" size={20} className="text-primary" />
              </div>
              <p className="text-primary font-semibold uppercase text-sm tracking-wider">
                Команда
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Персонал и команда
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
              Более{" "}
              <span className="font-semibold text-foreground">
                60 квалифицированных специалистов
              </span>
              : аттестованные сварщики с сертификацией, инженеры, конструкторы и
              контролеры качества.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="border border-border rounded-xl p-5 bg-muted/30 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon
                        name={member.icon}
                        size={22}
                        className="text-primary"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">
                        {member.name}
                      </h4>
                      <p className="text-primary text-xs font-semibold">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {member.experience}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: WHY US ===== */}
        <section className="bg-primary text-primary-foreground print-break">
          <div className="max-w-5xl mx-auto px-8 py-20">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <Icon name="Star" size={20} className="text-secondary" />
              </div>
              <p className="text-secondary font-semibold uppercase text-sm tracking-wider">
                Преимущества
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Почему стоит работать с нами
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {advantages.map((adv) => (
                <div
                  key={adv.title}
                  className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5 flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Icon
                      name={adv.icon}
                      size={22}
                      className="text-secondary"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">
                      {adv.title}
                    </h4>
                    <p className="text-white/70 text-sm">{adv.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CONTACTS / FOOTER ===== */}
        <section className="bg-foreground text-white">
          <div className="max-w-5xl mx-auto px-8 py-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Свяжитесь с нами
              </h2>
              <p className="text-white/60 text-sm">
                ООО «Инженерно-технологический центр Сибири»
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "Phone",
                  label: "Телефон",
                  value: "+7 (391) 214-55-01",
                  href: "tel:+73912145501",
                },
                {
                  icon: "Mail",
                  label: "Email",
                  value: "info@itc-sibiri.ru",
                  href: "mailto:info@itc-sibiri.ru",
                },
                {
                  icon: "MapPin",
                  label: "Адрес",
                  value: "660020, г. Красноярск, ул. Дудинская, д. 5",
                },
                {
                  icon: "Clock",
                  label: "Режим работы",
                  value: "Пн-Пт 8:00-17:00",
                },
              ].map((contact) => (
                <div
                  key={contact.label}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-3">
                    <Icon
                      name={contact.icon}
                      size={20}
                      className="text-secondary"
                    />
                  </div>
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                    {contact.label}
                  </p>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-white font-semibold text-sm hover:text-secondary transition-colors"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-white font-semibold text-sm">
                      {contact.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-xs">
              &copy; {new Date().getFullYear()} ООО «Инженерно-технологический
              центр Сибири». Все права защищены.
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Presentation;
