import { IconButton } from "@mui/material"
import { useNavigate } from "react-router";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ShoppingCartPageButton= () =>{
  const navigate = useNavigate();
  const handleRedirect = (e:   React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/cart");
  };
  return (
    <IconButton
      color="inherit"
      onClick={handleRedirect}
      >
      <ShoppingCartIcon/>
    </IconButton>
  )
}

export default ShoppingCartPageButton
