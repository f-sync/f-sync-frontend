import { socketEvents } from "./events";
import io from "socket.io-client";
import { TestEmission } from "./emits";

const ENDPOINT = "http://localhost:5000";
export const socket = io(ENDPOINT, {
  auth: {
    token: "JWT token"
  }
});

const initSockets = ({ setValue }) => {
  socketEvents({ setValue });
  TestEmission();
};

export default initSockets;
