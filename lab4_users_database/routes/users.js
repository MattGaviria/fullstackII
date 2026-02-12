const express = require("express");
const router = express.Router();
const User = require("../models/User");

// POST http://localhost:8081/users
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json({
      ok: true,
      message: "User created",
      data: user,
    });
  } catch (err) {
    
    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ ok: false, type: "ValidationError", errors });
    }

    
    if (err.code === 11000) {
      return res.status(409).json({
        ok: false,
        type: "DuplicateKey",
        errors: ["email must be unique"],
      });
    }

    return res.status(500).json({
      ok: false,
      type: "ServerError",
      errors: [err.message],
    });
  }
});

module.exports = router;
