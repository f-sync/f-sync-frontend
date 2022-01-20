import { useDisclosure } from "@chakra-ui/hooks";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CheckEmail from "../components/CheckEmail";

const Backend_URl = process.env.REACT_APP_BACKEND_URl;

const LogIn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [email, setEmail] = useState("");
  const [role, setRole] = useState("brand");

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onOpen();

    // POST request to http://localhost:5000/login with email input value
    axios
      .post(`${Backend_URl}/login`, {
        email: email,
        type: role,
      })
      .then((response) => {
        console.log("Login res",response);
        // {user: 'NeoBrands', role: 'brand', email: 'sonylomo2@gmail.com', brandEmail: 'sonylomoBrand@gmail.com', brandName: 'SonyBrand'}
      })
      .catch((error) => {
        console.log(error);
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
          Welcome Back!!
        </Heading>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
       
        <Stack spacing={6}>
          <Button
            bg={"black"}
            color={"white"}
            _hover={{
              bg: "grey",
            }}
            onClick={(e) => handleSubmit(e)}
          >
            Log In
          </Button>
          <Link
            to="/SignUp"
            style={{ textDecoration: "underline", color: "blue" }}
          >
            Don't have an account?
          </Link>
        </Stack>
      </Stack>
      <CheckEmail isopen={isOpen} onclose={onClose} />
    </Flex>
  );
};

export default LogIn;
