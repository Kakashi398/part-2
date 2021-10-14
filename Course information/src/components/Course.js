import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({courses}) =>{
    return(
        <div>
          {courses.map(courses =>
          
            <div key = {courses.id}>
                <Header name={courses.name}/>
                <Content parts={courses.parts}/>
                <Total parts={courses.parts} />
            </div>
            )}
        </div>
    )
  }

  export default Course