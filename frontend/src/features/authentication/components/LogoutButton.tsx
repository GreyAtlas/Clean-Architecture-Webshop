import { Button } from "@mui/material"
import { useNavigate } from "react-router";
import { useAuthenticationStore } from "../store/authenticationStore";
import queryClient from "@/shared/services/queryClientProvider";

const LogoutButton= () =>{
  const navigate = useNavigate();
  const removeTokens = useAuthenticationStore((state)=> state.removeTokens)

  const handleLogout = (e:   React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    queryClient.invalidateQueries({ queryKey: ['mostRecentNotification'] })

    removeTokens();
    navigate("/");
  };
  return (
    <Button 
      color="inherit"
      onClick={handleLogout}
      >
      Logout
    </Button>
  )
}

export default LogoutButton