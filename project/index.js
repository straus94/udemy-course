


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
    income: [],
    oprionalExpenses: {},
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("минималка");
        } else if (appData.moneyPerDay > 100 & appData.moneyPerDay < 2000) {
            console.log("Средняя зп");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Вісокий уровень зп");
        } else {
            console.log("некорректные данные");
        }
    },
    checkSevings: function(){
        if (appData.savings == true){
            let save = +prompt("how sum sevings");
            let percent = +prompt("how precent?");
            
            appData.monthIncome = save/100/12*percent;
            alert("In month for sevings: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 3; i++){
            //let count = 1;
            let optExpnses = +prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = optExpnses;
            //count++;
        }
    },
    chooseIncomne: function() {
        let items = prompt("Что принесет доп доход? (перечислите через запятую", "");
        
        // while ((typeof(items)) === "number" || items == null || items != "") {
        //     items = prompt("Что принесет доп доход? (перечислите через запятую", "");
        // }

        if (isNaN(items) && items != null && items != "") {
            appData.income = items.split(", "); 
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
            appData.income.forEach(function(item, i, mass) {
                i++;
                alert("Cпособы доп зароботка " + i + ": " + item);
            });
            for (let step in appData) {
                if (appData.hasOwnProperty(step)) {
                    console.log("наша программа включает в себя данные: " + step + ": " + appData[step]);
                }
            }
        } else {
            appData.chooseIncomne();
        }

    }
};

// for (let step in appData) {
//     if (appData.hasOwnProperty(step)) {
//         console.log("наша программа включает в себя данные: " + step + ": " + appData[step]);
//     }
// }

