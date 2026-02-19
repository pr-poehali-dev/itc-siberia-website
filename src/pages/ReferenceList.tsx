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
  { id: 1, year: "2024", client: "ООО «СибСтройМонтаж»", project: "Производственный комплекс — каркас здания", category: "Строительные металлоконструкции", scope: "Проектирование, изготовление и монтаж каркаса промышленного здания. Колонны, балки, фермы перекрытий, связевые элементы. Общий вес — 120 тонн.", location: "г. Красноярск" },
  { id: 2, year: "2024", client: "ПАО «МРСК Сибири»", project: "Металлоконструкции подстанции 110/10 кВ", category: "Строительные металлоконструкции", scope: "Изготовление и монтаж порталов, стоек, траверс, молниеотводов. Горячее цинкование. Класс ответственности КС-3. Общий вес — 86 тонн.", location: "г. Ачинск" },
  { id: 3, year: "2024", client: "АО «Ванкорнефть»", project: "Технологические трубопроводы нефтеперекачивающей станции", category: "Промышленные трубопроводы", scope: "Изготовление и монтаж трубопроводов DN150–DN500. Сталь 09Г2С. Контроль сварных соединений — 100% УЗК, 25% рентген. Давление до 6.3 МПа.", location: "Красноярский край" },
  { id: 4, year: "2024", client: "ООО «ТрансНефтьСервис»", project: "Резервуары хранения нефтепродуктов РВС-2000", category: "Технологические емкости", scope: "Изготовление и монтаж 3 вертикальных стальных резервуаров объемом 2000 м³ каждый. Понтоны, обвязка, КИП. ГОСТ 31385-2016.", location: "г. Ачинск" },
  { id: 5, year: "2024", client: "ООО «МостСтрой-Сибирь»", project: "Металлоконструкции пешеходного моста через р. Кача", category: "Мостовые конструкции", scope: "Пролетное строение L=42 м. Балки двутавровые сварные, перильное ограждение, настил. Монтаж краном 250 т. Общий вес — 68 тонн.", location: "г. Красноярск" },
  { id: 6, year: "2024", client: "АО «Полюс Красноярск»", project: "Нестандартное оборудование для золотоизвлекательной фабрики", category: "Нестандартное оборудование", scope: "Бункеры, течки, воронки, переходники для системы транспортировки руды. Износостойкая сталь Hardox 400. Партия — 48 изделий.", location: "Красноярский край" },
  { id: 7, year: "2024", client: "ООО «АэроТех Красноярск»", project: "Ангар для деловой авиации", category: "Авиационные ангары", scope: "Ангар 42×36 м для бизнес-джетов. Ворота раздвижные 36 м, высота 8 м. Отопление, вентиляция, пожаротушение, система молниезащиты.", location: "г. Красноярск" },
  { id: 8, year: "2024", client: "ООО «ЛогистикПро»", project: "Складской комплекс 4800 м²", category: "Строительство складских помещений", scope: "Быстровозводимый склад класса «А». Пролет 18 м, высота 10 м. Сэндвич-панели 120 мм, система вентиляции, пожаротушение. Срок — 4 месяца.", location: "г. Красноярск" },
  { id: 9, year: "2024", client: "ООО «КузбассРудСтрой»", project: "Каркасы дробильно-сортировочного комплекса", category: "Технологические металлоконструкции", scope: "Каркасы под дробилки, грохоты, конвейерное оборудование. Сталь 09Г2С, антикоррозионная защита С5-I. Площадки обслуживания. Общий вес — 94 тонны.", location: "Кемеровская область" },
  { id: 10, year: "2023", client: "ФКУ «СибУпрДор»", project: "Опоры освещения федеральной трассы М-54", category: "Дорожное освещение", scope: "Производство и монтаж 340 опор освещения высотой 9–12 м. LED-светильники 150–400 Вт, класс защиты IP67. Участок 28 км.", location: "Красноярский край" },
  { id: 11, year: "2023", client: "ООО «ПромТеплоСтрой»", project: "Каркас блочно-модульной котельной 12 МВт", category: "Строительные металлоконструкции", scope: "Несущий каркас котельной в блочно-модульном исполнении. 3 модуля по 12×4×4 м. Сэндвич-панели, инженерные системы. Общий вес — 54 тонны.", location: "г. Лесосибирск" },
  { id: 12, year: "2023", client: "ООО «СибирскийТранзит»", project: "Логистический терминал 6200 м²", category: "Строительство складских помещений", scope: "Каркасный склад с зоной кросс-докинга. Пролет 24 м, высота 12 м. Секционные ворота (8 шт.), рампа, офисный блок. Срок — 5 месяцев.", location: "г. Красноярск" },
  { id: 13, year: "2023", client: "АО «Русал Красноярск»", project: "Площадки обслуживания электролизного цеха", category: "Технологические металлоконструкции", scope: "Замена площадок обслуживания электролизеров. Алюминиевые настилы, перильные ограждения. Работа в агрессивной среде. 1800 м² площадок.", location: "г. Красноярск" },
  { id: 14, year: "2023", client: "ООО «ТрубПромСервис»", project: "Технологические трубопроводы ТЭЦ-3", category: "Промышленные трубопроводы", scope: "Трубопроводы пара и горячей воды DN200–DN800. Сталь 12Х1МФ. Тепловая изоляция. Контроль — УЗК 100%. Общая длина — 1200 пог. м.", location: "г. Красноярск" },
  { id: 15, year: "2023", client: "ООО «Мостовик-Сибирь»", project: "Пролетные строения автомобильного моста", category: "Мостовые конструкции", scope: "Два пролетных строения L=33 м каждое. Сварные двутавровые балки, диафрагмы, связи. Сталь 10ХСНД. Общий вес — 142 тонны.", location: "Красноярский край" },
  { id: 16, year: "2023", client: "АО «Богучанский алюминиевый завод»", project: "Сварные металлоконструкции литейного цеха", category: "Сварные металлоконструкции", scope: "Подкрановые балки пролетом 18 м, колонны, связи. Сварка в среде защитных газов. Аттестация НАКС. Общий вес — 96 тонн.", location: "г. Богучаны" },
  { id: 17, year: "2023", client: "ООО «АгроТехХолдинг»", project: "Зернохранилище с сушильным комплексом 3600 м²", category: "Строительство складских помещений", scope: "Каркасное зернохранилище с напольной сушилкой. Пролет 30 м, высота 9 м. Система аэрации, термометрии. Вместимость — 8000 тонн.", location: "Минусинский район" },
  { id: 18, year: "2023", client: "ООО «ЕнисейЗолото»", project: "Нестандартное оборудование для промывочного прибора", category: "Нестандартное оборудование", scope: "Шлюзы, загрузочные бункеры, грохоты вибрационные. Износостойкая футеровка. Габариты изделий до 6×2.5×3 м. Партия — 12 единиц.", location: "Красноярский край" },
  { id: 19, year: "2023", client: "ООО «ТюменьСтройГазПром»", project: "Конвейерная галерея и технологические эстакады", category: "Технологические металлоконструкции", scope: "Конвейерная галерея длиной 120 м, эстакады трубопроводов. Каркасы оборудования, площадки обслуживания. Эксплуатация при −45°C. 76 тонн.", location: "Тюменская область" },
  { id: 20, year: "2022", client: "ООО «КрасПромСтрой»", project: "Каркас производственного цеха 72×36 м", category: "Строительные металлоконструкции", scope: "Полнокомплектный каркас: колонны HN400, фермы L=36 м, прогоны, связи, фахверк. Мостовой кран 10 т. Общий вес — 186 тонн.", location: "г. Красноярск" },
  { id: 21, year: "2022", client: "ООО «СибПромВентиляция»", project: "Воздуховоды и газоходы для металлургического завода", category: "Нестандартное оборудование", scope: "Воздуховоды ⌀500–⌀1800 мм из стали 12Х18Н10Т. Газоходы с теплоизоляцией. Компенсаторы, шиберы, клапаны. Общая длина — 340 пог. м.", location: "г. Красноярск" },
  { id: 22, year: "2022", client: "ФКУ «Байкалуправтодор»", project: "Барьерные ограждения федеральной трассы", category: "Ограждающие конструкции", scope: "Металлические барьерные ограждения 11ДО (удерживающая способность 350 кДж). Стойки, балки, консоли. Горячее цинкование. 14 км.", location: "Иркутская область" },
  { id: 23, year: "2022", client: "ООО «ТеплоЭнергоСервис»", project: "Трубопроводы теплосети микрорайона «Солнечный»", category: "Промышленные трубопроводы", scope: "Трубопроводы теплоснабжения DN100–DN400 в ППУ-изоляции. Компенсаторы, запорная арматура. Общая длина — 3.8 км.", location: "г. Красноярск" },
  { id: 24, year: "2022", client: "ОАО «Красноярский речной порт»", project: "Ремонт металлоконструкций причальной стенки", category: "Сварные металлоконструкции", scope: "Ремонт и усиление причальных конструкций. Замена шпунтов, сварка швов, антикоррозионная защита. Протяженность участка — 120 м.", location: "г. Красноярск" },
  { id: 25, year: "2022", client: "ООО «ИркутскСтройМост»", project: "Элементы пролетных строений моста через р. Ангара", category: "Мостовые конструкции", scope: "Ортотропная плита, ребра жесткости, поперечные балки. Сталь 10ХСНД, класс прочности С390. Монтажные соединения на ВПБ. 94 тонны.", location: "Иркутская область" },
  { id: 26, year: "2022", client: "ООО «СтройИнвест»", project: "Складской комплекс с административным блоком 3200 м²", category: "Строительство складских помещений", scope: "Теплый склад класса «B+» с офисной частью. Пролет 18 м. Секционные ворота, погрузочные доки, система видеонаблюдения.", location: "г. Новосибирск" },
  { id: 27, year: "2022", client: "ООО «КемеровоЭнерго»", project: "Площадки и лестницы градирни", category: "Технологические металлоконструкции", scope: "Площадки обслуживания на отметках +12, +24, +36 м. Лестницы маршевые, ограждения. Оцинковка. Общий вес — 32 тонны.", location: "г. Кемерово" },
  { id: 28, year: "2022", client: "ООО «СибЭнергоМаш»", project: "Корпуса и крышки теплообменных аппаратов", category: "Нестандартное оборудование", scope: "Изготовление кожухотрубных теплообменников. Корпуса ⌀800, длина 6 м. Сталь 09Г2С, давление 1.6 МПа. 6 единиц.", location: "г. Красноярск" },
  { id: 29, year: "2021", client: "ООО «ТеплоСтрой»", project: "Сварные металлоконструкции котельной", category: "Сварные металлоконструкции", scope: "Каркас котельной, площадки обслуживания, лестницы, ограждения. Сварка MIG/MAG, аттестованные сварщики. Общий вес — 48 тонн.", location: "г. Красноярск" },
  { id: 30, year: "2021", client: "ООО «СибМост»", project: "Опорные части и шарниры мостовых пролетов", category: "Мостовые конструкции", scope: "Стальные опорные части РОЧ для мостов. Тангенциальные, шаровые. Нагрузка до 500 тс. Партия — 24 комплекта.", location: "г. Красноярск" },
  { id: 31, year: "2021", client: "ООО «ТомскНефтехим»", project: "Технологические трубопроводы химического производства", category: "Промышленные трубопроводы", scope: "Трубопроводы для агрессивных сред DN50–DN300. Нержавеющая сталь 12Х18Н10Т. Орбитальная сварка. Контроль — 100% рентген.", location: "г. Томск" },
  { id: 32, year: "2021", client: "ООО «ДорСервис-Красноярск»", project: "Опоры освещения развязки на обходе города", category: "Дорожное освещение", scope: "Оцинкованные опоры H=16 м — 96 шт. Мачты высотой 25 м с короной на 6 светильников — 12 шт. Фундаментные болты, кабельные лотки.", location: "г. Красноярск" },
  { id: 33, year: "2021", client: "АО «КрасМаш»", project: "Нестандартные сварные конструкции стендового оборудования", category: "Нестандартное оборудование", scope: "Рамы, станины, кронштейны для испытательного оборудования. Сталь 30ХГСА. Термообработка. Точность установочных поверхностей ±0.1 мм.", location: "г. Красноярск" },
  { id: 34, year: "2021", client: "ООО «УралСибСталь»", project: "Каркас автосалона с шоурумом 1800 м²", category: "Строительные металлоконструкции", scope: "Металлокаркас торгового павильона. Витражное остекление, фасадная система. Пролет 15 м, высота 6 м. Общий вес — 64 тонны.", location: "г. Красноярск" },
  { id: 35, year: "2021", client: "ООО «ОмскСтройИнвест»", project: "Ангар для техники дорожной службы", category: "Авиационные ангары", scope: "Утепленный ангар 48×24 м для спецтехники. Ворота секционные 12×5 м — 4 шт. Отопление, освещение, приточная вентиляция.", location: "г. Омск" },
  { id: 36, year: "2021", client: "ООО «Металл-Инвест»", project: "Ёмкости для хранения ГСМ — 12 единиц", category: "Технологические емкости", scope: "Горизонтальные резервуары 10–50 м³ для дизельного топлива и масел. Двустенные, с системой контроля утечек. ГОСТ 17032-2010.", location: "Красноярский край" },
  { id: 37, year: "2021", client: "ООО «ПромЭлектроМонтаж»", project: "Кабельные эстакады и лотки промплощадки", category: "Технологические металлоконструкции", scope: "Кабельные эстакады протяженностью 2.4 км. Стойки, траверсы, перфорированные лотки. Горячее цинкование. Монтаж на высоте до 12 м.", location: "г. Красноярск" },
  { id: 38, year: "2021", client: "ООО «СибДорСтрой»", project: "Барьерные и пешеходные ограждения автодороги", category: "Ограждающие конструкции", scope: "Барьерные ограждения 11ДО и 11МО — 8.5 км. Пешеходные ограждения перильного типа — 2.3 км. Горячее цинкование, светоотражатели.", location: "Красноярский край" },
  { id: 39, year: "2020", client: "ООО «ХакасЭнерго»", project: "Площадки обслуживания котлоагрегатов ТЭЦ", category: "Технологические металлоконструкции", scope: "Площадки на отметках +6, +12, +18, +24 м. Решетчатый настил, маршевые лестницы. Общая площадь — 640 м². Вес — 38 тонн.", location: "г. Абакан" },
  { id: 40, year: "2020", client: "ООО «СибирьТрансАвиа»", project: "Ангар технического обслуживания Ан-26", category: "Авиационные ангары", scope: "Ангар 60×42 м с воротами типа «бабочка». Высота в коньке 14 м. Мостовой кран 5 т. Система пожаротушения, обогрева.", location: "г. Красноярск" },
  { id: 41, year: "2020", client: "ООО «БратскСтройКомплект»", project: "Складской комплекс для стройматериалов 5400 м²", category: "Строительство складских помещений", scope: "Неотапливаемый склад с навесом. Пролет 24 м, высота 10 м. Кран-балка 5 т. Площадка для разгрузки большегрузов.", location: "г. Братск" },
  { id: 42, year: "2020", client: "ОАО «РУСАЛ Ачинск»", project: "Замена газоходов глиноземного производства", category: "Промышленные трубопроводы", scope: "Демонтаж и монтаж газоходов ⌀1200–⌀2500 мм. Жаростойкая сталь 20Х23Н18. Компенсаторы, шиберные заслонки. 280 пог. м.", location: "г. Ачинск" },
  { id: 43, year: "2020", client: "ООО «ТрансМост»", project: "Металлоконструкции путепровода через ж/д пути", category: "Мостовые конструкции", scope: "Пролетные строения 2×24 м. Сплошностенчатые балки, тротуарные консоли, перильные ограждения. Монтаж надвижкой. 118 тонн.", location: "г. Красноярск" },
  { id: 44, year: "2020", client: "ООО «ЗапСибНефтеПром»", project: "Ёмкостное оборудование УКПГ", category: "Технологические емкости", scope: "Сепараторы, ресиверы, дренажные ёмкости. Давление до 4 МПа. Нержавеющая сталь. Паспортизация Ростехнадзор. 14 единиц.", location: "Томская область" },
  { id: 45, year: "2020", client: "ООО «КузбассСтройМаш»", project: "Сварные рамы и корпуса горношахтного оборудования", category: "Сварные металлоконструкции", scope: "Рамы конвейеров, корпуса редукторов, крепёжные конструкции. Сварка в среде CO₂. Контроль — ВИК, УЗК. Партия — 60 изделий.", location: "г. Кемерово" },
  { id: 46, year: "2020", client: "ООО «СаяноГорскМеталл»", project: "Каркас надшахтного здания рудника", category: "Строительные металлоконструкции", scope: "Каркас надшахтного здания. Колонны, ригели, фермы, подкрановые пути для крана 50 т. Сталь 09Г2С-15 (−45°C). 196 тонн.", location: "г. Саяногорск" },
  { id: 47, year: "2019", client: "ООО «ЕнисейТрансСтрой»", project: "Каркас транспортного терминала 8400 м²", category: "Строительные металлоконструкции", scope: "Несущий каркас логистического центра. Пролеты 18 и 24 м, мостовой кран 10 т. Фахверковые колонны, прогоны, фермы. 248 тонн.", location: "г. Красноярск" },
  { id: 48, year: "2019", client: "АО «Красноярская ТЭЦ-1»", project: "Металлоконструкции дымовой трубы H=120 м", category: "Технологические металлоконструкции", scope: "Газоотводящий ствол ⌀3.6 м, площадки обслуживания, молниезащита, маркировочная окраска. Жаростойкая сталь. 74 тонны.", location: "г. Красноярск" },
  { id: 49, year: "2019", client: "ООО «РусМост»", project: "Элементы арочного моста через протоку", category: "Мостовые конструкции", scope: "Арочные ребра R=28 м, подвески, ветровые связи, проезжая часть. Сталь С345. Заводские контрольные сборки. 156 тонн.", location: "Красноярский край" },
  { id: 50, year: "2019", client: "ПАО «Россети Сибирь»", project: "Опоры ЛЭП 110 кВ — партия 85 шт.", category: "Строительные металлоконструкции", scope: "Анкерно-угловые и промежуточные опоры ВЛ 110 кВ. Горячее цинкование, комплектация метизами. Общий вес — 320 тонн.", location: "Красноярский край" },
];

