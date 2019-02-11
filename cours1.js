'use strict';

// console.log('Bonjour');


/*
let username; //
username = 'Jeremy';
username = 'Toto';
username = 'Toto2';
username = 3;
// C'est la même choses.
let username = 'Jeremy'
*/

// -------------------------------------------------------------

/*
let myString = 'Hello'
let myString2 = "Hello";
let myString3 = `
Hello
`;
let MyNumber = 1.5;
let myBoolean = true; // false
let myUndefined = undefined;
let myNull = null; // NaN
*/

/*
console.log('Hello ' + 'World');
const str1 = 'Hello';
const str2 = 'World';
console.log(`${str1} ${str2}`);
let a = 10 + 32;
a += 8;
console.log('a', a);
let b = 10 - 5;
a -= 8;
console.log('b', b);
let c = 5 * 7;
console.log('c', c)
let d = 10 / 2;
console.log('d', d)
// let c = 5;
// c++; // c = c + 1 //
// NaN
console.log([1, 2, 3] * 3);
console.log(+'3');
console.log(+true);
console.log('4' + 3); // '43' Il va faire 4 (un string) + 3 donc ça concat (comme en SQL)
console.log(3 + 4 + '7'); // '77'
console.log('3' + 4 + 7); // '347'
/*
>
>=
<
<=
===
!==
*/

/*
console.log('2 > 1', 2 > 1); // true
console.log('2 < 1', 2 < 1); // false
console.log('20 >= 10', 20 >=10); // true
console.log('10 >= 10', 10 >= 10); // true
console.log(4 != '4'); // 4 != 4 true
console.log(4 !== '4'); // false
console.log('hello' === 'hello'); // true
console.log('hello' === 'Hello'); // false
*/

/*
if (condition) {
    console.log('1');
    } else if (condition2) {
        console.log('2');
    }
}
if (5 > 0 && 5 < 10) {
    console.log('1');
} else {
    console.log('2');
}
let a = 20 / 2;
if (20 / 2 > 10 || 20 / 2 < 15) {
    console.log('Yes');
} else {
    console.log('No');
}
*/


/*
let isPrivate = true;
let isMember = false;
if (isPrivate === false || (isPrivate === true && isMember === true)) {
    console.log('can see the group');
} else {
    console.log('cant see the group');
}
const today = 'lundi';
if (today === 'lundi') {
} else if (today === 'mardi') {
} else if (today === 'mardi') {
} else if (today === 'mercredi') {
}
switch (today) {
    case 'lundi':
    console.log(`Aujourd'hui on est ${today}`);
    break;
    case 'mardi':
    console.log(`Aujourd'hui on est ${today}`);
    case 'mercredi':
    break;
    console.log(`Aujourd'hui on est ${today}`);
    case 'jeudi':
    case 'vendredi':
    console.log(`Aujourd'hui on est jeudi ou vendredi`);
    break
    default:
    console.log(`Aujourd'hui on est samedi ou dimanche`);
}
*/

/*
let username = prompt('What is your name ?');
console.log('username', username)
if (username){
    alert(`Slt ${username}`)
} else {
    alert(`tki ?`)
}
*/

/*
function myFunc() {
    // code here
    console.log('Hello World');
}
console.log('MyFunc', myFunc());
const myFunc2 = () => {
    // code here
    return 'Hello World';
}
console.log('MyFunc2', myFunc2())
const sum = (p1, p2 = 0) => {
    return p1 + p2;
}
console.log(sum(4, 10));
*/

/*
const truncate = (str, length, trail) => {
    return str.substring(0,length)
}
*/

/*
const truncate = (str, length, trail = '...') => {
    if (str.length > length) {
        return str.substring(0,length) + trail
    } else {
        return str
    }
}
const res1 = truncate('Je serais truncate', 15, '=>');
console.log('res1', res1);
const res2 = truncate('Je serais truncate', 5)
*/

/*
const myArray = [1, 'Hello', [1,2,3]]
console.log('MyArray', myArray);
console.log(typeof myArray);
console.log([0]);
const arr = [0,1,2,3,4,5];
arr/map(x => {
    console.log('x', x)
    return x / 2;
});
let res = [];
arr.forEach(num => {
    console.log('num', num);
    res.push(num / 2);
})
console.log('res', res)
*/

/*
const myArray = [1,2,3];
const myArray = myArr;
MyArr2[0] = 0;
console.log(myArr)
console.log(myArr2)
const myArr = [1,2,3];
const myArr2 = [...myArr];
*/

/*
const user = {
    id: 1,
    name: 'Jeremy',
    email:'email@email.com'
    car: {
        color: 'red'
    },
    test: [1,2,3],
}
console.log(user.id);
console.log(user.['id']);
console.log(user.id.color);
*/

const cart = [
    { item: "a", price: 2, quantity: 1},
    { item: "b", price: 3, quantity: 1},
    { item: "c", price: 4, quantity: 1}
];

const res = cart.reduce((acc, curVal) => {
    console.log('acc', acc)
    console.log('curVal', curVal)
    return acc += curVal.price * curVal.quantity
}, 0);

console.log('res', res)
