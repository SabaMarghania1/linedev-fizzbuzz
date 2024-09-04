// ვქმნით ფუნქციას სახელად FizzBuzz, ფუნქციას გადაეწოდება სამი პარამეტრი, ესენია: საწყისი რიცხვი, საბოლოვო რიცხვი და მიმართულების აღმნიშნელი,
// მაგალითად მომხმარებელმა შეიყვანა საწყის რიცხვად 1 ხოლო საბოლოვო რიცხვად 30, და მიმათულების აღმნიშნელად პლიუსი, ეს რიცხვები კონსოლშ უნდა დაილოგოს 1 დან 30 ის ჩათვლით ზრდადობით, თუ მომხმარებელმა მინუსი შეიყვანა მაშინ რიცხვები ილოგება კლებადობით,
// ⚠️ მაგრამ ⚠️ ისეთი რიცხვი რომელიც იყოფა სამზე კონსოლში რიცხვის მაგივრად უნდა გამოვიდეს Fizz,
// რიცხვი რომელიც იყოფა 5 ზე კონსოლში რიცხვის მაგივრად უნდა გამოვიდეს Buzz,
// და რიცხვი რომელიც იყოფა როგორც 3 ასევე 5 ზე, კონსოლში უნდა გამოვიდეს FizzBuzz

// ⚠️ მომხმარებელს თვითონ უნდა შეეძლოს რიცხვის შეყვანა, ასევე მიმართულების აღმნიშვნელის ან პლიუსის ან მინუსის რომელიც უზრუნველყოფს თუ როგორ დაილოგოს რიცხვები ზრდადობით თუ კლებადობით ⚠️

// ⚠️ თუ მომხმარებელი რიცხვის მაგივრად შეიყვანს სტრინგს, თავიდან უნდა ამოუგდოს შესაყვანი ფრომპთი, გთხოვთ შეიყვანეთ საწყისი რიცხვი, მანამ სანამ მომხმარებელი არ შეიყვანს რიცხვს უნდა ამოვარდეს ერთი და იგივე შესაყვანი ველი, როგორც კი რიცხვს შეიყვანს საწყის უნდა ამოვარდეს მეორე შესაყვანი ველი სადაც ანალოგიურად უნდა შეიყვანოს საბოლოვო რიცხვი, იგივე ლოგიკით მხოლოდ რიცხვის შეყვანა შეეძლოს, და მესამე მიმართულების შესაყვან ველში უნდა შეეძლოს მხოლოდ + ან - ის შეყვანა სხვა შემთხვევაში ხელახლა ამოუგდებს, იგივე ტექსტით რომ შეიყვანოს პლიუსი ან მინუსი.

// 🔥🔥 გუუუდ ლაქქ 🥷🥷

function getCorrectNumber(message) {
  let number;
  do {
    number = Number(prompt(message));
  } while (isNaN(number));
  return number;
}

function getValidDirection() {
  let sign;
  do {
    sign = prompt("Enter only (-|+) to select direction");
  } while (sign === null || (sign !== "-" && sign !== "+"));
  return sign;
}

const num1 = getCorrectNumber("Enter starting number please");
const num2 = getCorrectNumber("Enter ending number please");
const sign = getValidDirection();

function fizzBuzz(n1, n2, sign) {
  if (sign === "+") {
    for (let i = n1; i <= n2; i++) {
      checkfizzBuzz(i);
    }
  } else {
    for (let i = n2; i >= n1; i--) {
      checkfizzBuzz(i);
    }
  }
}

function checkfizzBuzz(num) {
  if (num % 15 === 0) {
    console.log("fizzbuzz");
  } else if (num % 5 === 0) {
    console.log("buzz");
  } else if (num % 3 === 0) {
    console.log("fizz");
  } else {
    console.log(num);
  }
}
fizzBuzz(num1, num2, sign);
