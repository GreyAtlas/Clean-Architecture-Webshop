import { IconButton, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCartStore } from "../store/cartStore";
import type { CartItem } from "../types/cartTypes";

type Props = {
  cartItem: CartItem
};

export const ProductQuantityButtons = ({ cartItem }: Props) => {
  const reduceAmountOfProduct = useCartStore((state)=>state.reduceAmountOfProduct)
  const increaseAmountOfProduct = useCartStore((state)=> state.increaseAmountOfProduct)

  return (
    <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
      <IconButton onClick={() => reduceAmountOfProduct(cartItem)} size="small">
        <RemoveIcon />
      </IconButton>
      <Typography>
        {cartItem.amount}
      </Typography>
      <IconButton onClick={() => increaseAmountOfProduct(cartItem)} size="small">
        <AddIcon />
      </IconButton>
    </Stack>
  );
}