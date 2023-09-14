const {format} = require('date-fns')

const data = new Date();
const ceiaDeNatal = format(new Date(2020, 11, 20, 21,30), 'dd-MMMM-yyyy H:m')

console.log(data)
console.log(ceiaDeNatal)
