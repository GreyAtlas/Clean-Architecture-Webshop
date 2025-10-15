import RegisterForm from "@/features/authentication/components/RegisterForm";
import { useRegister } from "@/features/authentication/hooks/useRegister";
import { useEffect } from "react";
import { useNavigate } from "react-router";


export default function RegisterPage() {
  const { mutate: register, isSuccess: isRegisterSuccess } = useRegister();

  const navigate = useNavigate();

  useEffect(() => {
    if (isRegisterSuccess) {
      navigate('/login');
    }
  }, [isRegisterSuccess, navigate]);

  const handleRegister = async ({ email, password }: { email: string; password: string }) => {
    register({ email: email, password: password });
  };

  return <RegisterForm onSubmit={handleRegister} />;
}