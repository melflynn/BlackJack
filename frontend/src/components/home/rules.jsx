import React from 'react';
import '../../styles/rules_page.css';

class Rules extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="rules-page-container">
        <div className="rules-page">
          <h3 className="rules-header">Rules of BlackJack</h3>
          <p className="rules-bullet">1. Something something something something</p>
          <p className="rules-bullet">2. Something something something something</p>
          <p className="rules-bullet">4. Something something something something</p>
          <p className="rules-bullet">5. Something something something something</p>
          <p className="rules-bullet">6. Something something something something</p>
          <p className="rules-bullet">7. Something something something something</p>
          <p className="rules-bullet">8. Something something something something</p>
        </div>
      </div>
    )
  }
}

export default Rules;