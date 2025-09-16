import { Box, Button, IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";

interface Props {
  onSubmit: (values: { email: string; password: string }) => void;
};

const RegisterForm = ({ onSubmit }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password });
  };


  return (
  <Paper
      elevation={3}
      sx={{ maxWidth: 400, mx: "auto", mt: 8, p: 4, borderRadius: 2 }}
    >
      <Typography variant="h5" gutterBottom>
        Register
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          margin="normal"
          fullWidth
          required
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          margin="normal"
          fullWidth
          required
          label="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          slotProps={{
            input: {
              endAdornment:
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? 'hide the password' : 'display the password'
                }
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>,
          }
        }
      }
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
          disabled={!email || !password}
        >
          Register
        </Button>
      </Box>
    </Paper>
    );
}
export default RegisterForm;
