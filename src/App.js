import React from 'react';
import People from './components/People';
import { peeps } from './filterPeople';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: peeps,
      count: peeps.length
    }

    this.clearBirthdays = this.clearBirthdays.bind(this);
  }

  clearBirthdays() {
    this.setState({
      people: [],
      count: 0
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <p className="title">{this.state.count + " birthdays today!"}</p>
          <People people={this.state.people}/>
          <button className="button" type="button" onClick={this.clearBirthdays}>Clear All</button>
        </div>
      </div>
    );
  }
}

export default App;
