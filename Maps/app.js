// Mapler - Key(Anahtar) - Value(Değer)

// let myMap = new Map(); // oluşturma
// console.log(myMap);

// const key1 = "Alperen";
// const key2 = {a:10, b:20};
// const key3 = () => 30;

// Set
// myMap.set(key1, "String Değer");
// myMap.set(key2, "Object Literal Değer");
// myMap.set(key3, "Function Değer");

// Get
// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));


// const cities = new Map();

// cities.set("Çorlu", 5);
// cities.set("İstanbul", 15);
// cities.set("Kütahya", 4);

// For Each

// cities.forEach(function(value, key) {
//     console.log(value,key);
// })

// For Of

// for(let [key, value] of cities){ // Destructing var burada.
//     console.log(key,value);
// }

// Map Keys

// for(let key of cities.keys()){
//     console.log(key);
// }

// Map Values

// for(let value of cities.values()){
//     console.log(value);
// }

// Arraylerden map oluşturma

// const arr = [["key1", "value1"],["key2", "value2"]];

// const lastMap = new Map(arr);

// console.log(lastMap);

// Mapten arraye çevirme

const cities = new Map();

cities.set("Çorlu", 5);
cities.set("İstanbul", 15);
cities.set("Kütahya", 4);

const array = Array.from(cities);

console.log(array);