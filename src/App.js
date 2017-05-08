import React, {Component} from 'react';
import './App.css';

const COUNT = 1000;

class CloseSvg extends React.PureComponent {
  static defaultProps = {
    bg: 'none',
    fill: '#000',
    width: 12,
    height: 12
  };

  render() {
    const {bg, fill, width, height} = this.props;

    return (
      <svg xmlns="http://www.w3.org/2000/svg" style={{width, height}} viewBox="0 0 12 12">
        <g fill={bg} fillRule="evenodd">
          <path d="M0 0h12v12H0" />
          <path
            fill={fill}
            d="M9.5 3.205L8.795 2.5 6 5.295 3.205 2.5l-.705.705L5.295 6 2.5 8.795l.705.705L6 6.705 8.795 9.5l.705-.705L6.705 6"
          />
        </g>
      </svg>
    );
  }
}

class CloseImg extends React.PureComponent {
  render() {
    return <img alt="test" src="/test.svg" width="12" height="12" />;
  }
}

class CloseSvgSimple extends React.PureComponent {
  render() {
    return (
      <svg className="ui-icon ui-icon-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
        <g className="background" fillRule="evenodd">
          <path d="M0 0h12v12H0" />
          <path
            className="fill"
            d="M9.5 3.205L8.795 2.5 6 5.295 3.205 2.5l-.705.705L5.295 6 2.5 8.795l.705.705L6 6.705 8.795 9.5l.705-.705L6.705 6"
          />
        </g>
      </svg>
    );
  }
}

class Timer extends Component {
  componentWillMount() {
    this.time = Date.now();
  }

  componentDidMount() {
    console.log(`Mounting took: ${Date.now() - this.time}`);
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

class SVGTest extends Component {
  render() {
    let SVGs = [];

    for (let i = 0; i < COUNT; i++) {
      SVGs.push(<CloseSvg key={i} />);
    }

    return <Timer>{SVGs}</Timer>;
  }
}

class IMGTest extends Component {
  render() {
    let IMGs = [];

    for (let i = 0; i < COUNT; i++) {
      IMGs.push(<CloseImg key={i} />);
    }

    return <Timer>{IMGs}</Timer>;
  }
}

class SVGSimpleTest extends Component {
  render() {
    let SVGs = [];

    for (let i = 0; i < COUNT; i++) {
      SVGs.push(<CloseSvgSimple key={i} />);
    }

    return <Timer>{SVGs}</Timer>;
  }
}

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: false
    };
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <button onClick={this.handleClick.bind(this)}>Toggle Me!</button>
        {this.state.shown ? this.props.children : null}
      </div>
    );
  }

  handleClick() {
    this.setState({shown: !this.state.shown});
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggler title="SVG With Props"><SVGTest /></Toggler>
        <Toggler title="SVG as Image tag"><IMGTest /></Toggler>
        <Toggler title="SVG without props, classNames"><SVGSimpleTest /></Toggler>
      </div>
    );
  }
}

export default App;
