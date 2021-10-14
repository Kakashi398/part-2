const Course = ({course}) =>{
  return(
      <div>
        <Header name = {course.name} />
        <Content parts={course.parts}/>
        <Total parts={course.parts} />
      </div>
  )
}

const Header = ({name}) => {
  return(
    <h2>{name}</h2>
  )
}

const Content = ({parts}) => {
  return(
    <>
    {parts.map (parts => 
    <Part key={parts.id} parts={parts}/>)}
    </>
     
  )
}

const Part = ({parts}) => {
  return(
    <>
      <p>{parts.name} {parts.exercises}</p>
    </>
  )
}

const Total = ({parts}) => {
  const total = parts.reduce((sum,parts) => sum + parts.exercises, 0)
  
  return(
    <div>
      <p>
        <strong>total of {total} exercises</strong>
      </p>
    </div>
  )
}





const App = () => {
  const course = {
   
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    } 
    
  return (
    <div>
      
    <Course course={course} />
    </div>
  )
}


export default App;
