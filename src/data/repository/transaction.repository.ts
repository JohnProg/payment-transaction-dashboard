import { Transaction } from "../../domain/entity/transaction.entity";
import { ITransactionRepository } from "../../domain/repository/transaction.repository";
import { TransactionDataSource } from "../datasource/base";

export class TransactionRepository implements ITransactionRepository {
  constructor(private dataSource: TransactionDataSource) {}

  async all(): Promise<Transaction[]> {
    return this.dataSource.all();
  }
}
