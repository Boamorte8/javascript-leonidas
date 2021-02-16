import  { API_KEY } from './constants.js';

class API {
  baseAPI = 'https://api.themoviedb.org/3/'

  constructor(API_KEY) {
    this.API_KEY = API_KEY;
  }

  get discoverMovies() {
    return `${this.baseAPI}discover/movie?api_key=${this.API_KEY}`
  }

  async moviePage(page) {
    const response = await fetch(`${this.discoverMovies}&page=${page}`);
    const data = await response.json();
    return data;
  }
}

export default new API(API_KEY);
