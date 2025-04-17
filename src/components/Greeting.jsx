// const Greeting = ({name, day}) => {
const Greeting = (props) => {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      {/* <h1>Hello {name}</h1> */}
      <p>Today is {props.day}</p>
      {/* <p>Today is {day}</p> */}
    </div>
  )
}

export default Greeting