import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import BioList from '../components/BioList';
import TopSection from '../components/static/topSection';
import Modal from '../components/Modal';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/navigation/footer/Footer';
import Aux from '../hoc/aux/Aux';
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
    // console.log(this.state)
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
    // console.log('modal closed');
    const doesShow = this.state.showModal;
    this.setState( { showModal: !doesShow } );
  }
  render() {
    const { bios, searchfield, modalBio, showModal } = this.state;
    const filterBios = bios.filter(bios => {
      return bios.name.toLowerCase().includes(searchfield.toLowerCase()) || bios.title.toLowerCase().includes(searchfield.toLowerCase());
    })

    return !bios.length ?
    (
      <Aux>
        <Navigation />
        <main>
          <TopSection />
          <h1 style={{textAlign: 'center'}}>Searching ...</h1>
        </main>
        <Footer />
      </Aux>
    )
     :
    (
      <Aux>
        <Navigation />
        <main>
          <TopSection />
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
          </div>
        </main>
        <Footer />
        <Modal 
          modalBio={modalBio}
          showModal={showModal}
          clickClosed={() => this.closeModal()} />
      </Aux>
    );
  }
}

export default App;