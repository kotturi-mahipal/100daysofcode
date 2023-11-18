// TODO: Counting Cards
// a. Create a card counting function.
// b. take card as the input.
// c. Write a switch statement to
// c1. If the card is 2,3,4,5,6 - increment the count and return `{count} Bet`
// c2. If the card is 7,8,9 - no count change and return `{count} Hold`
// c3. If the card is 10,J,K,Q,A - decrement the count and return `{count} Hold`
let count = 0;

const cc = (card) => {
    switch (card) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }

    if(count > 0) {
        return count + " Bet";
    }
    return count + " Hold";
}

console.log(cc(2));
console.log(cc('J'));
console.log(cc(9));
console.log(cc(2));
console.log(cc(7));