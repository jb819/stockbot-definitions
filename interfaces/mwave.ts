import { BaseItem } from '.';

export enum MwaveStatus {
  YES = 'In Stock',
  SUPPLIER = 'In Stock @ Supplier',
  NO = 'Not In Stock',
  PRE_ORDER = 'Pre-Order',
  NOT_AVAILABLE = 'Not Available'
}

export interface MwaveItem extends Omit<BaseItem, 'stock'> {
  stock: MwaveStatus,
  processing?: string,
  eta?: Date
};