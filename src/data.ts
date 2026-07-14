import { MenuItem, Review, GalleryItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Chicken Biryani',
    price: 450,
    category: 'Biryani',
    description: 'Aromatic basmati rice layered with juicy marinated chicken, slow-cooked (dum) with traditional Sindhi spices, fresh mint, saffron, and fried onions. Served with traditional raita.',
    image: '/src/assets/images/chicken_biryani_1784037283353.jpg',
    isFeatured: true,
    isSpicy: true,
    isPopular: true,
    preparationTime: '15-20 mins'
  },
  {
    id: '2',
    name: 'Beef Burger',
    price: 550,
    category: 'Burgers',
    description: 'Flame-grilled prime minced beef patty, caramelized onions, melted cheddar cheese, house burger sauce, and crisp lettuce on a toasted buttered brioche bun.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    isFeatured: true,
    isPopular: true,
    preparationTime: '12-15 mins'
  },
  {
    id: '3',
    name: 'Zinger Burger',
    price: 500,
    category: 'Burgers',
    description: 'Our signature crispy golden-fried double chicken fillet, dipped in spicy seasoning, layered with cheddar cheese, shredded lettuce, and creamy mayonnaise on a toasted sesame bun.',
    image: '/src/assets/images/crispy_burger_1784037298891.jpg',
    isFeatured: true,
    isPopular: true,
    preparationTime: '10-12 mins'
  },
  {
    id: '4',
    name: 'Chicken Pizza',
    price: 1200,
    category: 'Pizza',
    description: 'Fresh hand-tossed sourdough crust topped with signature herb tomato sauce, spicy tandoori chicken chunks, bell peppers, sweet corn, black olives, and premium mozzarella cheese.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    isFeatured: true,
    preparationTime: '20-25 mins'
  },
  {
    id: '5',
    name: 'BBQ Platter',
    price: 1800,
    category: 'BBQ',
    description: 'A sizzling hot assortment of grilled delicacies: 2 skewers of juicy Beef Seekh Kebabs, 4 pieces of creamy Chicken Malai Boti, and 4 pieces of spicy Chicken Tikka. Served with mint chutney and hot garlic naan.',
    image: '/src/assets/images/bbq_platter_1784037315310.jpg',
    isFeatured: true,
    isSpicy: true,
    isPopular: true,
    preparationTime: '25-30 mins'
  },
  {
    id: '6',
    name: 'Fries',
    price: 250,
    category: 'Sides',
    description: 'Golden, crispy, hand-cut potatoes tossed in our secret spicy peri-peri seasoning. Crispy on the outside, fluffy on the inside. Served with garlic mayo sauce.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80',
    preparationTime: '8-10 mins'
  },
  {
    id: '7',
    name: 'Soft Drinks',
    price: 150,
    category: 'Drinks',
    description: 'Chilled carbonated soft drinks to complement your hot meal. Choose from Pepsi, Coca-Cola, Sprite, or Fanta (500ml bottle or can).',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80',
    preparationTime: '2 mins'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev1',
    name: 'Zainab Ahmed',
    rating: 5,
    comment: 'The Chicken Biryani is absolutely stellar! Perfect amount of spice, steaming hot, and very generous portions. Definitely ordering again!',
    date: 'July 10, 2026',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    location: 'Karachi, Pakistan'
  },
  {
    id: 'rev2',
    name: 'Kamran Malik',
    rating: 5,
    comment: 'The Zinger Burger here rivals any international food chain! Exceptionally crispy, hot, and the WhatsApp ordering was incredibly smooth. Delivered in 25 mins.',
    date: 'June 28, 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    location: 'Lahore, Pakistan'
  },
  {
    id: 'rev3',
    name: 'Hamza Abbasi',
    rating: 5,
    comment: 'BBQ Platter is massive and super juicy. The smoky flavor on the seekh kebab is outstanding. Highly recommended for family dinners.',
    date: 'May 15, 2026',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    location: 'Islamabad, Pakistan'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Signature Dum Biryani',
    category: 'biryani',
    image: '/src/assets/images/chicken_biryani_1784037283353.jpg'
  },
  {
    id: 'g2',
    title: 'Gourmet Charcoal BBQ Platter',
    category: 'bbq',
    image: '/src/assets/images/bbq_platter_1784037315310.jpg'
  },
  {
    id: 'g3',
    title: 'Double-Decker Crispy Zinger',
    category: 'burgers',
    image: '/src/assets/images/crispy_burger_1784037298891.jpg'
  },
  {
    id: 'g4',
    title: 'Fresh Sourdough Chicken Pizza',
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'g5',
    title: 'Fresh Ingredients Selection',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'g6',
    title: 'Our Warm Dining Environment',
    category: 'restaurant',
    image: '/src/assets/images/restaurant_hero_1784037266522.jpg'
  }
];
