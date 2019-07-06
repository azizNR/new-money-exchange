// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var result = {};
    var amount;

    if (!currency || currency <= 0) return {};
    if (currency > 10000) return  {error: "You are rich, my friend! We don't have so much coins for exchange"};

    amount = 0;
    while (currency >= 50) {
        currency -= 50;
        amount++;
    }
    if (amount) {
        result.H = amount;
    }

    amount = 0;
    while (currency >= 25) {
        currency -= 25;
        amount++;
    }
    if (amount) {
        result.Q = amount;
    }
    amount = 0;
    while (currency >= 10) {
        currency -= 10;
        amount++;
    }
    if (amount) {
        result.D = amount;
    }

    amount = 0;
    while (currency >= 5) {
        currency -= 5;
        amount++;
    }
    if (amount) {
        result.N = amount;
    }

    amount = 0;
    while (currency >= 1) {
        currency -= 1;
        amount++;
    }
    if (amount) {
        result.P = amount;
    }
    return result;
}
