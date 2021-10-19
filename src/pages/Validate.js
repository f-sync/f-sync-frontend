import { useEffect, useContext, useState } from "react";
import { useLocation, useHistory } from "react-router";
import GlobalStates from "../utilities/GlobalStates";

const Validate = () => {
    // Token state contains token from URL...same thing as ID
  const [Token, setToken] = useState(null);
  const [ID, setID] = useState(null);

//   http://localhost:3000/auth?token=66da3fb5e5bddb8e35d38cadba51500efc869e099fd961887a55285a3a46e52f51e8c13a51d7444eefba038dae916e01a14969be9dbee187dd52745973235aa9&id=610078daf45926fe5e394205484e36aa784ce851e27a6ed25e87dac8083160c3eae88b3c6f8fe6ec604f8953458c2bbbd3bb3dd461156548c662817125417e57kp
  const GlobalContext = useContext(GlobalStates);
  let location = useLocation();
//   let history = useHistory();

  useEffect(() => {
    let query = new URLSearchParams(location.search);
    setToken(query.get("token"));
    setID(query.get("id"));
  }, []);

  useEffect(() => {
    //   redirect to dash
    // history.push(`/dashboard/${GlobalContext.role}`);
    console.log("User Has been validated")

  }, [Token, GlobalContext])


  return (
    <div>
      <p>Validating...</p>
    </div>
  );
};

export default Validate;
