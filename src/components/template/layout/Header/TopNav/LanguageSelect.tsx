import { Select } from "antd";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const LanguageSelect = () => {
  return (
    <>
      <Select
        defaultValue="en"
        onChange={handleChange}
        options={[
          { value: "en", label: "English" },
          { value: "fa", label: "Persian" },
        ]}
      />
    </>
  );
};

export default LanguageSelect;
