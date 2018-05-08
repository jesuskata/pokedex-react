import React, { Component } from 'react';
import Pokemon from '../components/pokemon';

class Pokedex extends Component {
  state = {
    species: [],
    fetched: false,
    loading: false,
  }
  componentWillMount() {
    this.setState({
      loading: true,
    });
    fetch('http://pokeapi.salestock.net/api/v2/pokemon?limit=151').then(res => res.json()).then(response => {
      this.setState({
        species: response.results,
        loading: true,
        fetched: true,
      })
    })
  }
  render() {
    const { fetched, loading, species } = this.state;
    let content;
    if(fetched) {
      content =
      <div>
        {
          species.map((pokemon,index) => {
            return(
              <Pokemon
                key={pokemon.name}
                id={index+1}
                pokemon={pokemon}
              />
            )})
        }
      </div>;
    }
    return(
      <div>
        { content }
      </div>
    )
  }
}

export default Pokedex;