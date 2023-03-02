import express, { Request, Response } from "express";
const { List } = require("../models/list");
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const { type, search, rating, from, to, sort, order } = req.query;
    const filters: any = {};

    console.log(req.query);

    if (type) filters.type = type;

    if (search) {
      filters.$or = [
        { title: { $regex: search, $options: "i" } },
        { director: { $regex: search, $options: "i" } },
        { cast: { $regex: search, $options: "i" } },
      ];
    }

    if (rating) filters.rating = rating;

    if (from || to) {
      filters.release_year = {};
      if (from) filters.release_year.$gte = parseInt(from.toString());
      if (to) filters.release_year.$lte = parseInt(to.toString());
    }

    const sortOptions: any = {};
    var orderValue: number = -1;

    if (order == "asc") orderValue = 1;
    if (sort == "release_year") sortOptions.release_year = orderValue;
    if (sort == "date_added") sortOptions.date_added = orderValue;

    console.log(filters);
    console.log(sortOptions);

    const movies = await List.find(filters).sort(sortOptions);

    res.json(movies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
