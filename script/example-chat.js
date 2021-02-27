
var chat = document.querySelector(".chat");
var sendForm = chat.querySelector(".chat-form");
var messages = chat.querySelector(".chat-messages");
var messageInput = sendForm.querySelector(".chat-form-text");

var messageTemplate = messages.querySelector(".message-template");
var words1 = [
    "Крепкий",
    "Холодный",
    "Яркий",
    "Наибольший",
    "Исключительный",
    "Значительный",
    "Редкостный",
    "Отчаянный",
    "Футбольный",
    "Впечатляющий"
];
var words2 = [
    "подарок",
    "луна",
    "писатель",
    "парк",
    "щука",
    "велосипед",
    "рыбак",
    "сокровище",
    "меню",
    "стадион"
];
var words3 = [
    "рисковать",
    "договариваться",
    "побеждать",
    "требовать",
    "доказывать",
    "угрожать",
    "рисковать",
    "ждать",
    "болеть",
    "оплачивать"
];
var numbers = "0123456789.";
var adders = "+-"
var multy = "*/"
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function generateMessage() {
    return words1[getRandomInt(10)] + ' ' + words2[getRandomInt(10)] + ' ' + words3[getRandomInt(10)] + '.';
}
function addNewMessage(text, author, className) {
    var clone = messageTemplate.content.cloneNode(true);
    clone = clone.querySelector(".chat-message-container");
    clone.querySelector(".chat-message-author").textContent = author;
    clone.querySelector(".chat-message-text").textContent = text;
    clone.querySelector(".chat-message").classList.add(className);
    clone.querySelector(".remove-message").addEventListener('click', function (evt) {
        evt.preventDefault();
        clone.remove();
    });
    messages.appendChild(clone);
}
function parse(str) {
    return Function(`return (${str})`)();
}
// function myParse(str, startIndex, lVal, operator) {
//     let lVal = lVal;
//     let operator = 0; // + - * /
//     let rVal = 0;
//     for (let i = startIndex; i < str.length; i++) {
//         const char = str[i];
//         if (char == '(') {
//             let res = myParse(str, i + 1);
//             i = res[1];
//             rVal = res[0];
//         } else {
//             let z = i;
//             while (numbers.includes(str[z])) {
//                 z++;
//             }
//         }

//     }
// }
sendForm.onsubmit = function () {
    //send message
    let yourText = messageInput.value;
    addNewMessage(yourText, 'You', "chat-message-your");
    if (yourText.endsWith("=")) {
        var text = parse(yourText.substring(0, yourText.length - 1));
        addNewMessage(text, 'Bot Maxim', "chat-message-another");
    } else {
        addNewMessage(generateMessage(), 'Bot Alesha', "chat-message-another");
    }
    //send answer

    //scroll to bottom
    messages.scrollTop = messages.scrollHeight;
    sendForm.reset();
    return false;
};

