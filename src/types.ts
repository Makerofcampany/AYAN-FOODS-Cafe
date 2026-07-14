export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'Biryani' | 'Burgers' | 'Pizza' | 'BBQ' | 'Sides' | 'Drinks';
  description: string;
  image: string;
  isFeatured?: boolean;
  isSpicy?: boolean;
  isPopular?: boolean;
  preparationTime?: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  customNotes?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
  location?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}
