let money = +prompt("money?", "");
let time = prompt("yyyy:mm:dd", "");


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    oprionalExpenses: {},
    savings: false
};

//for
for (let i = 0; i < 2; i++) {
    let firstAnswer = prompt("введите обязательную статью расходов");
    let secondAnswer = prompt("во сколько обойдется");

    if ((typeof(firstAnswer)) === "string" && (typeof(firstAnswer)) != null
     && (typeof(secondAnswer)) != null && firstAnswer != "" && secondAnswer != "" 
     && firstAnswer.length < 50) {
         console.log("done");
        appData.expenses[firstAnswer] = secondAnswer;
    } else {

    }
};

//while

// let i = 0;
// while(i < 2) {
//     let firstAnswer = prompt("введите обязательную статью расходов");
//     let secondAnswer = prompt("во сколько обойдется");

//     if ((typeof(firstAnswer)) === "string" && (typeof(firstAnswer)) != null
//      && (typeof(secondAnswer)) != null && firstAnswer != "" && secondAnswer != "" 
//      && firstAnswer.length < 50) {
//          console.log("done");
//         appData.expenses[firstAnswer] = secondAnswer;
//     } else {

//     }
//     i++;
// };


//do while
// let i = 0;
// do {
//     let firstAnswer = prompt("введите обязательную статью расходов");
//     let secondAnswer = prompt("во сколько обойдется");

//     if ((typeof(firstAnswer)) === "string" && (typeof(firstAnswer)) != null
//      && (typeof(secondAnswer)) != null && firstAnswer != "" && secondAnswer != "" 
//      && firstAnswer.length < 50) {
//          console.log("done");
//         appData.expenses[firstAnswer] = secondAnswer;
//     } else {

//     }
//     i++;
// } while (i <= 3);


appData.moneyPerDay = appData.budget / 30;

alert("ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("минималка");
} else if (appData.moneyPerDay > 100 & appData.moneyPerDay < 2000) {
    console.log("Средняя зп");
} else if (appData.moneyPerDay > 2000) {
    console.log("Вісокий уровень зп");
} else {
    console.log("некорректные данные");
}



