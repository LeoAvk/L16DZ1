// Задание 1:
// Необходимо вывести на экран числа от 1 до 5.

for (let i = 1; i <= 5; i++) {
    document.write(i + " ")
}

// Задание 2:
// Необходимо вывести на экран числа от 5 до 1.

for (let i = 5; i >= 1; i--) {
    document.write(i + " ")
}

// Задание 3:
// Необходимо вывести на экран таблицу умножения на 3:

// 3*1=3
// 3*2=6
// 3*3=9
// 3*4=12
// 3*5=15
// 3*6=18
// 3*7=21
// 3*8=24
// 3*9=27
// 3*10=30
let number = +prompt("Введите число для умножения");
    for (let i=1; i<=10; i++){
    document.write( number + " * " + i + " = " + (number * i) + "<br> " )
}

// Задание 4:
// Напишите программу, где пользователь вводит любое целое положительное число. А программа суммирует все числа от 1 до введенного пользователем числа.

let n = +prompt("Введите любое положительное число")
let sum = 0;

    for (let i = 0; i <= n; i++) {
            sum += i;
    }

    console.log(sum);

// Задание 5
// Вычислить факториал введенного числа.

let num = +prompt("Введите любое число")
    function factorial(num) {
        result = num;
    for (let i = num - 1; i > 1; --i) {
        result *= i;
    }
            return result;
    }
console.log("Факториал введенного числа - " + factorial(num));

// Задание 6:
// Нарисовать треугольник из символов *. Высоту выбирает пользователь. Например: высота = 10, на экране.
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
let star = +prompt("Введите высоту треугольника (колличество строк) ")
for(let i =0;i<=star;i++){
    for(let j=0;j<i;j++){
        document.write('*');
    }
    document.write('<br/>');
}

// Задание 7:
// Нарисовать прямоугольник любым символом, пользователь вводит символ, ширину и высоту.
let height = +prompt("Введите высоту прямоугольника")
let width = +prompt("Введите ширину прямоугольника")
let symbol = prompt("Введите символ прямоугольника")

for(let i =0; i<=height; i++){
    for(let j=1;j<=width;j++){
        document.write(symbol);
    }
    document.write('<br/>');
}


// Задание 8:
// Нарисовать равнобедренный треугольник.


function paintEqualTriangle() {
    let size = 10;
    let s = '*';
    let space = '&nbsp;&nbsp;';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size - i; j++) {
            document.write(space);
        }

        const stars = i * 2 + 1;

        for (let j = 0; j < stars; j++) {
            document.write(s);
        }

        document.write('<br>');
    }
}
paintEqualTriangle();


// // Задание 9:
// // В программе генерируется случайное целое число от 0 до 100. 
// Пользователь должен его отгадать не более чем за 10 попыток. 
// После каждой неудачной попытки должно сообщаться больше или меньше введенное пользователем число, 
// чем то, что загадано. Если за 10 попыток число не отгадано, то вывести загаданное число.
function getNumber(){
let randomNumber = Math.floor(100*Math.random()) + 1;
console.log(randomNumber)
alert("Компьютер загадал число от 1 до 100. Отгадайте его. У Вас 10 попыток")

    for(i=0; i <=10; i++) {
        let userNumber = +prompt("Введите число")

        if (userNumber == randomNumber){
        alert("Ты угадал! Молодец");
        } else if (userNumber < randomNumber){
        alert("Твое число меньше загаданного");
        } else if (userNumber > randomNumber){
        alert("Твое число больше задуманного");
        } else if (userNumber <= 0 || userNumber > 100){
        alert("Эй! Введи число больше 0");
        return
    }

    }
}
getNumber();


// function guessNumber() {
//     const start = 0;
//     const end = 100;
    
//     const n = start + Math.floor(Math.random() * (end - start));

//     let userTries = 10;
//     let userWon = false;

//     while(userTries > 0 && !userWon) {
//         const userInput = +prompt('Угадай число!');

//         if (userInput === n) {
//             userWon = true;
//         } else if (userInput > n) {
//             console.log(`Загаданное число меньше, вы ввели ${userInput}`);
//         }  else if (userInput < n) {
//             console.log(`Загаданное число больше, вы ввели ${userInput}`);
//         } else {
//             console.error('Число не распознано');
//         }

//         userTries--;
//     }

//     if (userWon) {
//         alert(`Вы угадали число ${n} :)`);
//     } else {
//         alert('Вы проиграли :(');
//     }
// }


