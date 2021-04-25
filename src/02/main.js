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
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

console.log(students.map(st => ({...st, age: st.age + 1})));


// function myMap(array, func){
//     const newArr = [];
//     for (let i=0; i<array.length; i++){
//        newArr [i] = func(array[i], i)
//     }
//     return newArr;
// }

// function myMap(array, func){
//     const newArr = [];
// array.forEach((st)=>{
//     newArr.push(func(st))
// })
//
//     array.forEach((st, i)=>{
//         newArr[i] = func(st);
//     })
//     return newArr;
// }
//console.log(myMap(students, st =>({...st, age: st.age+1})));

function myFilter(array, func) {
    const newArr = [];
    /* for (let i = 0; i < array.length; i++) {
         if (func(array[i])===true)
         newArr.push(array[i])
     }*/
    array.forEach(st => {
        if (func(st) === true) {
            newArr.push(st);
        }
    })
    return newArr;
}

/*function getNotMarriedSt(st){
    return !st.isMarried ;
}*/

console.log(myFilter(students, st => !st.isMarried));

function myFind(array, func) {
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            return array[i];
        }
    }
}
const getAlex = s => s.name ==="Alex";
console.log(myFind(students, getAlex));