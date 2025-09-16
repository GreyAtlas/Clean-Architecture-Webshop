import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useCartStore } from "../store/cartStore";
import { RemoveProductFromCartButton } from "./RemoveProductFromCartButton";
import { ProductQuantityButtons } from "./ProductQuantityButtons";

const CartTable = () => {
  const cartItems = useCartStore((state) => state.cartItems)

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell align="right">${item.price}</TableCell>

              <TableCell align="center">
                <ProductQuantityButtons cartItem={item} />
              </TableCell>

              <TableCell align="right">
                ${(item.price * item.amount).toFixed(2)}
              </TableCell>

              <TableCell align="center">
                <RemoveProductFromCartButton cartItem={item} />
              </TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell colSpan={3} align="right">
              <strong>Total:</strong>
            </TableCell>
            <TableCell align="right">
              $
              {cartItems
                .reduce((sum, item) => sum + item.price * item.amount, 0)
                .toFixed(2)}
            </TableCell>
            <TableCell />
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CartTable