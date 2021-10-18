import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, RadioGroup, Stack, Radio } from "@chakra-ui/react";
import { CreateNewCompany } from "../sockets/emits";

function SignUp() {
  const history = useHistory();

  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Payload attributes:
    // email
    // name
    // phoneNumber
    // address
    // type: Whether it's a brand or not, "retail" or "brand"

    CreateNewCompany({
      email: companyEmail,
      name: companyName,
      phoneNumber: phoneNumber,
      address: companyAddress,
      type: role,
    });

    // push to the required role dashboard
    history.push(role === "retail" ? "/retaildash" : "/branddash");
  };

  return (
    <div className="App page_container">
      <h1 className="page_title">F-sync</h1>
      <div className="signupform">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="companyname-holder input-holder">
            <label htmlFor="companyName">
              Company Name
              <input
                type="text"
                name="companyName"
                id="companyName"
                value={companyName}
                onChange={(evt) => setCompanyName(evt.target.value)}
              />
            </label>
          </div>
          <div className="companysddress-holder input-holder">
            <label htmlFor="companyAddress">
              Company Address
              <input
                type="text"
                name="companyAddress"
                id="companyAddress"
                value={companyAddress}
                onChange={(evt) => setCompanyAddress(evt.target.value)}
              />
            </label>
          </div>
          <div className="companyemail-holder input-holder">
            <label htmlFor="companyEmail">
              Company Email
              <input
                type="text"
                name="companyEmail"
                id="companyEmail"
                value={companyEmail}
                onChange={(evt) => setCompanyEmail(evt.target.value)}
              />
            </label>
          </div>
          <div className="phonenumber-holder input-holder">
            <label htmlFor="phoneNumber">
              Phone Number
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(evt) => setPhoneNumber(evt.target.value)}
              />
            </label>
          </div>
          <div className="password-holder input-holder">
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
              />
            </label>
          </div>

          <RadioGroup onChange={(val) => setRole(val)} value={role}>
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
            Sign Up
          </Button>
          <br />
          <Link
            to="/LogIn"
            style={{ textDecoration: "underline", color: "blue" }}
          >
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
