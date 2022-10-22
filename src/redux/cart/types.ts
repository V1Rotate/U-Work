export type CartItem = {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  imageUrl: string;
  count: number;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
