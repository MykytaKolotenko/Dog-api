export interface IAnimalRequest {
  name: string;
  color: string;
  tail_length: number;
  weight: number;
}

export interface IAnimalResponse extends IAnimalRequest {
  id: string;
}

export interface IOptionRequest {
  limit: number;
  offset: number;
  attribute: string;
  order: string;
}
