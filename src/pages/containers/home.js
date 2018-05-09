import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Pokedex from '../../pokedex/containers/pokedex';
import ModalContainer from '../../widgets/containers/modal-container';
import Modal from '../../widgets/components/modal';
import DetailView from '../../pokedex/components/detail-view';

class Home extends Component {
  state = {
    modalVisible: false,
  }
  handleOpenModal = (pokemon) => {
    this.setState({
      modalVisible: true,
      pokemon
    })
    // console.log(this.state.pokemon);
  }
  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false,
    })
  }
  render() {
    return(
      <HomeLayout>
        <h1>Pokémon List with ReactJS and PokeAPI</h1>
        <Pokedex
        handleOpenModal={this.handleOpenModal}
        />
        {
          this.state.modalVisible &&
          <ModalContainer>
            <Modal
              handleClick={this.handleCloseModal}
            >
              <DetailView
                pokemon={this.state.pokemon}
              />
            </Modal>
          </ModalContainer>
        }
      </HomeLayout>
    )
  }
}

export default Home;