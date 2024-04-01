import Layout from "@/components/Layout/layout";
import BookCart from "../components/BookCart/bookCart";
import { RootState, useAppDispatch } from "@/pages/_app";
import { setCart, setQuantity } from "@/pages/store/slices";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

interface CartItem {
  item: Item;
  quantity: number;
}

export default function Cart(): JSX.Element {
  const dispatch = useAppDispatch();
  const cart = useSelector((state: RootState) => state.cartSlice.cart);
  const quantity = useSelector((state: RootState) => state.cartSlice.quantity);
  const [totalString, setTotalString] = useState<string>("");

  const calculateTotal = (newcart: CartItem[]): string => {
    const totals: { amount: number; curency: string }[] = newcart.reduce(
      (acc: { amount: number; curency: string }[], cartElem) => {
        const index = acc.findIndex(
          (totalsElem) => totalsElem.curency === cartElem.item.curency.name
        );
        if (index === -1) {
          acc.push({
            amount: cartElem.item.price * cartElem.quantity,
            curency: cartElem.item.curency.name,
          });
        } else {
          acc[index].amount += cartElem.item.price * cartElem.quantity;
        }
        return acc;
      },
      []
    );

    return totals
      .map((total) => `${total.amount.toFixed(2)} ${total.curency}`)
      .join(", ");
  };

  const onMinus = (item: Item): void => {
    let newcart = [...cart];
    const index = newcart.findIndex((elem) => elem.item.id === item.id);
    if (newcart[index].quantity <= 1) {
      newcart.splice(index, 1);
    } else {
      newcart[index].quantity -= 1;
    }
    dispatch(setCart(newcart));
    dispatch(setQuantity(quantity - 1));
    setTotalString(calculateTotal(newcart));
  };

  const onPlus = (item: Item): void => {
    let newcart = [...cart];
    const index = newcart.findIndex((elem) => elem.item.id === item.id);
    if (index === -1) {
      newcart.push({ item: item, quantity: 1 });
    } else {
      newcart[index].quantity += 1;
    }
    dispatch(setCart(newcart));
    dispatch(setQuantity(quantity + 1));
    setTotalString(calculateTotal(newcart));
  };

  const itemsReactNodes = cart.map((elem) => (
    <BookCart
      key={elem.item.id}
      item={elem.item}
      minus={() => onMinus(elem.item)}
      plus={() => onPlus(elem.item)}
      quantity={elem.quantity}
    />
  ));

  useEffect(() => {
    setTotalString(calculateTotal(cart));
  }, [cart]);

  return (
    <Layout>
      <div className="cart-container">
        <div className="h1"> CART</div>
        <table className="cart-table">
          <thead className="cart-thead">
            <tr>
              <th className="cart-table-th">name</th>
              <th className="cart-table-th">price</th>
              <th className="cart-table-th">currency</th>
              <th className="cart-table-th">quantity</th>
              <th className="cart-table-th buttons"></th>
            </tr>
          </thead>
          <tbody>{itemsReactNodes}</tbody>
        </table>
      </div>
      <div className="h1 totals"> Total: {totalString}</div>
      <div className="h1 totals"> Quantity: {quantity}</div>
    </Layout>
  );
}
