import axios from "axios";

const getRoomValue = (roomid, user) => {
  return axios.get("/room/data", { roomid, user });
};

const createRoom = (title, roomid, user) => {
  return axios.post("/room/create", { title, roomid, user });
};

const saveCode = (roomid, value) => {
  return axios.post("room/update", { roomid, value });
};

export default { getRoomValue, createRoom, saveCode };
