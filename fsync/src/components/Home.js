
import React, {useState} from 'react';
import NavBar from "./NavBar";
// import { extendTheme } from "@chakra-ui/react"
// import { Text } from "@chakra-ui/react"


function Home() {
    const [email, setEmail] = useState("");

    function saveEmail(emailValue) {
        setEmail(emailValue);
    }
    
    return (
        <div className="App page_container">
            <NavBar />
            <h1 className="page_title">F-sync</h1>
            <p className="title_description">Fashion-as-a-service</p>

            <p className="main_text">You provide the stock, we handle the reset.</p>
            <input id="email_input" type="text" placeholder="Your email" />
            <button className="main_btn" onClick = {()=>{saveEmail(document.querySelector("#email_input").value)}}>Speak to our team</button>
        </div>
    );
}

export default Home
