import Icon from "@/components/ui/icon";
import PptxGenJS from "pptxgenjs";

interface Project {
  id: number;
  year: string;
  client: string;
  project: string;
  category: string;
  scope: string;
  location: string;
}

const projects: Project[] = [
  {
    id: 1,
    year: "2024",
    client: "ООО «СибСтройМонтаж»",
    project: "Производственный комплекс — каркас здания",
    category: "Строительные металлоконструкции",
    scope: "Проектирование, изготовление и монтаж каркаса промышленного здания. Колонны, балки, фермы перекрытий, связевые элементы. Общий вес — 120 тонн.",
    location: "г. Красноярск",
  },
  {
    id: 2,
    year: "2024",
    client: "АО «КрасноярскЭнерго»",
    project: "Площадки обслуживания турбинного оборудования",
    category: "Технологические металлоконструкции",
    scope: "Изготовление площадок обслуживания, лестниц, переходов для энергетического объекта. Нержавеющая сталь AISI 304. Нагрузка до 10 т/м².",
    location: "Красноярский край",
  },
  {
    id: 3,
    year: "2024",
    client: "ООО «ЛогистикПро»",
    project: "Складской комплекс 4800 м²",
    category: "Строительство складских помещений",
    scope: "Быстровозводимый склад класса «А». Пролет 18 м, высота 10 м. Сэндвич-панели 120 мм, система вентиляции, пожаротушение. Срок — 4 месяца.",
    location: "г. Красноярск",
  },
  {
    id: 4,
    year: "2023",
    client: "ФКУ «СибУпрДор»",
    project: "Опоры освещения федеральной трассы М-54",
    category: "Дорожное освещение",
    scope: "Производство и монтаж 340 опор освещения высотой 9–12 м. LED-светильники 150–400 Вт, класс защиты IP67. Участок 28 км.",
    location: "Красноярский край",
  },
  {
    id: 5,
    year: "2023",
    client: "ООО «АвиаСервис Сибирь»",
    project: "Ангар для вертолетной техники",
    category: "Авиационные ангары",
    scope: "Быстровозводимый ангар 30×24 м для размещения вертолетов Ми-8. Ворота подъемного типа, система обогрева, вентиляция. ГОСТ Р 56193-2014.",
    location: "Красноярский край",
  },
  {
    id: 6,
    year: "2023",
    client: "АО «Административное здание»",
    project: "Декоративные металлоконструкции фасада",
    category: "Декоративные металлоконструкции",
    scope: "Изготовление и монтаж декоративных козырьков, ограждений балконов, входных групп. Художественная ковка, порошковая покраска.",
    location: "г. Красноярск",
  },
  {
    id: 7,
    year: "2023",
    client: "ООО «СибБетон»",
    project: "Закладные детали для ЖБИ — партия 15 000 шт.",
    category: "Закладные для ЖБИ",
    scope: "Серийное производство закладных деталей по чертежам заказчика. Сталь 09Г2С, горячее цинкование. Контроль качества ОТК.",
    location: "г. Красноярск",
  },
  {
    id: 8,
    year: "2023",
    client: "ООО «ГорноРуда»",
    project: "Конвейерная галерея и эстакада",
    category: "Технологические металлоконструкции",
    scope: "Проектирование и изготовление конвейерной галереи длиной 85 м. Каркасы оборудования, площадки обслуживания. Эксплуатация при −60°C.",
    location: "Норильск",
  },
  {
    id: 9,
    year: "2022",
    client: "ООО «МашТехСервис»",
    project: "Фрезерная обработка корпусных деталей",
    category: "Фрезерные работы",
    scope: "Серийная обработка на 5-осевых ЧПУ-станках. 200 корпусов из алюминия Д16Т. Точность ±0.05 мм. Размеры до 800×600×400 мм.",
    location: "г. Красноярск",
  },
  {
    id: 10,
    year: "2022",
    client: "АО «ЭнергоМаш»",
    project: "Токарная обработка валов и фланцев",
    category: "Токарные работы",
    scope: "Изготовление приводных валов ⌀320 мм, длина 1800 мм. Фланцы из стали 40Х. Точность IT6. Партия 45 шт.",
    location: "г. Красноярск",
  },
  {
    id: 11,
    year: "2022",
    client: "ООО «НефтеГазСтрой»",
    project: "Резервуары для технических жидкостей",
    category: "Технологические емкости",
    scope: "Изготовление 8 резервуаров объемом 25 м³ каждый. Нержавеющая сталь AISI 316, стенка 6 мм. Теплоизоляция, указатели уровня.",
    location: "Красноярский край",
  },
  {
    id: 12,
    year: "2022",
    client: "МУП «Городское благоустройство»",
    project: "Мусорные контейнеры — партия 500 шт.",
    category: "Технологические емкости",
    scope: "Серийное производство контейнеров для ТКО объемом 0.75 и 1.1 м³. Сталь Ст3, толщина 2 мм. Порошковая покраска RAL 6005.",
    location: "г. Красноярск",
  },
  {
    id: 13,
    year: "2021",
    client: "ООО «АгроСибирь»",
    project: "Зернохранилище 2400 м²",
    category: "Строительство складских помещений",
    scope: "Каркасное зернохранилище с системой вентиляции. Пролет 24 м, высота 8 м. Профлист с утеплением. Срок строительства — 3 месяца.",
    location: "Минусинский район",
  },
  {
    id: 14,
    year: "2021",
    client: "ООО «ТеплоСтрой»",
    project: "Сварные металлоконструкции котельной",
    category: "Сварные металлоконструкции",
    scope: "Каркас котельной, площадки обслуживания, лестницы, ограждения. Сварка MIG/MAG, аттестованные сварщики. Общий вес — 48 тонн.",
    location: "г. Красноярск",
  },
  {
    id: 15,
    year: "2021",
    client: "ООО «ДорСтрой»",
    project: "Лазерная и плазменная резка деталей мостовых конструкций",
    category: "Услуги по обработке металла",
    scope: "Резка листового металла толщиной до 40 мм. Плазменная резка 09Г2С, лазерная резка нержавеющей стали до 16 мм. 1200 деталей.",
    location: "Красноярский край",
  },
];

