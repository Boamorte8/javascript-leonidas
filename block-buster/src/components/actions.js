import { Component, createElement } from '../lib/react/index.js';
import WrapperStyled from "./wrapper.js";

class Actions extends Component {
  render() {
    const { children } = this.props;
    return new WrapperStyled({
      children: createElement('div', {
        class: 'actions',
        children,
      }),
    });
  }
}

export default Actions;
