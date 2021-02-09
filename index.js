/*
React;
ReactDOM;
 */

class Heading extends React.Component {
  render() {
    return React.createElement('h1', { title: 'hi' }, 'Hello react');
  }
}

const reactElement = React.createElement(Heading);

ReactDOM.render(reactElement, document.getElementById('root'));
