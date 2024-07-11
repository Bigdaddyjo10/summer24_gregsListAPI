import { dbContext } from "../db/DbContext.js"

class HousesService {
  getAllHouses() {
    const houses = dbContext.Houses.find()
  }
}

export const housesService = new HousesService()
