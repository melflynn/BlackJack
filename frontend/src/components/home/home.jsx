import React from 'react';
import '../../styles/homepage.css';


class Home extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <div className="homepage">
        <div>
          Welcome {this.props.currentUser.username}!
        </div>
      </div>
    )
  }
}

export default Home;
