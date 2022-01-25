import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  HStack,
  Select,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import GlobalStates from "../../utilities/GlobalStates";
import InStock from "../../components/RetailDash/InStock";
import YourStock from "../../components/RetailDash/YourStock";
import ToOrder from "../../components/RetailDash/ToOrder";
import AddProduct from "../../components/RetailDash/AddProduct";
import {
  GetAllBrands,
  GetStock,
  AddProductToRetail,
  ModifyQuantity,
  GetValidRetail,
} from "../../sockets/emits";
import SocketContext from "../../utilities/SocketContext";
import Navbar from "../../components/Navbar/Navbar";

const RetailDash = () => {
  const DashContext = useContext(GlobalStates);
  const { retailerBrandslist } = useContext(SocketContext);
  const [tabIndex, setTabIndex] = useState(0);

  const [BrandDisplay, setBrandDisplay] = useState("Brand");
  useEffect(() => {
    let payload = DashContext.email;
    GetAllBrands(payload);
  }, []);

  // GetStock
  // Payload:
  // retailID: email of retailer
  // brandID: email of brand
  // type: "retail" or "brand"

  return (
    <>
      <Navbar />
      <Box>
        <HStack pt="2%" justify="space-around">
          <Heading textTransform="uppercase">
            {BrandDisplay}'s Portfolio
          </Heading>
          <Select
            placeholder="Choose Brand"
            variant="filled"
            width="30%"
            onChange={(e) => setBrandDisplay(e.target.value)}
          >
            {retailerBrandslist.map((brand, index) => {
              return (
                <option value={brand.name} key={index}>
                  {brand.name}
                </option>
                // TODO: On select to trigger swapping brands
              );
            })}
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
            <Tab>YOUR STOCK</Tab>
            <Tab>IN STOCK</Tab>
            <Tab>MADE TO ORDER</Tab>
            <Tab>ADD PRODUCT</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <YourStock
                retailID={DashContext.email}
                type={DashContext.role}
                brandID={DashContext.brandEmail}
                tabIndex={tabIndex}
              />
            </TabPanel>
            <TabPanel>
              <InStock
                retailID={DashContext.email}
                type={"brand"}
                brandID={DashContext.brandEmail}
                tabIndex={tabIndex}
              />
            </TabPanel>
            <TabPanel>
              <ToOrder
                retailID={DashContext.email}
                type={"brand"}
                brandID={DashContext.brandEmail}
                tabIndex={tabIndex}
              />
            </TabPanel>
            <TabPanel>
              <AddProduct
                retailID={DashContext.email}
                type={DashContext.role}
                brandID={DashContext.brandEmail}
                tabIndex={tabIndex}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default RetailDash;
