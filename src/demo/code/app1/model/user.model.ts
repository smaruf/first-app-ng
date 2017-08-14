export class User {
  name: string;
  phone: string;
  createdAt: Date;

  constructor(name: string, phone: string) {
    this.name = name;
    this.phone = phone;
    this.createdAt = new Date();
  }
}
