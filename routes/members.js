const express = require("express");

const Prisma = require("@prisma/client");

const { PrismaClient } = Prisma;

const prisma = new PrismaClient();

const memberRoute = express.Router();

memberRoute.post("/members", async (req, res) => {
  const data = req.body;
  try {
    const result = await prisma.collaborator.create({
      data: data,
    });
    res.status(201).send({ status: "ok", user: user });
  } catch (error) {
    res.status(404).send({ status: "failed" });
  }
});

memberRoute.get("/members", async (req, res) => {
  const { roomid, user } = req.body;
  try {
    const result = await prisma.collaborator.findFirst({
      where: {
        roomid: roomid,
        user: user,
      },
    });
    res.status(200).send({
      status: "ok",
      user: user,
    });
  } catch (err) {
    res.status(404).send({
      status: "failed",
    });
  }
});

module.exports = { memberRoute };
