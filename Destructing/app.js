// let number1, number2;

// arr = [100,200,300,400];

// number1 = arr[0];
// number2 = arr[1];

// Destructing

// [number1,number2] = arr;

// console.log(number1, number2);


// Obje Destructing

// const numbers = {
//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50
// };

// const {a:num1, b:num2, c:num3} = numbers;
// console.log(num1, num2, num3);

// Func Destructing

// const getLangs = () => ["Phyton", "Java", "C++"];

// const [lang1,lang2,lan3] = getLangs();

// console.log(lang1,lang2,lan3);

// Obje

const person = {
    name: "Alperen",
    year: 1999,
    salary: 30000,
    showInfo : () => console.log("Bilgiler yükleniyor...")
}

const {name:isim, year:yil, salary: maas, showInfo:bilgileriGoster} = person;

console.log(isim, yil, maas);
bilgileriGoster();