const categoryColors: Record<string, string> = {
  "Строительные металлоконструкции": "bg-blue-100 text-blue-700",
  "Технологические металлоконструкции": "bg-purple-100 text-purple-700",
  "Строительство складских помещений": "bg-green-100 text-green-700",
  "Дорожное освещение": "bg-yellow-100 text-yellow-700",
  "Авиационные ангары": "bg-sky-100 text-sky-700",
  "Декоративные металлоконструкции": "bg-pink-100 text-pink-700",
  "Фрезерные работы": "bg-indigo-100 text-indigo-700",
  "Токарные работы": "bg-cyan-100 text-cyan-700",
  "Технологические емкости": "bg-teal-100 text-teal-700",
  "Сварные металлоконструкции": "bg-red-100 text-red-700",
  "Услуги по обработке металла": "bg-amber-100 text-amber-700",
  "Промышленные трубопроводы": "bg-violet-100 text-violet-700",
  "Нестандартное оборудование": "bg-lime-100 text-lime-700",
  "Мостовые конструкции": "bg-rose-100 text-rose-700",
  "Ограждающие конструкции": "bg-emerald-100 text-emerald-700",
};

const PRIMARY_COLOR = "1B3A5C";
const SECONDARY_COLOR = "E8A54B";
const DARK_COLOR = "1A1A2E";
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
  slide1.addText("Перечень крупных выполненных проектов\nза период 2019–2024 гг.", {
    x: 1.5, y: 3.6, w: 10.3, h: 0.8,
    fontSize: 16, color: "C0D0E0", align: "center", lineSpacingMultiple: 1.3,
  });
  slide1.addText("г. Красноярск", {
    x: 0.5, y: 4.6, w: 12.3, h: 0.4,
    fontSize: 12, color: "8899AA", align: "center",
  });
  const uniqueCategories = [...new Set(projects.map(p => p.category))];
  const stats = [
    { value: String(projects.length), label: "крупных проектов" },
    { value: "13 лет", label: "на рынке" },
    { value: String(uniqueCategories.length), label: "направлений" },
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

  const lastSlide = pptx.addSlide();
  lastSlide.background = { color: PRIMARY_COLOR };
  lastSlide.addText("Итого по направлениям", {
    x: 0.5, y: 0.3, w: 12, h: 0.5,
    fontSize: 28, color: WHITE, bold: true, align: "center",
  });

  const categoryCounts: Record<string, number> = {};
  projects.forEach((p) => {
    categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
  });
  const cats = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]);

  cats.forEach((cat, i) => {
    const col = i % 4;
    const row = Math.floor(i / 4);
    const x = 0.3 + col * 3.3;
    const y = 1.1 + row * 1.2;
    lastSlide.addShape(pptx.ShapeType.roundRect, {
      x, y, w: 3.0, h: 1.0, rectRadius: 0.08,
      fill: { color: WHITE, transparency: 88 },
      line: { color: WHITE, transparency: 82, width: 1 },
    });
    lastSlide.addText(cat[0], {
      x: x + 0.15, y, w: 2.2, h: 0.6,
      fontSize: 10, color: WHITE, bold: true, valign: "bottom",
    });
    lastSlide.addText(`${cat[1]} ${cat[1] === 1 ? "проект" : cat[1] < 5 ? "проекта" : "проектов"}`, {
      x: x + 0.15, y: y + 0.55, w: 2.2, h: 0.35,
      fontSize: 9, color: SECONDARY_COLOR, valign: "top",
    });
    lastSlide.addText(String(cat[1]), {
      x: x + 2.3, y, w: 0.5, h: 1.0,
      fontSize: 24, color: SECONDARY_COLOR, bold: true, align: "center", valign: "middle",
    });
  });

  lastSlide.addText(`Всего крупных проектов: ${projects.length}  •  Период: 2019–2024`, {
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
  const uniqueCategories = [...new Set(projects.map(p => p.category))];

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
            Перечень крупных выполненных проектов за период 2019–2024 гг.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { value: String(projects.length), label: "крупных проектов" },
              { value: "13 лет", label: "на рынке" },
              { value: String(uniqueCategories.length), label: "направлений" },
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
            Всего крупных проектов: <span className="font-bold text-foreground">{projects.length}</span> • Период: 2019–2024
          </div>
        </div>
      </section>

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