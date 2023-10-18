import { InventoryInterface } from 'interfaces/inventory';
import { ProductInterface } from 'interfaces/product';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface StoreInterface {
  id?: string;
  description?: string;
  location?: string;
  contact_number?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  inventory?: InventoryInterface[];
  product?: ProductInterface[];
  user?: UserInterface;
  _count?: {
    inventory?: number;
    product?: number;
  };
}

export interface StoreGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  contact_number?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
