/* Exercise 1: Variable Declaration
Declare a variable of type string and assign it a value. 
Then, log the value of the variable to the console. */
export function VariableDeclaration(value: string) {
  console.log(value);
}

/* Exercise 2: Type Annotation
Declare a variable without assigning a value and explicitly specify its type. 
Try to assign a value of a different type to the variable and observe the TypeScript compiler's behavior. */
export function TypeAnnotation(value: string) {
  console.log(value);
}

/* Exercise 3: Functions
Write a TypeScript function that takes two numbers as parameters and returns their sum. 
Make sure to specify the parameter and return types explicitly. */
export function Sum(value1: number, value2: number): number {
  console.log(value1 + value2);
  return value1 + value2;
}

/* Exercise 4: Interfaces
Create an interface called Person with properties name of type string and age of type number. 
Create an object that conforms to this interface and print its properties to the console. */
export function ExecuteInterface(name: string, age: number) {
  interface Person {
    name: string;
    age: number;
  }

  function Describe(person: Person) {
    console.log(
      `The name is ${person.name}, and he's ${person.age} years old.`
    );
  }

  const exampleUser = { name: name, age: age };

  Describe(exampleUser);
}

/* Exercise 5: Classes
Create a TypeScript class called Car with properties make and model.
Add a constructor that initializes these properties. Create an instance of the Car class and print its properties. */
