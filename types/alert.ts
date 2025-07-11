export type ProductType = 'PMS' | 'AGO' | 'ICE' | 'DPK';
export type ConditionType = 'Crossing up' | 'Crossing down';
export type TriggerType = 'once' | 'repeat';

export interface AlertFormData {
  product: ProductType;
  condition: ConditionType;
  price: string;
  triggerType: TriggerType;
  expiration: Date;
  alertName: string;
}