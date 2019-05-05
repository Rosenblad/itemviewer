export interface Entity {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  price: string;
  discount: string;
  discountedPrice: string;
  src: string;
}

export interface ById {
  [id: string]: Entity;
}

export type AllIds = string[];

export interface EntitiesState {
  byId: ById;
  allIds: AllIds;
}

// ReadyOnlyArray