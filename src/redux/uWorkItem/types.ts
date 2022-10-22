export type UworkItem = {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  imageUrl: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export type SearchUworkItemParams = {
  order: string;
};

export interface UworkItemSliceState {
  items: UworkItem[];
  status: Status;
}
