import SocketContext from "../utilities/SocketContext";
import { useState, useEffect } from "react";
import initSockets from "./initSockets";

const SocketProvider = ({ children }) => {
  const [value, setValue] = useState({
    retailerBrandslist: [],
    inventory: []
  });

  useEffect(() => {
    initSockets({ setValue });
  }, [initSockets]);

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};

export default SocketProvider;
