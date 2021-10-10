import {
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { GetStock } from '../../sockets/emits'
import SocketContext from '../../utilities/SocketContext'
import GenerateFakeInventory from "../../utilities/FakeInventory";
import { FcFeedback } from "react-icons/fc";

const InStock = (props) => {
  const { inventory } = useContext(SocketContext);
  const [currentInventory, setCurrentInventory] = useState([])

  useEffect(() => {
      // Payload:
      // retailID: email of retailer
      // brandID: email of brand
      // type: "retail" or "brand"
      
      // Ask the backend for the current retailer's inventory
      // MAKE THIS RERUN EVERY TIME YOU GO BACK TO THIS IN STOCK VIEW?
      let payload = {
        retailID: props.retailID,
        brandID: props.brandID,
        type: props.type
      }
      // Get the inventory of the current retailer
      GetStock(payload);
      console.log("useEffect")
  },[])

  useEffect(() => {
    console.log(inventory)
    setStock(inventory);
  },[inventory])

  function setStock(inventory) {
    let fakeInventory = GenerateFakeInventory(inventory, false);
    setCurrentInventory(fakeInventory);
    // console.log(currentInventory)
  }

  const header = [
    "Item Name",
    "ID",
    "Size",
    "Color",
    "Location Available",
    "Action",
  ];
  
  return (
    <Flex w="full" p={50} alignItems="center" justifyContent="center">
      <Table
        w="full"
        display={{
          base: "block",
          md: "table",
        }}
        sx={{
          "@media print": {
            display: "table",
          },
        }}
      >
        <Thead
          display={{
            base: "none",
            md: "table-header-group",
          }}
          sx={{
            "@media print": {
              display: "table-header-group",
            },
          }}
        >
          <Tr>
            {header.map((x) => (
              <Th key={x}>{x}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody
          display={{
            base: "block",
            lg: "table-row-group",
          }}
          sx={{
            "@media print": {
              display: "table-row-group",
            },
          }}
        >
          {currentInventory.map((token, tid) => {
            return (
              <Tr
                key={tid}
                display={{
                  base: "grid",
                  md: "table-row",
                }}
                sx={{
                  "@media print": {
                    display: "table-row",
                  },
                  gridTemplateColumns: "minmax(0px, 35%) minmax(0px, 65%)",
                  gridGap: "10px",
                }}
              >
                {Object.keys(token).map((x) => {
                  return (
                    <React.Fragment key={`${tid}${x}`}>
                      <Td
                        display={{
                          base: "table-cell",
                          md: "none",
                        }}
                        sx={{
                          "@media print": {
                            display: "none",
                          },
                          textTransform: "uppercase",
                          color: "black",
                          fontSize: "xs",
                          fontWeight: "bold",
                          letterSpacing: "wider",
                          fontFamily: "heading",
                        }}
                      >
                        {x}
                      </Td>
                      <Td color="black" fontSize="md" fontWeight="hairline">
                        {token[x]}
                      </Td>
                    </React.Fragment>
                  );
                })}
                <Td
                  display={{
                    base: "table-cell",
                    md: "none",
                  }}
                  sx={{
                    "@media print": {
                      display: "none",
                    },
                    textTransform: "uppercase",
                    color: "black",
                    fontSize: "xs",
                    fontWeight: "bold",
                    letterSpacing: "wider",
                    fontFamily: "heading",
                  }}
                >
                  Action
                </Td>
                <Td>
                  <Button
                    variant="solid"
                    colorScheme="blackAlpha"
                    bg="black"
                    size="sm"
                    spacing={3}
                    leftIcon={<FcFeedback />}
                  >
                    Request
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Flex>
  );
};

export default InStock;
