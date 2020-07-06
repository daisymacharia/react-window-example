import React, { useState, useEffect } from 'react';
import Faker from 'faker'
import './App.scss';
import { Sidebar, MainContent } from './containers'


const App = () => {
  const [ users, setUsers ] = useState([])

  useEffect(() => {
    let usersList = []
    for (let i = 0; i < 40; i++) {
      const user = {
        name: Faker.name.firstName(),
        company: Faker.company.companyName(),
        email: Faker.internet.email(),
        phoneNumber: Faker.phone.phoneNumber(),
        city: Faker.address.city(),
        state: Faker.address.state(),
        revenue: Math.random(100000, 10000000)
      }
      usersList.push(user)
    }
    setUsers(usersList)
  }, [])

  return (
    <div className="App">
      <Sidebar />
      <MainContent users={users} />
    </div>
  );
}

export default App;
