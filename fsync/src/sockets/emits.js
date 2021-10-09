import { socket } from "./app.js" // Possibly fix this import later, check events.js also

export const ModifyQuantity = (payload) => {
    // This emit is to change the quantity of a specific product
    // Payload object:
        // productID : id of product to modify
        // brandID : email of brand
        // email: retailer email
        // newQuantity: new quantity
    socket.emit("updateQuantity", payload);
}

export const GetAllBrands = (payload) => {
    // This emit is the show all the brands that a retailer is affiliated with
    // Payload:
        // Just retailer ID, no object
    socket.emit("GetAllbrands", payload)
}

export const CreateNewProduct = (payload) => {
    // This emit is to create a new product for a brand
    // Payload:
        // name : name of product
        // brandID : email of brand
    socket.emit("createNewproduct", payload);
}

export const GetStock = (payload) => {
    // This emit is to view the stock of a retailer or a brand
    // Payload:
        // retailID: email of retailer
        // brandID: email of brand
        // type: "retail" or "brand"
    socket.emit("getStock", payload);
}

export const GetValidRetail = (payload) => {
    // This emit is to obtain the retailers selling a specific product
    // selfEmail: String
        // productID: Integer
        // brandID: String
        // Type: "retail" or "brand"
    socket.emit("getValidretail", payload);
}

export const CreateNewCompany = (payload) => {
    // This emit is to add a company (either brand or retailer) to our database of users
    // Payload attributes:
        // Email
        // Name
        // Phone number
        // Address
        // Type: Whether it's a brand or not, string?
    socket.emit("createNewcompany", payload);
}

export const AddProductToRetail = (payload) => {
    // This emit is to add a new product to a retailer's stock
    // Payload:
        // productID
        // brandID
        // retailerID
    socket.emit("addProductinRetail", payload);
}

export const RequestProduct = (payload) => {
    // This emit is to trigger the Twilio API to ask a company (brand or retailer) for a product
    // Payload:
        // productID : to identify the product
        // brandID : to identify the product
        // target : companyObject
            // id : email
            // type: "brand" or "retail", who is being asked?
        // asker : companyObject
            // id : email
            // type: "brand" or "retail", who is asking?
    socket.emit("requestProduct", payload);
}

export const TestEmission = () => {
    socket.emit("testEmit", "Hello backend!");
}