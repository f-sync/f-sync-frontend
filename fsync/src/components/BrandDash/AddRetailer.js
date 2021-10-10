import { Input, Button } from "@chakra-ui/react"
import React, { useState } from "react";
import {AddRetailer} from '../../sockets/emits'

const AddRetail = (props) => {
    const [value, setValue] = useState("");
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    const addRetail = () => {
    // Payload:
        // retailID : email of Retailer
        // brandID : email of brand
        let retailID = value;
        AddRetailer({
            retailID: retailID,
            brandID: props.brandID,
        })
    }
    return (
        <div>
            <Input
            width="20%"
            variant="outline"
            placeholder="Enter Retailer ID" //Email for now
            value={value}
            onChange={handleChange}
            /> &nbsp;&nbsp;
            <Button
            variant="outline"
            colorScheme="black"
            onClick={addRetail}
            >
                Add Retailer
            </Button>
        </div>
    )
}

export default AddRetail