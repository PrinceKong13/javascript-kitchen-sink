// A variable storing my name
let name = 'Will';
//A variable storing the number of states in the United States
const numberOfStates = 50;
//A variable storing the sum of 5 and 4
let sum = 5 + 4;

function sayHello () {
    window.alert ('Hello');
};

sayHello();

function checkAge(userName, userAge) {
    if (userAge < 21) {
        window.alert ('Sorry' + ' ' + userName + ' ' + 'you are not old enough to view this page');
    };
}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

let favoriteVeggies = ['broccoli', 'brussel sprouts', 'cauliflower', 'squash'];
for (let i of favoriteVeggies) {
    console.log(i);
}

let pet = {
    name: 'Gaspode',
    breed: 'Wonder Dog'
};

let person1 = {
    name: 'Chuy' ,
    age: 22
};

let person2 = {
    name: 'Ashton' ,
    age: 19
};

let person3 = {
    name: 'Quinton' ,
    age: 12
};

let person4 = {
    name: 'Stephen' ,
    age: 45
};

let person5 = {
    name: 'Joe' ,
    age: 33
};

let personArray = [person1, person2, person3, person4, person5];

for(let i = 0; i < 4; i++) {
    checkAge(personArray[i].name, personArray[i].age);
}

function getLength(anyWord) {
        return anyWord.length;
}

console.log(getLength('Potato'))