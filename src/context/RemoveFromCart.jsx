import { useSnackbar } from "./SnackbarProvider";

function RemoveFromCart() {
  const { showSnackbar } = useSnackbar();

  const handleRemove = () => {
    showSnackbar("Removed from cart", "#99141b"); // red
  };

  return <button onClick={handleRemove}>Remove</button>;
}

export default RemoveFromCart;
