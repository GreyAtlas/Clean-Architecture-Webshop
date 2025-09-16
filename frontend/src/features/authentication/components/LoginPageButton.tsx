import { Button } from "@mui/material"
import { useNavigate } from "react-router";

const LoginPageButton= () =>{
  const navigate = useNavigate();
  const handleLogin = (e:   React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <Button 
      color="inherit"
      onClick={handleLogin}
      >
      Login
    </Button>
  )
}

export default LoginPageButton