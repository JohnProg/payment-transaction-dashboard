import type { TableColumnsType } from "antd";

export const columns: TableColumnsType = [
  { title: "ID", dataIndex: "id" },
  { title: "Description", dataIndex: "description" },
  {
    title: "Created At",
    dataIndex: "createdAt",
    defaultSortOrder: "descend",
    sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
  },
  {
    title: "amount In USD",
    dataIndex: "amountInUSD",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.amountInUSD - b.amountInUSD,
    render(value) {
      return `$${value.toFixed(2)}`;
    },
  },
];
