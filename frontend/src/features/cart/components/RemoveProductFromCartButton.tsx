import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCartStore } from "../store/cartStore";
import type { CartItem } from "../types/cartTypes";
import { enqueueSnackbar } from "notistack";

type Props = {
  cartItem: CartItem
};

export const RemoveProductFromCartButton= ({ cartItem }: Props) => {
  const removeProductFromCart = useCartStore((state)=> state.removeProductFromCart)

  const handleRemovProductFromCart = (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    enqueueSnackbar(`${cartItem.name} removed from cart`,{variant:"info"})
    removeProductFromCart(cartItem)
  }

  return (
    <IconButton color="warning" onClick={handleRemovProductFromCart} size="small">
      <DeleteIcon />
    </IconButton>
  );
}