import express, { Request, Response } from "express";
const { List } = require("../models/list");
const router = express.Router();

router.delete("/", async (req: Request, res: Response) => {
  try {
    const count = await List.countDocuments();
    if (count === 0) {
      return res.status(400).json({ message: "No Data" });
    }

    await List.deleteMany({});
    res.json({ message: "Data reset successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
