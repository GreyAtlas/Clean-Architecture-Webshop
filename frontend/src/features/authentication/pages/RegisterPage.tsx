import RegisterForm from "@/features/authentication/components/RegisterForm";
import { useRegister } from "@/features/authentication/hooks/useRegister";


export default function RegisterPage() {
  const { mutate: register } = useRegister();
  

  const handleRegister = async ({ email, password }: { email: string; password: string }) => {
    register({email:email, password: password});
  };

  return <RegisterForm onSubmit={handleRegister} />;
}