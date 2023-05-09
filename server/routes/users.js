/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/usersControllers");
const path = require("path");

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.delete("/:id", deleteUser)
router.put("/:id", updateUser)

module.exports = router;
