import ButtonsContainer from "./AppBar/ButtonsContainer";
import Logo from "./AppBar/Logo";
import Search from "./AppBar/Search";

const AppBar = () => {
  return (
    <div className="sticky top-0 z-30 px-8 py-6 flex gap-x-12 bg-gray-50 border border-solid border-gray-300 ">
      <Logo />
      <div className="flex items-center justify-between w-full">
        <Search />
        <ButtonsContainer />
      </div>
    </div>
  );
};

export default AppBar;
