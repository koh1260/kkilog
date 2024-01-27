export interface ResponseEntity {
  statusCode: number;
  message: string;
}

export interface ResponseGet<T> extends ResponseEntity {
  result: T;
}