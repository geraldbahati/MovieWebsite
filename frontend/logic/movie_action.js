import MovieRepository from "../data/Repositories/MovieRepository.js";

export default class MovieAction {
    constructor() {
      this.movieRepository = new MovieRepository();
    }
  
    async getMoviesFromApi() {
      try {
        const data = await this.movieRepository.getMoviesFromDatabase();

        const Convert = require("../models/movieModel.js");
        // Convert the data to a Movie object
        const movies = Convert.toMovie(data);
        return movies;

      } catch (error) {
        console.error(error);
      }
    }
  }
