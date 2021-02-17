// 1 Переменные
// camelCase
//const firstName = 'Roman'
//const lastName = 'Orlov'    // неизменяемая почти тип данных - string
// let age = 22                // изменяемая тип данных - number
// const isProgrammer = true   // тип данных - boolean

// var - изменяемая, лучше не использовать
// const - неизменяемая
// let - изменяемая

// 2 Мутирование
// console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
// console.log(age)
// alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)

// const lastName = prompt  ('Введите фамилию ')
// alert(firstName + ' ' + lastName)

// 3 Операторы
// let currentYear = 2021
// const birthYear = 1998
//
// //const myAge = currentYear - birthYear
//
// const a = 10
// const b = 5
//
// let c = 32

// c += a
//
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)

// 4 Типы данных

// const isProgrammer = true
// const name = 'Roma'
// const age = 22
// let x
//
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)
//
// // примитивные типы данных

// 5 Приоритет операторов

// const fullAge = 22
// const birthYear = 1998
// const currentYear = 2021
//
// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)
// mdn документация по JS

// 6 Условные операторы

// const courseStatus = prompt  ('Status: ') // ready, fail, pending
//
// if (courseStatus === 'ready') {
//     console.log('Курс готов, можно проходить.')
// } else if (courseStatus === 'pending') {
//     console.log('Курс в процессе разработки.')
// } else if (courseStatus === 'fail') {
//     console.log('Курс не получился')
// } else {
//     console.log('???')
// }

//const isReady = true
// Тернарное выражение
//isReady ? console.log('Всё готово!') : console.log('Всё не готово!')

// 7 Булевая логика

// && - и
// || - или
// ! - не, !! - двойное отрицание

// 8 Функции

// function calculateAge(year){
//     return 2021 - year
// }
//
// // const myAge = calculateAge(1998)
// // console.log(myAge)
//
// function logInfoAbout (name, year) {
//     const age = calculateAge(year)
//     if (age >= 0){
//         console.log('Человек по имени ' + name + ', сейчес имеет возвраст ' + age)
//     } else {
//         console.log('Что-то не то...')
//     }
// }

//logInfoAbout('Roma','1998')

// 9 Массивы
// const cars = ['Мазда', 'Мерседес', 'Форд'] // Так правильно

// const cars = new Array('Мазда', 'Мерседес', 'Форд')
// console.log(cars[0])
// console.log(cars.length)
//
// cars[0] = 'Porsche'
// console.log(cars)
// cars[3] = 'Mazda'
// console.log(cars)
// cars[cars.length] = 'Honda'

// 10 Циклы

// const cars = ['Мазда', 'Мерседес', 'Форд', 'Porsche']
//
// // for (let i = 0; i < cars.length; i++) {
// //     const car = cars[i]
// //     console.log(car)
// //     console.log(cars[i])
// // }
//
// for (let car of cars){
//     console.log(car)
// }

// 11 Объекты

const person = {
    firstName: 'Roman',
    lastName: 'Orlov',
    birthYear: 1998,
    languages: ['Ru', 'En'],
    isProgrammer: true,
    greet: function () {
        console.log('greet from person')
    }
}

console.log(person)
console.log(person['lastName'])
console.log(person.firstName)
const key = 'languages'
console.log(person[key])
person.birthYear = 1999
person.hasWife = true
person.greet()
