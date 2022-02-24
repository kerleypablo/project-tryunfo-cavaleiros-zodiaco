import React, { Component } from 'react';
import PropType from 'prop-types';
import './FormCss.css';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      onInputChange,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="box_form">
        <h1>Adicionar carta </h1>
        <form className="newcardForm">
          <label htmlFor="nome">
            Nome:
            <input
              type="text"
              name="cardName"
              id="cardName"
              data-testid="name-input"
              maxLength="28"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="Descricao">
            Descricao
            <input
              type="textarea"
              name="cardDescription"
              data-testid="description-input"
              maxLength="150"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="atr1">
            Attr01
            <input
              type="number"
              name="cardAttr1"
              id="cardAttr1"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="atr2">
            Attr02
            <input
              type="number"
              name="cardAttr2"
              id="cardAttr2"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="atr3">
            Attr03
            <input
              type="number"
              name="cardAttr3"
              id="cardAttr3"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <p>Pontos restantes = 000</p>
          <label htmlFor="imagem" className="imagensCard">
            Imagem
            <input
              type="text"
              name="cardImage"
              id="cardImage"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="raridade" className="raridadeCard">
            Raridade:
            <select
              id="cardRare"
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="trunf" className="checkboxCard">
            <input
              type="checkbox"
              name="cardTrunfo"
              id="cardTrunfo"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              value={ cardTrunfo }
            />
            Super Trunfo
          </label>
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.node.isRequired,
  cardAttr2: PropType.number.isRequired,
  cardAttr3: PropType.number.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
  isSaveButtonDisabled: PropType.bool.isRequired,
  onSaveButtonClick: PropType.string.isRequired,
  onInputChange: PropType.string.isRequired,
};

export default Form;
