import axios from "axios";

const host = "http://localhost:5000";

const getRoomValue = (roomid, user) => {
  return axios.get(host + "/room/data", { params: { roomid, user } });
};

const createRoom = (title, roomid, user) => {
  return axios.post("/room/create", { title, roomid, owner: user });
};

const saveCode = (roomid, value) => {
  return axios.post("/room/update", { roomid, value });
};

const addMember = (roomid, roomname, recipient, user) => {
  return axios.post("http://localhost:5000/member/add", {
    roomid,
    roomname,
    recipient,
    user,
  });
};

const authMember = (roomid, user) => {
  return axios.get("http://localhost:5000/member/auth", {
    params: { roomid, user },
  });
};

const deleteRoom = (roomid) => {
  return axios.delete("/room/delete", { data: { roomid } });
};

const getAllRooms = (user) => {
  return axios.get("/room/list", { params: { user } });
};

export default {
  getAllRooms,
  getRoomValue,
  createRoom,
  saveCode,
  addMember,
  deleteRoom,
  authMember,
};
