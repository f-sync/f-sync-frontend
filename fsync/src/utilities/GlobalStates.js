import { createContext } from "react";

/* Global state objects:

user = username                  name of person logged in
role = "brand"/"retail"          role of person logged in
email = "jane.doe@hotmail.com"   Email of person logged in
brandEmail = "brand@gmail.com"   Email of the brand "focused"
brandName = "Cool Brand"         Name of the brand

*/
const GlobalStates = createContext(null)

export default GlobalStates