import { BaseModel } from './BaseModel.js';

export class Task extends BaseModel {
  constructor(id, title) {
    super(id);
    this.title = title;
  }

  toString() {
    return `Task #${this.id}: ${this.title}`;
  }
}
