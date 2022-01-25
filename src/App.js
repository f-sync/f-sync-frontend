import { ChakraProvider } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import BrandDash from "./pages/Dashboard/BrandDash";
import RetailDash from "./pages/Dashboard/RetailDash";
import SocketProvider from "./sockets/SocketProvider";
// import BrandRoutes from "./utilities/BrandRoutes";
import GlobalStates from "./utilities/GlobalStates";
// import RetailRoutes from "./utilities/RetailRoutes";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Validate from "./pages/Validate";
import NewHome from "./pages/newHome";
import NotFound from "./pages/NotFound";
import jwt from "jsonwebtoken";
import DataTable from "./components/table";
import PrivateRoute from "./utilities/PrivateRoute";

const Success_key = process.env.REACT_APP_JWT_SECRET_KEY;

const App = () => {
  const [User, setUser] = useState("");
  const [Role, setRole] = useState(""); //strictly "retail" or "brand"
  const [Email, setEmail] = useState("");
  const [BrandEmail, setBrandEmail] = useState("");
  const [BrandName, setBrandName] = useState("");

  const verifyToken = (jwtToken) => {
    try {
      let verify = jwt.verify(jwtToken, Success_key);
      return verify;
    } catch (error) {
      console.error(error.message);
      return false;
    }
  };

  useEffect(() => {
    // Get JWT from sessionStorage
    const JWT = JSON.parse(sessionStorage.getItem("jwt"));
    console.log("jwt", JWT);
    // Decode the JWT
    const decodedJWT = verifyToken(JWT);

    // Set email, name, and brand into global provider
    setRole(decodedJWT.type);
    setEmail(decodedJWT.email);
    setUser(decodedJWT.name);
  }, []);

  // console.log("State email: ", Email);

  return (
    <SocketProvider>
      <GlobalStates.Provider
        value={{
          user: User,
          role: Role,
          email: Email,
          brandEmail: BrandEmail,
          brandName: BrandName,
        }}
      >
        <ChakraProvider>
          <Router>
            <Switch>
              <Route path="/About" component={About} />
              <Route exact path="/" component={NewHome} />
              <Route exact path="/SignUp" component={SignUp} />
              <Route exact path="/LogIn" component={LogIn} />
              <Route path="/auth" component={Validate} />
              <PrivateRoute path="/dashboard/retail" Comp={RetailDash} />
              <PrivateRoute path="/dashboard/brand" Comp={BrandDash} />
              <PrivateRoute path="/table" Comp={DataTable} />
              <Route exact path="*" component={NotFound} />
            </Switch>
          </Router>
        </ChakraProvider>
      </GlobalStates.Provider>
    </SocketProvider>
  );
};

export default App;
