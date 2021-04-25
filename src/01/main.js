// Copy abjects and arrays

const student = {
    name: "Alex",
    age: 23,
    friends: ["Bob", "Nick"] //это тоже объект и на него будет ссылка
}

const studentPlus = {
    name: "Alex",
    age: 23
};

console.log(student === studentPlus); //false, с разными ссылками на одинаковые объекты

student.age = 24; //это сработает

const studentYo = student; //2 переменные, которые хранят одну ссылку на объект
console.log(student === studentYo); //true

studentYo.age = 35;
console.log(student);

const copyStudent = {...student, friends:[...student]} //новый объект с одинаковой инфой как в student
console.log(student === copyStudent); //false

student.friends.push("Ann");
console.log(copyStudent); //copyStudent содержит ссылку на массив student.friends

// 1. Константе присвоить значение можно только один раз
// 2. Если это объект (array & func), то в переменной хранится
// сслыка на этот объект(адрес ячейки в памяти или указатель)

function fn(num){
    const pow = Math.pow(num, 2);
    const sqrt = () => console.log(pow);
    return [pow, sqrt];
}
console.log(fn(10));

const [num, numLogger] = fn(10); //деструктуризация
const [num1, num1Logger] = fn(15);