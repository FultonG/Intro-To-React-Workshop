import React, { Component } from 'react';
import './App.css';
import CatFacts from './utils/CatFacts';
import { Card } from './components/Card';
import { CatFactsCard } from './components/CatFactsCard';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      facts: []
    }
  }
  componentDidMount(){
    CatFacts.getFacts().then( res => this.setState({facts: res.data.all}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Card/>
        {this.state.facts.map((obj, index) =>
          <CatFactsCard key={index} factNumber={index} fact={obj.text}></CatFactsCard>
        )}
        </header>
      </div>
    );
  }
}

export default App;
