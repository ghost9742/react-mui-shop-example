/* eslint-disable react/prop-types */
import { Button, IconButton, List, Paper, Stack } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import CloseIcon from "@mui/icons-material/Close";

import tshirtSVG from "../../assets/t-shirt-svgrepo-com.svg";

import { SnackbarContext, useSnackbar } from "../../context/SnackbarContext";

function Navigation({ menu, onSetMenu, cart, onRemoveFromCart }) {
  // Function to calculate the total price of items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const { showSnackbar } = useSnackbar(SnackbarContext); // Access the enqueueSnackbar function from the context

  // Function to handle removing an item from the cart
  const handleRemoveFromCart = (id) => {
    onRemoveFromCart(id);
    showSnackbar("Removed from cart", "#d32f2f"); // Show snackbar with a message
  };

  // console.log(totalPrice);
  // console.log(cart.length);

  // Styled component for the list items in the cart
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    margin: theme.spacing(5),
    textAlign: "center",
    width: "200px",
    height: "50px",
    marginBottom: "10px !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  // Styled badge for the shopping cart icon
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    // Navigation bar with a title and a shopping cart icon
    <nav className="navigation">
      <h1>TShirt-Shop</h1>
      <IconButton onClick={onSetMenu} aria-label="cart">
        <StyledBadge badgeContent={cart.length} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>

      {
        // if the menu is open, display the cart items
        menu && (
          // closes the menu when clicking outside of it
          <ClickAwayListener onClickAway={() => onSetMenu(false)}>
            <List
              sx={{
                width: "100%",
                maxWidth: 250,
                bgcolor: "grey.800",
                color: "common.white",
                position: "absolute",
                top: "80px",
                right: "20px",
                zIndex: 10,
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              {
                // Map through the cart items and display them
                cart.map((item, id) => (
                  <Stack key={id} spacing={2}>
                    <Item>
                      <div
                        className="icon"
                        style={{
                          maskImage: `url(${tshirtSVG})`,
                          WebkitMaskImage: `url(${tshirtSVG})`,
                          backgroundColor: item.color,
                          width: "40px",
                          height: "40px",
                        }}
                      ></div>
                      <p>${item.price}</p>
                      <IconButton
                        aria-label="fingerprint"
                        color="secondary"
                        onClick={() => handleRemoveFromCart(id)}
                      >
                        <CloseIcon />
                      </IconButton>
                    </Item>
                  </Stack>
                ))
              }

              <p>Total price ${totalPrice}</p>
              <Button variant="contained">Checkout</Button>
            </List>
          </ClickAwayListener>
        )
      }
    </nav>
  );
}

export default Navigation;
