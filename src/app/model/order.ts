import {OrderItem} from './order-item';

export class Order {
  orderId: number;
  sellerId: number;
  customerId: number;
  orderItemsList: Array<OrderItem>;
  endDate: string;
  orderDate: string;
  orderStatus: string;

  constructor(orderId: number, sellerId: number, customerId: number, orderItemsList: Array<OrderItem>,
              endDate: string, orderDate: string, orderStatus: string) {
    this.orderId = orderId;
    this.sellerId = sellerId;
    this.customerId = customerId;
    this.orderItemsList = orderItemsList;
    this.endDate = endDate;
    this.orderDate = orderDate;
    this.orderStatus = orderStatus;
  }
}
