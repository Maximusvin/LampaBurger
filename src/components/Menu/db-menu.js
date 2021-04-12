import burger1 from 'assets/images/menu/burgers/js-burger.png';
import burger2 from 'assets/images/menu/burgers/angular-burger.png';
import burger3 from 'assets/images/menu/burgers/grid-burger.png';
import burger4 from 'assets/images/menu/burgers/react-burger.png';
import burger5 from 'assets/images/menu/burgers/sass-burger.png';
import burger6 from 'assets/images/menu/burgers/vue-burger.png';

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
        'МНОГО БЕКОНА / СОУС ЧЕДДЕР / САЛАТ / ДВОЙНОЙ ЧЕДДЕР / БЕКОНОВЫЙ ДЖЕМ / СОУС BBQ / КРАНЧ ЛУК /',
      weight: '335г',
      toppings: ['Бекон', 'Красный лук'],
    },
    {
      name: 'Grid Burger',
      url: burger3,
      id: 3,
      price: 175,
      description:
        'МНОГО БЕКОНА / СОУС ЧЕДДЕР / САЛАТ / ДВОЙНОЙ ЧЕДДЕР / БЕКОНОВЫЙ ДЖЕМ / СОУС BBQ / КРАНЧ ЛУК /',
      weight: '335г',
      toppings: ['Ананас', 'Майонец'],
    },
    {
      name: 'React burger',
      url: burger4,
      id: 4,
      price: 112,
      description:
        'МНОГО БЕКОНА / СОУС ЧЕДДЕР / САЛАТ / ДВОЙНОЙ ЧЕДДЕР / БЕКОНОВЫЙ ДЖЕМ / СОУС BBQ / КРАНЧ ЛУК /',
      weight: '335г',
    },
    {
      name: 'sass burger',
      url: burger5,
      id: 5,
      price: 169.9,
      description:
        'МНОГО БЕКОНА / СОУС ЧЕДДЕР / САЛАТ / ДВОЙНОЙ ЧЕДДЕР / БЕКОНОВЫЙ ДЖЕМ / СОУС BBQ / КРАНЧ ЛУК /',
      weight: '335г',
      toppings: ['Кетчуп', 'Сыр Чеддер'],
    },
    {
      name: 'vue burger',
      url: burger6,
      id: 6,
      price: 134,
      description:
        'МНОГО БЕКОНА / СОУС ЧЕДДЕР / САЛАТ / ДВОЙНОЙ ЧЕДДЕР / БЕКОНОВЫЙ ДЖЕМ / СОУС BBQ / КРАНЧ ЛУК /',
      weight: '335г',
      toppings: ['Сыр Чеддер', 'Красный лук'],
    },
  ],
  other: [
    {
      name: 'Coдa',
      url:
        'https://res.cloudinary.com/maximusvin/image/upload/v1608112846/other/soda_ytgi7m.png',
      id: 1,
      price: 50,
      choices: ['Coca-cola', 'Fanta', 'Mirinda', 'Sprite'],
    },
    {
      name: 'Чайкофф',
      url:
        'https://res.cloudinary.com/maximusvin/image/upload/v1608112847/other/tea_vciape.png',
      id: 2,
      price: 70,
      choices: ['Черный', 'Зеленый'],
    },
    {
      name: 'Лукошко Фри',
      url:
        'https://res.cloudinary.com/maximusvin/image/upload/v1608112843/other/french-fries_casn81.png',
      id: 3,
      price: 75,
    },
    {
      name: 'Нагиевцы',
      url:
        'https://res.cloudinary.com/maximusvin/image/upload/v1608112847/other/nuggets_pr5zl1.png',
      id: 4,
      price: 100,
      choices: ['Филе', 'Крылья'],
    },
    {
      name: 'Кофе',
      url:
        'https://res.cloudinary.com/maximusvin/image/upload/v1608112889/other/coffee_koj37m.png',
      id: 5,
      price: 150,
      choices: ['Эспрессо', 'Капучино'],
    },
    {
      name: 'Кола',
      url:
        'https://res.cloudinary.com/maximusvin/image/upload/v1608112843/other/cola_sp5rer.png',
      id: 6,
      price: 34.5,
    },
    {
      name: 'Sprite',
      url:
        'https://res.cloudinary.com/maximusvin/image/upload/v1608112844/other/sprite_yd7odk.png',
      id: 7,
      price: 34.5,
    },
    {
      name: 'Fanta',
      url:
        'https://res.cloudinary.com/maximusvin/image/upload/v1608112841/other/fanta_ztwmof.png',
      id: 8,
      price: 34.5,
    },
    {
      name: 'Rich',
      url:
        'https://res.cloudinary.com/maximusvin/image/upload/v1608112843/other/rich_pdbdiu.png',
      id: 9,
      price: 44.3,
    },
  ],
};

export default dbMenu;
