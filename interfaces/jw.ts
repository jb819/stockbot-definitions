import { BaseItem } from '.';

export enum JWOnlineStatus {
  YES = 'In Stock',
  PARTNER = 'In Stock @ Partner Warehouse',
  STORE = 'In Stock @ Store',
  NO = 'Not In Stock',
  NOT_AVAILABLE = 'Not Available'
};

export enum JWStoreStatus {
  YES = 'In Stock',
  LIMITED = 'Limited Stock',
  ORDER_WAREHOUSE = 'In Stock @ Warehouse',
  ORDER_PARTNER = 'In Stock @ Partner Warehouse',
  NO = 'Not In Stock'
};

export interface JWItem extends Omit<BaseItem, 'stock'> {
  stock: JWOnlineStatus,
  dispatch?: string,
  bankstown?: JWStoreStatus,
  blacktown?: JWStoreStatus,
  castlehill?: JWStoreStatus
};

export type JWGetStatus = Pick<JWItem, 'stock' | 'bankstown' | 'castlehill' | 'blacktown'>;