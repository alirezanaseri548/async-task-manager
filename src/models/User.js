import { BaseModel } from './BaseModel.js';

export class User extends BaseModel {
  static #count = 0;
  static MAX = 2;

  constructor(name, score) {
    if (User.#count >= User.MAX) {
      throw new Error('User limit reached');
    }

    super(User.#count + 1);
    this.name = name;
    this.score = score;

    User.#count++;
  }

  increment() {
    this.score++;
  }

  static get totalUsers() {
    return User.#count;
  }
}
