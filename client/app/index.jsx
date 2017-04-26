import React from 'react';
import { render } from 'react-dom';
import ProgressBar from 'react-progress-bar-component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.placeOrder = this.placeOrder.bind(this);
    this.state = {
      current: 0
    }
  }

  placeOrder() {
    this.setState({
      current: this.state.current + 1
    })
  }

  render () {
    return (
      <div className="container">
        <h1>React Progress Bar Demo</h1>
        <h2>Supports dynamic variables</h2>
        <button onClick={() => this.placeOrder()}>Place order</button>
        <br />
        Percent until sold out:
        <ProgressBar min={0} max={10} current={this.state.current} />
        <br />
        <br />
        <h2>Support for themes</h2>
        <ProgressBar percent={30} theme={'cyber'} />
        <br />
        <ProgressBar percent={70} theme={'arctic'} />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));