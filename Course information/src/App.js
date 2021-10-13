const Course = ({course}) =>{
  return(
      <div>
        <Header name={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts} />
        
      </div>
  )
}

const Header = ({name}) => {
  return(
    <h1>{name}</h1>
  )
}

const Content = ({parts}) => {
  return(
    <div>
     <Part parts={parts[0]} />
     <Part parts={parts[1]} />
     <Part parts={parts[2]} />
    </div>
  )
}

const Part = ({parts}) => {
  return(
    <div>
      {parts.name} {parts.exercises}
    </div>
  )
}

const Total = ({parts}) => {
  return(
    <div>
      <p>
        total of {parts[0].exercises + parts[1].exercises 
        + parts[2].exercises} exercises
      </p>
    </div>
  )
}





const App =() => {
  const course = {
    id: 1,
    name: 'Half Stack application development',

    parts: [
      {
        name:'Fundamentals of React',
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
      }
    ]
  }
  
  return(
   <Course course={course} />
  )
}


export default App;