const categoryColors: Record<string, string> = {
  "Строительные металлоконструкции": "bg-blue-100 text-blue-700",
  "Технологические металлоконструкции": "bg-purple-100 text-purple-700",
  "Строительство складских помещений": "bg-green-100 text-green-700",
  "Дорожное освещение": "bg-yellow-100 text-yellow-700",
  "Авиационные ангары": "bg-sky-100 text-sky-700",
  "Декоративные металлоконструкции": "bg-pink-100 text-pink-700",
  "Закладные для ЖБИ": "bg-orange-100 text-orange-700",
  "Фрезерные работы": "bg-indigo-100 text-indigo-700",
  "Токарные работы": "bg-cyan-100 text-cyan-700",
  "Технологические емкости": "bg-teal-100 text-teal-700",
  "Сварные металлоконструкции": "bg-red-100 text-red-700",
  "Услуги по обработке металла": "bg-amber-100 text-amber-700",
};

const PRIMARY_COLOR = "1B3A5C";
const SECONDARY_COLOR = "E8A54B";
const DARK_COLOR = "1A1A2E";
const LIGHT_BG = "F5F7FA";
const WHITE = "FFFFFF";
const MUTED = "6B7280";

const TABLE_HEADER_BG = "1B3A5C";
const TABLE_ROW_EVEN = "F5F7FA";
const TABLE_ROW_ODD = "FFFFFF";
const TABLE_BORDER = "D1D5DB";

