import {
  Redirect, Route, useLocation
} from "react-router-dom";

const BrandRoutes = ({ role, Component, ...rest }) => {
  let location = useLocation();

  return (
    <Route
      {...rest}
      render={(props) =>
        role === "brand" ? (
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

export default BrandRoutes;
