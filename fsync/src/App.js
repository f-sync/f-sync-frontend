import { ChakraProvider } from "@chakra-ui/react";
import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import BrandDash from "./pages/BrandDash";
import Home from "./pages/Home";
import RetailDash from "./pages/RetailDash";
import SocketProvider from "./sockets/SocketProvider";
import BrandRoutes from "./utilities/BrandRoutes";
import GlobalStates from "./utilities/GlobalStates";
import RetailRoutes from "./utilities/RetailRoutes";
<<<<<<< HEAD
=======
import RetailDash from "./pages/RetailDash";

// Socket.io-client
import { io } from "socket.io-client";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

// socket MUST be defined outside here as upon calling a useState, it creates a new client.
let socket = null;
>>>>>>> development

const App = () => {
  const [User, setUser] = useState("Sony");
  const [Role, setRole] = useState("retail");
  const [Email, setEmail] = useState("sonylomo1@gmail.com");

  const responseGoogle = (response) => {
    //     profileObj:
    // email: "sonylomo1@gmail.com"
    // familyName: "Lomo"
    // givenName: "Sonia"
    // googleId: "111863255491666759637"
    // imageUrl: "https://lh3.googleusercontent.com/a-/AOh14Ghc3OVzBa6Q6oldACNFNjM6r9oV9xe_HDypXkC0vg=s96-c"
    // name: "Sonia Lomo"
    setUser(response.profileObj.name);
    setEmail(response.profileObj.email);
    console.log(response);
  };

<<<<<<< HEAD
=======
  useEffect(() => {
    const ENDPOINT = "http://localhost:5000"; // Point this to somewhere more official later

    // A mentor told me to do this since sometimes I would open multiple sockets, it was weird
    if (!socket) {
      socket = io(ENDPOINT);
      setSocket(socket);
    }
  });

>>>>>>> development
  return (
    <SocketProvider>
      <GlobalStates.Provider value={{ user: User, role: Role, email: Email }}>
        <ChakraProvider>
          <Router>
            <Navbar
              SignIn={
                <GoogleLogin
                  clientId="498773789332-j57idmbh2shks3ogl28qnbil78idfiq6.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              }
            />

<<<<<<< HEAD
            {/* All Routes go here 👇 */}
            <Switch>
              <Route path="/About" component={About} />
              <Route exact path="/" component={Home} />
=======
          {/* All Routes go here 👇 */}
          <Switch>
            <Route path="/About" component={About} />
            <Route exact path="/" component={Home} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/LogIn" component={LogIn} />
>>>>>>> development

              <RetailRoutes
                role={Role}
                comp={RetailDash}
                exact
                path="/retaildash"
              />
              <BrandRoutes role={Role} comp={BrandDash} path="/branddash" />
            </Switch>
          </Router>
        </ChakraProvider>
      </GlobalStates.Provider>
    </SocketProvider>
  );
};

export default App;
