import {
  BabyFurnitureIcon,
  BedroomIcon,
  CabinetsAndSimilarIcon,
  DressersIcon,
  KitchenIcon,
  LivingIcon,
  ModuleSystemIcon,
  SofaIcon,
  TablesAndChairsIcon
} from '@/shared/icons/products-icon'
import {
  BanquetteAndPoufsIcon,
  BedIcon,
  BollardIcon,
  ChairIcon,
  ChairsAndTaboretIcon,
  ClosetsAndShelvingNurseryIcon,
  ComputerDesksIcon,
  CornerCabinetsIcon,
  CornerSofaIcon,
  CountertopAndWallPanelsIcon,
  CoupeCabinetsIcon,
  CushionIcon,
  DeskIcon,
  DesksIcon,
  DresserAndDrawersIcon,
  DresserIcon,
  FramelessFurnitureIcon,
  HallwaysIcon,
  KitchenAccessoriesIcon,
  KitchenApplianceIcon,
  KitchenSofaIcon,
  KitchenTableIcon,
  MattressesIcon,
  ModularKitchenIcon,
  ModularNurseryIcon,
  NurseryBedsIcon,
  NurseryMattressesIcon,
  OfficeChairsIcon,
  OrthopedicBasisIcon,
  PoufsIcon,
  ShelvingIcon,
  ShoeCabinetsIcon,
  SinkAndFaucetsIcon,
  SpalnyeGarnituryIcon,
  StraightSofasIcon,
  SwingCabinetIcon,
  SwingsCabinetIcon,
  TableAndDiningGroupIcon,
  TableIcon,
  WallsIcon
} from '@/shared/icons/sublist-icon'
import { IBlogProject, ICategory, IServices } from '@/shared/types'

export const CATEGORIES: ICategory[] = [
  {
    title: 'Диваны и кресла',
    Icon: SofaIcon,
    sublist: [
      { sub_title: 'Прямые диваны', Icon: StraightSofasIcon },
      { sub_title: 'Угловые диваны', Icon: CornerSofaIcon },
      { sub_title: 'Кресла', Icon: ChairIcon },
      { sub_title: 'Банкетки и пуфы', Icon: PoufsIcon },
      { sub_title: 'Бескаркасная мебель', Icon: FramelessFurnitureIcon }
    ]
  },
  {
    title: 'Мебель для спальни',
    Icon: BedroomIcon,
    sublist: [
      { sub_title: 'Спальные гарнитуры', Icon: SpalnyeGarnituryIcon },
      { sub_title: 'Распашные шкафы', Icon: SwingCabinetIcon },
      { sub_title: 'Кровати', Icon: BedIcon },
      { sub_title: 'Мягкие кровати', Icon: BedIcon },
      { sub_title: 'Ортопедические основания', Icon: OrthopedicBasisIcon },
      { sub_title: 'Комоды и тумбы', Icon: DresserAndDrawersIcon },
      { sub_title: 'Банкетки и пуфы', Icon: BanquetteAndPoufsIcon },
      { sub_title: 'Матрасы и наматрасники', Icon: MattressesIcon },
      { sub_title: 'Подушки', Icon: CushionIcon }
    ]
  },
  {
    title: 'Мебель для кухни',
    Icon: KitchenIcon,
    sublist: [
      { sub_title: 'Модульные кухни', Icon: ModularKitchenIcon },
      { sub_title: 'Готовые решения', Icon: ModularKitchenIcon },
      { sub_title: 'Столы и обеденные группы', Icon: TableAndDiningGroupIcon },
      { sub_title: 'Стулья и табуреты', Icon: ChairsAndTaboretIcon },
      { sub_title: 'Кузонные диваны и углоки', Icon: KitchenSofaIcon },
      { sub_title: 'Техника для кухни', Icon: KitchenApplianceIcon },
      {
        sub_title: 'Столешницы и стеновые панели',
        Icon: CountertopAndWallPanelsIcon
      },
      { sub_title: 'Мойка и смесители', Icon: SinkAndFaucetsIcon },
      { sub_title: 'Кухонные аксессуары', Icon: KitchenAccessoriesIcon }
    ]
  },
  {
    title: 'Мебель для гостинной',
    Icon: LivingIcon,
    sublist: [
      { sub_title: 'Стелажи', Icon: ShelvingIcon },
      { sub_title: 'Стенки', Icon: WallsIcon },
      { sub_title: 'Тумбы ТВ', Icon: BollardIcon },
      { sub_title: 'Журнальные столы', Icon: TableIcon },
      { sub_title: 'Комоды', Icon: DresserIcon }
    ]
  },
  {
    title: 'Модульные системы',
    Icon: ModuleSystemIcon,
    sublist: [{ sub_title: 'Модульные системы', Icon: ModuleSystemIcon }]
  },
  {
    title: 'Мебель для детской',
    Icon: BabyFurnitureIcon,
    sublist: [
      { sub_title: 'Модульные детские', Icon: ModularNurseryIcon },
      { sub_title: 'Офисные кресла', Icon: OfficeChairsIcon },
      { sub_title: 'Кровати для детской', Icon: NurseryBedsIcon },
      { sub_title: 'Письменные столы', Icon: DesksIcon },
      {
        sub_title: 'Шкафы и стелажи для детской',
        Icon: ClosetsAndShelvingNurseryIcon
      },
      { sub_title: 'Детские матрасы', Icon: NurseryMattressesIcon }
    ]
  },
  {
    title: 'Шкафы и похожие',
    Icon: CabinetsAndSimilarIcon,
    sublist: [
      { sub_title: 'Шкафы купе', Icon: CoupeCabinetsIcon },
      { sub_title: 'Распашные шкафы', Icon: SwingsCabinetIcon },
      { sub_title: 'Угловые шкафы', Icon: CornerCabinetsIcon },
      { sub_title: 'Прихожие', Icon: HallwaysIcon },
      { sub_title: 'Тумбы для обуви', Icon: ShoeCabinetsIcon }
    ]
  },
  {
    title: 'Столы и стулья',
    Icon: TablesAndChairsIcon,
    sublist: [
      { sub_title: 'Писменные столы', Icon: DeskIcon },
      { sub_title: 'Журнальные столы', Icon: TableIcon },
      { sub_title: 'Кухонные столы', Icon: KitchenTableIcon },
      { sub_title: 'Стулья и табуреты', Icon: ChairsAndTaboretIcon },
      { sub_title: 'Столы компьютерные', Icon: ComputerDesksIcon }
    ]
  },
  {
    title: 'Комоды',
    Icon: DressersIcon,
    sublist: [{ sub_title: 'Комоды', Icon: DresserIcon }]
  }
]

