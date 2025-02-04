import React from "react";
import { message, Layout } from "antd";
import TransactionsTable from "../components/transactions-table";
import { useFetchTransactions } from "../hooks/useFetchTransactions";
import { TransactionMockDataSource } from "../../data/datasource/transaction.mock.data.source";
import { TransactionRepository } from "../../data/repository/transaction.repository";
import { FetchTransactionsUseCase } from "../../domain/useCases/fetchTransactions.usecase";
import TransactionsFilters from "../components/transactions-filters";
import TransactionsSummary from "../components/transactions-summary";
import { useFilterTransactions } from "../hooks/useFilterTransactions";

const { Header, Content, Footer } = Layout;

const contentStyle: React.CSSProperties = {
  padding: "0 48px",
};

const bodyStyle: React.CSSProperties = {
  padding: 24,
  backgroundColor: "#FFFFFF",
  borderRadius: 24,
};

const dataSource = new TransactionMockDataSource();
const repository = new TransactionRepository(dataSource);
const useCase = new FetchTransactionsUseCase(repository);

const DashboardPage: React.FC = () => {
  const {
    transactions,
    onFetchTransactions,
    isFetchingTransactions,
    errorFetchingTransactions,
  } = useFetchTransactions(useCase);
  const {
    totalTransactions,
    totalTransactionsAmount,
    transactionsFilteredByDate,
    onFilterByDate,
  } = useFilterTransactions(transactions);
  const [messageApi, contextHolder] = message.useMessage();

  React.useEffect(() => {
    onFetchTransactions();
  }, []);

  React.useEffect(() => {
    if (errorFetchingTransactions) {
      messageApi.open({
        type: "error",
        content: errorFetchingTransactions,
      });
    }
  }, [messageApi, errorFetchingTransactions]);

  return (
    <Layout>
      <Header />
      <Content style={contentStyle}>
        <h1>Transactions</h1>
        <section style={bodyStyle}>
          <TransactionsSummary
            totalTransactions={totalTransactions}
            totalTransactionsAmount={totalTransactionsAmount}
          />
          <TransactionsFilters onDateChange={onFilterByDate} />
          <TransactionsTable
            transactions={transactionsFilteredByDate}
            isFetchingTransactions={isFetchingTransactions}
          />
        </section>
        {contextHolder}
      </Content>
      <Footer>
        React Code Challenge - {new Date().getFullYear()} Created by John Paul
      </Footer>
    </Layout>
  );
};

export default DashboardPage;
