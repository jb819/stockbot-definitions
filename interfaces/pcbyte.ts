import { BaseItem } from '.';

export enum PCByteOnlineStatus {
  NO = 'Not In Stock',
  SUPPLIER = 'In Stock @ Supplier',
  YES = 'In Stock',
  PRE_ORDER = 'Pre-Order',
  NOT_AVAILABLE = 'Not Available'
};

export enum PCByteStoreStatus {
  YES = 'In Stock',
  NO = 'Not In Stock'
};

export interface PCByteItem extends Omit<BaseItem, 'stock'> {
  stock: PCByteOnlineStatus,
  auburn: PCByteStoreStatus,
  hornsby: PCByteStoreStatus,
  eta?: string,
};

export type PCByteGetStatus = Pick<PCByteItem, 'stock' | 'auburn' | 'hornsby'>;