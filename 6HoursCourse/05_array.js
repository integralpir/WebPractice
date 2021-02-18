// const cars = ['mazda', 'bmw', 'ford', 'mersedes']
// const persons = [
//     {name: 'Roman', moneybag: 4200},
//     {name: 'Harry', moneybag: 10000}
// ]
// const fib = [1, 1, 2, 3, 5, 8, 13]
// const smth = [1, 1, 2, 3, 5, 8, 13, '21', true, {}]
//
// console.log(cars)
//
// cars.push('lada')
// cars.unshift('volga')
// console.log(cars)
//
// const x = cars.shift() // возвращает и удаляет первый элемент из массива
// const y = cars.pop() // возвращает и удаляет последний элемент из массива
// console.log(cars)
// console.log(y)
// console.log(x)

// console.log(cars.reverse()) // разворачивает массив
// cars[index] = 'oka'
// console.log(cars)
// console.log(cars.indexOf('bmw')) // возвращает индекс

// const index = cars.indexOf('ford')
// const index1 = person.findIndex(function (person){
//     return person.name === 'Roman'
// })
// console.log(person[index1])

// for (const person of persons) {
//     if (person.moneybag === 10000) {
//         findedPerson = person
//     }
// }
// console.log(findedPerson)

// const person = persons.find(person => person.moneybag === 10000)
// console.log(person)

// console.log(cars.includes('mazda'));

// const upperCaseCars = cars.map(car => car.toUpperCase())
// console.log(upperCaseCars)
//
// console.log(fib.map(digit => digit**2))
//
// const pow2 = digit => digit**2
// const sqr = digit => Math.sqrt(digit)
// console.log(fib.map(pow2).map(sqr))

// const pow2 = digit => digit**2
// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => num > 20) // фильтрует данные
// console.log(pow2Fib)
// console.log(filteredNumbers)

// const persons = [
//     {name: 'Roman', moneybag: 4200},
//     {name: 'Harry', moneybag: 10000}
// ]

// const AllMoney = persons.reduce((acc, person) => { // ТАК НЕПРАВИЛЬНО
//     if (person.moneybag > 5000) {
//         acc += person.moneybag
//     }
//     return acc
// }, 0)

// const AllMoney = persons
//     .filter(person => person.moneybag > 5000)
//     .reduce((acc, person) => { // ТАК ПРАВИЛЬНО
//         acc += person.moneybag
//         return acc
//     }, 0)
//
// console.log(AllMoney)
//
// const displayItems = allItems.filter(item => item.name.contains('something')) // contains - содержится ли подстрока в строке

// задача 1
// const text = 'Привет, мы изучаем JS'
// const reverseText = text.split(' ') // split и join как в питоне
// console.log(reverseText.reverse().join(' '))