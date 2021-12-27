const express = require("express");
const cors = require("cors");
const socket = require("socket.io");
const path = require("path");
const cookieParser = require("cookie-parser");
const redisAdapter = require("socket.io-redis");
const { OAuth2Client } = require("google-auth-library");

const app = express();
const CLIENT_ID =
  "703956863946-em6dt95q7vcjrock2qbkvafa6ge057kq.apps.googleusercontent.com";

const client = new OAuth2Client(CLIENT_ID);

// middlewares

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

const port = process.env.PORT || 5000;

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const server = app.listen(port, () => {
  console.log(`connected at port ${port}`);
});

app.post("/login", async (req, res) => {
  const id_token = req.cookies.authtoken;
  try {
    const status = await client.verifyIdToken({
      idToken: id_token,
      audience: CLIENT_ID,
    });

    res.send({ status: "success" });
  } catch (error) {
    res.send({ status: "failed" });
  }
});

const io = socket(server, {
  cors: true,
});

io.adapter(
  redisAdapter({ host: process.env.REDIS_HOST || "127.0.0.1", port: 6379 })
);

io.on("connection", (client) => {
  console.log("User Joined");
  client.on("join", (roomid) => {
    client.join(roomid);
  });

  client.on("codeChange", (e) => {
    client.broadcast.to(e.roomid).emit("codeChange", e.data);
  });

  client.on("changeLanguage", (e) => {
    client.broadcast.to(e.roomid).emit("changeLanguage", e.data);
  });

  client.on("changeInput", (e) => {
    client.broadcast.to(e.roomid).emit("changeInput", e.data);
  });
  client.on("changeOutput", (e) => {
    client.broadcast.to(e.roomid).emit("changeOutput", e.data);
  });
});
