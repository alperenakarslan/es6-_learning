const person = {
    name: "Alperen",
    age:25,
    salary: 30000
};

const langs = ["Flutter", "Swift", "Javascript"];

const name = "Kaan";

// For In
//Object

// for(let prop in person){
//     console.log(prop,person[prop]);
// };

// Array
// for(let index in langs){
//     console.log(index, langs[index]);
// };

// String 

// for(let index in name){
//     console.log(index, name[index]);
// };

// For Of
// Object üzerinde gezinemezsin.

// for(let value of langs){
//     console.log(value);
// };

for(let character of name){
    console.log(character);
}