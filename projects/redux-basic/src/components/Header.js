import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { authenticationActions } from "../store/authenticationSlice";

export const Header = () => {
  const isAuthenticated = useSelector(
    (state) => state.authentication.authenticated
  );
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authenticationActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          {isAuthenticated && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
