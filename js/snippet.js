// 1.01 - переделать в формат:
const num = 500000
num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
// 500 000
console.log(new Intl.NumberFormat('ru-RU').format(num))
// 500 000
