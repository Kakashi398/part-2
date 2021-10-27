import { useEffect, useState } from "react";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import NumberService from './services/Numbers'


const App =() => {
  const [ persons, setPersons ] = useState([
    
    
  ])
  
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState(0)


  useEffect(() => {
    NumberService
    .getAll()
    .then(response => {
      setPersons(response)
      console.log(response);
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const names = persons.map(person => person.name)
    console.log(names);
  
    if( names.includes(newName)) {
      alert(`${newName} is already added to phonebook`)
    }
    else{
      console.log('you clicked', event.target);
    const nameObject = {
      name: newName,
      number: newNumber
    }

    NumberService
    .create(nameObject)
    .then(response => {
      setPersons(persons.concat(response))
    setNewName('')
    setNewNumber('')
    })

    }
    
    
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
    console.log(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
    console.log(event.target.value);
  }

  const handleDelete = (id, name) => {
    if(window.confirm(`do you want to delete ${name}`)) {
      NumberService
    .remove(id)
    }
  }

  const nameToShow = persons
  ? persons
  : persons.filter(person=> person.important === true)


 
  
  return(
    <div>
      <h2>Phonebook</h2>

      <h3>add a new</h3>

      <PersonForm addName={addName} 
        newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange}
        />

      <h2>Numbers</h2> 
     
    <Persons nameToShow={nameToShow} remove={handleDelete} />
    </div>
  )
}


export default App;