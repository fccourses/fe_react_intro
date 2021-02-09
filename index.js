/*
React;
ReactDOM;
 */

class Heading extends React.Component {
  render() {
    const { titleForHeading, classNameForHeading, children } = this.props;
    console.log(this.props);
    return React.createElement(
      'h1',
      { title: titleForHeading, className: classNameForHeading },
      'Hello react',
      ...children
    );
  }
}

const reactElement = React.createElement(
  Heading,
  {
    titleForHeading: 'Goodbye',
    classNameForHeading: 'heading',
  },
  'str1',
  'str2',
  'str3',
  'str4'
);

const reactElement2 = React.createElement(
  Heading,
  {
    titleForHeading: 'Hello',
  },
  'test1',
  'test2'
);

ReactDOM.render(reactElement, document.getElementById('root'));
