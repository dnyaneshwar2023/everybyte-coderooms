const express = require("express");
const Prisma = require("@prisma/client");
const sendInvitation = require("../mailer/mailer");
const { PrismaClient } = Prisma;

const prisma = new PrismaClient();

const memberRoute = express.Router();

memberRoute.post("/add", async (req, res) => {
  const { roomid, recipient, user, roomname } = req.body;

  try {
    const result = await prisma.collaborator.create({
      data: {
        roomid: roomid,
        user: recipient,
      },
    });
    await sendInvitation(roomid, roomname, recipient, user);
    res.status(201).send({ status: "ok" });
  } catch (error) {
    res.status(404).send({ status: "failed" });
  }
});

memberRoute.get("/auth", async (req, res) => {
  const { roomid, user } = req.query;
  try {
    const result = await prisma.collaborator.findFirst({
      where: {
        roomid: roomid,
        user: user,
      },
    });

    if (result == null) {
      res.status(404).send({
        status: "failed",
      });
    } else {
      res.status(200).send({
        status: "ok",
        user: user,
      });
    }
  } catch (err) {
    res.status(404).send({
      status: "failed",
    });
  }
});

module.exports = { memberRoute };
