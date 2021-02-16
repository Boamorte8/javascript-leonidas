import { Component, createElement } from '../lib/react/index.js'

class User extends Component {
  displayName = 'User'
  state = {
    age: this.props.age
  }

  componentDidMount() {
    console.log(`The component ${this.displayName} has been mounted`);
  }

  componentWillMount() {
    console.log('The component will be mounted by first time');
  }

  componentDidUpdate() {
    console.log('The component was updated');
  }

  // constructor(props) {
  //   super(props)
  //   this.handleClick = this.handleClick.bind(this)
  // }

  // handleClick(event) {
  //   console.log(this.props.name);
  // };

  handleClick = (event) => {
    this.setState({
      age: this.state.age + 1,
    })
  };

  render() {
    const { avatar, name } = this.props;
    const { age } = this.state;
    return createElement('div', {
      class: 'user',
      onClick: this.handleClick,
      children: [
        createElement('div', {
          class: 'avatar',
          children: createElement('img', {
            src: avatar,
            alt: '',
          }),
        }),
        createElement("h2", null, `Hello, I am ${name} and I am ${age} old!`),
      ],
    });
  }
}

export default User