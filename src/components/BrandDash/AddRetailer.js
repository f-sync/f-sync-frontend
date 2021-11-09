import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { AddRetailer } from "../../sockets/emits";
import Status from "../Status";

const AddRetail = (props) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(true);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const addRetail = () => {
    // Payload:
    // retailID : email of Retailer
    // brandID : email of brand
    try {
      AddRetailer({
        retailID: value,
        brandID: props.brandID,
      });
      setStatus(true);
      setError("");
    } catch (error) {
      setStatus(false);
      setError(error.message);
      console.error(error.message);
    }
  };
  return (
    <div>
      <Input
        width="20%"
        variant="outline"
        placeholder="Enter Retailer ID" //Email for now
        value={value}
        onChange={(event) => handleChange(event)}
      />{" "}
      &nbsp;&nbsp;
      <Button variant="outline" colorScheme="black" onClick={() => addRetail()}>
        Add Retailer
      </Button>
      {error === null ? "" : <Status values={value} status={status} />}
    </div>
  );
};

export default AddRetail;
