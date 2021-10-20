import React from "react";

const Persons = ({nameToShow}) => {
    return(
        <div >
        {nameToShow.map(person => 
        <p key={person.name}> {person.name} {person.number} </p>)}
      </div>
    )
}

export default Persons