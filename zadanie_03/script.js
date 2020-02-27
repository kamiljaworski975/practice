/****************************************************************************************************
 1. Dodaj poprawnie plik 'script.js' do pliku index.html. Wyświetl w konsoli: 'Poprawnie dodany skrypt';

 2. Napisz funkcję, która przyjmuje 2 argumenty i zwraca większy z nich.
 Input: 2, 5        Output: 5
 Input: 2, -5       Output: 2
 Input: 'aaa', -5   Output: 'argumenty to nie liczby`

 3. Napisz funkcję, która zwraca stringa z dużą pierwszą literę.
 Input: uppercaseFirstLetter('kamil') Output: '4.1.1: Kamil'
 Input: uppercaseFirstLetter(12)      Output: '4.1.2: to nie jest string'

 4. Wyświetl wartość w konsoli z obiektu labyrinth:
 a) 'Garfield'
 b) 'elephant'
 c) 'flying'
 Input: labirynth = {
        animals: [
            { name: 'Pluto', species: 'dog' },
            { name: 'Garfield', species: 'cat' },
            { name: 'Simba', species: 'lion' },
            { name: 'Maniek', species: 'elephant' }
        ],
        nonAnimals: [
            { name: 'R2D2', species: 'robot', skills: ['fixing', 'flying'] },
            { name: 'C3PO', species: 'robot', skills: ['talking'] }
        ],
        showAnimals: function() { console.log(this.animals) },
        showNonAnimals: function() { console.log(this.nonAnimals) }
    }
 Output: 'a) Garfield b) elephant c) flying'

 5. Napisz pętle, która iteruje od 1 do 50 i na każdej wielokrotności 3 wyświetl Fizz, na każdej wielokrotności 5 Buzz,
 a na wielokrotności 3 i 5 FizzBuzz.
 Output: 'Fizz Buzz Fizz Fizz Buzz Fizz FizzBuzz Fizz Buzz Fizz Fizz Buzz Fizz FizzBuzz Fizz Buzz Fizz Fizz Buzz Fizz FizzBuzz Fizz Buzz'

 6. Napisz funkcję, która przyjmuje 2 parametry (znak, liczbę), która wyświetli ciąg znaków połączony '-' ale nie więcej niż 10 znaków.
 Input: $, 5         Output: $-$-$-$-$
 Input: $, 17        Output: $-$-$-$-$-$-$-$-$-$

 7. Napisz pętle wyświetlającą nazwę pizzy i jej składniki w nawiasie oraz po myślniku cenę.
 Input: [
 {name: 'Margarita', price: 15, ingredients: ['ser', 'sos', 'oregano']},
 {name: 'Roma', price: 18, ingredients: ['ser', 'sos', 'szynka', 'pieczarki']},
 {name: 'Salami', price: 18, ingredients: ['ser', 'sos', 'salami']}
 ]
 Output:
 'Margarita (ser, sos, oregano) - 15
 Roma (ser, sos, szynka, pieczarki) - 18
 Salami (ser, sos, salami) - 18'

 8. Napisz funkcję, która przyjmuje 3 parametry (2x number, 1x string jako operator (dostępne +,-,/,*) i zwraca wartość wyniku:
 Input: 1, '+', 2    Output: '2.3.1: 3'
 Input: 20, '-', 3   Output: '2.3.2: 17'
 Input: -1, '*', 8   Output: '2.3.3: -8'
 Input: 4, '/', 2    Output: '2.3.4: 2'
 Input: 5, '!', 5    Output: '2.3.5: Nie znany operator'
 Input: 4, '/', 0    Output: '2.3.6: Nie można dzielić przez zero'

 9*. Napisz pętle, która zwróci dany ciąg znaków w konsoli (dokładnie w takiej strukturze).
 Output:
 *
 * *
 * * *
 * * * *
 * * * * *

 */

 //Zadanie 1 
 
    // console.log('poprawnie dodany skrypt');

 // Zadanie 2

 /*

 function largerNumb(x, y) {
     if (x > y) {
         console.log(x);
     } else if (y > x) {
         console.log(y);
     } else {
         console.log('argumenty to nie liczby');
     }
 }

 largerNumb(2, -5);
 largerNumb(2, 5);
 largerNumb('aaa', 5);
 console.log('Zadanie 2:' + ' ' +);

 
 //Zadanie 3

 const uppercaseFirstLetter = (s) => {
    if (typeof s !== 'string') {
        return '4.1.2: to nie jest string';
    } else {
        return "4.1.1: " + s.charAt(0).toUpperCase() + s.slice(1);
    }
};
console.log(`Zadanie 3: \n ${uppercaseFirstLetter("Kamil")} \n ${uppercaseFirstLetter(12)}`);



 // Zadanie 4

 

 labirynth = {
    animals: [
        { name: 'Pluto', species: 'dog' },
        { name: 'Garfield', species: 'cat' },
        { name: 'Simba', species: 'lion' },
        { name: 'Maniek', species: 'elephant' }
    ],
    nonAnimals: [
        { name: 'R2D2', species: 'robot', skills: ['fixing', 'flying'] },
        { name: 'C3PO', species: 'robot', skills: ['talking'] }
    ],
    showAnimals: function() { console.log(this.animals) },
    showNonAnimals: function() { console.log(this.nonAnimals) }
}

console.log(labirynth);
console.log(labirynth.animals[1].name);
console.log(labirynth.animals[3].species);
console.log(labirynth.nonAnimals[0].skills[1]);



// Output: 'a) Garfield b) elephant c) flying'

// Zadanie 5 

// 5. Napisz pętle, która iteruje od 1 do 50 i na każdej wielokrotności 3 wyświetl Fizz, na każdej wielokrotności 5 Buzz,
//  a na wielokrotności 3 i 5 FizzBuzz.

function iter() {
    var tablica = {};
    for (var i = 3; i < 51; i += 3) {
        console.log('fizz');
        tablica[i] = 'Fizz';
    }

    for (var i = 5; i < 51; i += 5) {
        console.log('buzz');
        tablica[i] = 'Buzz';
    }

    for (var i = 15; i <51; i *= 3) {
        console.log('FizzBuzz');
        tablica[i] = 'FizzBuzz';
    }
    
   console.log(tablica);
}

iter();





// Zadanie 6

let star = function (char, num) {
    let myCharacter = char;
    for (i = 1; i < num; i++) {
        myChar += "-" + char;
        if (i >= 9) break;
    }
    return myCharacter;
}

console.log("Zadanie 6:");
console.log(star("x", 4));
console.log(star("$", 15));

*

7. Napisz pętle wyświetlającą nazwę pizzy i jej składniki w nawiasie oraz po myślniku cenę.
 Input: [
 {name: 'Margarita', price: 15, ingredients: ['ser', 'sos', 'oregano']},
 {name: 'Roma', price: 18, ingredients: ['ser', 'sos', 'szynka', 'pieczarki']},
 {name: 'Salami', price: 18, ingredients: ['ser', 'sos', 'salami']}
 ]
 Output:
 'Margarita (ser, sos, oregano) - 15
 Roma (ser, sos, szynka, pieczarki) - 18
 Salami (ser, sos, salami) - 18'

 8. Napisz funkcję, która przyjmuje 3 parametry (2x number, 1x string jako operator (dostępne +,-,/,*) i zwraca wartość wyniku:
 Input: 1, '+', 2    Output: '2.3.1: 3'
 Input: 20, '-', 3   Output: '2.3.2: 17'
 Input: -1, '*', 8   Output: '2.3.3: -8'
 Input: 4, '/', 2    Output: '2.3.4: 2'
 Input: 5, '!', 5    Output: '2.3.5: Nie znany operator'
 Input: 4, '/', 0    Output: '2.3.6: Nie można dzielić przez zero'

 9*. Napisz pętle, która zwróci dany ciąg znaków w konsoli (dokładnie w takiej strukturze).
 Output:
 *
 * *
 * * *
 * * * *
 * * * * *
 

 
// Zadanie 7

console.log("Zadanie 7:");
const pizzas = [
    { name: 'Margarita', price: 15, ingredients: ['ser', 'sos', 'oregano'] },
    { name: 'Roma', price: 18, ingredients: ['ser', 'sos', 'szynka', 'pieczarki'] },
    { name: 'Salami', price: 18, ingredients: ['ser', 'sos', 'salami'] },
];

for (i = 0; i < pizzas.length; i++)
    console.log(`${pizzas[i].name} \(${pizzas[i].ingredients}\) - ${pizzas[i].price}`);



// Zadanie 8

function calc(x, sign, y) {
    if (sign === '+') {
        return (x + y);
    } else if (sign === '-') {
        return (x - y);
    } else if ((x === 0 || y === 0) && sign === "/"){
        return "Niemożna dzielić przez zero"; 
    } else if (sign === '*') {
        return (x * y);
    } else if ( sign === '/') {
        return (x / y);
    } else if (sign !== '+' && sign !== '-' && sign !== '*' && sign !== '/') {
        return ('Nie znany operator')
    } else {
        return 'Wprowadzono złe dane';
    }
};

calc();
console.log(`Zadanie 8:\n ${calc(1, "+", 2)}\n ${calc(20, "-", 3)}\n ${calc(-1, "*", 8)}\n ${calc(4, "/", 2)}\n ${calc(5, "!", 5)}\n ${calc(4, "/", 0)}.`);


*/

// Zadanie 9

console.log("Zadanie 9:");

let stars = "\n";
for (var i = 0; i < 5; i++) {
    for (var s = 0; s <= i; s++) {
        stars += "* ";
    }
    stars += "\n";
}

console.log(stars);