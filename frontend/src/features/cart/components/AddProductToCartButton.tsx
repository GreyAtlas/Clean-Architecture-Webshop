import { IconButton } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCartStore } from "../store/cartStore";
import type { Product } from "@/features/products/types/productTypes";
import { enqueueSnackbar } from "notistack";

type Props = {
  product: Product
};

export const AddProductToCartButton = ({ product }: Props) => {
  const addProductToCart= useCartStore((state)=>state.addProductToCart)

  const handleAddProductToCart = (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    enqueueSnackbar(`${product.name} added to cart`,{variant:"info"})
    addProductToCart(product)
  }
  return (
      <IconButton onClick={handleAddProductToCart} size="small">
        <AddShoppingCartIcon />
      </IconButton>
  );
}