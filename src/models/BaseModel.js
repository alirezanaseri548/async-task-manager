export class BaseModel {
  constructor(id) {
    this.id = id;
  }

  toString() {
    return `Model ID: ${this.id}`;
  }
}
