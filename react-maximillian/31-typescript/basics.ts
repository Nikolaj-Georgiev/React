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
