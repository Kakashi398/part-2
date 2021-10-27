import React from "react";

const Persons = ({nameToShow, remove}) => {
    return(
        <div >
        {nameToShow.map(person => 
        <p key={person.name}> {person.name} {person.number} 
        <button onClick = {() => remove(person.id, person.name)} >delete</button>
        </p>)}
      </div>
    )
}

export default Persons