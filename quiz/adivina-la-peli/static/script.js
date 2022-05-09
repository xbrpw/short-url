const questions = [{
        quest: "🐘👂🎪",
        options: ["Dumbo", "El Circo Solei", "Orejon"],
        correct: "Dumbo"
    },
    {
        quest: "😴👑💋",
        options: ["La bella durmiente", "Cemecienta", "Cenicienta"],
        correct: "La bella durmiente"
    },
    {
        quest: "📖👨‍🦲🐍",
        options: ["El libro de la selva", "Cemecienta", "Cenicienta"],
        correct: "El libro de la selva"
    },
    {
        quest: "👱‍♂️🦍🌴",
        options: ["Tarzán", "Cemecienta", "Cenicienta"],
        correct: "Tarzán"
    },
    {
        quest: "🍳🐭👨‍🍳",
        options: ["Ratatouille", "Cemecienta", "Cenicienta"],
        correct: "Ratatouille"
    },
    {
        quest: "🐞🐜🦗",
        options: ["Bichos", "Cemecienta", "Cenicienta"],
        correct: "Bichos"
    },
    {
        quest: "🎩🏭🍫",
        options: ["Charlie y la Fábrica de chocolates", "Cemecienta", "Cenicienta"],
        correct: "Charlie y la Fábrica de chocolates"
    },
    {
        quest: "💏🐸👑",
        options: ["La princesa y el sapo", "Cemecienta", "Cenicienta"],
        correct: "La princesa y el sapo"
    },
    {
        quest: "🐻🐯🐷",
        options: ["Winnie the Pooh", "Cemecienta", "Cenicienta"],
        correct: "Winnie the Pooh"
    },
    {
        quest: "🧜‍♂️🌊🔱🐠",
        options: ["Aquaman", "Cemecienta", "Cenicienta"],
        correct: "Aquaman"
    },
    {
        quest: "🏁🐌💨",
        options: ["Turbo", "Cemecienta", "Cenicienta"],
        correct: "Turbo"
    },
    {
        quest: "🐇⌚🌹",
        options: ["Alicia en el país de las maravillas", "Cemecienta", "Cenicienta"],
        correct: "Alicia en el país de las maravillas"
    },
    {
        quest: "🦁🐗🐛",
        options: ["El rey león", "Cemecienta", "Cenicienta"],
        correct: "El rey león"
    },
    {
        quest: "🏹🎯🐻",
        options: ["Valiente", "Buscando a Nemo", "Pinocho"],
        correct: "Valiente "
    },
    {
        quest: "💪😤😠🧎‍♂️",
        options: ["Hulk ", "Buscando a Nemo", "Pinocho"],
        correct: " Hulk  "
    },
    {
        quest: "👃👺🐋🧙‍♀️🌲",
        options: ["Hulk ", "Buscando a Nemo", "Pinocho"],
        correct: "Pinocho "
    },
    {
        quest: "🔍🌊🐠",
        options: ["Hulk ", "Buscando a Nemo", "Pinocho"],
        correct: "Buscando a Nemo "
    },
    {
        quest: "👴🏘️⛰️🎈🦩",
        options: ["Up", "Titanic", "Cenicienta"],
        correct: "Up "
    },
    {
        quest: "🧙⚡",
        options: ["Up", "Titanic", "Cenicienta"],
        correct: "Harry Potter "
    },
    {
        quest: "🐇⌚",
        options: ["Harry Potter", "Titanic", "Cenicienta"],
        correct: "Harry Potter "
    },
    {
        quest: "💎❄️",
        options: ["Harry Potter", "Titanic", "Cenicienta"],
        correct: "Titanic "
    },
    {
        quest: "🐇⌚",
        options: ["Harry Potter", "Titanic", "Cenicienta"],
        correct: "Cenicienta "
    },
    {
        quest: "✂️",
        options: ["Enredados", "El aro", "Guerra Mundial Z"],
        correct: "Enredados "
    },
    {
        quest: "💀📞📺",
        options: ["Enredados", "El aro", "Guerra Mundial Z"],
        correct: "El aro "
    },
    {
        quest: "🐇⌚",
        options: ["Enredados", "El aro", "Guerra Mundial Z"],
        correct: "Guerra Mundial Z"
    },
    {
        quest: "🐇☢️🕛",
        options: ["Coco ", "El aro", "Guerra Mundial Z"],
        correct: "Coco 💀🧑‍🦯🎻 "
    }
];

let question_number = 0;
let correct = 0;

document.addEventListener("DOMContentLoaded", () => {
    load_question(), result();
});

function load_question() {
    document.querySelector("#question").innerHTML = questions[question_number].quest;
    const options = document.querySelector("#options");
    options.innerHTML = "";
    for (const option of questions[question_number].options) {
        options.innerHTML += `<button class='option'>${option}</button>`;
    }

    document.querySelectorAll(".option").forEach(option => {
        option.onclick = () => {
            if (option.textContent == questions[question_number].correct) {
                correct++;
            }
            question_number++;
            result();
            if (question_number != questions.length) { // I it's the last question, don't load question
                load_question();
            } else {
                complete();
            }
        }
    });
}

function result() {
    document.querySelector("#correct").innerHTML = `${correct} of ${question_number}`;
}

function complete() {
    document.querySelector("#question").innerHTML = `¿Quieres hacer el siguiente nivel?`;
    const options = document.querySelector("#options");
    options.innerHTML = "";
    document.querySelector("#correct").innerHTML = `${correct} of ${question_number}`;
    document.querySelector("#result").style.fontSize = "50px";
}
var em = 0;

setInterval(function() {
    var el = document.getElementsByClassName("emoji")[0];
    var t = new Date();
    em = ~~(Math.random() * emojis.length - 1);
    el.innerText = emojis[em];
}, 500);

var emojis = ['😀', '😁', '😂', '😃', '😄', '😅', '😆', '😇', '😈', '😉', '😊', '😋', '😌', '😍', '😎', '😀', '😁', '😂', '😃', '😄', '😅', '😆', '😇', '😈', '😉', '😊', '😋', '😌', '😍', '😎', '😏', '😐', '😑', '😒', '😓', '😔', '😕', '😖', '😗', '😘', '😙', '😚', '😛', '😜', '😝', '😞', '😟', '😠', '😡', '😢', '😣', '😤', '😥', '😦', '😧', '😨', '😩', '😪', '😫', '😬', '😭', '😮', '😯', '😰', '😱', '😲', '😳', '😴', '😵', '😶', '😷', '😸', '😹', '😺', '😻', '😼', '😽', '😾', '😿', '🙀', '🙁', '🙂', '🙃', '🙄', '🙅', '🙆', '🙇', '🙈', '🙉', '🙊', '🙋', '🙌', '🙍', '🙎', '�'];