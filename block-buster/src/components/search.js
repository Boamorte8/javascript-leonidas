import { Component } from '../lib/react/index.js';
import Form from './form.js';
import Input from './input.js';
import Button from './button.js';
import store from '../state/store.js';
import { SEARCH_MOVIE, SET_FILTER } from '../state/actions/index.js';

class Search extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const query = formData.get('title');
    if (query) {
      return store.dispatch({
        type: SEARCH_MOVIE,
        payload: query
      })
    }
    return store.dispatch({
      type: SET_FILTER,
      payload: 'all',
    })
  }

  render() {
    return new Form({
      onSubmit: this.handleSubmit,
      children: [
        new Input({
          placeholder: 'Write your favorite movie',
          name: 'title',
          type: 'text',
        }),
        new Button(null, 'Search'),
      ],
    });
  }
}

export default Search;
