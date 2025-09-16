import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import LoginPageButton from "@/features/authentication/components/LoginPageButton";
import ShoppingCartPageButton from "@/features/cart/components/ShoppingCartPageButton";
import ProductDashboardNavigateButton from "@/features/products/components/ProductDashboardNavigateButton";
import { useAuthenticationStore } from "@/features/authentication/store/authenticationStore";
import LogoutButton from "@/features/authentication/components/LogoutButton";

const AppToolbar = () =>{
  const isAuthenticated = useAuthenticationStore((state)=> state.isAuthenticated)
  return (
      <AppBar position="fixed">
        <Toolbar>
        <Grid container alignItems="center"  width={"100%"}  wrap ="nowrap">
          <Grid size={11} >
            <ProductDashboardNavigateButton>            <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Webshop
            </Typography>
            </ProductDashboardNavigateButton>

          </Grid>
          <Grid size={1} justifyContent={"right"}>
            <ShoppingCartPageButton/>
          </Grid>
          <Grid size={1} justifyContent={"right"}>
            {isAuthenticated ? <LogoutButton/> : <LoginPageButton/> }
          </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
  ) 
}

export default AppToolbar