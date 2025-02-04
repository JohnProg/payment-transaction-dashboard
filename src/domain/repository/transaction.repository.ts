import { Transaction } from "../entity/transaction.entity";

export interface ITransactionRepository {
  all(): Promise<Transaction[]>;
}
