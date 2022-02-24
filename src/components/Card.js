import React, { Component } from 'react';
import PropType from 'prop-types';
import './CardCss.css';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      attr = 'attr................................',
    } = this.props;
    return (
      <div className="box">
        <h1>Pre Vizualizacao</h1>
        <section className="Card">
          <div className="cardInterno">
            <h3 data-testid="name-card">{ cardName }</h3>
            <img src={ cardImage } alt={ cardName } data-testid="image-card" />
            <div className="descrptionCard">
              <p data-testid="description-card">{ cardDescription }</p>
            </div>
            <div className="atributosCard">
              <p data-testid="attr1-card">
                {attr}
                { cardAttr1 }
              </p>
              <p data-testid="attr2-card">
                {attr}
                { cardAttr2 }
              </p>
              <p data-testid="attr3-card">
                {attr}
                { cardAttr3 }
              </p>
              <p data-testid="rare-card">{ cardRare }</p>
            </div>
            { cardTrunfo === true
              ? <span data-testid="trunfo-card"> Super Trunfo</span>
              : <p />}
          </div>
        </section>
      </div>
    );
  }
}

export default Card;

Card.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.number.isRequired,
  cardAttr2: PropType.number.isRequired,
  cardAttr3: PropType.number.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
  attr: PropType.bool.isRequired,
};
