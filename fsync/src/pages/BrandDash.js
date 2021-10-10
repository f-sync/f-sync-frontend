import InStock from "../components/BrandDash/InStock";
import { Box, HStack, Heading, Select } from "@chakra-ui/react";
import { useContext } from "react";
import GlobalStates from "../utilities/GlobalStates";

const BrandDash = () => {
  const DashContext = useContext(GlobalStates);

  return (
    <Box>
      <HStack pt="2%" justify="space-around">
        <Heading textTransform="uppercase">
          {DashContext.user}'s Global Inventory
        </Heading>
        <Select placeholder="Choose Retailer" variant="filled" width="30%">
          <option value="option1">VIEW ALL</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </HStack>
      <InStock />
    </Box>
  );
};

export default BrandDash;
