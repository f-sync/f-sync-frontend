import { socketEvents } from "./events";
import io from "socket.io-client";
import { TestEmission } from "./emits";

const JWT = sessionStorage.getItem("jwt");

const ENDPOINT = "https://f-sync-backend.dulanvee.repl.co";
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
