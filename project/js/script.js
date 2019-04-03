
let startBtn = document.getElementById("start");

let budgetValue = document.getElementsByClassName("budget-value")[0];
let dayBudgetValue = document.getElementsByClassName("daybudget-value")[0];
let levelValue = document.getElementsByClassName("level-value")[0];
let expensesValue = document.getElementsByClassName("expenses-value")[0 ];
let optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0];
let incomeValue = document.getElementsByClassName("income-value")[0];
let monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0];
let yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0];


let expensesItem = document.getElementsByClassName("expenses-item"),
    expensesBtn = document.getElementsByTagName("button")[0],
    optionalExpensesBtn = document.getElementsByTagName("button")[1],
    countBtn = document.getElementsByTagName("button")[2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    incomeItem = document.querySelector(".choose-income"),
    chackSavings = document.querySelector("#savings"),
    sumValue = document.querySelector(".choose-sum"),
    percentValue = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");


let money, time, optionalSum;

// if (startBtn != onclick) {
//     expensesBtn.disabled = false;
// }
document.getElementsByTagName("button")[0].disabled = true;
document.getElementsByTagName("button")[1].disabled = true;
document.getElementsByTagName("button")[2].disabled = true;
//начать расчет
startBtn.addEventListener('click', function(){
    time = prompt("yyyy-mm-dd", "");
    money = +prompt("money?", "");

    document.getElementsByTagName("button")[0].disabled = false;
    document.getElementsByTagName("button")[1].disabled = false;
    document.getElementsByTagName("button")[2].disabled = false; 
    
    while(isNaN(money) || money == "" || money == null){
        money = +prompt("money?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

//обязательніе расходы
expensesBtn.addEventListener('click', function(){
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value;
        let b = expensesItem[++i].value; //how much
    
        if ((typeof(a)) != null && (typeof(b)) != null  && a != "" && b != "" 
         && a.length < 50) {
             console.log("done");
            appData.expenses[a] = b;
            sum += +b;
            optionalSum = sum;
        } else {
            i = i - 1;
        }
    }
    console.log(sum);
    expensesValue.textContent = sum;
});

//необязательные расходы
optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++){
        let optExpnses = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = optExpnses;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';    
    }
});

//расчет дневного бюджета
countBtn.addEventListener('click', function(){

    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - optionalSum) / 30).toFixed();
        //alert("ежедневный бюджет: " + appData.moneyPerDay);
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            console.log("минималка");
            levelValue.textContent = "минималка";
        } else if (appData.moneyPerDay > 100 & appData.moneyPerDay < 2000) {
            console.log("Средняя зп");
            levelValue.textContent = "средний";
        } else if (appData.moneyPerDay > 2000) {
            console.log("Вісокий уровень зп");
            levelValue.textContent = "высокий уровень";
        } else {
            console.log("некорректные данные");
            levelValue.textContent = "некорректные данные";
        }
    } else {
        dayBudgetValue.textContent = "Error";
    }
});

//возможный доход
incomeItem.addEventListener('input', function(){
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

//чекбокс сбережений
chackSavings.addEventListener('click', function() {
    if (appData.savings == false) {
        appData.savings = true;
    } else {
        appData.savings = false;
    }
});

//накопления за месяц/год
sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

//процент за месяц/год
percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

//объект
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    income: [],
    optionalExpenses: {},
    savings: false,
};

// for (let step in appData) {
//     if (appData.hasOwnProperty(step)) {
//         console.log("наша программа включает в себя данные: " + step + ": " + appData[step]);
//     }
// }

