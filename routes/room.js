const express = require("express");

const Prisma = require("@prisma/client");

const { PrismaClient } = Prisma;

const prisma = new PrismaClient();

const roomRoute = express.Router();

roomRoute.get("/data", async (req, res) => {
  const { roomid } = req.query;

  try {
    const result = await prisma.rooms.findFirst({
      where: {
        roomid: roomid,
      },
      select: {
        value: true,
      },
    });

    res.status(200).send({ status: "ok", data: result.value });
  } catch (error) {
    res.status(404).send({ status: "failed", message: "room not found" });
  }
});

roomRoute.get("/list", async (req, res) => {
  const { user } = req.query;

  try {
    const result = await prisma.rooms.findMany({
      where: {
        owner: user,
      },
      select: {
        roomid: true,
        title: true,
        date: true,
      },
    });
    res.status(200).send({ status: "ok", data: result });
  } catch (error) {
    res.status(404).send({ status: "failed", message: "Not found" });
  }
});

roomRoute.post("/create", async (req, res) => {
  const data = req.body;
  var date = new Date();
  date = date.toLocaleString();
  data.date = date.toString();

  try {
    const result = await prisma.rooms.create({
      data: data,
    });

    const author = await prisma.collaborator.create({
      data: {
        roomid: data.roomid,
        user: data.owner,
      },
    });

    res.status(201).send({
      status: "ok",
      message: "Room created successfully",
    });
  } catch (error) {
    res.status(400).send({
      status: "failed",
      message: "Room creation failed",
    });
  }
});

roomRoute.post("/update", async (req, res) => {
  const { roomid, value } = req.body;

  try {
    const result = await prisma.rooms.update({
      where: {
        roomid: roomid,
      },
      data: {
        value: value,
      },
    });

    res.send({ status: "ok" });
  } catch (error) {
    res.status(400).send({
      status: "failed",
      message: "Cannot update code value",
    });
  }
});

roomRoute.delete("/delete", async (req, res) => {
  const { roomid } = req.body;
  try {
    const result = await prisma.rooms.deleteMany({
      where: {
        roomid: roomid,
      },
    });
    res.status(200).send({
      status: "ok",
    });
  } catch (error) {
    res.status(404).send({
      status: "failed",
    });
  }
});

module.exports = { roomRoute };
