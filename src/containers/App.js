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
    this.state = {
      bios: [],
      searchfield: '',
      modalBio: ''
    }
  }

  componentDidMount() {
    this.setState({ bios: bios })
  }

  onSearchChange = (event) => {
    this.setState( { searchfield: event.target.value })
    // console.log(this);
  }

  onModalClick = (event) => {
    this.setState( { modalBio: event.target.value })
  }
  
  openModal = (id) => {
    console.log('Hello ', id);
  }
  render() {
    const { bios, searchfield, modalBio } = this.state;
    const filterBios = bios.filter(bios => {
      return bios.name.toLowerCase().includes(searchfield.toLowerCase()) || bios.title.toLowerCase().includes(searchfield.toLowerCase());
    })
    const openModalBio = bios.filter(bios => {
      return bios.name.toLowerCase().includes(modalBio.toLowerCase())
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
              clickArticleLink={this.openModal} />
          </div>
        </div>
        <Modal  bios={openModalBio}/>
      </div>
    );
  }
}

export default App;
