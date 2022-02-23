import React, { Component } from 'react';
import Input from './Input';
import SelectComp from './SelectComp';

class Form extends Component {
  render() {
    return (
      <div className="box_form">
        <h1>Adicionar carta </h1>
        <form className="newcardForm">
          <Input name="nome" label="nome" tipo="text" test="name-input" />
          <Input
            tipo="textarea"
            name="descricao"
            label="descricao"
            test="description-input"
          />
          <div className="inputAtributos">
            <Input tipo="number" name="atr1" label="attr1" test="attr1-input" />
            <Input tipo="number" name="atr2" label="attr2" test="attr2-input" />
            <Input tipo="number" name="atr3" label="attr3" test="attr3-input" />
            <p>Pontos restantes = 000</p>
          </div>
          <div className="inputUrl">
            <Input tipo="text" name="imagem" label="imagem" test="image-input" />
          </div>
          <div className="inputRariade">
            <SelectComp name="raridade" label="raridade" test="rare-input" />
            <Input
              tipo="checkbox"
              name="trunf"
              label2="Super Trunfo"
              test="trunfo-input"
            />
          </div>
          <button type="submit" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
