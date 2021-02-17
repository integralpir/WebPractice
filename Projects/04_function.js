// 1 Function

//Function Declaration в коде может находится после вызова функции
// function greet(name) {
//     console.log(`Привет ${name}`)
// }
//
// // Function Expression должна находиться до вызова функции (как в питоне)
// const greet2 = function greet2(name) {
//     console.log(`Привет ${name}`)
// }
//
// // greet('Рома')
// // greet2('Лена')
//
// //console.dir(greet)
//
// 2 Анонимные функции
// let counter = 0
// const interval = setInterval(function () {
//     if (counter === 5){
//         clearInterval(interval) // clearTimeout
//     } else {
//         console.log(++counter)
//     }
// }, 1000)

// 3 Стрелочные функции

// function greet(name) {
//     console.log(`Привет ${name}`)
// }
//
// const arrow = (name) =>  {
//     console.log(`Привет ${name}`)
// }
//
// const arrow2 = name => console.log(`Привет ${name}`)
//
// arrow2('Роман')
//
// const pow2 = num => num ** 2
//
// console.log(pow2(5))

// 4 Параметры по умолчанию

// const sum = (a, b = 1) => a + b
// const sum2 = (a = 40, b = a * 2) => a + b
// console.log(sum(2, 5))
//
// function sumAll(...all) {
//     let result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result
// }
//
// const res = sumAll(1, 2, 3, 4, 5, 6, 7)
//
// console.log(res)

// 5 Замыкание
function createMember (name) {
    return function(lastName){
        console.log(name + lastName)
    }
}

const loqWithLastName =  createMember('Roman')
console.log(loqWithLastName('Orlov'))

