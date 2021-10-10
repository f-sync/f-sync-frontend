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
import AddProduct from "../components/RetailDash/AddProduct";
import {GetAllBrands, GetStock, AddProductToRetail, ModifyQuantity, GetValidRetail} from '../sockets/emits'
import SocketContext from '../utilities/SocketContext'

const RetailDash = () => {
  const DashContext = useContext(GlobalStates);
  const { retailerBrandslist } = useContext(SocketContext);
  const [tabIndex, setTabIndex] = useState(0)

  useEffect(() => {
    let payload = DashContext.email;
    GetAllBrands(payload)
  },[])


  return (
    <Box>
      <HStack pt="2%" justify="space-around" >
        <Heading textTransform="uppercase">
          {DashContext.brandName}'s Portfolio
        </Heading>
        <Select placeholder="Choose Brand" variant="filled" width="30%" >
          {retailerBrandslist.map((brand) => {
            return (
              <option value={brand.email}>{brand.email}</option>
              // TODO: On select to trigger swapping brands
            )
          })}
          {/* <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option> */}
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
            <YourStock retailID = {DashContext.email} type = {DashContext.role} brandID = {DashContext.brandEmail} tabIndex = {tabIndex}/>
          </TabPanel>
          <TabPanel>
            <InStock retailID = {DashContext.email} type = {"brand"} brandID = {DashContext.brandEmail} tabIndex = {tabIndex}/>
          </TabPanel>
          <TabPanel>
            <ToOrder retailID = {DashContext.email} type = {"brand"} brandID = {DashContext.brandEmail} tabIndex = {tabIndex}/>
          </TabPanel>
          <TabPanel>
            <AddProduct retailID = {DashContext.email} type = {DashContext.role} brandID = {DashContext.brandEmail} tabIndex = {tabIndex}/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default RetailDash;
