import React from 'react';
import './App.css';
import teamsData from './CollegeBasketballTeams.json';

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
  // Adding latitude and longitude if you need them
  latitude: number;
  longitude: number;
}

function Welcome() {
  return <h2>List of NCAA Colleges with their mascots and locations</h2>;
}

const Header = () => {
  return <h1>NCAA College Basketball Teams</h1>;
};

class Team extends React.Component<TeamProps> {
  render() {
    const { school, name, city, state } = this.props;
    return (
      <div className="team">
        <h2>
          {school} - {name}
        </h2>
        <h3>
          Location: {city}, {state}
        </h3>
      </div>
    );
  }
}

function TeamsList() {
  return (
    <div>
      {teamsData.teams.map((team, index) => (
        <Team key={index} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <TeamsList />
    </div>
  );
}

export default App;
