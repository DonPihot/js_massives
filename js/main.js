// Вечный цикл: for(; ;){}

// Способ перебирать элементы в объекте, где key простая переменная, как и i, j, ... :
// for(let key in object){} - цикл сработает столько раз, сколько ключей в объекте.
// for(let key of arr){console.log(key)} - для массива(вывод содержимого)

// Два одинаковых(внутри) объектах при сравнении выдадут false даже при трёх равно.

// let array = new Array()

// let arr = [1, 2, 3 , 4 , 5]

// Тут результатом выражения становится именно цифра: console.log(arr[arr.length-1]) - Так можно вывести именно последний элемент любого массива.

// И так тоже можно вывести последний элмент: console.log(arr.at(-1))

// console.log(array[1].key) - вот так выводят ключ первого и не только объекта в массиве.



// ДОМАШКА:

let a = ['lorem', 123, true, 'ipsun'];

console.log(a.length);

console.log(a[0]);

console.log(a.at(-1))



let em = [];

em[0] = 'Hello';
em[1] = a;
em[2] = [1,2,3];
em.push(356);
em.push(true);

console.log(em);

delete em[3];
em.pop();

console.log(em);

em.shift();
em.shift();
em.shift();
em.unshift(3);
em.unshift(2);
em.unshift(1); // Поскольку добавляет в начало, этот элемент в массиве будет первым.

console.log(em);



let number = [1,3,5,7,9];

for(let i of number)
{
    console.log(i + 1)
}


