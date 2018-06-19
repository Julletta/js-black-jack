console.log("Привет из скрипта");

function getSum(hand) {
    var sum = 0;
    for (var i = 0; i < hand.length; i++) {
        var card = hand [i];
        if (card != 'A') {
            if (card == 'J' || card == 'Q' || card == 'K') {
                sum = sum + 10;
            } else {
                sum = sum + parseInt(card);
            }
        } else {
            if (sum > 10) {
                sum = +1;
            } else {
                sum = sum + 11;
            }
        }
    }
    return sum;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function getCard() {
    var cards = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    return cards [getRandomInt(0, cards.length - 1)];

}

function getStatus() {
    return 'Дилер: ' + dealer.join ('') + '.';

}

var dealer = [getCard()];
var player = [getCard(), getCard()];



alert('Дьявольское везение! Black Jack на раздаче! $_$');
var answer = '';
do {
    answer = prompt(getStatus() + ' Хотите еще карту? 1 - да, иначе - нет');

    if (answer == '1') {
        player.push(getCard());
    }

    sum = getSum(player);
    if (sum > 21) {
        alert('Перебор ' + getStatus());
        break;
    } else if (sum == 21) {
        alert('Black Jack! ' + getStatus());
        break;
    }
} while (answer == '1');

while (getSum(dealer) < 17) {
    dealer.push(getCard());
}

var sumDealer = getSum(dealer);
var sumPlayer = getSum(player);
if (sumDealer > 21) {
    alert('У дилера перебор ' + getStatus());
} else if (sumPlayer == sumDealer) {
    alert('Ничья! ' + getStatus());
} else if (sumPlayer > sumDealer) {
    alert('Выигрыш ' + getStatus());
} else {
    alert('Проигрыш ' + getStatus());
}


