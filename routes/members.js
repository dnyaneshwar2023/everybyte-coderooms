const express = require("express");

const Prisma = require("@prisma/client");

const { PrismaClient } = Prisma;

const prisma = new PrismaClient();

const memberRoute = express.Router();

memberRoute.post("/add", async (req, res) => {
  const data = req.body;

  try {
    const result = await prisma.collaborator.create({
      data: data,
    });
    console.log(result);
    res.status(201).send({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.status(404).send({ status: "failed" });
  }
});

memberRoute.get("/auth", async (req, res) => {
  const { roomid, user } = req.params;
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
