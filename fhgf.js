// const num = [1,2,3,4,5,6,7,8,9,10];

// const num2 = num.reduce((acc, item) => acc + item, 0);

// console.log(num2);


// console.log("----------------------------------------------------------------")



// const num7 = [1,2,3,4,5,6,7];

// const num8 = num7.reduce((acc, item) => Math.max (acc, item), 0);

// console.log(num8);

// console.log(Math.max(1,2,3,4,5,6,7));


// const num9 = [1,2,3,4,5,6];



// console.log(Math.max(...num9, 1001, 20000));


// console.log("----------------------------------------------------------------");

// const arr11 = ["Costa", "Alex", "Camp", "John"];

// const fg1 = arr11.reduce((acc,item, index) => {
//     acc[index] = item //[index];
//     return acc;
// }, {});


// console.log(fg1);


// const srr4 = Object.assign({},arr11);

// console.log(srr4);



//----------------------------------reverse----Reversed--------------------------

//reverse-міняє оригінальний масив (розвиратє або перевертає)
//toReversed-Робить копію і перевертає масив


// const l1 = ["b1", "b2", "b3", "b4", 10];

// const reversed = l1.reverse();

// console.log(reversed);

// console.log("--------------------------------")

// const l2 = [1, 2, 3, 4, 5];

// const reversed2 = l2.toReversed();


// console.log(reversed2);


//----------------------------------sort----toSorted--------------------------------

 
//sort-сортує оригінальний масив 

//toSorted-робить копію і потім сортує масив 


// const l2 = [90, 3, 7,4, 6, 5, 2, 9, 8, 1];

// const l3 = l2.sort()

// console.log(l3);

// console.log(l2);

// console.log(Object.is(l2,l3));

// console.log(l2 === l3);


// console.log("--------------------------------")

// const b4 = [21, 32, 45, 50, 1, 2, 3, 4, 5, 6, 7,]

// const b5 = b4.sort((a, b) => a - b);

// // const b5 = b4.sort();

// console.log(b5);


// let =str =["S,b,c,U,e,F,g,H,"]

// str.sort()

// console.log(str);

// let objA = [
//     {name: "A", age:30},
//     {name: "C", age:20},
//     {name: "B", age:40},
//     {name: "D", age:10},
// ]

// objA.sort((a, b) => b.age - a.age);

// console.log(objA); // Виведе [{name: "C", age: 20}, {name: "B", age: 40}, {name: "A", age: 30}, {name: "D", age: 10}]


// console.log("---------------------------------------")


// const num = [1, 10, 3, 4, 5, 6, 21, 7];

// const sorted = num.toSorted((a, b) => {
//     return a - b;
// });


// console.log(num)

// console.log(sorted)

// console.log(Object.keys(num, sorted))




// "Пояснення чому починається з 50 і як зробитиб щоб починався з 1"

// Ваш код правильно використовує метод sort для сортування масиву у порядку спадання. Ось як виглядає повний і правильний код:
// const b4 = [21, 32, 45, 50, 1, 2, 3, 4, 5, 6, 7];

// const b5 = b4.sort((a, b) => b - a);

// console.log(b5); // Виведе [50, 45, 32, 21, 7, 6, 5, 4, 3, 2, 1]
// Результат буде [50, 45, 32, 21, 7, 6, 5, 4, 3, 2, 1], що відповідає сортуванню чисел у порядку спадання.

// Якщо закоментувати функцію порівняння, і використовувати тільки sort(), результати будуть лексикографічними:
// const b4 = [21, 32, 45, 50, 1, 2, 3, 4, 5, 6, 7];

// const b5 = b4.sort(); // Закоментовано функцію порівняння

// console.log(b5); // Виведе [1, 2, 21, 3, 32, 4, 45, 5, 50, 6, 7]
// У цьому випадку результат буде [1, 2, 21, 3, 32, 4, 45, 5, 50, 6, 7], оскільки sort без функції порівняння сортує елементи як рядки, що призводить до лексикографічного порядку.


//-------------------------------with---------------------------------



// const k2 = [1, 2, 3, 4, 5, 6, 7]

// k2[1] = "YOUR"

// const k3 = k2.with(2, true);


// console.log(k3);


// console.log(k2);


//-------------------------------виклик---медота-по--ланцюгу---------------------------------


// let k2 = [1, 2, 3, 4, 5, 6];

// let sortElement = k2.filter((num) => num % 2 === 0).sort((a,b)=> a-b);

