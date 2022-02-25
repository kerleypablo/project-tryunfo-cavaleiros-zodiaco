import React, { Component } from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

const data = [];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      baralho: data,
      hasTrunfo: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.validateButton = this.validateButton.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const value = (target.type === 'checkbox')
      ? target.checked
      : target.value;
    this.setState({
      [target.name]: value,
    }, () => this.validateButton());
  }

  onSaveButtonClick() {
    const { state } = this;
    if (state.cardTrunfo) this.setState({ hasTrunfo: true });
    this.setState((prevStete) => ({ baralho: [...prevStete.baralho, state] }));
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
    console.log(state.baralho);
  }

  validateButton() {
    const max = 210;
    const min = 0;
    const maxatt = 90;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;
    const total = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    if (cardName === ''
      || cardDescription === ''
      || cardImage === ''
      || cardAttr1 < min || cardAttr2 < min || cardAttr3 < min
      || cardAttr1 > maxatt || cardAttr2 > maxatt || cardAttr3 > maxatt
      || total > max) {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }
  }

  render() {
    const { state } = this;
    return (
      <div className="tela">
        <Form
          cardName={ state.cardName }
          cardDescription={ state.cardDescription }
          cardAttr1={ state.cardAttr1 }
          cardAttr2={ state.cardAttr2 }
          cardAttr3={ state.cardAttr3 }
          cardImage={ state.cardImage }
          cardRare={ state.cardRare }
          cardTrunfo={ state.cardTrunfo }
          isSaveButtonDisabled={ state.isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ state.hasTrunfo }
        />
        <Card
          cardName={ state.cardName }
          cardDescription={ state.cardDescription }
          cardAttr1={ state.cardAttr1 }
          cardAttr2={ state.cardAttr2 }
          cardAttr3={ state.cardAttr3 }
          cardImage={ state.cardImage }
          cardRare={ state.cardRare }
          cardTrunfo={ state.cardTrunfo }
          isSaveButtonDisabled={ state.isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
        />
      </div>
    );
  }
}
