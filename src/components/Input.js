import React, { Component } from 'react';
import PropType from 'prop-types';

export default class Input extends Component {
  render() {
    const { nome, label, tipo, test, label2 = '' } = this.props;
    return (
      <div>
        <label htmlFor={ nome }>
          { label }
          <input type={ tipo } name={ nome } id={ nome } data-testid={ test } />
          { label2 }
        </label>
      </div>
    );
  }
}
Input.propTypes = {
  nome: PropType.string.isRequired,
  label: PropType.string.isRequired,
  tipo: PropType.string.isRequired,
  test: PropType.string.isRequired,
  label2: PropType.string.isRequired,
};
