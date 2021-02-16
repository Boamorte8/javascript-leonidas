import { Component, createElement } from '../lib/react/index.js';

class Movie extends Component {
  render() {
    const { poster_path, title, id, vote_average  } = this.props;
    return createElement('article', {
      class: `movie ${vote_average >= 7 ? 'recommended' : ''}`,
      children: [
        createElement('img', {
          src: `//image.tmdb.org/t/p/w220_and_h330_face${poster_path}`,
          class: 'movie-poster',
        }),
        createElement('p', {
          class: 'movie-title',
        }, title),
        createElement('p', {
          class: 'movie-poster',
        }, id),
        createElement('span', {
          class: 'movie-rate',
        }, vote_average),
      ]
    })
  }
}

export default Movie;

{/* <article class="movie recommended">
  <img class="movie-poster" src="//image.tmdb.org/t/p/w220_and_h330_face/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg" alt="">
  <p class="movie-title">Duro de matar</p>
  <p class="movie-id">123456</p>
  <span class="movie-rate">10</span>
</article>  */}
