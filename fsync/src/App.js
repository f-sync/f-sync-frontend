import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import BrandDash from "./pages/BrandDash";
import Home from "./pages/Home";
import RetailDash from "./pages/RetailDash";
import SocketProvider from "./sockets/SocketProvider";
// import BrandRoutes from "./utilities/BrandRoutes";
import GlobalStates from "./utilities/GlobalStates";
// import RetailRoutes from "./utilities/RetailRoutes";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

const App = () => {
  const [User, setUser] = useState("Sony");
  const [Role, setRole] = useState(""); //strictly "retail" or "brand"
  const [Email, setEmail] = useState("sonylomo1@gmail.com");

  return (
    <SocketProvider>
      <GlobalStates.Provider value={{ user: User, role: Role, email: Email }}>
        <ChakraProvider>
          <Router>
            <Navbar />

            {/* All Routes go here 👇 */}
            <Switch>
              <Route path="/About" component={About} />
              <Route exact path="/" component={Home} />
              <Route exact path="/SignUp" component={SignUp} />
              <Route exact path="/LogIn" component={LogIn} />
              <Route path="/retaildash" component={RetailDash} />
              <Route path="/branddash" component={BrandDash} />

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
