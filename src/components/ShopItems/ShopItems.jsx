/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import ShopItem from "../ShopItem/ShopItem";

function ShopItems({ tShirts, onSetCart }) {
  return (
    <Grid
      container
      spacing={5}
      justifyContent="flex-start"
      alignItems="center"
      wrap="wrap"
    >
      {tShirts.map((tShirt) => (
        <Grid
          key={tShirt.id}
          size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ShopItem
            color={tShirt.color}
            name={tShirt.name}
            price={tShirt.price}
            onSetCart={onSetCart}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default ShopItems;
