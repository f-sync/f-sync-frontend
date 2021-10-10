import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import BrandDash from "./pages/BrandDash";
import Home from "./pages/Home";
import GlobalStates from "./utilities/GlobalStates";
import { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import BrandRoutes from "./utilities/BrandRoutes";
import RetailRoutes from "./utilities/RetailRoutes";
import RetailDash from "./pages/RetailDash";

// Socket.io-client
import { io } from "socket.io-client";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

// socket MUST be defined outside here as upon calling a useState, it creates a new client.
let socket = null;

const App = () => {
  const [User, setUser] = useState("Sony");
  const [Role, setRole] = useState("retail");
  const [Email, setEmail] = useState("sonylomo1@gmail.com");
  const [stateSocket, setSocket] = useState(null); // Socket state

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

  useEffect(() => {
    const ENDPOINT = "http://localhost:5000"; // Point this to somewhere more official later

    // A mentor told me to do this since sometimes I would open multiple sockets, it was weird
    if (!socket) {
      socket = io(ENDPOINT);
      setSocket(socket);
    }
  });

  return (
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

          {/* All Routes go here 👇 */}
          <Switch>
            <Route path="/About" component={About} />
            <Route exact path="/" component={Home} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/LogIn" component={LogIn} />

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
  );
};

export default App;
