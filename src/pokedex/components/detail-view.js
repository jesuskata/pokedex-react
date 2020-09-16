import React from 'react';
import './detail-view.css'

const DetailView = ({ pokemon }) => {
  const { id } = pokemon;
  return (
    <section className="detailview--species--container">
      <img src={`./public/sprites/${id}.png`} className='pokemon--species--sprite' alt="sprite"/>
      <div>
        <h1 className='detailview--species-name'>ID: {id} {pokemon.pokemon.name}</h1>
        <p className="detailview--species-url">URL: {pokemon.pokemon.url}</p>
      </div>
    </section>
  )
}

export default DetailView;