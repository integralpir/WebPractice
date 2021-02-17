const person = {
    name: 'Roman',
    age: 22,
    isProgrammer: true,
    languages: ['ru', 'en'],
    'Complex key': 'complex Value',
    ['key_' + (1 + 3)]: 'Computed Key', // key_4
    greet() {
        console.log('greet from person')
    },
    info() {
        // console.log('this:', this)
        console.info('Информация про человека по имени:', this.name)
    }
}

// console.log(person.name)
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person['Complex key'])
// person.greet()
// person.age++
// person.languages.push('by')
// console.log(person)
// person['key_4'] = undefined
// console.log(person['key_4'])
// delete person['key_4']
// console.log(person)

// const {name: personName, age: personAge, languages: personLanguages} = person
//
// console.log(personAge)
//
// for (let key in person) {                    //так правильно, если сделать без if, то цикл забежит в proto
//     if (person.hasOwnProperty(key)) {        //цикл for in бежит не только по ключам но и по прототипам
//         console.log('key:', person[key])
//     }
// }
//
// Object.keys(person).forEach((key) => {
//     console.log('key:', key)
//     console.log('value:', person[key])
// })

// Контекст
// person.info()

const logger = {
    keys() {
        console.log('Object Keys: ', Object.keys(this))
    },
    keysAndValues(){
        Object.keys(this).forEach(key => {              // не пользуйся function, или сохраняй контекст до функции
            console.log(`"${key}": ${this[key]}`)       // стрелочные функции не создают свой контект, пользуйся ими
        })
    },
    withParams(top = false, between = false, bottom = false){
        if (top){
            console.log('------- start -------')
        }
        Object.keys(this).forEach((key, index, array) => {              // не пользуйся function, или сохраняй контекст до функции
            console.log(`"${key}": ${this[key]}`)
            if (between && index !== array.length - 1){
                console.log('---------------------')
            }
        })
        if (bottom){
            console.log('-------- end ---------')
        }
    }
}

// const bound = logger.keys.bind(person)
// bound()
// logger.keys.call(person)

logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])