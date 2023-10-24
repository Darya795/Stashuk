/** ЗАДАЧА 50 - Шаблонные строки
 *
 * 1. Создайте функцию "templateLiteral" с одним параметром "num"
 *
 * 2. Функция должна возвращать многострочную строку.
 *
 * 3. Ниже приведены примеры вызовов функции.
 */

function templateLiteral(inputNumber){
    
    return `Число ${inputNumber}.
            Это число ${inputNumber < 10 ? 'меньше' : 'больше или равно'} 10.
            Квадратный корень это числа - ${Math.sqrt(inputNumber)}.`
}
// ТЕСТ 1
const myNumber = 9
console.log(templateLiteral(myNumber))


// ТЕСТ 2
const myAnotherNumber = 25
console.log(templateLiteral(myAnotherNumber))
