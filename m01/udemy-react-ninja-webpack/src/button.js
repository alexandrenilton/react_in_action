import React from 'react'

const Button = ( { children, handleClick } ) => (
  <button
    className='main-button'
    onClick={handleClick}> { children }
  </button>
)

Button.propTypes = {
  // alem de handleClick esperar uma funcao, ela é obrigatoria, ou seja, tem que definir uma funcao em handleClick
  handleClick: React.PropTypes.func.isRequired
}



export default Button
