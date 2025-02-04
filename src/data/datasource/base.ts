import { Transaction } from "../../domain/entity/transaction.entity";

export interface TransactionDataSource {
  all(): Promise<Transaction[]>;
}
