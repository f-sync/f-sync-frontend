import {
  Box, Heading, HStack, Select, Tab, TabList, TabPanel,
  TabPanels, Tabs, useEditable
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import AddProduct from "../../components/BrandDash/AddProduct";
import AddRetail from "../../components/BrandDash/AddRetailer";
import InStock from "../../components/BrandDash/InStock";
import GlobalStates from "../../utilities/GlobalStates";

const BrandDash = () => {
  const DashContext = useContext(GlobalStates);
  const [tabIndex, setTabIndex] = useState(0);

  console.log("Dash", DashContext);

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
      <Tabs
        variant="soft-rounded"
        colorScheme="blackAlpha"
        align="center"
        size="lg"
        pt="2%"
        onChange={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab>IN STOCK</Tab>
          <Tab>ADD PRODUCT</Tab>
          <Tab>ADD RETAILER</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <InStock
              retailID={DashContext.email}
              brandID={DashContext.email}
              type={DashContext.role}
              tabIndex={tabIndex}
            />
          </TabPanel>
          <TabPanel>
            <AddProduct
              retailID={DashContext.email}
              type={DashContext.role}
              brandID={DashContext.email}
              tabIndex={tabIndex}
            />
          </TabPanel>
          <TabPanel>
            <AddRetail
              retailID={DashContext.email}
              type={DashContext.role}
              brandID={DashContext.email}
              tabIndex={tabIndex}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default BrandDash;
