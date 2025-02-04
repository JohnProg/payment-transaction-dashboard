export class Transaction {
  constructor(
    public id: string,
    public description: string,
    public createdAt: string,
    public amountInUSD: number
  ) {}

  static create(
    id: string,
    description: string,
    createdAt: string,
    amountInUSD: number
  ) {
    return new Transaction(id, description, createdAt, amountInUSD);
  }
}
