const message = '    Hello Javascripts students    '
const messageToLowerCase = message.toLowerCase()
const messageToUpperCase = message.toUpperCase()
const messageNoSpaces = message.trim()
const newMessage = message.replace('students', 'Engineers')
const withSubString = message.substring(9,14)
const mySchool = 'Boca Code'
const myString = ' Hello level up students!'
const newString = myString.split(' ')

 
console.log(message)
console.log(messageToLowerCase)
console.log(messageToUpperCase)
console.log(messageNoSpaces)
console.log(newMessage)
console.log(withSubString)
console.log(messageNoSpaces.startsWith('Hello'))
console.log(messageNoSpaces.endsWith('students'))
console.log(message.includes('Javascript'))
console.log(mySchool.indexOf('Code'))
console.log(newString.reverse());