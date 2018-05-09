import React, { Component } from 'react';
import Pokemon from '../components/pokemon';
import axios from 'axios';

class Pokedex extends Component {
  state = {
    species: [],
  }
  componentWillMount() {
    axios.get(`http://pokeapi.salestock.net/api/v2/pokemon?limit=151`)
    .then( response => {
      // console.log(response.data.results)
      this.setState({
        species: response.data.results,
      })
    })
  }
  render() {
    const { species } = this.state;
    return(
      <div className="pokemon--species--list">
        {
          species.map((pokemon, index) =>
            <Pokemon
              key={pokemon.name}
              id={index + 1}
              pokemon={pokemon}
              openModal={this.props.handleOpenModal}
            />
          )
        }
      </div>
    )
  }
}

export default Pokedex;