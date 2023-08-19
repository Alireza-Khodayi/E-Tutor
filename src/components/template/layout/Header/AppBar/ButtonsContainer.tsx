import AuthButtons from "./Buttons/AuthButtons";
import CartButton from "./Buttons/CartButton";
import Favorites from "./Buttons/Favorites";
import Notifications from "./Buttons/Notifications";

const ButtonsContainer = () => {
  return (
    <div className="flex items-center gap-1">
      <Notifications />
      <Favorites />
      <CartButton />
      <AuthButtons />
    </div>
  );
};

export default ButtonsContainer;
