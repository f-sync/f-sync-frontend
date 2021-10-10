
import { useHistory} from "react-router-dom";
import {useState, useContext} from 'react';
import {GetAllBrands, GetStock, AddRetailer, CreateNewCompany, AddProductToRetail, CreateNewProduct, ModifyQuantity, GetValidRetail} from '../sockets/emits'
import SocketContext from '../utilities/SocketContext'


function Home() {
    let history = useHistory();
    const { retailerBrandslist, inventory } = useContext(SocketContext)

  

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

        
    
    return (
        <div className="App page_container">
            <h1 className="page_title">F-sync</h1>
            <p className="title_description">Fashion-as-a-service</p>

            <p className="main_text" style={{marginBottom: "5%"}}>You provide the stock, we handle the reset.</p>
           {/* Sign up button here */}
            <button className="main_btn" onClick = {()=>history.push("/SignUp") }>Sign Up</button>
            {/* <div>
                {inventory.map((product) => (
                    <div>{product.name}</div>
                ))}
            </div> */}
        </div>
    );
}

export default Home
