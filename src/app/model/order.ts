import {OrderItem} from './order-item';

export class Order {
  sellerId: number;
  customerId: number;
  orderItemsList: Array<OrderItem>;
}
