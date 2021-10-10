import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  HStack,
  Select
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import GlobalStates from "../utilities/GlobalStates";
import InStock from "../components/RetailDash/InStock";
import YourStock from "../components/RetailDash/YourStock";
import ToOrder from "../components/RetailDash/ToOrder";
import {GetAllBrands, GetStock, AddProductToRetail, ModifyQuantity, GetValidRetail} from '../sockets/emits'
import SocketContext from '../utilities/SocketContext'

const RetailDash = () => {
  const DashContext = useContext(GlobalStates);
  const { retailerBrandslist } = useContext(SocketContext);

  const [BrandDisplay, setBrandDisplay] = useState("Brand")
  useEffect(() => {
    let payload = DashContext.email;
    GetAllBrands(payload)
  },[])

  // GetStock
     // Payload:
        // retailID: email of retailer
        // brandID: email of brand
        // type: "retail" or "brand"

  return (
    <Box>
      <HStack pt="2%" justify="space-around" >
        <Heading textTransform="uppercase">
          {BrandDisplay}'s Portfolio
        </Heading>
        <Select placeholder="Choose Brand" variant="filled" width="30%" onChange={(e)=>setBrandDisplay(e.target.value)} >
          {retailerBrandslist.map((brand) => {
            return (
              <option value={brand.name}>{brand.name}</option>
              // TODO: On select to trigger swapping brands
            )
          })}
        </Select>
      </HStack>
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
            <YourStock retailID = {DashContext.email} type = {DashContext.role} brandID = {DashContext.brandEmail}/>
          </TabPanel>
          <TabPanel>
            <InStock retailID = {DashContext.email} type = {"brand"} brandID = {DashContext.brandEmail} />
          </TabPanel>
          <TabPanel>
            <ToOrder retailID = {DashContext.email} type = {"brand"} brandID = {DashContext.brandEmail}/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default RetailDash;
