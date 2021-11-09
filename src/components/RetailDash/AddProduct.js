import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { AddProductToRetail } from "../../sockets/emits";
import Status from "../Status";

const AddProduct = (props) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(true);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const addProduct = () => {
    // All product IDs are ints
    try {
      let intID = parseInt(value);
      AddProductToRetail({
        productID: intID,
        brandID: props.brandID,
        retailerID: props.retailID,
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
        placeholder="Enter Product ID here"
        value={value}
        onChange={(event) => handleChange(event)}
      />{" "}
      &nbsp;&nbsp;
      <Button
        variant="outline"
        colorScheme="black"
        onClick={() => addProduct()}
      >
        Add Product
      </Button>
      {error === null ? "" : <Status values={value} status={status} />}
    </div>
  );
};

export default AddProduct;
