import { Button, Badge, Tooltip, Popover } from "antd";
import { ShoppingCartOutlined, DeleteOutlined } from "@ant-design/icons";
import { useCart } from "../../../../../../core/context/CartContext";

const CartButton = () => {
  const ctx = useCart();

  return (
    <Popover content={<Cart />} trigger="click" placement="bottomLeft">
      <Tooltip className="items-center justify-center flex" title="Cart">
        <Badge count={ctx?.cartItems.length}>
          <Button type="link" size="large" icon={<ShoppingCartOutlined />} />
        </Badge>
      </Tooltip>
    </Popover>
  );
};

type CartItem_Props = {
  id: number;
  title: string;
  price: number;
};
const CartItem = ({ title, price, id }: CartItem_Props) => {
  const ctx = useCart();
  return (
    <div className="px-3 py-3 bg-slate-50 odd:bg-white">
      <h3 className="text-sm">{title}</h3>
      <div className="flex justify-between items-center mt-3">
        <span className="text-primary">${price}</span>
        <Button
          onClick={() => ctx?.deleteFromCart(id)}
          className="text-primary"
          icon={<DeleteOutlined />}
        />
      </div>
    </div>
  );
};

const Cart = () => {
  const ctx = useCart();
  if (!ctx?.cartItems.length)
    return <div className="px-2 py-3">Cart is empty!</div>;
  return (
    <div className="px-2 py-3">
      {ctx?.cartItems.map((course: CartItem_Props, index) => (
        <CartItem
          id={course.id}
          key={index}
          title={course.title}
          price={course.price}
        />
      ))}
    </div>
  );
};

export default CartButton;
