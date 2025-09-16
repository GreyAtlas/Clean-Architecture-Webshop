import { Button } from "@mui/material"
import { useNavigate } from "react-router";
interface Props {
  children: React.ReactNode;
}

const ProductDashboardNavigateButton= ({children} : Props)=>{
  const navigate = useNavigate();
  const handleRedirect = (e:   React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <Button 
      color="inherit"
      onClick={handleRedirect}
      >
      {children}
    </Button>
  )
}

export default ProductDashboardNavigateButton
