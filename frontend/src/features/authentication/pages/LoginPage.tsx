import LoginForm from "@/features/authentication/components/LoginForm";
import { useLogin } from "@/features/authentication/hooks/useLogin";
import { useNavigate } from "react-router";


export default function LoginPage() {
  const { mutate: login, isSuccess: isLoginSuccess } = useLogin();

  const navigate = useNavigate();

  const handleSignIn = ({ email, password }: { email: string; password: string }) => {
    login({ email: email, password: password });
    if (isLoginSuccess) {
      navigate("/")
    }
  };

  return (
    <LoginForm onSubmit={handleSignIn} />
  );
}