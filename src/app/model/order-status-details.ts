import {OrderStatus} from './order-status';

export class OrderStatusDetails {
  orderId: number;
  sendDate: string;
  message: string;
  orderStatus: OrderStatus;

  constructor() {
  }
}
