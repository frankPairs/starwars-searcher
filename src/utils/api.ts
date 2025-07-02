const BASE_URL = 'https://swapi.info/api';

class InternalServerError extends Error {
  constructor() {
    super('Something went wrong. Please, try later.');
  }
}

export { BASE_URL, InternalServerError };
