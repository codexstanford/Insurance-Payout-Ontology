import { ParcelDelivery } from "./ParcelDelivery";
import { OrderStatus } from "./OrderStatus";
import { Service,OrderItem,Product } from "./Service,OrderItem,Product";


export class OrderItem extends Intangible {
  orderDelivery: ParcelDelivery;
  orderItemStatus: OrderStatus;
  orderQuantity: number;
  orderItemNumber: string;
  orderedItem: Service,OrderItem,Product;


}
