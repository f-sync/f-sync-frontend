import {
  Redirect, Route, useLocation
} from "react-router-dom";

const RetailRoutes = ({ role, comp: Component, ...rest }) => {
  let location = useLocation();
  return (
    <Route
      {...rest}
      render={(props) =>
        role === "retail" ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default RetailRoutes;
