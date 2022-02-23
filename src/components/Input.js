import React, { Component } from 'react';


export default  class Input extends Component {
  render() {
    const { nome , label , tipo } = this.props
    return (
      <div>
     <label htmlFor={nome}>
            {label}
            <input type={tipo} name={nome} id={nome} data-testid="name-input" />
          </label>
      </div>
    );
  }
}


