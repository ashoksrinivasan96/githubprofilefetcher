import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/CardListComponent';
import Card from './components/CardComponent';
import Form from './components/FormComponent';

const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

class App extends React.Component{ 
 
  state = {
    profiles: testData,
  };
  render() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
    	  <div className="header">Github Profile Card App</div>
        <Form />
        <CardList profiles={this.state.profiles} />
    	</div>
      </header>
    </div>
  );
  }
}

export default App;
