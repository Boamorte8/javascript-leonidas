import { Component, createElement } from '../lib/react/index.js';
import Select from './select.js';
import store from '../state/store.js';
import {
  SET_FILTER,
} from '../state/actions/index.js';

class Filters extends Component {
  handleChange = (event) => {
    store.dispatch({
      type: SET_FILTER,
      payload: event.target.value,
    })
  }

  render() {
    return new Select({
      onChange: this.handleChange,
      children: [
        createElement('option', { value: 'all' }, 'All'),
        createElement('option', { value: 'mostValued' }, 'Most Valued'),
        createElement('option', { value: 'leastValued' }, 'Least Valued'),
      ],
    });
  }
}

export default Filters;
