import React from "react";
import { Table } from "antd";
import { Transaction } from "../../../domain/entity/transaction.entity";
import { columns } from "./columns";

interface IProps {
  transactions: Transaction[];
  isFetchingTransactions: boolean;
}

const TransactionsTable: React.FC<IProps> = ({
  transactions,
  isFetchingTransactions,
}) => {
  const dataSource = React.useMemo(
    () =>
      transactions.map((transaction, i) => ({
        key: i,
        ...transaction,
      })),
    [transactions]
  );

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={isFetchingTransactions}
    />
  );
};

export default TransactionsTable;
