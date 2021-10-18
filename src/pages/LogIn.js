import { useState, useEffect } from "react";
import { Button, RadioGroup, Stack, Radio } from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";

function LogIn() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("retail");

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // direct to the required role dashboard
    history.push(role === "retail" ? "/retaildash" : "/branddash");

    // session storage to store login value
    sessionStorage.setItem(role, email);
  };

  return (
    <div className="App page_container">
      <h1 className="page_title">F-sync</h1>
      <p className="title_description">Welcome to F-Sync</p>
      <div className="loginform">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-holder">
            <label htmlFor="email">
              Email
              <input
                isRequired
                id="email"
                name="email"
                value={email}
                onChange={(evt) => setEmail(evt.target.value)}
              />
            </label>
          </div>
          <div className="input-holder">
            <label htmlFor="password">
              Password
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
              />
            </label>
          </div>

          <RadioGroup
            onChange={(val) => setRole(val)}
            value={role}
            isRequired={true}
          >
            <Stack direction="row">
              <Radio value="brand" colorScheme="blackAlpha">
                I am a Brand
              </Radio>
              <Radio value="retail" colorScheme="green">
                I am a Retailer
              </Radio>
            </Stack>
          </RadioGroup>

          <Button color="white" size="lg" bg="black" type="submit">
            Log In
          </Button>
          <br />
          <Link
            to="/SignUp"
            style={{ textDecoration: "underline", color: "blue" }}
          >
            Don't have an account?
          </Link>
          <br />
          <Link to="/" style={{ textDecoration: "underline", color: "blue" }}>
            Forgot password?
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
