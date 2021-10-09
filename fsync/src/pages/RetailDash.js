import Subnav from "../components/Subnav";
import Dashboard from "../components/Dashboard";
import { Box } from "@chakra-ui/react";
import GlobalStates from "../utilities/GlobalStates";
import { useContext } from "react";

const RetailDash = () => {
  const DashContext = useContext(GlobalStates);

  return (
    <Box>
      <Subnav Title={DashContext.user} />
      <Dashboard Role={DashContext.role} />
    </Box>
  );
};

export default RetailDash;
