import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import BioList from '../components/BioList';
import { bios } from '../bios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bios: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    this.setState({ bios: bios })
  }

  onSearchChange = (event) => {
    this.setState( { searchfield: event.target.value })
  }
  
  render() {
    const { bios, searchfield } = this.state;
    const filterBios = bios.filter(bios => {
      return bios.name.toLowerCase().includes(searchfield.toLowerCase()) || bios.title.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !bios.length ?
    <h1>Searching ...</h1> :
    (
      <main className="landing-page">
        <div className="content">
          <SearchBox searchChange={this.onSearchChange} />
          <BioList bios={filterBios} />
        </div>
      </main>
    );
  }
}

export default App;
