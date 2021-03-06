const questions = [{
        quest: "πππͺ",
        options: ["Dumbo", "El Circo Solei", "Orejon"],
        correct: "Dumbo"
    },
    {
        quest: "π΄ππ",
        options: ["La bella durmiente", "Cemecienta", "Cenicienta"],
        correct: "La bella durmiente"
    },
    {
        quest: "ππ¨βπ¦²π",
        options: ["El libro de la selva", "Cemecienta", "Cenicienta"],
        correct: "El libro de la selva"
    },
    {
        quest: "π±ββοΈπ¦π΄",
        options: ["TarzΓ‘n", "Cemecienta", "Cenicienta"],
        correct: "TarzΓ‘n"
    },
    {
        quest: "π³π­π¨βπ³",
        options: ["Ratatouille", "Cemecienta", "Cenicienta"],
        correct: "Ratatouille"
    },
    {
        quest: "πππ¦",
        options: ["Bichos", "Cemecienta", "Cenicienta"],
        correct: "Bichos"
    },
    {
        quest: "π©π­π«",
        options: ["Charlie y la FΓ‘brica de chocolates", "Cemecienta", "Cenicienta"],
        correct: "Charlie y la FΓ‘brica de chocolates"
    },
    {
        quest: "ππΈπ",
        options: ["La princesa y el sapo", "Cemecienta", "Cenicienta"],
        correct: "La princesa y el sapo"
    },
    {
        quest: "π»π―π·",
        options: ["Winnie the Pooh", "Cemecienta", "Cenicienta"],
        correct: "Winnie the Pooh"
    },
    {
        quest: "π§ββοΈππ±π ",
        options: ["Aquaman", "Cemecienta", "Cenicienta"],
        correct: "Aquaman"
    },
    {
        quest: "πππ¨",
        options: ["Turbo", "Cemecienta", "Cenicienta"],
        correct: "Turbo"
    },
    {
        quest: "πβπΉ",
        options: ["Alicia en el paΓ­s de las maravillas", "Cemecienta", "Cenicienta"],
        correct: "Alicia en el paΓ­s de las maravillas"
    },
    {
        quest: "π¦ππ",
        options: ["El rey leΓ³n", "Cemecienta", "Cenicienta"],
        correct: "El rey leΓ³n"
    },
    {
        quest: "πΉπ―π»",
        options: ["Valiente", "Buscando a Nemo", "Pinocho"],
        correct: "Valiente "
    },
    {
        quest: "πͺπ€π π§ββοΈ",
        options: ["Hulk ", "Buscando a Nemo", "Pinocho"],
        correct: " Hulk  "
    },
    {
        quest: "ππΊππ§ββοΈπ²",
        options: ["Hulk ", "Buscando a Nemo", "Pinocho"],
        correct: "Pinocho "
    },
    {
        quest: "πππ ",
        options: ["Hulk ", "Buscando a Nemo", "Pinocho"],
        correct: "Buscando a Nemo "
    },
    {
        quest: "π΄ποΈβ°οΈππ¦©",
        options: ["Up", "Titanic", "Cenicienta"],
        correct: "Up "
    },
    {
        quest: "π§β‘",
        options: ["Up", "Titanic", "Cenicienta"],
        correct: "Harry Potter "
    },
    {
        quest: "πβ",
        options: ["Harry Potter", "Titanic", "Cenicienta"],
        correct: "Harry Potter "
    },
    {
        quest: "πβοΈ",
        options: ["Harry Potter", "Titanic", "Cenicienta"],
        correct: "Titanic "
    },
    {
        quest: "πβ",
        options: ["Harry Potter", "Titanic", "Cenicienta"],
        correct: "Cenicienta "
    },
    {
        quest: "βοΈ",
        options: ["Enredados", "El aro", "Guerra Mundial Z"],
        correct: "Enredados "
    },
    {
        quest: "πππΊ",
        options: ["Enredados", "El aro", "Guerra Mundial Z"],
        correct: "El aro "
    },
    {
        quest: "πβ",
        options: ["Enredados", "El aro", "Guerra Mundial Z"],
        correct: "Guerra Mundial Z"
    },
    {
        quest: "πβ’οΈπ",
        options: ["Coco ", "El aro", "Guerra Mundial Z"],
        correct: "Coco ππ§βπ¦―π» "
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
    document.querySelector("#question").innerHTML = `ΒΏQuieres hacer el siguiente nivel?`;
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

var emojis = ['π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π ', 'π‘', 'π’', 'π£', 'π€', 'π₯', 'π¦', 'π§', 'π¨', 'π©', 'πͺ', 'π«', 'π¬', 'π­', 'π?', 'π―', 'π°', 'π±', 'π²', 'π³', 'π΄', 'π΅', 'πΆ', 'π·', 'πΈ', 'πΉ', 'πΊ', 'π»', 'πΌ', 'π½', 'πΎ', 'πΏ', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'π', 'οΏ½'];