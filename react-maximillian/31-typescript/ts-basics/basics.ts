// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

//////////////////////////
//      Primitives      //
//////////////////////////

let age: number;
age = 12;

let userName: string;
userName = 'Niko';

let isStudent: boolean;
isStudent = true;

//////////////////////////////////
//      More complex types      //
//////////////////////////////////

let hobbies: string[];
hobbies = ['Snowboarding', 'Cooking', 'Reading books'];

let person: {
  name: string;
  age: number;
};

person = {
  name: 'Niko',
  age: 42,
};

// person = {
//   isStudent: true,
// };

let people: {
  name: string;
  age: number;
}[];

people = [
  person,
  {
    name: 'Gosho',
    age: 32,
  },
];
console.log(people);

//////////////////////////////
//      Type inference      //
//////////////////////////////

let course = 'React - The Complete Guide';

// course = 1235; - will show error because Typescript already infered that course is of type string!

///////////////////////////
//      Union types      //
///////////////////////////

let student: string | number = 'Nikolay Georgiev';
student = 123654;

///////////////////////////
//      Alias types      //
///////////////////////////

type Person = {
  name: string;
  age: number;
};

let pesho: Person;

pesho = {
  name: 'Pesho',
  age: 23,
};

let mnogoPersonas: Person[];

let gosho: Person = {
  name: 'Gosho',
  age: 30,
};

mnogoPersonas = [pesho, gosho];
console.log(mnogoPersonas);

/////////////////////////////////
//      Functions & types      //
/////////////////////////////////

function add1(a: number, b: number) {
  return a + b;
}
// function add(a: number, b: number):number {
//   return a + b;
// } -> the function also have a return type. in this simple case we can use ts inference for the return type, but if a more complex function is there we should not forget that it also have a return type and we can specify it with : after the (params).

function printOutput(value: any) {
  console.log(value);
} // return type void -> it means that it does not return anything and if we want to use it's returned value we will got undefined.

////////////////////////
//      Generics      //
////////////////////////

function insertAtBeginning<T>(array: T[], value: T) {
  const newArr = [value, ...array];
  return newArr;
}

const demoArr = [1, 2, 3];

const updatedArr = insertAtBeginning(demoArr, -1); // [-1, 1, 2, 3]

const stringArr = insertAtBeginning(['Pehso', 'Gosho', 'Atanas', '&'], 'az');

// updatedArr[0].split(''); -> it warn you that .split does not exist on type number!
stringArr[0].split('');
