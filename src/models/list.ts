import { model, Schema, Document } from "mongoose";

export interface IMovie extends Document {
  show_id: string;
  type: string;
  title: string;
  director: string;
  cast: string;
  country: string;
  date_added: Date;
  release_year: number;
  rating: string;
  duration: string;
  listed_in: string;
  description: string;
}

const listSchema = new Schema({
  show_id: { type: String, required: true },
  type: { type: String, required: true },
  title: { type: String, required: true },
  director: { type: String },
  cast: { type: String },
  country: { type: String },
  date_added: { type: Date },
  release_year: { type: Number },
  rating: { type: String },
  duration: { type: String },
  listed_in: { type: String },
  description: { type: String },
});

const List: any = model<IMovie>("List", listSchema);
exports.List = List;