// console.log(k2);

// console.log(sortElement);

// console.log("---------------------------------------")

// let g1 = ["bogdan", "mihael", "Igor", "kolya", "kolya", "mihael"];

// // Створення масиву унікальних імен
// let uniqNames = g1.filter((item, index, arr) => arr.indexOf(item) === index);

// console.log(g1); // Виведе ["bogdan", "mihael", "Igor", "kolya", "kolya", "mihael"]
// console.log(uniqNames); // Виведе ["bogdan", "mihael", "Igor", "kolya"]

// // Пошук індексу "mihael" у масиві унікальних імен
// console.log(uniqNames.indexOf("mihael")); // Виведе 1

// // Створення масиву унікальних імен знову (інший спосіб)
// let g2 = g1.filter((item, index, arr) => arr.indexOf(item) === index);

// console.log(g2); // Виведе ["bogdan", "mihael", "Igor", "kolya"]



// console.log("---------------------------------------");


// const sort = [1, 2, 3, 4, 5, 6, 7, 8, 9]



// let sortArray = sort
// .filter((num) => num % 2 === 0 )
// .reduce((acc, curr) => acc + curr );


// console.log(sortArray);


// console.log("---------------------------------------");

// let w1 = ["apples", "banana", "rapes", "cheese"];

// let w2 = w1.map(fruit => fruit.toUpperCase()).toSorted();

// console.log(w1); // Виведе ["apples", "banana", "rapes", "cheese"]
// console.log(w2); // Виведе ["APPLES", "BANANA", "CHEESE", "RAPES"]


// //-------------------------------модифікація-масиву---------------------------------

// //-------------------------------багатовимірні----масиви---------------------------------


// let m1 = [
//  [1, 2, 3],
//  [4, 5, 6], 
//  [7, 8, 9]

// ];


// console.log(m1);

// console.log(m1[0]);

// console.log(m1[2]);

// console.log(m1[1][2]);

// let m2 = m1.map(row => row.map(num => num * 2));



// const c1 =[
//     [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ],
// [
//     [10, 11, 12],
//     [13, 14, 15],
//     [16, 17, 18],
// ],
// ];

// console.log(c1);
// console.log(c1[0][0]);
// console.log(c1[0][1][1]);
// console.log(c1[1][1][1]);


// m1.push(10, 11, 12, 13, 14, 15, 16)
// m1.pop();

// console.log(m1);

// // const c2 = c1.map((el) => el.map((val) => val.map((item) => item * 5)))


// // console.log(c2);


// for(let i = 0; i < c1.length; i++) {
//     for(let j = 0; j < c1[i].length; j++) {
//         for(let k = 0; k < c1[i][j].length; k++) {
//            console.log(c1[i][j][k]);

//             // c1[i][j][k] *= 5;
//         }
//     }
// }

// c1[1].push([9,10]);



// console.log(c1);



//--------------------------------some-----every--------------------------------


//some-портає значення trueб хочаб раз при правильній  умові, якщо не буде виконана умова буде falhse

//every-повртає tru якщо всі елементи відводають правильній умовіб якщо ні то повертає falshe



// const m1 = [1, 2, 3, 4, 5, 2, 3, 8];

// console.log(m1.indexOf(2));       // Виведе 1, оскільки 2 знаходиться на індексі 1
// console.log(m1.lastIndexOf(2));   // Виведе 1, оскільки 2 є лише один раз в масиві і знаходиться на індексі 1


// let namber = [1, 2, 3, 4, 5, 6, 7, 8]
// let n1 = namber.some((num) => num % 2 === 0);


// console.log(n1);


// console.log("----------------------------------------------------------------")


// let namber1 = [1, 2, 3, 4, 5, 6, 7, 8]


// let n2 = namber1.every((num) => num % 2 === 0);

// console.log(n2);



// console.log("----------------------------------------------------------------")



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// let sum = arr.every(num => num > 0 ) //=> accumulator + currentValue);


// console.log(sum);




// console.log("----------------------------------------------------------------")


// let g1 = ["bogdan", "mihael", "Igor", "kolya", "kolya", "mihael"];

// let allIncludeY = g1.every((item) => item.includes("y"));

// console.log(allIncludeY); // Виведе false, оскільки не всі імена включають букву "y"



// const a2 = ["a", "b", "c", "d", "e"]

// //let allStartWithA = a2.every((item) => item.startsWith("a"));

