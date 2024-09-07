export interface Order {
  id: number;
  total: number;
  products: number[];
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}
