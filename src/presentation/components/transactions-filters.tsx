import React from "react";
import type { DatePickerProps } from "antd";
import { DatePicker, Flex } from "antd";

interface IProps {
  onDateChange: (dateString: string) => void;
}

const TransactionsFilters: React.FC<IProps> = ({ onDateChange }) => {
  const onChange: DatePickerProps["onChange"] = (_date, dateString) => {
    onDateChange(dateString.toString());
  };
  return (
    <Flex gap="middle" vertical>
      <Flex align="center" gap="middle">
        <h3>Filters:</h3>
        <DatePicker onChange={onChange} />
      </Flex>
    </Flex>
  );
};

export default TransactionsFilters;
