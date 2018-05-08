import React, { PureComponent } from 'react';
import './pokemon.css';

class Pokemon extends PureComponent {
  render() {
    const { pokemon, id } = this.props;
    return(
      <div className="pokemon--species">
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