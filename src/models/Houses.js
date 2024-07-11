import { Schema } from "mongoose";

export const HousesSchema = new Schema({
  bedrooms: { type: Number, min: 0, max: 30, required: true, default: 1 },
  bathrooms: { type: Number, min: 0, max: 25, required: true, default: 1 },
  levels: { type: Number, min: 1, max: 4, required: true, default: 1 },
  price: { type: Number, min: 0, max: 10000000, required: true, default: 0 },
  imgUrl: { type: String, min: 0, max: 1000000, required: true, default: 'https://static.wikia.nocookie.net/disney/images/1/10/Profile_-_Lightning_McQueen.png' },
  description: { type: String, min: 0, max: 500, required: true, default: 'Its a nice place' },
  year: { type: Number, min: 1000, max: 2024, required: true, default: 2024 },
  creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' }
})
