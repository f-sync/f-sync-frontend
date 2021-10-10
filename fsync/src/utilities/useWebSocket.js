import { useEffect } from "react";

const useWebSocket = ({userID, enabled, onConnected}) => {
    useEffect(() => {
        const ENDPOINT = "http://localhost:5000"; // Point this to somewhere more official later
    
        // A mentor told me to do this since sometimes I would open multiple sockets, it was weird
        if (!enabled) {
          return;
        }

        const socket = io(ENDPOINT);
        console.log("Let Socket", socket)
      },[])

    return (
        <div>
            
        </div>
    )
}

export default useWebSocket
