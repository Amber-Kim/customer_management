import './App.css';
import React, { Component } from 'react';
import Customer from './components/Customer'

const customer = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'amber',
  'birthday': '951120',
  'gender': 'Female',
  'job': 'developer'
  },
  {
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'elthon',
  'birthday': '860406',
  'gender': 'male',
  'job': 'gamer'
  },
  {
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'shawn',
  'birthday': '930621',
  'gender': 'male',
  'job': 'mid developer'
  },
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customer.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
