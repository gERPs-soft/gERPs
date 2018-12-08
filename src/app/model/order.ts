import {OrderItem} from './order-item';

export class Order {
  orderId: number;
  sellerId: number;
  customerId: number;
  items: Array<OrderItem>;
  endDate: string;
  orderDate: string;
  orderStatus: string;


  constructor() {
  }
}
