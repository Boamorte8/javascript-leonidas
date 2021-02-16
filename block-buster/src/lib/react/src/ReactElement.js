import { render } from '../../react-dom.js'

function renderChildren(children, container) {
  if (Array.isArray(children)) {
    return children.forEach((child) => render(child, container));
  }
  return render(children, container);
}

function setEvents(element, event, callback) {
  return element.addEventListener(event, callback)
}

function setProperties(prop, value, element) {
  if (prop.startsWith('on')) {
    const event = prop.replace('on', '').toLowerCase()
    return setEvents(element, event, value)
  }

  if(prop === 'children') {
    return renderChildren(value, element)
  }

  const attribute = value;
  return element.setAttribute(prop, attribute);
}

export function createElement(type, props, content) {
  const element = document.createElement(type);
  if (content) {
    element.textContent = content;
  }

  if (props) {
    Object.keys(props).forEach(prop => setProperties(prop, props[prop], element));
  }

  return element;
}