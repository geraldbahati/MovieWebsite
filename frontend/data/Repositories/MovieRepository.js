class MovieRepository {
    async getMoviesFromDatabase() {
      try {
        const response = await fetch('https://example.com/movies');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    }
  }