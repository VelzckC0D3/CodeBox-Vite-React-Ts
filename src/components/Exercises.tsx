import { Car, ExecuteInterface, Sum, TypeAnnotation, VariableDeclaration } from "../logic/BasicExercises"

const Exercises = () => {

  VariableDeclaration('This is a string')
  TypeAnnotation(123) /* Argument on purpose */
  Sum(145, 55)
  ExecuteInterface('Alejandro', 25)
  const newCar = new Car('Toyota', 'Prado', 'Red', 1998)
  console.log(newCar)
  newCar.describe()

  return (
    <div className='main-cont'>
      <h1>Basic Ts Exercises</h1>
    </div>
  )
}

export default Exercises
