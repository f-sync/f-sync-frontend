import NotFoundSVG from "../assets/not_found.svg";
import { Image } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/layout";
import Header from "../components/Navbar/Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <Flex justifyContent="center" pt="7%">
        <Image h={"70vh"} src={NotFoundSVG} />
      </Flex>
    </>
  );
};

export default NotFound;
