//1.1
let age = prompt("Введите свой возраст:");

if (age !== null) {
    const parsedAge = parseInt(age);
    //если я правильно поняла то с prompt мы получаем строковые данные и их нужно преобразовать в число

  if (isNaN(parsedAge)) {
    alert("Напиши число");
  } else if (parsedAge < 0) {
    alert("Хмм, интересно, но возраст должен быть больше 0 ;)");
  } else if (parsedAge <= 12) {
    alert("Ты - ребенок");
  } else if (parsedAge <= 18) {
    alert("Ты - подросток");
  } else if (parsedAge < 60) {
    alert("Ты - взрослый");
  } else if (parsedAge >= 60){
    alert("Ты - пенсионер");
  }
} else {
  alert("Отмена");
}
//1.2
let number = prompt("Введите число от 0 до 9");

if (number !== null) {
    const parseNumber = parseInt(number);

  if (isNaN(parseNumber)) {
    alert("Напиши число");
  } else if (parseNumber  == 0) {
    alert(`)`);
  } else if (parseNumber == 1) {
    alert(`!`);
  } else if (parseNumber == 2) {
    alert(`@`);
  } else if (parseNumber == 3) {
    alert(`#`);
  } else if (parseNumber == 4){
    alert(`$`);
  } else if (parseNumber == 5) {
    alert(`%`); 
  } else if (parseNumber == 6) {
    alert(`^`); 
  } else if (parseNumber == 7) {
    alert(`&`); 
  } else if (parseNumber == 8) {
    alert(`*`); 
  } else if (parseNumber == 9) {
    alert(`(`); 
  }
} else {
  alert("Отмена");
}

//1.3
let firstNumber = parseInt(prompt("Напиши первое число твоего диапазона"));
let lastNumber = parseInt(prompt("Напиши последнее число твоего диапазона"));
let sum = 0;

for (let i = firstNumber; i <= lastNumber; i++) {
    sum += i;
}
alert(`Сумма твоего диапазона - ${sum}`);

//1.4
let num1 = parseInt(prompt("Введи первое число для нахождения НСД:"));
let num2 = parseInt(prompt("Введи второе число:"));

// Знаходимо НСД
while (num1 !== num2) {
  if (num1 > num2) {
    num1 -= num2;
  } else {
    num2 -= num1;
  }
}
alert(`НСД твоих чисел - ${num1}`);

//1.5
let number5 = parseInt(prompt("Введи число для нахождения всех твоих делителей"));
let emptyArray = [];

for (let i = 1; i <= number5; i++) {
  if (number5 % i === 0) {
    emptyArray.push(i);
  }
}
alert(`Все делители твоего числа - ${emptyArray}`);

//2.1
let numb2 = prompt("Введите пятиразрядное число:");
let ifPalindrome = true;

for (let i = 0; i < 2; i++) {
  if (numb2[i] !== numb2[numb2.length - 1 - i]) {
    ifPalindrome = false;
    break;
  }
}

if (ifPalindrome) {
  alert(`Число ${numb2} является палиндромом`);
} else {
  alert(`Число ${numb2} не является палиндромом`);
}


//2.2
let summ = prompt("Напиши сумму своей покупки");


if (summ !== null) {
    const parsedSumm = parseInt(summ);
    //если я правильно поняла то с prompt мы получаем строковые данные и их нужно преобразовать в число

  if (isNaN(parsedSumm)) {
    alert("Напиши число");
  } else if (parsedSumm < 0) {
    alert("Хмм, интересно, но сумма должна быть больше 0 ;)");
  } else if (parsedSumm < 200) {
    alert(parsedSumm);
  } else if (parsedSumm >= 200 && parsedSumm < 300) {
    alert(`Твоя сумма со скидкой - ${parsedSumm - (parsedSumm * 0.03)}`);
  } else if (parsedSumm >= 300 && parsedSumm < 500) {
    alert(`Твоя сумма со скидкой - ${parsedSumm - (parsedSumm * 0.05)}`);
  } else if(parsedSumm >= 500){
    alert(`Твоя сумма со скидкой - ${parsedSumm - (parsedSumm * 0.07)}`);
  }
} else {
  alert("Отмена");
}
//Либо для каждой скидки присвоить отедльную переменную 
//? let summ0.3 = parsedSumm - (parsedSumm * 0.03);
//? alert(summ0.3.toFixed(2));

//2.3

let positiveNumb = 0;
let negativeNumb = 0;
let zeroNumb = 0;
let pairedNumb = 0;
let unpairedNumb = 0;

for (let i = 0; i < 10; i++) {
  let numb3 = parseInt(prompt("Введите 10 чисел в каждом окне по одному числу:"));
  if (numb3 > 0) {
    positiveNumb++;
  } else if (numb3 < 0) {
    negativeNumb++;
  } else {
    zeroNumb++;
  }
  if (numb3 % 2 === 0) {
    pairedNumb++;
  } else {
    unpairedNumb++;
  }
}
alert(`Положительных - ${positiveNumb}\n Отрицательных - ${negativeNumb}\n Нулей - ${zeroNumb}\n Парных - ${pairedNumb}\n Непарных - ${unpairedNumb}`);

//2.4
let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let firstDayWeek = 0;

while (confirm(`${days[firstDayWeek]}.\n Нажми, чтобы увидеть следующий день недели`)) {
  firstDayWeek = (firstDayWeek + 1) % 7;
}

//3.1
let min = 0;
let max = 100;
let unknownNumber;

// Запитуємо у користувача загадане число та відгадуємо його
while (true) {
  unknownNumber = Math.floor((min + max) / 2);
  let userAnswer = prompt(`Твое число больше ${unknownNumber}, меньше ${unknownNumber} или равно ${unknownNumber}? (Больше - >, Меньше - <, Равно - =)`);

  if (userAnswer === ">") {
    min = unknownNumber + 1;
  } else if (userAnswer === "<") {
    max = unknownNumber - 1;
  } else if (userAnswer === "=") {
    alert(`Мне кажется я угадала твое число, верно - ${unknownNumber}?`);
    break;
  } else {
    console.log("Ты ввел неправильный ответ, попробуйте еще раз");
  }
}
//3.2

//for (let i = 2; i <= 9; i++) {
//  alert(`Таблица умножения для числа ${i}:`);

//  for (let x = 1; x <= 10; x++) {
//    alert(`${i} x ${x} = ${i * x}`);
//  }

//  alert("");
//}


//этот пример загуглила, потому что выводило по одному примеру, выше мой код, в этой разобралась
let table = "";

for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 10; j++) {
    table += `${i} x ${j} = ${i * j}\n`;
  }

  table += "\n";
}

alert(table);
