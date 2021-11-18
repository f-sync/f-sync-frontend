import { useDisclosure } from "@chakra-ui/hooks";
import {
  Button,
  Radio,
  RadioGroup,
  Stack,
  FormLabel,
  Heading,
  Flex,
  useColorModeValue,
  FormControl,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import CheckEmail from "../components/CheckEmail";
import { CreateNewCompany } from "../sockets/emits";

const Backend_URl = process.env.REACT_APP_BACKEND_URl;

const SignUp = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("retail");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = (e) => {
    e.preventDefault();
    onOpen();

    axios
      .post(`https://f-sync-backend.dulanvee.repl.co/signup`, {
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
        console.log(error.message);
      });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Let's Sign You Up!
        </Heading>
        <FormControl id="company_name" isRequired>
          <FormLabel>Company Name</FormLabel>
          <Input
            placeholder="Company Name"
            _placeholder={{ color: "gray.500" }}
            type="text"
            id="company_name"
            name="company_name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </FormControl>
        <FormControl id="company_address" isRequired>
          <FormLabel>Company Address</FormLabel>
          <Input
            placeholder="47 WallStreet, NYC"
            _placeholder={{ color: "gray.500" }}
            type="text"
            id="company_address"
            name="company_address"
            value={companyAddress}
            onChange={(e) => setCompanyAddress(e.target.value)}
          />
        </FormControl>
        <FormControl id="company_email" isRequired>
          <FormLabel>Company Email</FormLabel>
          <Input
            placeholder="company_email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
            id="company_email"
            name="company_email"
            value={companyEmail}
            onChange={(e) => setCompanyEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="company_contact" isRequired>
          <FormLabel>Phone Number</FormLabel>
          <Input
            placeholder="+254 000 345 6870"
            _placeholder={{ color: "gray.500" }}
            type="telephone"
            id="company_contact"
            name="company_contact"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </FormControl>
        <RadioGroup onChange={(val) => setRole(val)} value={role}>
          <Stack direction="row" spacing={6}>
            <Radio value="brand" colorScheme="blackAlpha">
              I am a Brand
            </Radio>
            <Radio value="retail" colorScheme="blackAlpha">
              I am a Retailer
            </Radio>
          </Stack>
        </RadioGroup>
        <Stack spacing={6}>
          <Button
            bg={"black"}
            color={"white"}
            _hover={{
              bg: "grey",
            }}
            onClick={(e) => handleSubmit(e)}
          >
            Sign Up
          </Button>
          <Link
            to="/LogIn"
            style={{ textDecoration: "underline", color: "blue" }}
          >
            Already have an account?
          </Link>
        </Stack>
      </Stack>
      <CheckEmail isopen={isOpen} onclose={onClose} />
    </Flex>
  );
};

export default SignUp;
