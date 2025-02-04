import { Transaction } from "../entity/transaction.entity";
import { ITransactionRepository } from "../repository/transaction.repository";
import { IUseCase } from "./base";

export class FetchTransactionsUseCase
  implements IUseCase<Transaction[]>
{
  constructor(private repository: ITransactionRepository) {}

  async execute(): Promise<Transaction[]> {
    return this.repository.all();
  }
}
