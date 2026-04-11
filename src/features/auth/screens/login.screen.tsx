import AuthHero from "../components/auth-hero";
import LoginForm from "../components/login-form";

export default function LoginScreen() {
  return <>
    <main className="grid grid-cols-2 min-h-screen">
      <AuthHero/>
      <LoginForm/>
    </main>
  </>
}
