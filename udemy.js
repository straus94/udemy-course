let num = 50;

if (num < 48) {
    console.log("false");
} else if (num > 100) {
    console.log("false");
} else {
    console.log("true");
}

(num == 50) ? console.log("true") : console.log("false");


switch (num) {
    case num < 49:
        console.log("false");
        break;
    case num > 100:
        console.log("false");
        break;
    case num > 52:
        console.log("false");
        break;
    case 50:
        console.log("true");
        break;
    default:
        console.log("not good");
        break;
}

//let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) continue;
    console.log(i);
}

let x = 5;
console.log(x++);

let y = 1;
let z = y = 2;
console.log(z);

console.log([ ] + 1 + 2);
 console.log("1"[0]);
 console.log(2 && 1 && null && 0 && undefined);
 console.log(null ||  2&&3 || 4);
 console.log(+"Infinity" );
 console.log("ёжик" > "яблоко");
 console.log(0 || "" ||  2 ||  undefined || true || false);