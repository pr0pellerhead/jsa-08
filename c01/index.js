console.time('label');
console.log('Zdravo Svetu!');

console.error('Грешка!');

let obj = {ime: 'Pero', prezime: 'Perovski'};
console.dir(obj);

let tbl = [
    { ime: 'Pero', prezime: 'Perovski' },
    { ime: 'Pero', prezime: 'Perovski' },
    { ime: 'Pero', prezime: 'Perovski' },
    { ime: 'Pero', prezime: 'Perovski' },
    { ime: 'Pero', prezime: 'Perovski' },
];

console.table(tbl);
console.timeEnd('label');

console.log("Zdravo \nzdravo");
console.log('Zdravo \nzdravo');
console.log(`Zdravo \nzdravo`);


var1 = 'VAR 1';
var var2 = 'VAR 2';
let var3 = 'VAR 3';

const var4 = 'VAR 4';
// var4 = 'Stanko';

const var5 = {ime: 'Pero'};
console.log(var5);
var5.ime = 'Janko';
console.log(var5);


let ime = 'Bojan'; // прост тип - pass by value
let godini = 38; // прост тип - pass by value
let programer = true; // прост тип - pass by value

let lokacija = { grad: 'Skopje', drzava: 'Makedonija' }; // сложен тип - pass by reference

function change(ime, godini, programer, lokacija) {
    ime = 'Vancho';
    godini = 40;
    programer = false;

    lokacija.grad = 'Bitola';
}

change(ime, godini, programer, lokacija);

console.log(ime);
console.log(godini);
console.log(programer);
console.log(lokacija);

function sampleFn(param1) {
    console.log('Функција 1');
}

const sampleFn2 = function() {
    console.log('Функција 2');
};

const sampleFatFn = () => {
    console.log('Функција 3!!!');
};

// what is the difference between arrow and clasic javascript functions

