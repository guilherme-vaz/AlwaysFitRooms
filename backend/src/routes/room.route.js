const express = require("express");
const RoomController = require("../controllers/RoomController");

const router = express.Router();

router.get("/room", RoomController.getAllRooms);
router.get("/room/:id", RoomController.getRoomById);

module.exports = router;
