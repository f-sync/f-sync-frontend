import { ChakraProvider } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import BrandDash from "./pages/Dashboard/BrandDash";
import Home from "./pages/Home";
import RetailDash from "./pages/Dashboard/RetailDash";
import SocketProvider from "./sockets/SocketProvider";
// import BrandRoutes from "./utilities/BrandRoutes";
import GlobalStates from "./utilities/GlobalStates";
// import RetailRoutes from "./utilities/RetailRoutes";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Validate from "./pages/Validate";
// import NewHome from "./pages/newHome";
import NotFound from "./pages/NotFound";

const App = () => {
  const [User, setUser] = useState("Sony");
  const [Role, setRole] = useState("retail"); //strictly "retail" or "brand"
  const [Email, setEmail] = useState("");
  const [BrandEmail, setBrandEmail] = useState("sonylomoBrand@gmail.com");
  const [BrandName, setBrandName] = useState("SonyBrand");

  const sessionrole = sessionStorage.key(0);
  const sessionemail = sessionStorage[sessionrole];
  useEffect(() => {
    setRole(sessionrole);
    setEmail(sessionemail);
    console.log("Sessions", sessionrole + "  " + sessionemail);
  }, []);

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
            <Navbar />

            {/* All Routes go here 👇 */}
            <Switch>
              <Route path="/About" component={About} />
              <Route exact path="/" component={Home} />
              <Route exact path="/SignUp" component={SignUp} />
              <Route exact path="/LogIn" component={LogIn} />
              <Route path="/dashboard/retail" component={RetailDash} />
              <Route path="/dashboard/brand" component={BrandDash} />
              <Route path="/auth" component={Validate} />
              <Route path="*" component={NotFound}/>

              {/* <RetailRoutes
                role={Role}
                comp={RetailDash}
                
                 exact path="/retaildash"
              />
              <BrandRoutes role={Role} comp={BrandDash}  exact path="/branddash" /> */}
            </Switch>
          </Router>
        </ChakraProvider>
      </GlobalStates.Provider>
    </SocketProvider>
  );
};

export default App;
