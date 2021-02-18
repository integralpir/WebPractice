// const name = 'Роман'
// function getAge(age){
//     return age
// }
// const age = 22
// const output = `Привет меня зовут ${name}, мне ${getAge(age)} года.`
// // можно записывать тернарники ${age != 22 ? yes : no}
// console.log(output)
//
// const output = `
//     <div>This is div</div>
//     <p>This is o</p>
// `
//
// console.log(output)

// const name = 'Роман'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('ан')) // можно и один символ, если не найдёт, то выведет -1
// console.log(name.startsWith('Ро')) // выдает true / false
// console.log(name.toLowerCase().endsWith('н')) // можно комбинировать методы
// console.log(name.repeat(3)) // повторяет неск раз
// const string = '                password'
// console.log(string.trim()) // есть ещё left right


// function loqPerson(s, name, age) {
//     if (age < 0){
//         return 'Ещё не родился'
//     }
//     console.log(s, name, age)
//     return `${s[0]}${name}${s[1]}${age}${s[2]}`
// }
//
// const personName = 'Roman'
// const personAge = 22
// const output = loqPerson`Имя: ${personName}, Возраст: ${personAge}!`
//
// console.log(output)