export type CartContextType = {
  cartItems: Course[];
  addToCart: (course: Course) => void;
  deleteFromCart: (id: number) => void;
};

export type Course = {
  id: number;
  title: string;
  price: number;
};
export type CartReducerInitial = {
  cartItems: Course[];
  total: number;
};
export type CartActions =
  | {
      type: "addToCart";
      payload: Course;
    }
  | {
      type: "deleteFromCart";
      payload: number;
    };

export type CartProvider_Props = {
  children: JSX.Element | JSX.Element[];
};
