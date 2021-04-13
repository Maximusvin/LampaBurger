import burger1 from 'assets/images/menu/burgers/js-burger.png';
import burger2 from 'assets/images/menu/burgers/angular-burger.png';
import burger3 from 'assets/images/menu/burgers/grid-burger.png';
import burger4 from 'assets/images/menu/burgers/react-burger.png';
import burger5 from 'assets/images/menu/burgers/sass-burger.png';
import burger6 from 'assets/images/menu/burgers/vue-burger.png';

import sets1 from 'assets/images/menu/sets/sets1.png';
import sets2 from 'assets/images/menu/sets/sets2.png';
import sets3 from 'assets/images/menu/sets/sets3.png';
import sets4 from 'assets/images/menu/sets/sets4.png';
import sets5 from 'assets/images/menu/sets/sets5.png';
import sets6 from 'assets/images/menu/sets/sets6.png';

const dbMenu = {
  burger: [
    {
      name: 'JS Burger',
      url: burger1,
      id: 1,
      price: 150,
      description:
        'МНОГО БЕКОНА / СОУС ЧЕДДЕР / САЛАТ / ДВОЙНОЙ ЧЕДДЕР / БЕКОНОВЫЙ ДЖЕМ / СОУС BBQ / КРАНЧ ЛУК /',
      weight: '335г',
      shortcode: 'Очень вкусный бургер с беконом /',
      toppings: [
        'Бекон',
        'Кетчуп',
        'Сыр Чеддер',
        'Огурцы',
        'Помидор',
        'Халапеньо',
      ],
    },
    {
      name: 'Angular Burger',
      url: burger2,
      id: 2,
      price: 189.9,
      description:
        'САЛАТ / ТОЛСТАЯ КОТЛЕТА / МНОГО СЫРА / СОУС BBQ / КРАНЧ ЛУК /',
      weight: '335г',
      shortcode: 'Бургер с толстой котлетой /',
      toppings: ['Бекон', 'Красный лук'],
    },
    {
      name: 'Grid Burger',
      url: burger3,
      id: 3,
      price: 175,
      description: 'ДВОЙНОЙ ЧЕДДЕР / БЕКОНОВЫЙ ДЖЕМ / СОУС BBQ / КРАНЧ ЛУК /',
      shortcode: 'Двойной Чеддер и соус BBQ /',
      weight: '335г',
      toppings: ['Ананас', 'Майонец'],
    },
    {
      name: 'React Burger',
      url: burger4,
      id: 4,
      price: 112,
      description:
        'МНОГО БЕКОНА / СОУС ЧЕДДЕР / САЛАТ / ДВОЙНОЙ ЧЕДДЕР / БЕКОНОВЫЙ ДЖЕМ / СОУС BBQ / КРАНЧ ЛУК /',
      shortcode: 'Салат и беконовый джем /',
      weight: '335г',
    },
    {
      name: 'Sass Burger',
      url: burger5,
      id: 5,
      price: 169.9,
      description:
        'МНОГО БЕКОНА / СОУС ЧЕДДЕР / САЛАТ / ДВОЙНОЙ ЧЕДДЕР / БЕКОНОВЫЙ ДЖЕМ / СОУС BBQ / КРАНЧ ЛУК /',
      shortcode: 'Сплошной бекон и салат /',
      weight: '335г',
      toppings: ['Кетчуп', 'Сыр Чеддер'],
    },
    {
      name: 'Vue Burger',
      url: burger6,
      id: 6,
      price: 134,
      description:
        'УМЕРЕННО БЕКОНА / СОУС ЧЕДДЕР / САЛАТ / ДВОЙНОЙ ЧЕДДЕР / БЕКОНОВЫЙ ДЖЕМ / СОУС BBQ / КРАНЧ ЛУК /',
      shortcode: 'Нежный вкус средней прожарки толстой котлеты /',
      weight: '335г',
      toppings: ['Сыр Чеддер', 'Красный лук'],
    },
  ],
  other: [
    {
      name: 'NPM Install Fries ',
      url: sets1,
      id: 1,
      price: 70,
      choices: ['Перец', 'Соль'],
    },
    {
      name: 'Landing Set',
      url: sets2,
      id: 2,
      price: 375,
      choices: ['Кетчуп', 'Майонез'],
    },
    {
      name: 'MultiPage Set',
      url: sets3,
      id: 3,
      price: 200,
      choices: ['Морская капуста', 'Васаби'],
    },
    {
      name: 'SinglePage Set',
      url: sets4,
      id: 4,
      price: 375.25,
      choices: ['Свинина', 'Говядина', 'Баранина'],
    },
    {
      name: 'Sugar For Your Code',
      url: sets5,
      id: 5,
      price: 50.5,
      choices: ['Coca-Cola', 'Sprite', 'Mirinda', 'Fanta'],
    },
    {
      name: 'Webpack Set',
      url: sets6,
      id: 6,
      price: 184.2,
      choices: ['Майонез', 'Барбекю', 'Кисло-солодкий'],
    },
  ],
};

export default dbMenu;
