import { Counter } from "./components/Counter";
import { Header } from "./components/Header";
import { Auth } from "./components/Auth";
import { UserProfile } from "./components/UserProfile";
import { useSelector } from "react-redux";

export function App() {
  const isAuthenticated = useSelector(
    (state) => state.authentication.authenticated
  );

  return (
    <>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </>
  );
}