function generatePptx() {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE";
  pptx.author = "ИТЦ Сибири";
  pptx.company = "ООО «Инженерно-технологический центр Сибири»";
  pptx.subject = "Референс-лист";
  pptx.title = "ИТЦ Сибири — Референс-лист";

  // --- SLIDE 1: COVER ---
  const slide1 = pptx.addSlide();
  slide1.background = { color: PRIMARY_COLOR };
  slide1.addShape(pptx.ShapeType.ellipse, {
    x: 10, y: -1, w: 4, h: 4,
    fill: { color: WHITE, transparency: 95 },
  });
  slide1.addShape(pptx.ShapeType.ellipse, {
    x: -1.5, y: 5, w: 3, h: 3,
    fill: { color: WHITE, transparency: 95 },
  });
  slide1.addText("ООО «Инженерно-технологический центр Сибири»", {
    x: 0.5, y: 1.2, w: 12.3, h: 0.5,
    fontSize: 12, color: "A0B8D0", align: "center",
    charSpacing: 4, bold: true,
  });
  slide1.addText("Референс-лист", {
    x: 0.5, y: 2.2, w: 12.3, h: 1.2,
    fontSize: 48, color: WHITE, align: "center", bold: true,
  });
  slide1.addText("Перечень выполненных проектов и реализованных объектов\nза период 2021–2024 гг.", {
    x: 1.5, y: 3.6, w: 10.3, h: 0.8,
    fontSize: 16, color: "C0D0E0", align: "center", lineSpacingMultiple: 1.3,
  });
  slide1.addText("г. Красноярск", {
    x: 0.5, y: 4.6, w: 12.3, h: 0.4,
    fontSize: 12, color: "8899AA", align: "center",
  });
  const stats = [
    { value: "500+", label: "проектов" },
    { value: "13 лет", label: "на рынке" },
    { value: "12", label: "направлений" },
  ];
  stats.forEach((s, i) => {
    const x = 3.2 + i * 2.6;
    slide1.addShape(pptx.ShapeType.roundRect, {
      x, y: 5.4, w: 2.2, h: 1.0, rectRadius: 0.1,
      fill: { color: WHITE, transparency: 88 },
      line: { color: WHITE, transparency: 80, width: 1 },
    });
    slide1.addText(s.value, {
      x, y: 5.4, w: 2.2, h: 0.6,
      fontSize: 22, color: WHITE, bold: true, align: "center", valign: "bottom",
    });
    slide1.addText(s.label, {
      x, y: 5.95, w: 2.2, h: 0.35,
      fontSize: 9, color: "8899AA", align: "center", valign: "top",
    });
  });

  // --- TABLE SLIDES ---
  const rowsPerSlide = 5;
  const totalSlides = Math.ceil(projects.length / rowsPerSlide);

  for (let s = 0; s < totalSlides; s++) {
    const slide = pptx.addSlide();
    slide.background = { color: WHITE };
    slide.addShape(pptx.ShapeType.rect, {
      x: 0, y: 0, w: 0.12, h: 7.5, fill: { color: PRIMARY_COLOR },
    });

    slide.addText(`Выполненные проекты (${s + 1}/${totalSlides})`, {
      x: 0.4, y: 0.2, w: 12, h: 0.5,
      fontSize: 18, color: DARK_COLOR, bold: true,
    });

    const chunk = projects.slice(s * rowsPerSlide, (s + 1) * rowsPerSlide);

    const headerRow = [
      { text: "№", options: { fontSize: 9, color: WHITE, bold: true, align: "center" as const, fill: { color: TABLE_HEADER_BG } } },
      { text: "Год", options: { fontSize: 9, color: WHITE, bold: true, align: "center" as const, fill: { color: TABLE_HEADER_BG } } },
      { text: "Заказчик", options: { fontSize: 9, color: WHITE, bold: true, fill: { color: TABLE_HEADER_BG } } },
      { text: "Проект", options: { fontSize: 9, color: WHITE, bold: true, fill: { color: TABLE_HEADER_BG } } },
      { text: "Категория", options: { fontSize: 9, color: WHITE, bold: true, fill: { color: TABLE_HEADER_BG } } },
      { text: "Объем работ", options: { fontSize: 9, color: WHITE, bold: true, fill: { color: TABLE_HEADER_BG } } },
    ];

    const dataRows = chunk.map((p, i) => {
      const bgColor = i % 2 === 0 ? TABLE_ROW_EVEN : TABLE_ROW_ODD;
      return [
        { text: String(p.id), options: { fontSize: 8, color: DARK_COLOR, align: "center" as const, fill: { color: bgColor } } },
        { text: p.year, options: { fontSize: 8, color: DARK_COLOR, align: "center" as const, fill: { color: bgColor } } },
        { text: p.client, options: { fontSize: 8, color: DARK_COLOR, fill: { color: bgColor } } },
        { text: p.project, options: { fontSize: 8, color: DARK_COLOR, bold: true, fill: { color: bgColor } } },
        { text: p.category, options: { fontSize: 8, color: PRIMARY_COLOR, bold: true, fill: { color: bgColor } } },
        { text: p.scope, options: { fontSize: 7, color: MUTED, fill: { color: bgColor } } },
      ];
    });

    slide.addTable([headerRow, ...dataRows], {
      x: 0.35, y: 0.9, w: 12.6,
      colW: [0.5, 0.6, 1.8, 2.2, 2.0, 5.5],
      border: { type: "solid", pt: 0.5, color: TABLE_BORDER },
      rowH: chunk.map(() => 1.15),
      autoPage: false,
    });

    slide.addText(`ООО «ИТЦ Сибири»  •  г. Красноярск  •  +7 (391) 214-55-01  •  info@itc-sibiri.ru`, {
      x: 0.5, y: 7.0, w: 12, h: 0.3,
      fontSize: 8, color: MUTED, align: "center",
    });
  }

  // --- LAST SLIDE: SUMMARY ---
  const lastSlide = pptx.addSlide();
  lastSlide.background = { color: PRIMARY_COLOR };
  lastSlide.addText("Итого по направлениям", {
    x: 0.5, y: 0.4, w: 12, h: 0.6,
    fontSize: 28, color: WHITE, bold: true, align: "center",
  });

  const categoryCounts: Record<string, number> = {};
  projects.forEach((p) => {
    categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
  });
  const cats = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]);

  cats.forEach((cat, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.5 + col * 4.2;
    const y = 1.4 + row * 1.3;
    lastSlide.addShape(pptx.ShapeType.roundRect, {
      x, y, w: 3.8, h: 1.1, rectRadius: 0.08,
      fill: { color: WHITE, transparency: 88 },
      line: { color: WHITE, transparency: 82, width: 1 },
    });
    lastSlide.addText(cat[0], {
      x: x + 0.2, y, w: 2.8, h: 0.65,
      fontSize: 11, color: WHITE, bold: true, valign: "bottom",
    });
    lastSlide.addText(`${cat[1]} ${cat[1] === 1 ? "проект" : cat[1] < 5 ? "проекта" : "проектов"}`, {
      x: x + 0.2, y: y + 0.6, w: 2.8, h: 0.4,
      fontSize: 10, color: SECONDARY_COLOR, valign: "top",
    });
    lastSlide.addText(String(cat[1]), {
      x: x + 3.0, y, w: 0.6, h: 1.1,
      fontSize: 28, color: SECONDARY_COLOR, bold: true, align: "center", valign: "middle",
    });
  });

  lastSlide.addText(`Всего представлено проектов: ${projects.length}  •  Период: 2021–2024`, {
    x: 0.5, y: 6.6, w: 12, h: 0.4,
    fontSize: 12, color: "A0B8D0", align: "center",
  });
  lastSlide.addText(`© ${new Date().getFullYear()} ООО «Инженерно-технологический центр Сибири»`, {
    x: 0.5, y: 7.0, w: 12, h: 0.3,
    fontSize: 8, color: "667788", align: "center",
  });

  pptx.writeFile({ fileName: "ИТЦ_Сибири_Референс_лист.pptx" });
}

