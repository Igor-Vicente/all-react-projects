import { useSelector } from "react-redux";
import classes from "./UserProfile.module.css";

export const UserProfile = () => {
  const user = useSelector((state) => state.authentication.user);

  return (
    <main className={classes.profile}>
      <h2>Hello, i'm {user.email} </h2>
      <p>E minha senha é: {user.password} </p>
    </main>
  );
};
