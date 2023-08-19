import { createContext, useContext, Reducer, useReducer } from "react";
import {
  CartContextType,
  CartReducerInitial,
  CartActions,
  CartProvider_Props,
  Course,
} from "../../@types";

const CartContext = createContext<CartContextType | null>(null);

const initialState: CartReducerInitial = {
  cartItems: [],
  total: 0,
};
let cartItem;
const cartReducer: Reducer<CartReducerInitial, CartActions> = (
  state,
  action
) => {
  switch (action.type) {
    case "addToCart":
      //   state.cartItems.push({ ...action.payload });
      cartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (cartItem) return { ...state };
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "deleteFromCart":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (course) => course.id !== action.payload
        ),
      };
    default:
      throw new Error("Unknown action type");
  }
};

// eslint-disable-next-line react-refresh/only-export-components
const CartProvider = ({ children }: CartProvider_Props) => {
  const [{ cartItems }, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (course: Course) => {
    dispatch({ type: "addToCart", payload: course });
    console.log("add");
  };

  const deleteFromCart = (id: number) => {
    dispatch({ type: "deleteFromCart", payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        deleteFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { CartProvider, useCart };