// console.log(a2.includes('a')); // Виведе true, оскільки всі ��мена починаються з букви "a"


//------------------------------------findindex----------------------------


//findindex-для пошуку першого елемента в  масиві 

// const h1 = [31, 28, 39, 31, 32, 33, 34, 35]

// const index = h1.findIndex((h1) => h1 >= 33 && h1 <= 34);

// console.log(index); // Виведе 3, оскільки 30 �� 31 знаходяться на ��ндексах 3 та 4

// const h2 = [
//         {name: "A", age:30},
//         {name: "C", age:20},
//         {name: "B", age:40},
//         {name: "D", age:10},
//     ]


// const index1 = h2.findIndex(h2 => h2.name === "C" )//>= 33 && h2 <= 34); 


// console.log(index1); // Виведе 1, оскільки 20 �� 20 знаходяться на ��ндексах 1 та 2

// // console.log("----------------------------------------------------------------")


//  const h3 = [31, 28, 39, 31, 32, 33, 34, 35]

//  const index2 = h3.findIndex((h3) => h3 >= 33 && h3 <= 34);




//-----------------------------flat-----------------------------------


//flat-для сплющування вложиних під масивів на один рівень глибини або на декілька


// const arr = [1, 2, [3, 4], [5, [6, 7, [8, 9]]]];

// const arr2 = arr.flat()

// console.log(arr2); // Виведе [1, 2, 3, 4, 5, 6, 7, 8, 9]



// console.log("----------------------------------------------------------------")


// const arr3 = [1, 2, 9, [3, 4, [5, 8, [6, 8]]]];

// const arr4 = arr3.flat(3);

// console.log(arr4); // Виведе [1, 2, 9, 3, 4, 5, 8, 6, 8]


// console.log("----------------------------------------------------------------")



// const arr5 = [1, 2, 9, [3, 4, [5, 8, [6, 8 ]]]];

// const arr6 = arr5.flat().map((num) => num  * 2);

// // const arr6 = arr5.flatMap(item => item);

// console.log(arr6); // Виведе [1, 2, 9, 3, 4, 5, 8, 6, 8]


// console.log("----------------------------------------------------------------")


// const arr7 = [1, 2, 9, [3, 4, [5, 8, [6, 8]]]];

// // const arr8 = arr7.flat(Infinity);

// console.log(arr8); // Виведе [1, 2, 9, 3, 4, 5, 8, 6, 8]


//------------------------------------flatMap----------------------------



//flatMap-визиває колбек функцію і обєднює в новий масив

// const arr9 = [1, 2, 9, [3, 4, [5, 8, [6, 8]]]];

// const arr10 = arr9.flatMap(item => item);

// console.log(arr10); // Виведе [1, 2, 9, 3, 4, 5, 8, 6, 8]


//  console.log("----------------------------------------------------------------")


//  const arr11 = [1, 2, 9, [3, 4, [5, 8, [6, 8]]]];

//  const arr12 = arr11.flatMap(item => item.map(i => i * 2));

//  console.log(arr12); // Виведе [2, 4, 18, 6, 8, 16, 16, 12, 16]


//-----------------------------------split---join-----------------------------


//split-методи строк і являється для розділу між ними(робить із строчки масив )

//join-(із масива строчку )


// const str = "Hello, World!";

// const arr13 = str.split("");

// console.log(arr13); // Виведе ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "!"]
// console.log(str)


// // console.log("----------------------------------------------------------------")



// const str1 = "Hello, World!";

// const arr14 = str1.split(", ");

// console.log(arr14); // Виведе ["Hello", "World!"]
// console.log(str1)


// // console.log("----------------------------------------------------------------")


// const str9 = "Hello, World!";

// const arr15 = str1.split(", ", 1);

// console.log(arr15); // Виведе ["Hello", "World!"]
// console.log(str9)



// // console.log("----------------------------------------------------------------")


// const str2 = "Hello, World!";

// const str3 = str2.split(", ").join(" ");

// console.log(str3); // Виведе "Hello World!"


// // console.log("----------------------------------------------------------------")


// const str4 = "Hello, World!";

// const str5 = str4.split(", ").join("-");

// console.log(str5); // Виведе "Hello-World!"


// console.log("----------------------------------------------------------------")


// const js = "javascript";

// console.log(js); // Виправлено синтаксис

// const jsArr = js.split(''); // Виправлено метод split для розділення рядка на символи

// console.log(jsArr); // Виправлено синтаксис
