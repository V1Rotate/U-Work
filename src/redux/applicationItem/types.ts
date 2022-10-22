export type ApplicationItem = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export interface ApplicationItemSliceState {
  items: ApplicationItem[];
  status: Status;
}
