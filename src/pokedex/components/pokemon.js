import React, { Component } from 'react';
import './pokemon.css';

class Pokemon extends Component {
  handleClick = (event) => {
    this.props.openModal(this.props);
    console.log(this.props);
  }
  render() {
    const { pokemon, id } = this.props;
    console.log('pokemon')
    return(
      <div className="pokemon--species" onClick={this.handleClick}>
        <div className="pokemon--species--container">
          <div className="pokemon--species--sprite">
            <img src={`/public/sprites-02/${id}.gif`}/>
          </div>
          <div className="pokemon--species-name"> {`${id} ${pokemon.name}`} </div>
        </div>
      </div>
    )
  }
}

export default Pokemon;