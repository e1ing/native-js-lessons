const array = [777,23,12,43,32,65,82,21,0,99]

// по возрастанию bubble sort
for (let j=0; j<array.length-1; j++) {

    for (let i = 0; i < array.length - 1-j; i++) {
        if (array[i] > array[i + 1]) {
            [array[i], array[i+1]]= [array[i+1], array[i]]

           /* let temp = array[i + 1]
            array[i + 1] = array[i]
            array[i] = temp*/
        }
    }
}
console.log(array)


// sort

const names = ["Bob", "Alex", "Donald", "Ramzan", "bob", "2021", "кот", "Владимир"]
names.sort()
console.log(names)

const numbers = [100, 1, 1000, 333, 9, 22226]
console.log(numbers)

// sort -> compareFunc -> a
// a<= 0 - не переставляем
// a >=0 - переставляем(-100 || 0) || 100

function comp(a, b){ //по возрастанию
    if (a<= b){
        return -103
    } else {
        return 2
    }
}

const shortComp = (a,b) => a-b

console.log(numbers.sort((a,b)=> a-b))


// array sort
const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
];
console.log(students.sort((a,b)=>b.scores-a.scores))
console.log(students.sort((a,b)=>a.age-b.age)) //по возрастанию возраста
/*console.log(students
    .sort((a,b)=>a.age-b.age)
    .reverse()
)*/

console.log(students.sort((a, b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1));