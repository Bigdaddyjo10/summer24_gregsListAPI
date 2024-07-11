import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CarSchema } from '../models/Car.js';
import { HousesSchema } from '../models/Houses.js';

class DbContext {

  Cars = mongoose.model('Car', CarSchema)
  Houses = mongoose.model('Houses', HousesSchema)
  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
