import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import GlobalStates from "../utilities/GlobalStates";
import { useContext } from "react";
import WhiteLogo from '../assets/Fsync_white.png'

const NavLink = ({ children, link }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={link}
  >
    {children}
  </Link>
);

const Links = ({ role }) => {
  return (
    <>
      <NavLink link="/">Home</NavLink>
      <NavLink link={role === "retail"? "/dashboard/retail": "/dashboard/brand"}>Dashboard</NavLink>
      <NavLink link="/About">About</NavLink>
      <NavLink link="/LogIn">Log In</NavLink>
    </>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const NavContext = useContext(GlobalStates);

  return (
      <Box bg={"black"} textColor={"white"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <IoClose /> : <GiHamburgerMenu />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Image w='200px' h='200px' src={WhiteLogo} alt="F.Sync"  />
          </HStack>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Links role={NavContext.role} />

              <Menu colorScheme="blackAlpha">
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                </MenuButton>

                <MenuList color="black" >
                  <MenuItem>{NavContext.user}</MenuItem>
                  <MenuItem>{NavContext.email}</MenuItem>
                  <MenuDivider />
                  <MenuItem>{NavContext.role}</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Links role={NavContext.role} />
            </Stack>
          </Box>
        ) : null}
      </Box>
    
  );
};
export default Navbar;
