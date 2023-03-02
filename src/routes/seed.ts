import express, { Request, Response } from "express";
import csv from "csv-parser";
import fs from "fs";
const { List } = require("../models/list");
const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    // Check if data already exists in the database
    const count = await List.countDocuments();
    if (count > 0) {
      return res.status(400).json({ message: "Data already seeded" });
    }

    const movies: any = [];
    fs.createReadStream("netflix_titles.csv")
      .pipe(csv())
      .on("data", (row) => {
        const movie = new List({
          show_id: row.show_id,
          type: row.type,
          title: row.title,
          director: row.director,
          cast: row.cast,
          country: row.country,
          date_added: row.date_added,
          release_year: row.release_year,
          rating: row.rating,
          duration: row.duration,
          listed_in: row.listed_in,
          description: row.description,
        });
        movies.push(movie);
      })
      .on("end", async () => {
        // Save data to MongoDB
        await List.insertMany(movies);
        res.json({ message: "Data seeded successfully" });
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
