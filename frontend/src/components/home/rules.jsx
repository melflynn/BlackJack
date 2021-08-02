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
          <p className="rules-bullet">1. The goal of blackjack is to beat the dealer's hand without going over 21.</p>
          <p className="rules-bullet">2. Face cards are worth 10. Aces are worth 1 or 11, whichever makes a better hand.</p>
          <p className="rules-bullet">3. Each player starts with two cards, one of the dealer's cards is hidden until the end.</p>
          <p className="rules-bullet">4. To 'Hit' is to ask for another card. To 'Stand' is to hold your total and end your turn.</p>
          <p className="rules-bullet">5. If you go over 21 you bust, and the dealer wins regardless of the dealer's hand.</p>
          <p className="rules-bullet">6. If you are dealt 21 from the start (Ace & 10), you got a blackjack.</p>
          <p className="rules-bullet">7. Dealer will hit until his/her cards total 17 or higher.</p>
          <p className="rules-bullet">8. Doubling is like a hit, only the bet is doubled and you only get one more card.</p>
          <p className="rules-bullet">9. Split can be done when you have two of the same card - the pair is split into two hands.</p>
          <p className="rules-bullet">10. Splitting also doubles the bet, because each new hand is worth the original bet.</p>
          <p className="rules-bullet">11. You can only double/split on the first move, or first move of a hand created by a split.</p>
          <p className="rules-bullet">12. You cannot play on two aces after they are split.</p>
          <p className="rules-bullet">13. You can double on a hand resulting from a split, tripling or quadrupling you bet.</p>
        </div>
      </div>
    )
  }
}

export default Rules;