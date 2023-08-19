import { Select } from "antd";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const CurrencySelect = () => {
  return (
    <>
      <Select
        defaultValue="usd"
        onChange={handleChange}
        options={[
          { value: "usd", label: "USD" },
          { value: "eur", label: "EUR" },
        ]}
      />
    </>
  );
};

export default CurrencySelect;
