const express = require("express");
const router = express.Router();

const userRoutes = require("./user.route");
const roomRoutes = require("./room.route");

router.use(userRoutes);
router.use(roomRoutes);

module.exports = router;


