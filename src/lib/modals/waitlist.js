import { Schema, model, models } from "mongoose";

const WaitlistSchema = new Schema({
  name: { type: String, required: true },
  goal: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  heard_from: { type: String },
  consent: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Waitlist = models.Waitlist || model("Waitlist", WaitlistSchema);

export default Waitlist;
