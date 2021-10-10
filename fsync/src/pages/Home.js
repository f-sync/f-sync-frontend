
import {useState, useContext} from 'react';
import {GetAllBrands, GetStock, AddRetailer, CreateNewCompany, AddProductToRetail, CreateNewProduct, ModifyQuantity, GetValidRetail} from '../sockets/emits'
import SocketContext from '../utilities/SocketContext'
// import { extendTheme } from "@chakra-ui/react"
// import { Text } from "@chakra-ui/react"


function Home() {
    const [email, setEmail] = useState("");
    const { retailerBrandslist, inventory } = useContext(SocketContext)

    function saveEmail(emailValue) {
        setEmail(emailValue);

        // GetAllBrands(email);
        // let Stockpayload = {
        //     retailID: email,
        //     brandID: "brand@gmail.com",
        //     type: "retail"
        // }
        // GetStock(Stockpayload)

        // let retailerPayload = {
        //     retailID: email,
        //     brandID: "brand@gmail.com"
        // }
        // AddRetailer(retailerPayload)

        // let newCompanypayload = {
        //     email: emailValue, //email of the new company
        //     name: "Dylan Test Brand",
        //     phoneNumber: "(555) 555-5555",
        //     address: "1234 Generic Street, City, State, Zip",
        //     type: "retail"
        // }
        // CreateNewCompany(newCompanypayload)

        // let newProductRetailPayload = {
        //     productID: 3277,
        //     brandID: "brand@gmail.com",
        //     retailerID: "dylanvu9@gmail.com"
        // }
        // AddProductToRetail(newProductRetailPayload);

        // let newProductbrandPayload = {
        //     name: "HackHarvard Pants",
        //     brandID: "brand@gmail.com"
        // }
        // CreateNewProduct(newProductbrandPayload)

        // let ProductQuantityPayload = {
        //     productID: 3277,
        //     brandID: "brand@gmail.com",
        //     email: "dylanvu9@gmail.com",
        //     newQuantity: 10
        // }
        // ModifyQuantity(ProductQuantityPayload)

        
    }
    
    return (
        <div className="App page_container">
            <h1 className="page_title">F-sync</h1>
            <p className="title_description">Fashion-as-a-service</p>

            <p className="main_text">You provide the stock, we handle the reset.</p>
            <input id="email_input" type="text" placeholder="Your email" />
            <button className="main_btn" onClick = {()=>{saveEmail(document.querySelector("#email_input").value);}}>Speak to our team</button>
            <div>
                {inventory.map((product) => (
                    <div>{product.name}</div>
                ))}
            </div>
        </div>
    );
}

export default Home
