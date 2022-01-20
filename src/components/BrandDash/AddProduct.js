import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { CreateNewProduct } from "../../sockets/emits";
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
    // Payload:
    // name : name of product
    // brandID : email of brand
    try {
      CreateNewProduct({
        name: value,
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
        placeholder="Enter Product Name"
        value={value}
        onChange={(event) => handleChange(event)}
      />{" "}
      <Button
        variant="outline"
        colorScheme="black"
        onClick={() => addProduct()}
      >
        Create Product
      </Button>
      {error === null ? "" : <Status values={value} status={status} />}
    </div>
  );
};

export default AddProduct;
