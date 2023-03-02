import csv from "csv-parser";
import fs from "fs";
const mongoose = require("mongoose");
const config = require("config");
const { List } = require("./models/list");

const seed = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(config.get("db"));

    // Check if data already exists in the database
    const count = await List.countDocuments();
    if (count > 0) {
      console.log("Data already seeded");
      process.exit(0);
    }

    // Read and parse CSV file
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
        console.log("Data seeded successfully");
        process.exit(0);
      });
  } catch (error) {
    console.error(`Error seeding data: ${error}`);
    process.exit(1);
  }
};

seed();
