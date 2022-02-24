import React, { Component } from 'react';
import PropType from 'prop-types';

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
              name="nome"
              id="nome"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="Descricao">
            Descricao
            <input
              type="textarea"
              name="descricao"
              data-testid="description-input"
              cols="30"
              rows="10"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="atr1">
            Attr01
            <input
              type="number"
              name="atr1"
              id="atr1"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="atr2">
            Attr02
            <input
              type="number"
              name="atr2"
              id="atr2"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="atr3">
            Attr03
            <input
              type="number"
              name="atr3"
              id="atr3"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <p>Pontos restantes = 000</p>
          <label htmlFor="imagem">
            Imagem
            <input
              type="text"
              name="imagem"
              id="imagem"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="raridade">
            <select
              id="raridade"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="trunf">
            <input
              type="checkbox"
              name="trunf"
              id="trunf"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
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
  onInputChange: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.string.isRequired,
  isSaveButtonDisabled: PropType.string.isRequired,
  onSaveButtonClick: PropType.string.isRequired,
};

export default Form;
