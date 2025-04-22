import { useSnackbar } from "./SnackbarProvider";

function AddToCart() {
  const { showSnackbar } = useSnackbar();

  const handleAdd = () => {
    showSnackbar("Added to cart", "#1565C0"); // blue
  };

  return <button onClick={handleAdd}>Add</button>;
}

export default AddToCart;
