console.log("Привет из скрипта");

function getSum(hand) {
    var sum = 0;
    for (var i = 0; i < hand.length; i++) {
        var card = hand [i];
        if (card = 'A') {
            if (card == 'J' || card == 'Q' || card == 'K') {
                sum = sum + 10;

            } else {
                sum = sum + parseInt(card);
            }
        }
    }
    for (var i = 0; i < hand.length; i++) {
        var card = hand [i];
        if (card == 'A') {
            if (sum > 10) {
                sum = +1;
            } else {
                sum = sum + 11;
            }
        }
    }
    return sum;
}

alert('Дьявольское везение! Black Jack на раздаче! $_$');
var answer = '';
do {
    answer = prompt(getStatus() + 'Хотите еще карту? 1 - да, иначе - нет');
    if (answer == '1') {
        player.push(getCard());
    }
}
var dealer = [getCard();
var dealer = [getCard(), getCard()];

function getStatus() {
    return 'Дилер:' + dealer.join('') + 'Игрок:' + player.join('') + '.';
}

var dealer = [getCard()];
var player = [getCard(), getCard()];
if (getSum(player) == 21) {
}
sum = getSum(player);
if (sum > 21) {
    alert('Перебор' + getStatus());
    break;
} else if (sum == 21) {
    alert('Black Jack!' + getStatus());
    break;
}
}else
{
    while (getSum(dealear) < 17) {
        dealer.push(getCard());
    }
}
var SumDealear = getSum(dealer);
var SumPlayer = getSum(player);
if (SumDealer == 21) {
    alert('У дилера перебор' + getStatus());
} else if (sumPlayer == sumDealer) {
    alert('Ничья!' + getStatus());
} else if (SumPlayer > sumDealer) {
    alert('Выигрыш') + getStatus();
} else {
    alert('Проигрыш') + getStatus();
}
}
while (answer == '1');


