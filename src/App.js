import React, { Component } from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: 'descricao',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: 'http://images.universohq.com/2005/05/envelope_cdz.jpg',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    const value = (event.target.type === 'checkbox')
      ? event.target.checked
      : event.target.value;
    this.setState({
      [event.target.name]: value,
    });
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
