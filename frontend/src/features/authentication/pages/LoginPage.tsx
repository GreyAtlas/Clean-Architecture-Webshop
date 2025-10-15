import LoginForm from "@/features/authentication/components/LoginForm";
import { useLogin } from "@/features/authentication/hooks/useLogin";
import { useEffect } from "react";
import { useNavigate } from "react-router";


export default function LoginPage() {
  const { mutate: loginMutation, isSuccess: isLoginSuccess } = useLogin();

  const navigate = useNavigate();

  const handleSignIn = ({ email, password }: { email: string; password: string }) => {
    loginMutation({ email: email, password: password });
    if (isLoginSuccess) {
      navigate("/")
    }
  };

  useEffect(() => {
    if (isLoginSuccess) {
      navigate('/');
    }
  }, [isLoginSuccess, navigate]);

  return (
    <LoginForm onSubmit={handleSignIn} />
  );
}