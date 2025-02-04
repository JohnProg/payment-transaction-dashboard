import { getHumanDate, getRandomDate } from "../../core/utils/date";
import { Transaction } from "../../domain/entity/transaction.entity";
import { TransactionDataSource } from "./base";

export class TransactionMockDataSource implements TransactionDataSource {
  async all(): Promise<Transaction[]> {
    const mockData: Transaction[] = [];

    for (let index = 1; index <= 100; index++) {
      mockData.push(
        Transaction.create(
          index.toString(),
          `This is the transaction number ${index}`,
          getHumanDate(getRandomDate()),
          Math.round(Math.random() * 100)
        )
      );
    }
    return new Promise((resolve) => setTimeout(() => resolve(mockData), 2000));
  }
}
