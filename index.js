/*
React;
ReactDOM;
 */

const reactElement = React.createElement(
  'h1',
  { title: 'Hello react', className: 'heading' },
  'Hello React.js'
);

ReactDOM.render(reactElement, document.getElementById('root'));
