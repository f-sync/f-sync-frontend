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
import React from "react";
import { FcFeedback } from "react-icons/fc";

const InStock = () => {
  const header = [
    "Item Name",
    "ID",
    "Size",
    "Color",
    "Location Available",
    "Action",
  ];
  const data = [
    {
      "Item Name": "Daggy",
      ID: 22,
      Size: "md",
      Color: "black",
      "Location Available": "Singapore",
    },
    {
      "Item Name": "Daggy",
      ID: 22,
      Size: "md",
      Color: "black",
      "Location Available": "Singapore",
    },
    {
      "Item Name": "Daggy",
      ID: 22,
      Size: "md",
      Color: "black",
      "Location Available": "Singapore",
    },
    {
      "Item Name": "Daggy",
      ID: 22,
      Size: "md",
      Color: "black",
      "Location Available": "Singapore",
    },
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
          {data.map((token, tid) => {
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
