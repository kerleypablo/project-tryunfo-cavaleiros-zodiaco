import React, { Component } from 'react';
import PropType from 'prop-types';

export default class SelectComp extends Component {
  render() {
    const { nome, label, test } = this.props;
    return (
      <div>
        <label htmlFor={ nome }>
          { label }
          <select name={ nome } id={ nome } data-testid={ test }>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
      </div>
    );
  }
}

SelectComp.propTypes = {
  nome: PropType.string.isRequired,
  label: PropType.string.isRequired,
  test: PropType.string.isRequired,
};
