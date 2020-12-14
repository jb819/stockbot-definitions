import { BaseItem } from '.';

export enum ScorptecOnlineStatus {
  NO = 'Not In Stock',
  SHIPS_IN = 'Ships In From Partner Warehouse',
  YES = 'In Stock',
  PRE_ORDER = 'Pre-Order',
  NOT_AVAILABLE = 'Not Available'
};

export enum ScorptecStoreStatus {
  YES = 'In Stock',
  NO = 'Not In Stock',
  SHIPS_IN = 'Ships In From Partner Warehouse',
  PRE_ORDER = 'Pre-Order',
  NOT_AVAILABLE = 'Not Available'
};

export interface ScorptecItem extends Omit<BaseItem, 'stock'> {
  stock: ScorptecOnlineStatus,
  auburn?: ScorptecStoreStatus,
  macquarie_park?: ScorptecStoreStatus,
  clayton?: ScorptecStoreStatus,
  rowville?: ScorptecStoreStatus,
  sth_melb?: ScorptecStoreStatus
};

export type ScorptecGetStatus = Pick<ScorptecItem, 'stock' | 'auburn' | 'macquarie_park' | 'clayton' | 'rowville' | 'sth_melb'>;