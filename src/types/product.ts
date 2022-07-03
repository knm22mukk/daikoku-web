export type Product = {
  id: string;
  name: string;
  image_1: {
    url: string;
  };
  image_2: {
    url: string;
  };
  image_3: {
    url: string;
  };
  input_number: string;
  size: string;
  material: string;
  JAN: number;
  description: string;
  category: Category[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type Category = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
