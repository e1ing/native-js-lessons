const tlID_1 = "34fsf-se4e"// v1()
const tlID_2 = "34fsf-ll4e"

const todoLists = [
    {
        id: tlID_1,
        title: "What to learn",
        filter: "all",
        tasks: [
            {},
            {}
        ]
    },
    {
        id: tlID_2,
        title: "What to buy",
        filter: "all",
        tasks: [
            {},
            {}
        ]
    },
]

const tasks = {
    [tlID_1]: [
        {name: "HTML", isDone: true},
        {name: "Redux", isDone: false}
    ],

    [tlID_2]: [
        {name: "Beer", isDone: true},
        {name: "Fish", isDone: false}
    ],
}

//reduce
console.log(tasks[todoLists[0].id][1].name)
console.log(tasks[tlID_1][1].name)

let numbers = [23, 45, 25, 38]
console.log(numbers.reduce((acc, el)=>acc+el, 0))

let numbers = [23, 45, 25, 38]
console.log(numbers.reduce((acc, el)=>acc>el ? acc: el))


let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },{
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

function findAlex(acc, el){
    if (el.name === "Alex"){
        acc=el;
    }
    return acc;
}
 console.log(students.reduce(findAlex, null))

function getBestStudent(acc, el){
    if(el.scores >= 100){
        acc.push(el)
    }
    return acc;
}
console.log(students.reduce(getBestStudent, []))

function addScores(acc, el){
    acc.push({...el, scores: el.scores+10})
}
console.log(students.reduce(addScores, []))