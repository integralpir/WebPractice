//1 Number
// const integer = 42
// const float = 42.42
// const pow = 2e3 // e 'кол-во нулей после числа'
//
// console.log(pow)
//
// // Number. как библиотека о числах
// console.log(Math.pow(2, 53) - 1)
// // можно получить кучу математических величин а-ля бесконечность
// // возведения в степень, максимальное целое число для операций в JS
// // просто максимальное число в JS и тд
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(NaN) // это не число, но его тип число появляется вместо ошибки при вычислениях
// console.log(isNaN(2 * undefined))
// console.log(Number.isFinite(4)) // false
// console.log(Number.isFinite(Infinity))
//
// const stringInt = '42'
// const stringFloat = '42.42'
// console.log(parseInt(stringInt) + 2) // 44
// console.log(Number(stringInt) + 2) // 44
// console.log(+stringInt + 2) // 44
//
// console.log(parseFloat(stringFloat) + 2) // 44.42

// console.log(0.2 + 0.4) // 0.6...01
// console.log((0.2 + 0.4).toFixed(4)) // 0.6000 - string
// console.log(+(0.2 + 0.4).toFixed(1)) // 0.6 - number
// console.log(parseFloat((0.2 + 0.4).toFixed(4))) // преобразует в строку с 4 знаками после запятой

//2 BigInt
//
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(90071992547409919999999n) // bigint
// bigint нужен для преодоления MAX_SAFE_INTEGER,работает только с BigInt

// console.log(10n - 4) // err

// 3 Math

// console.log(Math.E)
// console.log(Math.PI)
//
// // math такая же как и везде
// console.log(Math.pow(5,3)) // степень
// console.log(Math.max(42, 12, 23, 11, 422))
// console.log(Math.min(42, 12, 23, 11, 422))
// console.log(Math.floor(4.6)) // округление в меньшую сторону
// console.log(Math.ceil(4.3)) // в большую сторону
// console.log(Math.round(4.6)) // к ближайшему целому
// console.log(Math.random())

// 4 example

// function getRandomBetween(min, max){
//     return Math.round(Math.random() * (max - min) + min)
// }
//
// console.log(getRandomBetween(10, 42))
