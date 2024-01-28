import { ResponseEntity } from '../type/response';

export default class ApiError extends Error {
  constructor(body: ResponseEntity) {
    super(body.message);
    this.name = 'API Error';
  }
}
