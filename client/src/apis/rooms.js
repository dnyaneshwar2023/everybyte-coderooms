import axios from "axios";

const host = "http://localhost:5000";

const getRoomValue = (roomid, user) => {
  return axios.get(host + "/room/data", { roomid, user });
};

const createRoom = (title, roomid, user) => {
  return axios.post("/room/create", { title, roomid, owner: user });
};

const saveCode = (roomid, value) => {
  return axios.post("/room/update", { roomid, value });
};

const addMember = (roomid, user) => {
  return axios.post("http://localhost:5000/member/add", { roomid, user });
};

const authMember = (roomid, user) => {
  return axios.get("/member/auth", { params: { roomid, user } });
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
};
