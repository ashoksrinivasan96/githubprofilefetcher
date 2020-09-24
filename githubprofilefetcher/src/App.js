import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/CardListComponent';
import Card from './components/CardComponent';
import Form from './components/FormComponent';



class App extends React.Component{ 
 
  state = {
    profiles: []
  };
  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };
  render() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
    	  <div className="header">Github Profile Card App</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
    	</div>
      </header>
    </div>
  );
  }
}

export default App;