const ReferenceList = () => {
  return (
    <div className="min-h-screen bg-white text-foreground font-sans">
      <div className="fixed top-6 right-6 z-50 flex gap-2">
        <button
          onClick={generatePptx}
          className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg shadow-lg hover:opacity-90 transition-opacity text-sm font-semibold"
        >
          <Icon name="Download" size={18} />
          Скачать PowerPoint
        </button>
      </div>

      {/* COVER */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-5xl mx-auto px-8 py-20 text-center">
          <p className="text-white/70 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            ООО «Инженерно-технологический центр Сибири»
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Референс-лист
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Перечень выполненных проектов и реализованных объектов за период 2021–2024 гг.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { value: "500+", label: "проектов" },
              { value: "13 лет", label: "на рынке" },
              { value: "12", label: "направлений" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 flex items-center gap-3"
              >
                <div className="text-xl font-bold">{stat.value}</div>
                <div className="text-white/60 text-xs uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT TABLE */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon name="ClipboardList" size={20} className="text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Выполненные проекты
            </h2>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-4 py-3 text-left font-semibold w-12">№</th>
                  <th className="px-4 py-3 text-left font-semibold w-16">Год</th>
                  <th className="px-4 py-3 text-left font-semibold w-44">Заказчик</th>
                  <th className="px-4 py-3 text-left font-semibold">Проект</th>
                  <th className="px-4 py-3 text-left font-semibold w-48">Категория</th>
                  <th className="px-4 py-3 text-left font-semibold w-20">Регион</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p, i) => (
                  <tr
                    key={p.id}
                    className={`border-t border-border ${i % 2 === 0 ? "bg-muted/30" : "bg-white"} hover:bg-muted/50 transition-colors`}
                  >
                    <td className="px-4 py-3 text-muted-foreground font-medium">{p.id}</td>
                    <td className="px-4 py-3 font-semibold">{p.year}</td>
                    <td className="px-4 py-3 text-foreground font-medium">{p.client}</td>
                    <td className="px-4 py-3">
                      <div className="font-semibold text-foreground mb-1">{p.project}</div>
                      <div className="text-xs text-muted-foreground leading-relaxed">{p.scope}</div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[p.category] || "bg-gray-100 text-gray-700"}`}>
                        {p.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">{p.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SUMMARY BY CATEGORY */}
      <section className="bg-muted/40 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon name="BarChart3" size={20} className="text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Итого по направлениям
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.entries(
              projects.reduce((acc, p) => {
                acc[p.category] = (acc[p.category] || 0) + 1;
                return acc;
              }, {} as Record<string, number>)
            )
              .sort((a, b) => b[1] - a[1])
              .map(([category, count]) => (
                <div
                  key={category}
                  className="bg-white rounded-xl p-5 border border-border flex items-center gap-4"
                >
                  <div className="text-3xl font-bold text-primary">{count}</div>
                  <div className="text-sm font-medium text-foreground leading-tight">{category}</div>
                </div>
              ))}
          </div>

          <div className="mt-8 text-center text-muted-foreground">
            Всего представлено проектов: <span className="font-bold text-foreground">{projects.length}</span> • Период: 2021–2024
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="bg-foreground text-white py-10">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <p className="font-semibold mb-2">ООО «Инженерно-технологический центр Сибири»</p>
          <p className="text-white/60 text-sm">
            +7 (391) 214-55-01 • info@itc-sibiri.ru • г. Красноярск, ул. Дудинская, д. 5
          </p>
          <p className="text-white/30 text-xs mt-4">
            &copy; {new Date().getFullYear()} ООО «ИТЦ Сибири». Все права защищены.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ReferenceList;
