import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render () {
    return (
      <div class="container">
        <Slider photos={shows} />
        <Display currentPhoto={shows[this.currentInd]} />
      </div>
    )
  }
}
 
const router = (
  <Router history={browserHistory}>
    <Route path='/' component={App} />
  </Router>
)

render(router, document.getElementById('app'));