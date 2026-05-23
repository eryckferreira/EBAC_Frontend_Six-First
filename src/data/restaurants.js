export const restaurants = [
  {
    id: 1,
    title: 'Hioki Sushi',
    cuisine: 'Japonesa',
    rating: 4.9,
    featured: true,
    cover:
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80',
    description:
      'Peixes frescos, combinados autorais e pratos quentes para quem ama a culinaria japonesa.',
    dishes: [
      {
        id: 101,
        name: 'Sushi especial',
        image:
          'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=900&q=80',
        description:
          'Selecao com niguiris, uramakis e sashimis preparados no momento.',
        price: 'R$ 64,90',
      },
      {
        id: 102,
        name: 'Temaki salmao',
        image:
          'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=80',
        description:
          'Cone crocante com arroz japones, salmao, cream cheese e cebolinha.',
        price: 'R$ 28,90',
      },
      {
        id: 103,
        name: 'Yakissoba',
        image:
          'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=80',
        description:
          'Macarrao oriental salteado com legumes frescos e molho da casa.',
        price: 'R$ 42,90',
      },
    ],
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    cuisine: 'Italiana',
    rating: 4.7,
    featured: false,
    cover:
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80',
    description:
      'Massas artesanais, molhos classicos e sobremesas tradicionais em um cardapio acolhedor.',
    dishes: [
      {
        id: 201,
        name: 'Spaghetti carbonara',
        image:
          'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=900&q=80',
        description:
          'Massa al dente com pancetta, queijo, ovos e pimenta preta moida.',
        price: 'R$ 49,90',
      },
      {
        id: 202,
        name: 'Pizza marguerita',
        image:
          'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=900&q=80',
        description:
          'Massa de fermentacao lenta, tomate, mussarela fresca e manjericao.',
        price: 'R$ 54,90',
      },
      {
        id: 203,
        name: 'Tiramisu',
        image:
          'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=80',
        description:
          'Sobremesa cremosa com cafe, mascarpone e cacau polvilhado.',
        price: 'R$ 24,90',
      },
    ],
  },
  {
    id: 3,
    title: 'Burger House',
    cuisine: 'Americana',
    rating: 4.8,
    featured: true,
    cover:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80',
    description:
      'Hamburgueres altos, batatas sequinhas e milk-shakes para pedir sem pressa.',
    dishes: [
      {
        id: 301,
        name: 'Classic bacon',
        image:
          'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80',
        description:
          'Blend bovino, cheddar, bacon crocante, picles e molho especial.',
        price: 'R$ 38,90',
      },
      {
        id: 302,
        name: 'Batata rustica',
        image:
          'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80',
        description:
          'Batatas douradas com alecrim, sal parrilla e maionese temperada.',
        price: 'R$ 21,90',
      },
      {
        id: 303,
        name: 'Milk-shake chocolate',
        image:
          'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80',
        description:
          'Sorvete cremoso batido com calda intensa de chocolate.',
        price: 'R$ 19,90',
      },
    ],
  },
  {
    id: 4,
    title: 'Casa do Nordeste',
    cuisine: 'Brasileira',
    rating: 4.6,
    featured: false,
    cover:
      'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80',
    description:
      'Receitas brasileiras com tempero marcante, porcoes generosas e clima de almoco em familia.',
    dishes: [
      {
        id: 401,
        name: 'Baiao de dois',
        image:
          'https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&w=900&q=80',
        description:
          'Arroz, feijao verde, queijo coalho e carne de sol acebolada.',
        price: 'R$ 44,90',
      },
      {
        id: 402,
        name: 'Escondidinho',
        image:
          'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80',
        description:
          'Pure de mandioca com recheio cremoso de carne seca e queijo.',
        price: 'R$ 39,90',
      },
      {
        id: 403,
        name: 'Pudim da casa',
        image:
          'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80',
        description:
          'Pudim classico, calda de caramelo e textura lisinha.',
        price: 'R$ 16,90',
      },
    ],
  },
]
