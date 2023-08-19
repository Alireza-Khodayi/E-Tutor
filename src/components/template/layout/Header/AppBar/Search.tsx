import SearchInput from "../AppBar/Search/SearchInput";
import SelectCategory from "../AppBar/Search/SelectCategory";

const Search = () => {
  return (
    <div className="flex items-center gap-x-4">
      <SelectCategory />
      <SearchInput />
    </div>
  );
};

export default Search;
