// Setler - Kümeler

const mySet = new Set();

mySet.add(100);
mySet.add(3.14);
mySet.add("Alperen");
mySet.add(true);
mySet.add({a:1,b:2,c:3});

const mySet2 = new Set([100,3.14,"Alperen"]);

// console.log(mySet);
// console.log(mySet2);

// Delete metodu

// mySet.delete("Alperen");
// console.log(mySet);

// Has Metodu
// console.log(mySet.has("Alperen"));

// For Each

// mySet.forEach(function(value){
//     console.log(value);
// })

// For Of
// for(let value of mySet){
//     console.log(value);
// }

// Setten array oluşturma

// const arr = Array.from(mySet);

// console.log(arr);