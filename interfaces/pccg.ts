import { BaseItem } from '.';

export enum PCCaseGearStatus {
  NO = 'Not In Stock',
  SHIPS_IN = 'Ships In From Partner Warehouse',
  YES = 'In Stock',
  PRE_ORDER = 'Pre-Order',
  NOT_AVAILABLE = 'Not Available'
};

export interface PCCaseGearItem extends Omit<BaseItem, 'stock'> {
  stock: PCCaseGearStatus
  eta?: string | Date,
};