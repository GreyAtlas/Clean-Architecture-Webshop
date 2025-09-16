import { Portal, Snackbar } from "@mui/material";

// export const toaster = createToaster({
//   placement: "top-start",
//   offsets: { left: "6.4rem", top: "3.2rem", right: "", bottom: "" },
//   pauseOnPageIdle: true,
// });

export const Toaster = () =>{
  return(
  <Portal>
    <Snackbar></Snackbar>
  </Portal>
  )
} 


