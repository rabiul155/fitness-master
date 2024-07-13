export type ProductType = {
  _id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  stock: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

export type CartProductType = {
  _id: string;
  product: ProductType;
  quantity: number;
};
