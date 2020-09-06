import React from "react";

import { Header } from "./components";
import { CardList } from "./components";
import { SearchBar } from './components';

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      searchField: '',
      nameLabel: 'Name'
    };
  }


  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ characters: users }))
    }

    handleChangeSearchBar = (e) => {
        return this.setState({ searchField: e.target.value})
        };
      
    viewSearchedCharacters = (characters, searchField) => {
        if(searchField.length > 0 ) { 
          return characters.filter(character => character.name.toLowerCase().includes(searchField.toLowerCase()));
        } else {
          return characters;
        }
    };
            
      robotImage: "https://robohash.org/{{props.monster.id}}?set=set2";

  render() {
    const { characters, searchField, nameLabel } = this.state;
    
    return (
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="search">
          <SearchBar placeholder={nameLabel} onChange={this.handleChangeSearchBar} />
        </div>
        <div className="main-content">
          <CardList characters={this.viewSearchedCharacters(characters, searchField)} src={this.robotImage} />
        </div>
        <div className="footer">@2020 by Ewa Iwan</div>
      </div>
    );
  }
}

export default App;
