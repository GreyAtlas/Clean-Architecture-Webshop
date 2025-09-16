import { Box, CssBaseline } from "@mui/material"
import React from "react"
import AppHeader from "./AppHeader"

interface LayoutProps {
  children: React.ReactNode;
}


const Layout = ({children} : LayoutProps) => {
  return (
    <>
      <CssBaseline />   
      <AppHeader/>
      <Box component="main" sx={{ 
        flexGrow: 1, 
        p: 0, 
        mt: '48px'
      }}>
        {children}
      </Box>

    </>


  )
}

export default Layout