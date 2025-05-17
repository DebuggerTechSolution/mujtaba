const cars = [];
cars[1] = "Toyota";
cars[2] = "Mersedez";
cars[3] = "Ford";

cars[0] = "Tesla";
console.log(cars.length);

const latop = ["dell", "mac", "leveno", "Microsoft"]
console.log(typeof latop);


const flower = ["Rose", "green", "Purple"];
console.log(flower.toString);


const people = { firstName: "Ali", lastName: "Karimi", age: 18 };
console.log(people.lastName);

const color = ["Balck", "Blue", "purple", "green"];

color.push = "white";
console.log(color);


console.log(color);
const fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon";
console.log(fruits);


const person = [];
person[0] = "karim";
person[1] = "hassani";
person[2] = 46;

console.log(person[0] + " " + person.length);

const phone = [
    { name: " iphone", models: ["15", "16", "10"] },
    { name: "Samsung", models: ["24", "25", "A  52"] },
    { name: "hawaie", models: ["honor", "magic1"] }
]
console.log(phone);


const Countrys = ["japen ", "afghanistan", "iran", "Pakisan"];

let Country = Countrys.at(2);
console.log(Countrys.at(2));


const citeis = ["kabul", "Herat", "kandar"];
console.log(citeis.join("$"));


const province = ["kabul", "Herat", "kandar", "mazar"];
province.pop();
console.log(province);


const part = ["Black", "Blue", "purple", "green"];


console.log(part.shift());

const latop1 = ["dell", "mac", "leveno", "Microsoft"]
latop1.unshift("hp")
console.log(latop1);


const Countrys1 = ["japen ", "afghanistan", "iran", "Pakisan"];

Countrys1[0] = "China";
console.log(Countrys1);

const part1 = ["Black", "Blue", "purple", "green"];
const province1 = ["kabul", "Herat", "kandar", "mazar"];
const colect = part1.concat(province1);
console.log(colect);


const latop8 = ["dell", "mac", "leveno", "Microsoft"]
console.log(latop8.copyWithin(2, 0, 2));

const num = [[1, 2], [3, 4], [5, 6]];
const num1 = num.flat();
console.log(num);

const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(x => [x, x * 10]);
console.log(myArr);


const discrtict = ["jaghori", "Malistan", "grabagh"]
const discrtict1 = discrtict.splice(2, 0, "Bihsod", "Navour")
console.log(discrtict);



const animals = ["dog", "car", "horse", "tiger"]
const animals1 = animals.slice(1,)
console.log(animals);






















