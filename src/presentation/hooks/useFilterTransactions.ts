import React from "react";
import { Transaction } from "../../domain/entity/transaction.entity";

export const useFilterTransactions = (transactions: Transaction[]) => {
  const [filterByDate, setFilterByDate] = React.useState<string | null>(null);

  const transactionsFilteredByDate = React.useMemo(() => {
    if (filterByDate) {
      return transactions.filter(
        (transaction) => transaction.createdAt === filterByDate
      );
    }

    return transactions;
  }, [filterByDate, transactions]);

  const totalTransactions = React.useMemo(
    () => transactionsFilteredByDate.length,
    [transactionsFilteredByDate]
  );

  const totalTransactionsAmount = React.useMemo(
    () =>
      transactionsFilteredByDate.reduce(
        (acc, transaction) => (acc += transaction.amountInUSD),
        0
      ),
    [transactionsFilteredByDate]
  );

  return {
    transactionsFilteredByDate,
    totalTransactionsAmount,
    totalTransactions,
    onFilterByDate: setFilterByDate,
  };
};
