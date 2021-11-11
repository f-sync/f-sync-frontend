import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { CreateNewCompany } from "../sockets/emits";
import { useDisclosure } from "@chakra-ui/hooks";
import CheckEmail from "./CheckEmail";

const Backend_URl = process.env.BACKEND_URl;

const SignUp = () => {
  const history = useHistory();

  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${Backend_URl}/signup`, {
        email: companyEmail,
        name: companyName,
        phoneNumber: phoneNumber,
        address: companyAddress,
        type: role,
      })
      .then((response) => {
        console.log(response);

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
      })
      .catch((error) => {
        console.log(error);
      });
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

          <Button
            color="white"
            size="lg"
            bg="black"
            type="submit"
            onClick={onOpen}
          >
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
      <CheckEmail isopen={isOpen} onclose={onClose} />
    </div>
  );
};

export default SignUp;
