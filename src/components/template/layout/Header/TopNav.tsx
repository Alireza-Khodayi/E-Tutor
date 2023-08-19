import CurrencySelect from "./TopNav/CurrencySelect";
import LanguageSelect from "./TopNav/LanguageSelect";
import Navigation from "./TopNav/Navigation";

const TopNav = () => {
  return (
    <div className="flex justify-between items-center bg-gray-900 px-6">
      <Navigation />
      <div className="flex gap-x-3">
        <CurrencySelect />
        <LanguageSelect />
      </div>
    </div>
  );
};

export default TopNav;
