


let money, time;

function start(){
    money = +prompt("money?", "");
    time = prompt("yyyy:mm:dd", "");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("money?", "");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    oprionalExpenses: {},
    savings: true
};

//for
function chooseExpenses() {
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
}

chooseExpenses();

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

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();

    alert("ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel(){
    if (appData.moneyPerDay < 100) {
        console.log("минималка");
    } else if (appData.moneyPerDay > 100 & appData.moneyPerDay < 2000) {
        console.log("Средняя зп");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Вісокий уровень зп");
    } else {
        console.log("некорректные данные");
    }
}

detectLevel();


function checkSevings(){
    if (appData.savings == true){
        let save = +prompt("how sum sevings");
        let percent = +prompt("how precent?");
        
        appData.monthIncome = save/100/12*percent;
        alert("In month for sevings: " + appData.monthIncome);
    }
}

checkSevings();

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++){
        let count = 1;
        let optExpnses = +prompt("Статья необязательных расходов?");
        appData.optionalExpenses = optExpnses;
        count++;
    }
}

chooseOptExpenses();