export const SERVICES: IServices[] = [
  {
    text: 'Доставка',
    href: '/delivery'
  },
  {
    text: 'Оплата',
    href: '/payment'
  },
  {
    text: 'Сборка',
    href: '/assembly'
  },
  {
    text: 'Гарантия',
    href: '/guarantee'
  },
  {
    text: 'Обмен и Возврат',
    href: '/returns'
  },
  {
    text: 'Отзывы',
    href: '/reviews'
  },
  {
    text: 'Вопросы и ответы',
    href: '/questions'
  },
  {
    text: 'Контактные данные',
    href: '/contact'
  }
]

export const ADDITIONAL_SERVICES: IServices[] = [
  {
    text: 'Доставка',
    href: '/delivery'
  },
  {
    text: 'Оплата',
    href: '/payment'
  },
  {
    text: 'Обмен и возврат',
    href: '/returns'
  },
  {
    text: 'Блог',
    href: '/blog'
  }
]

export const blogProjects: IBlogProject[] = [
  {
    id: 1,
    image: '/65bb7fbbef99b936848476.jpg',
    title: '8 профессиональных советов для правильного выбора кухни',
    date: '05 May 2021',
    description:
      'Создание проекта и макета будущей кухни – это огромная интеллектуальная работа. На этом этапе была согласована и площадь комнаты, и пожелания всех членов семьи, и общий стиль помещения. Но этот труд будет просто бесполезным, если не воплотить задуманное в жизнь.'
  },
  {
    id: 2,
    image: '/65bb7fbbef99b936848476.jpg',
    title: 'Современные тренды в дизайне кухонь 2024',
    date: '12 January 2024',
    description:
      'Минимализм, натуральные материалы и умные технологии – вот что будет актуально в этом году. Современные кухни объединяют в себе эстетику и функциональность, создавая идеальное пространство для готовки и общения.'
  },
  {
    id: 3,
    image: '/65bb7fbbef99b936848476.jpg',
    title: 'Современные тренды в дизайне кухонь 2024',
    date: '12 January 2024',
    description:
      'Минимализм, натуральные материалы и умные технологии – вот что будет актуально в этом году. Современные кухни объединяют в себе эстетику и функциональность, создавая идеальное пространство для готовки и общения.'
  },
  {
    id: 4,
    image: '/65bb7fbbef99b936848476.jpg',
    title: 'Современные тренды в дизайне кухонь 2024',
    date: '12 January 2024',
    description:
      'Минимализм, натуральные материалы и умные технологии – вот что будет актуально в этом году. Современные кухни объединяют в себе эстетику и функциональность, создавая идеальное пространство для готовки и общения.'
  },
  {
    id: 5,
    image: '/65bb7fbbef99b936848476.jpg',
    title: 'Современные тренды в дизайне кухонь 2024',
    date: '12 January 2024',
    description:
      'Минимализм, натуральные материалы и умные технологии – вот что будет актуально в этом году. Современные кухни объединяют в себе эстетику и функциональность, создавая идеальное пространство для готовки и общения.'
  },
  {
    id: 6,
    image: '/65bb7fbbef99b936848476.jpg',
    title: 'Современные тренды в дизайне кухонь 2024',
    date: '12 January 2024',
    description:
      'Минимализм, натуральные материалы и умные технологии – вот что будет актуально в этом году. Современные кухни объединяют в себе эстетику и функциональность, создавая идеальное пространство для готовки и общения.'
  }
]

export const FOOTER_LINKS: IServices[] = [
  {
    text: 'Контактные данные',
    href: '/contact'
  },
  {
    text: 'Отзывы',
    href: '/reviews'
  },
  {
    text: 'Блог',
    href: '/blog'
  }
]

export const FOOTER_SERVICES: IServices[] = [
  {
    text: 'Доставка',
    href: '/delivery'
  },
  {
    text: 'Оплата',
    href: '/payment'
  },
  {
    text: 'Сборка',
    href: '/blog'
  },
  {
    text: 'Гарантия',
    href: '/guarantee'
  },
  {
    text: 'Обмен и Возврат',
    href: '/returns'
  },
  {
    text: 'Вопросы и ответы',
    href: '/questions'
  }
]
