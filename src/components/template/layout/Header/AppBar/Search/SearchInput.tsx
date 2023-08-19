import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

const SearchInput = () => {
  return (
    <div className="items-center hidden md:flex w-full lg:min-w-[75%] xl:min-w-full">
      <Input
        addonBefore={<SearchOutlined />}
        placeholder="What do you want to learn..."
      />
    </div>
  );
};

export default SearchInput;
