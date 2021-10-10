
import { useHistory} from "react-router-dom";
// import { Text } from "@chakra-ui/react"


function Home() {
    let history = useHistory();
    
    return (
        <div className="App page_container">
            <h1 className="page_title">F-sync</h1>
            <p className="title_description">Fashion-as-a-service</p>

            <p className="main_text" style={{marginBottom: "5%"}}>You provide the stock, we handle the reset.</p>
           {/* Sign up button here */}
            <button className="main_btn" onClick = {()=>history.push("/SignUp") }>Sign Up</button>
        </div>
    );
}

export default Home
