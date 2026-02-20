export class APIClient {
  static BASE_URL = 'https://jsonplaceholder.typicode.com';

  static async request(path, options = {}) {
    const response = await fetch(
      `${this.BASE_URL}${path}`,
      {
        method: 'GET',
        ...options
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return response.json();
  }
}
