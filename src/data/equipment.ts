export interface EquipmentItem {
  id: string;
  title: string;
  description: string;
  specs: { label: string; value: string }[];
  image: string;
  shortDescription?: string;
  priceFrom?: string;
  gallery?: { src: string; caption: string }[];
  features?: { title: string; text: string }[];
  prices?: { label: string; value: string }[];
  bundle?: { title: string; price: string; note: string; items: string[] };
}

export interface EquipmentCategory {
  id: string;
  title: string;
  shortTitle: string;
  icon: string;
  description: string;
  items: EquipmentItem[];
}

export const equipmentCategories: EquipmentCategory[] = [
  {
    id: 'robots',
    title: 'Роботы и роботизированные решения',
    shortTitle: 'Роботы',
    icon: 'Bot',
    description:
      'Промышленные манипуляторы и готовые роботизированные ячейки для сварки, резки, покраски и перемещения деталей',
    items: [
      {
        id: 'robot-welding-cell',
        title: 'Роботизированная сварочная ячейка',
        description:
          'Готовый комплекс на базе 6-осевого манипулятора со сварочным источником, позиционером и защитным ограждением',
        specs: [
          { label: 'Грузоподъёмность', value: 'до 25 кг' },
          { label: 'Радиус действия', value: 'до 2 000 мм' },
          { label: 'Тип сварки', value: 'MIG / MAG / TIG' },
          { label: 'Повторяемость', value: '±0,05 мм' }
        ],
        image: 'https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/944a019c-160e-4364-ad38-8fccb17a130f.jpg'
      },
      {
        id: 'robot-handling',
        title: 'Робот-манипулятор для перемещения деталей',
        description:
          'Автоматизация загрузки и выгрузки станков, паллетирования и межоперационной передачи заготовок',
        specs: [
          { label: 'Грузоподъёмность', value: 'до 210 кг' },
          { label: 'Радиус действия', value: 'до 2 700 мм' },
          { label: 'Число осей', value: '6' },
          { label: 'Захват', value: 'вакуумный / механический' }
        ],
        image: 'https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/2fbfd509-c077-4686-84ce-36edcfeb0a4e.jpg'
      },
      {
        id: 'robot-cutting',
        title: 'Роботизированный комплекс плазменной резки',
        description:
          'Резка объёмных деталей и труб по 3D-траектории с автоматической коррекцией высоты факела',
        specs: [
          { label: 'Толщина реза', value: 'до 40 мм' },
          { label: 'Точность контура', value: '±0,3 мм' },
          { label: 'Управление', value: 'CAD/CAM офлайн-программирование' },
          { label: 'Вытяжка', value: 'встроенная' }
        ],
        image: 'https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/944a019c-160e-4364-ad38-8fccb17a130f.jpg'
      },
      {
        id: 'robot-positioner',
        title: 'Сварочные позиционеры и вращатели',
        description:
          'Двух- и трёхосевые позиционеры для синхронной работы с роботом, поворотные столы под крупные узлы',
        specs: [
          { label: 'Нагрузка', value: 'до 5 000 кг' },
          { label: 'Оси', value: '1–3' },
          { label: 'Синхронизация', value: 'с контроллером робота' },
          { label: 'Исполнение', value: 'под заказ' }
        ],
        image: 'https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/2fbfd509-c077-4686-84ce-36edcfeb0a4e.jpg'
      }
    ]
  },
  {
    id: 'metalworking',
    title: 'Оборудование для металлообработки',
    shortTitle: 'Металлообработка',
    icon: 'Cog',
    description:
      'Станки и линии для резки, гибки, вальцовки и механической обработки металла — от единичных изделий до серийного производства',
    items: [
      {
        id: 'laser-cutting',
        title: 'Станок лазерной резки с ЧПУ',
        description:
          'Волоконный лазер для раскроя листового металла с высокой скоростью и чистой кромкой',
        specs: [
          { label: 'Мощность', value: '1,5 – 12 кВт' },
          { label: 'Рабочее поле', value: 'до 3 000 × 1 500 мм' },
          { label: 'Толщина реза', value: 'сталь до 25 мм' },
          { label: 'Точность', value: '±0,05 мм' }
        ],
        image: 'https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/944a019c-160e-4364-ad38-8fccb17a130f.jpg'
      },
      {
        id: 'press-brake',
        title: 'Листогибочный пресс с ЧПУ',
        description:
          'Гидравлический пресс с программируемым задним упором для точной гибки деталей сложного профиля',
        specs: [
          { label: 'Усилие', value: '40 – 400 т' },
          { label: 'Длина гибки', value: 'до 4 000 мм' },
          { label: 'Оси', value: 'до 8' },
          { label: 'Управление', value: 'графическое ЧПУ' }
        ],
        image: 'https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/2fbfd509-c077-4686-84ce-36edcfeb0a4e.jpg'
      },
      {
        id: 'cnc-milling',
        title: 'Обрабатывающий центр фрезерный',
        description:
          'Вертикальный центр с ЧПУ для обработки корпусных деталей, пресс-форм и оснастки',
        specs: [
          { label: 'Перемещения', value: '1 000 × 600 × 600 мм' },
          { label: 'Шпиндель', value: 'до 12 000 об/мин' },
          { label: 'Магазин инструмента', value: '24 позиции' },
          { label: 'Точность', value: '±0,01 мм' }
        ],
        image: 'https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/944a019c-160e-4364-ad38-8fccb17a130f.jpg'
      },
      {
        id: 'cnc-lathe',
        title: 'Токарный станок с ЧПУ',
        description:
          'Обработка валов, втулок, фланцев и резьбовых изделий в единичном и серийном производстве',
        specs: [
          { label: 'Диаметр обработки', value: 'до 500 мм' },
          { label: 'Длина', value: 'до 1 500 мм' },
          { label: 'Револьверная головка', value: '8–12 позиций' },
          { label: 'Приводной инструмент', value: 'опционально' }
        ],
        image: 'https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/2fbfd509-c077-4686-84ce-36edcfeb0a4e.jpg'
      },
      {
        id: 'rolling-machine',
        title: 'Вальцы листогибочные',
        description:
          'Радиусная гибка листа для изготовления обечаек, резервуаров и конических элементов',
        specs: [
          { label: 'Толщина листа', value: 'до 20 мм' },
          { label: 'Ширина', value: 'до 3 000 мм' },
          { label: 'Валков', value: '3 или 4' },
          { label: 'Привод', value: 'гидравлический' }
        ],
        image: 'https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/944a019c-160e-4364-ad38-8fccb17a130f.jpg'
      },
      {
        id: 'welding-equipment',
        title: 'Сварочное оборудование',
        description:
          'Инверторные источники, полуавтоматы и посты для всех видов сварки металлоконструкций',
        specs: [
          { label: 'Ток', value: 'до 500 А' },
          { label: 'Режимы', value: 'MMA / MIG / MAG / TIG' },
          { label: 'ПВ', value: '100 % при 400 А' },
          { label: 'Питание', value: '380 В' }
        ],
        image: 'https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/2fbfd509-c077-4686-84ce-36edcfeb0a4e.jpg'
      }
    ]
  },
  {
    id: 'filtration',
    title: 'Фильтровентиляционные установки',
    shortTitle: 'Фильтровентиляция',
    icon: 'Wind',
    description:
      'Системы очистки воздуха от сварочного дыма, пыли и аэрозолей — от локальных вытяжек до централизованных комплексов',
    items: [
      {
        id: 'fvu-mobile',
        title: 'Мобильная фильтровентиляционная установка',
        description:
          'Передвижной агрегат с вытяжным рукавом для локального удаления сварочного дыма на посту',
        specs: [
          { label: 'Производительность', value: '1 000 – 2 500 м³/ч' },
          { label: 'Степень очистки', value: 'до 99,9 %' },
          { label: 'Фильтр', value: 'картриджный, самоочистка' },
          { label: 'Уровень шума', value: 'до 68 дБ' }
        ],
        image: 'https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/944a019c-160e-4364-ad38-8fccb17a130f.jpg'
      },
      {
        id: 'fvu-stationary',
        title: 'Стационарная централизованная установка',
        description:
          'Комплекс на несколько рабочих мест с системой воздуховодов и автоматической регенерацией фильтров',
        specs: [
          { label: 'Производительность', value: '5 000 – 30 000 м³/ч' },
          { label: 'Постов подключения', value: 'до 20' },
          { label: 'Регенерация', value: 'импульсная продувка' },
          { label: 'Управление', value: 'шкаф автоматики' }
        ],
        image: 'https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/2fbfd509-c077-4686-84ce-36edcfeb0a4e.jpg'
      },
      {
        id: 'fvu-tables',
        title: 'Вытяжные сварочные столы',
        description:
          'Рабочие столы со встроенной нижней и задней вытяжкой, решётчатой столешницей и системой крепления',
        specs: [
          { label: 'Размер столешницы', value: 'от 1 000 × 800 мм' },
          { label: 'Нагрузка', value: 'до 1 000 кг' },
          { label: 'Вытяжка', value: 'нижняя + задняя' },
          { label: 'Исполнение', value: 'под задачу заказчика' }
        ],
        image: 'https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/944a019c-160e-4364-ad38-8fccb17a130f.jpg'
      },
      {
        id: 'fvu-arms',
        title: 'Вытяжные консоли и рукава',
        description:
          'Шарнирные вытяжные устройства с фиксацией положения, настенное и потолочное исполнение',
        specs: [
          { label: 'Длина рукава', value: '2 – 8 м' },
          { label: 'Диаметр', value: '160 / 200 мм' },
          { label: 'Расход воздуха', value: 'от 1 000 м³/ч' },
          { label: 'Монтаж', value: 'стена / потолок / кран-балка' }
        ],
        image: 'https://cdn.poehali.dev/projects/e90cd5e8-153a-4589-b532-06e737a47d0d/files/2fbfd509-c077-4686-84ce-36edcfeb0a4e.jpg'
      }
    ]
  },
  {
    id: 'special',
    title: 'Оборудование для спецтехники',
    shortTitle: 'Спецтехника',
    icon: 'Truck',
    description:
      'Производим дополнительное оборудование для спецтехники',
    items: [
      {
        id: 'truck-protection',
        title: 'Защита для грузовой техники',
        description:
          'Комплект защит картера двигателя, топливного бака, воздушного фильтра и датчиков. Изготавливаем из стали 3 и 09Г2С толщиной до 8 мм — каждая защита проектируется под конкретный узел техники.',
        specs: [
          { label: 'Материал', value: 'сталь 3 и 09Г2С, до 8 мм' },
          { label: 'Покрытие', value: 'порошковая окраска + антикор' },
          { label: 'Крепёж', value: 'заводские точки, усиленные кронштейны' },
          { label: 'Совместимость', value: 'Shacman X3000, FAW, Howo, Sitrak и др.' },
          { label: 'Узлы защиты', value: 'картер, бак, воздушный фильтр, датчики' },
          { label: 'Нет вашей модели?', value: '3D-сканирование и проектирование' }
        ],
        image: '/zashita/p93.jpg',
        shortDescription:
          'Защита картера, топливного бака, воздушного фильтра и датчиков из стали до 8 мм для Shacman X3000 и другой спецтехники',
        priceFrom: 'от 35 000 ₽',
        gallery: [
          { src: '/zashita/p93.jpg', caption: 'Защита картера' },
          { src: '/zashita/p94.jpg', caption: 'Защита топливного бака' },
          { src: '/zashita/p95.jpg', caption: 'Защита воздушного фильтра' },
          { src: '/zashita/p96.jpg', caption: 'Защита датчиков' }
        ],
        features: [
          { title: 'Защита от ударов', text: 'Броня выдерживает удары камней и препятствий на бездорожье' },
          { title: 'Экономия на ремонте', text: 'Один ремонт узла дороже комплекта защит от ИТЦ Сибири' },
          { title: 'Сталь до 8 мм', text: 'Конструкционная сталь 3 и низколегированная 09Г2С' },
          { title: '3D-проектирование', text: 'Нет вашей модели? Сделаем 3D-сканирование и спроектируем защиту под вас' },
          { title: 'Антикоррозия', text: 'Порошковая окраска и антикор-обработка всех узлов' },
          { title: 'Точная посадка', text: 'Заводские точки крепления, без лишнего сверления' }
        ],
        prices: [
          { label: 'Защита картера', value: 'от 35 000 ₽' },
          { label: 'Защита топливного бака', value: 'от 25 000 ₽' },
          { label: 'Защита воздушного фильтра', value: 'от 20 000 ₽' },
          { label: 'Защита датчиков', value: 'от 15 000 ₽' }
        ],
        bundle: {
          title: 'Полный комплект',
          price: 'от 90 000 ₽',
          note: 'Выгода 20 000 ₽',
          items: ['Защита картера', 'Защита топливного бака', 'Защита воздушного фильтра', 'Защита датчиков']
        }
      }
    ]
  }
];

export const findEquipmentItem = (itemId: string) => {
  for (const category of equipmentCategories) {
    const item = category.items.find((i) => i.id === itemId);
    if (item) return { category, item };
  }
  return null;
};