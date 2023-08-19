import { Select, Space } from "antd";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const SelectCategory = () => {
  return (
    <Space wrap className="hidden lg:flex">
      <Select
        placeholder="Browse..."
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: "jack", label: "Jack" },
          { value: "lucy", label: "Lucy" },
          { value: "Yiminghe", label: "yiminghe" },
          { value: "disabled", label: "Disabled", disabled: true },
        ]}
      />
    </Space>
  );
};

export default SelectCategory;
