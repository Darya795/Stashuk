/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const car1 = {
    carBrand: "Audi",
    price: 40000,
    isAvailableForSale: true
}

const car2 = {
    carBrand: "BMW",
    price: 80000,
    isAvailableForSale: false
}

const car3 = {
    carBrand: "Volkswagen",
    price: 30000,
    isAvailableForSale: true
}

const car4 = {
    carBrand: "Tesla",
    price: 70000,
    isAvailableForSale: false
}
const cars =[car1, car2, car3]

cars.push(car4)
console.log(cars)
