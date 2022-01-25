//responsive header component
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import WhiteLogo from "../../assets/Fsync_white.png";

const NavLink = ({ children, link }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      color: useColorModeValue("red.400", "red.500"),
    }}
    href={link}
  >
    {children}
  </Link>
);

const Links = () => {
  let history = useHistory();

  return (
    <>
      <NavLink link="/">Home</NavLink>
      <NavLink link="/About">About</NavLink>
      <NavLink>
        <Button
          colorScheme={"red"}
          bg={"red.400"}
          _hover={{ bg: "red.500" }}
          onClick={() => history.push("/LogIn")}
        >
          Log In
        </Button>
      </NavLink>
    </>
  );
};

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={"black"} textColor={"white"} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          bgColor={"black"}
          size={"md"}
          icon={isOpen ? <IoClose /> : <GiHamburgerMenu />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Image w="200px" h="200px" src={WhiteLogo} alt="F.Sync" />
        </HStack>
        <Flex alignItems={"center"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <Links />
          </HStack>
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <Links />
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
