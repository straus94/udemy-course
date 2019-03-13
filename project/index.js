let money = prompt("money?");
let time = prompt("yyyy:mm:dd");
let firstAnswer = prompt("set first");
//prompt("how second");

let secondAnswer = prompt("how much first");
//prompt("how much second");

let boolean = false;

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        firstAnswer : secondAnswer
    },
    oprionalExpenses: {

    },
    savings: false
};

alert(money / 30);



