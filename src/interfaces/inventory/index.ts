import { ProductInterface } from 'interfaces/product';
import { StoreInterface } from 'interfaces/store';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  product_id: string;
  quantity: number;
  store_id: string;
  created_at?: any;
  updated_at?: any;

  product?: ProductInterface;
  store?: StoreInterface;
  _count?: {};
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  product_id?: string;
  store_id?: string;
}
