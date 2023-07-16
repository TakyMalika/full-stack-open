const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
}

const Content = (props) => {
  const partItems = props.parts.map( part=> 
    <Part name={part.name} exercises={part.exercises} />
  );
  return (
    <div>
      {partItems}
    </div>
  );
}

const Total = (props) => {
  let exercisesSum = 0;
  
  props.parts.forEach(part => {
    exercisesSum += part.exercises;
  })

  return (
    <p>Number of exercises {exercisesSum}</p>
  );
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App;