import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import BioList from '../components/BioList';
import Modal from '../components/Modal';
import { bios } from '../bios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      bios: [],
      searchfield: '',
      modalBio: '',
      showModal: false
    }
  }

  componentDidMount() {
    this.setState({ bios: bios })
    console.log(this.state)
  }

  onSearchChange = (event) => {
    this.setState( { searchfield: event.target.value })
    // console.log(this);
  }
  
  openModal = (index) => {
    const persons = [...this.state.bios];
    this.setState({modalBio: persons[index]});
    const doesShow = this.state.showModal;
    this.setState( { showModal: !doesShow } );
  }
  closeModal = () => {
    console.log('modal closed');
    const doesShow = this.state.showModal;
    this.setState( { showModal: !doesShow } );
  }
  render() {
    const { bios, searchfield, modalBio, showModal } = this.state;
    const filterBios = bios.filter(bios => {
      return bios.name.toLowerCase().includes(searchfield.toLowerCase()) || bios.title.toLowerCase().includes(searchfield.toLowerCase());
    })

    return !bios.length ?
    <h1>Searching ...</h1> :
    (
      <div>
        <div className="landing-page">
          <div className="content">
            <SearchBox searchChange={this.onSearchChange} />
            <BioList 
              bios={filterBios}
              clickArticleLink={this.openModal} 
            />
          </div>
        </div>
        <Modal 
          modalBio={modalBio}
          showModal={showModal}
          clickClosed={() => this.closeModal()} />
      </div>
    );
  }
}

export default App;
