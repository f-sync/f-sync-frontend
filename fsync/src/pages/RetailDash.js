import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useContext } from "react";
import GlobalStates from "../utilities/GlobalStates";
import InStock from "../components/RetailDash/InStock";
import YourStock from "../components/RetailDash/YourStock";
import ToOrder from "../components/RetailDash/ToOrder";

const RetailDash = () => {
  const DashContext = useContext(GlobalStates);

  return (
    <Box>
      <Heading pt="2%" pl="5%" textTransform="uppercase">
        {DashContext.user}'s Portfolio
      </Heading>
      <Tabs
        variant="soft-rounded"
        colorScheme="blackAlpha"
        align="center"
        size="lg"
        pt="2%"
      >
        <TabList>
          <Tab>YOUR STOCK</Tab>
          <Tab>IN STOCK</Tab>
          <Tab>MADE TO ORDER</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <YourStock />
          </TabPanel>
          <TabPanel>
            <InStock />
          </TabPanel>
          <TabPanel>
            <ToOrder />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default RetailDash;
