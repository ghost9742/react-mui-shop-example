/* eslint-disable react/prop-types */
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "./App.css";

import useCart from "./hooks/useCart";
import Navigation from "./components/Navigation/Navigation";
import ShopItems from "./components/ShopItems/ShopItems";
import tShirts from "./utils/tShirts";

const theme = createTheme();

function App() {
  const { menu, cart, onSetMenu, onSetCart, onRemoveFromCart } = useCart();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="shop">
        <Navigation
          menu={menu}
          onSetMenu={onSetMenu}
          cart={cart}
          onRemoveFromCart={onRemoveFromCart}
        />
        <ShopItems tShirts={tShirts} onSetCart={onSetCart} />
      </div>
    </ThemeProvider>
  );
}

export default App;
