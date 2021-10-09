import { socket } from "./app.js" // Possibly fix this import later, check events.js also

export const socketEvents = ({ setValue }) => {
    // I'll learn createContext and make these contexts later, probably?

    socket.on("yourBrands", (brandList) => {
        // This event gives the client a list of brand objects with the attributes:
            // name : name of the brand
            // email : email of the brand (to be used as the unique ID in the database)

        // idk what I'm doing, here's something that was on that socket website
        // setValue(state => {return {...state, stateBrandlist } });
    });

    socket.on("updateStock", (productList) => {
        // This event gives the client a list of product objects for the use in the table.
        // Array of objects with attributes:
            // name
            // id
            // quantity

        // setValue(state => {return {...state, stateStocklist} })
    });

    socket.on("yourRetailers", (retailerList) => {
        // This event gives the client a list of retailers that carry one specific product
        // Array of objects with attributes:
            // name : retailer name,
            // email : retailer email (to serve as the unique ID for the retailer)
            // quantity : specific product quantity
        
        // setValue(state => {return {...state, stateStocklist} })
    })

}