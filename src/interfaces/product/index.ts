import { InventoryInterface } from 'interfaces/inventory';
import { OrderItemInterface } from 'interfaces/order-item';
import { StoreInterface } from 'interfaces/store';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  category: string;
  price: number;
  store_id: string;
  created_at?: any;
  updated_at?: any;
  inventory?: InventoryInterface[];
  order_item?: OrderItemInterface[];
  store?: StoreInterface;
  _count?: {
    inventory?: number;
    order_item?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  category?: string;
  store_id?: string;
}
