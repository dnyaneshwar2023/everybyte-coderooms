const express = require("express");

const Prisma = require("@prisma/client");

const { PrismaClient } = Prisma;

const prisma = new PrismaClient();

const roomRoute = express.Router();

roomRoute.get("/data", async (req, res) => {
  const { roomid } = req.body;

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
    res.status(404).send({ status: "failed" });
  }
});

roomRoute.post("/create", async (req, res) => {
  try {
    const data = req.body;
    const result = await prisma.rooms.create({
      data: data,
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

module.exports = { roomRoute };
