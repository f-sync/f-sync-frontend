import { Input, Button } from "@chakra-ui/react"
import React, { useState } from "react";
import {CreateNewProduct} from '../../sockets/emits'

const AddProduct = (props) => {
    const [value, setValue] = useState("");
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    const addProduct = () => {
        // All product IDs are ints
        // Payload:
        // name : name of product
        // brandID : email of brand
        let productName = value;
        CreateNewProduct({
            name: productName,
            brandID: props.brandID,
        })
    }
    return (
        <div>
            <Input
            width="20%"
            variant="outline"
            placeholder="Enter Product Name"
            value={value}
            onChange={handleChange}
            /> &nbsp;&nbsp;
            <Button
            variant="outline"
            colorScheme="black"
            onClick={addProduct}
            >
                Create Product
            </Button>
        </div>
    )
}

export default AddProduct