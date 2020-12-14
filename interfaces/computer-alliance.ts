import { BaseItem } from '.';

export enum ComputerAllianceStatus {
  YES = 'In Stock',
  NO = 'Not In Stock',
  ETA = 'ETA',
  LOW = 'Low Stock',
  NOT_AVAILABLE = 'Not Available'
};

export interface ComputerAllianceItem extends Omit<BaseItem, 'stock'> {
  stock: ComputerAllianceStatus,
  eta?: string,
};