import React from "react";

const Persons = ({nameToShow}) => {
    return(
        <div >
        {nameToShow.map(person => 
        <p key={person.name}> {person.name} {person.number} 
        <button>delete</button>
        </p>)}
      </div>
    )
}

export default Persons