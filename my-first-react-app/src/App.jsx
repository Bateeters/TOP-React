import { useState } from 'react'
import './App.css'

function Person() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Doe",
    age: 100
  });

  const handleInputChange = (e) => {
    console.log(person);
    const { name, value } = e.target;
    setPerson((prevPerson) => ({
      ...prevPerson,
      [name]: value,
    }));
  };

  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setPerson call): ", person);
    setPerson((prevPerson) => ({
      ...person, 
      age: parseInt(prevPerson.age) + 1
    }));
    // we've called setPerson, surely person has updated?
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  };

  // this console.log runs every time the component renders
  // what do you think this will print?
  console.log("during render: ", person);

  return (
    <>
      <input
        type="text"
        name="firstName"
        value={person.firstName}
        onChange={handleInputChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={person.lastName}
        onChange={handleInputChange}
        placeholder="Last Name"
      />
      <input
        type="number"
        name="age"
        value={person.age}
        onChange={handleInputChange}
        placeholder="Age"
      />
      <h1>{person.firstName} {person.lastName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

function App() {
  return (
    <div>
      <Person />
    </div>
  );
} 

export default App
