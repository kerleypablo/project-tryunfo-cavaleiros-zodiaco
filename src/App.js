import React, { Component } from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

export default class App extends Component {
  render() {
    return (
      <div className="tela">
        <Form />
        <Card />
      </div>
    );
  }
}
