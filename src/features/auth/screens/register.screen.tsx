import AuthHero from "../components/auth-hero";
import RegisterForm from "../components/register-form";

export default function RegisterScreen() {
  return <>
       <main className="grid grid-cols-2 min-h-screen">
      <AuthHero/>
      <RegisterForm/>
    </main>
  </>
}
