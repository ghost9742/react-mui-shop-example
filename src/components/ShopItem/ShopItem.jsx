/* eslint-disable react/prop-types */
import { Button, Card, CardContent } from "@mui/material";
import tshirtSVG from "../../assets/t-shirt-svgrepo-com.svg";
import { SnackbarContext, useSnackbar } from "../../context/SnackbarContext";

function ShopItem({ color, name, price, onSetCart }) {
  const item = { color, name, price };

  const { showSnackbar } = useSnackbar(SnackbarContext); // Access the enqueueSnackbar function from the context

  // Function to handle adding an item to the cart and displaying the snackbar
  const handleAddToCart = () => {
    onSetCart(item);
    showSnackbar("Added to cart", "#32a852"); // Show snackbar with a message
  };

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 300, // Keep items from getting too wide
        padding: 2,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="shop-icon"
          style={{
            maskImage: `url(${tshirtSVG})`,
            WebkitMaskImage: `url(${tshirtSVG})`,
            backgroundColor: color,
          }}
        />
        <p>{name}</p>
        <p>${price}</p>
        <Button variant="contained" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </CardContent>
    </Card>
  );
}

export default ShopItem;
