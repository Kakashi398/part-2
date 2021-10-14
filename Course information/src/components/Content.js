import React from 'react'
import Part from './Parts'

const Content = ({parts}) => {
    return(
      <>
      {parts.map (parts => 
      <Part key={parts.id} parts={parts}/>)}
      </>
       
    )
  }

  export default Content