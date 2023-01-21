export interface Product {
  id: string;
  name: string;
  material: string;
  size: string;
  quantity: string;
  description: string;
  image?: {
    url: string;
  };
  is_newitem: boolean;
  category: Category;
}

export interface Category {
  id: string;
  name: string;
  image?: {
    url: string;
  };
}
