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
    } = this.props;
    return (
      <section className="Card">
        <div className="cardInterno">
          <h3 data-testid="name-card">{ cardName }</h3>
          {cardTrunfo === true ? (
            <span data-testid="trunfo-card" className="Trunfo"> Super Trunfo</span>
          ) : (
            <p />
          )}
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <div className="descrptionCard">
            <p data-testid="description-card">{cardDescription}</p>
          </div>
          <div className="atributosCard">
            <p>attr</p>
            <p data-testid="attr1-card">{ cardAttr1 }</p>
            <p>Attr</p>
            <p data-testid="attr2-card">{ cardAttr2 }</p>
            <p>attr</p>
            <p data-testid="attr3-card">{ cardAttr3 }</p>
            <span data-testid="rare-card">{ cardRare }</span>
          </div>
        </div>
      </section>
    );
  }
}

export default Card;

Card.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
};
