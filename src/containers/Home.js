import React from 'react';

import logo from 'assets/img/logo.png';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  };

  render() {
    return(
      <div className="container">
        Home page
        <img src={logo} />
      </div>
    )
  }
}

export default Home;
