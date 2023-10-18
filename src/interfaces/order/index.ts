import { OrderItemInterface } from 'interfaces/order-item';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  order_date?: any;
  delivery_date?: any;
  total_price: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  order_item?: OrderItemInterface[];
  user?: UserInterface;
  _count?: {
    order_item?: number;
  };
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
