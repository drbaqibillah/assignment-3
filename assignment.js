

// kilometerToMeter;
function kilometerToMeter(kilometer)
{
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(Math.abs(88));
console.log(result);

// budgetCalculator;
function budgetCalculator(watch,phone,laptop)
{
    var watch = 50 * watch;
    watch = Math.abs(watch);
    var phone = 100 * phone;
    phone = Math.abs(phone);
    var laptop = 500 * laptop;
    laptop = Math.abs(laptop);
    var total = watch+phone+laptop ;
    return total
}
var sum = budgetCalculator(1,-6,5);
console.log(sum);

// hotelCost;

function hotelCost(day) 
{
    var cost = 0;
    if(day<=10) {
        cost = day * 100;
    }
    else if (day<=20) {
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = day - 20;
        var finalPart =remaining * 50;
        cost = firstPart + secondPart +finalPart;
    }
    return cost;
}

var totalCost = hotelCost(Math.abs(77));
console.log(totalCost);

// megaFriend;


function megaFriend(names) 
{
    var longName = names[0];
    for (i = 0; i < names.length; i++) {
        if (names[i].length > longName.length) {
            longName = names[i];
        }
    }
    return longName;
    }
    
    
console.log(megaFriend(["Aguero", "Di Maria", "Messi", "Ryhan", "Abdullah", "Mishu", "Zayed", "Rafiq"]));