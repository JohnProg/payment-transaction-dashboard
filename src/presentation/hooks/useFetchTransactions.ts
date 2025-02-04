import React from "react";
import { IUseCase } from "../../domain/useCases/base";
import { Transaction } from "../../domain/entity/transaction.entity";

export const useFetchTransactions = (useCase: IUseCase<Transaction[]>) => {
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);
  const [error, setError] = React.useState<string | null>(null);
  const [isFetching, setIsFetching] = React.useState<boolean>(false);

  const handleFetchTransactions = async () => {
    try {
      setIsFetching(true);
      const data = await useCase.execute();
      setTransactions(data);
    } catch (error) {
      setError((error as Error).toString());
    } finally {
      setIsFetching(false);
    }
  };

  return {
    onFetchTransactions: handleFetchTransactions,
    errorFetchingTransactions: error,
    isFetchingTransactions: isFetching,
    transactions,
  };
};
