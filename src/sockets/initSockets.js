import { socketEvents } from "./events";
import io from "socket.io-client";
import { TestEmission } from "./emits";

const JWT = JSON.parse(sessionStorage.getItem("jwt"));

const ENDPOINT = process.env.REACT_APP_BACKEND_URl;
export const socket = io(ENDPOINT, {
  auth: {
    token: JWT,
  },
});

const initSockets = ({ setValue }) => {
  socketEvents({ setValue });
  TestEmission();
};

export default initSockets;
