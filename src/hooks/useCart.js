import { useState } from "react";

export default function useCart() {
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState([]);
  // remove item snackbar open/close

  // cart menu open/close
  function onSetMenu() {
    setMenu((menu) => !menu);
  }

  // update cart items
  function onSetCart(item) {
    setCart([...cart, item]);
  }

  // remove cart items
  function onRemoveFromCart(itemIndex) {
    const updatedCart = cart.filter((_, index) => index !== itemIndex);
    setCart(updatedCart);
    // close cart menu if there is no items inside of it
    if (updatedCart.length === 0) {
      setMenu(false);
    }
  }

  return { menu, cart, onSetMenu, onSetCart, onRemoveFromCart };
}
