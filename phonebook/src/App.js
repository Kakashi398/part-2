import { useState } from "react";


const App =() => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas'}
    
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState(0)

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

      <form onSubmit={addName}>
        <div>
          name: <input value={newName}
           onChange={handleNameChange} />
        </div>

        <div>
          Number: <input value={newNumber}
           onChange={handleNumberChange} />
        </div>

        <div>
          <button  type='submit' >add</button>
        </div>
      </form>

      <h2>Numbers</h2> 
      <div >
        {nameToShow.map(person => 
        <p key={person.name}> {person.name} {person.number} </p>)}
      </div>
    

    </div>
  )
}


export default App;