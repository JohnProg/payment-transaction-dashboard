import React from "react";
import { Flex } from "antd";

interface IProps {
  totalTransactions: number;
  totalTransactionsAmount: number;
}

const TransactionsSummary: React.FC<IProps> = ({
  totalTransactions,
  totalTransactionsAmount,
}) => {
  return (
    <Flex justify="space-between">
      <h3>Total Transactions: {totalTransactions}</h3>
      <h3>Total Transactions Amount: ${totalTransactionsAmount}</h3>
    </Flex>
  );
};

export default TransactionsSummary;
