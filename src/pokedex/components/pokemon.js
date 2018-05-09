import React, { Component } from 'react';
import './pokemon.css';

class Pokemon extends Component {
  handleClick = (event) => {
    this.props.openModal(this.props);
  }
  render() {
    const { pokemon, id } = this.props;
    return(
      <div className="pokemon--species" onClick={this.handleClick}>
        <div className="pokemon--species--container">
          <div className="pokemon--species--sprite">
            <img src={`/public/sprites/${id}.png`} />
          </div>
          <div className="pokemon--species-name"> {pokemon.name} </div>
        </div>
      </div>
    )
  }
}

export default Pokemon;