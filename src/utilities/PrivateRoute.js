import auth from "./Auth";
import { Redirect, Route, useLocation } from "react-router-dom";

const PrivateRoute = ({ Comp, ...rest }) => {
  let location = useLocation();
  const { isAuthenticated } = auth;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Comp {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/LogIn",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
