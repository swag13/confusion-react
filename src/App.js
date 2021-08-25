import React, { Component } from 'react';
import Main from './components/MainComponent';

class App extends Component {

/*constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}*/

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
