import { useEffect, useState } from "react";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";


const App =() => {
  const [ persons, setPersons ] = useState([
    
    
  ])
  
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState(0)


  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    console.log('you clicked', event.target);
    const nameObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
    console.log(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
    console.log(event.target.value);
  }

  const nameToShow = persons
  ? persons
  : persons.filter(person=> person.important === true)


  const names = persons.map(person => person.name)
  console.log(names);

  if( names.includes(newName)) {
    alert(`${newName} is already added to phonebook`)
  }
  
  return(
    <div>
      <h2>Phonebook</h2>

      <h3>add a new</h3>

      <PersonForm addName={addName} 
        newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange}
        />

      <h2>Numbers</h2> 
     
    <Persons nameToShow={nameToShow} />
    </div>
  )
}


export default App;