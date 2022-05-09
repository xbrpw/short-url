var apkey = "cGkYLSFmnlqik-WPpcU8kB";
var quizurl = "https://quintadb.com/apps/cNW6foWQbbqyoWESoxrSkz/dtypes/entity/aqW58HfH1dOyoBW6DnlSkt.json";
var quiztitle = "Adivina la película con emojis";
var quizdesc = "Que tan bueno eres divinando...";
var quiz = [];
var questionsSelected = [];
var numberOfQuestionsPerQuiz = 4;
var progressIndicator = 100;
var totalScore = 0;
var secondsToAnswer = 10;
var barWidth;
var theTimer;
var chain = 1;
var previousCorrect = false;
var possScore = 0;
var perfectScore = 1000000;
var scoreboard;
var timePassed = 0;
var myVar;
/**
 * Set the information about your questions here. The correct answer string needs to match
 * the correct choice exactly, as it does string matching. (case sensitive)
 *
 */

var quizQuestions = [{
        "question": "Lady Oscar, Lady Oscar nell'azzurro dei tuoi occhi c'è l'arcobaleno..",
        "image": "https://www.prettygeneration.it/wp-content/uploads/2017/08/Sai-completare-le-sigle-dei-cartoni-di-CRISTINA-DAVENA-QUIZ-2.jpg",
        "choices": [
            "Lady Oscar, Lady Oscar, chi lo sa se un giorno poi tu l'attraverserai.",
            "Lady Oscar, Lady Oscar, tu combatti con destrezza ed agilità.",
            "Lady Oscar, Lady Oscar, tu combatti con destrezza e non ti arrendi mai.",
            "Lady Oscar, Lady Oscar, nella mischia tu non ci abbandonerai."
        ],
        "correct": "Lady Oscar, Lady Oscar, chi lo sa se un giorno poi tu l'attraverserai.",
        "explanation": "",
    }, {
        "question": "Se a Johnny gira e va...",
        "image": "https://i.ytimg.com/vi/sIGN8w4njwU/hqdefault.jpg",
        "choices": [
            "lui via se ne andrà",
            "lui vola con la forza del pensiero",
            "lui gira in città",
            "che strane cose fa"
        ],
        "correct": "che strane cose fa",
        "explanation": "",
    },
    {
        "question": "Sailor Moon, corri per noi, scintillante Sailor Moon..",
        "image": "https://www.prettygeneration.it/wp-content/uploads/2017/08/Sai-completare-le-sigle-dei-cartoni-di-CRISTINA-DAVENA-QUIZ-3.jpg",
        "choices": [
            "Sailor Moon, vai dove vuoi, sfavillante Sailor Moon.",
            "Sailor Moon, vola con noi, favolosa Sailor Moon.",
            "Sailor Moon, corri con noi, oh grandiosa Sailor Moon.",
            "Sailor Moon, vai dove vuoi, favolosa Sailor Moon."
        ],
        "correct": "Sailor Moon, vai dove vuoi, sfavillante Sailor Moon.",
        "explanation": "",
    },
    {
        "question": ".... è quasi magia .....",
        "image": "http://2.bp.blogspot.com/-atBOoSbBgPA/VI5feRBj-DI/AAAAAAAALH4/_bV8Lf3RYLo/s1600/KimagureOrangeRoad7.jpg",
        "choices": [
            "Emi",
            "Johnny",
            "Creamie",
            "Jem"
        ],
        "correct": "Johnny",
        "explanation": "",
    },
    {
        "question": "Con il rischio gioca sempre perchè...",
        "image": "https://nextstopreggio.it/wp-content/uploads/2018/09/ArsenioLupin.jpg",
        "choices": [
            "Troppo astuto sempre lui è!",
            "Per lui nulla d'impossibile c'è!",
            "Coraggioso e temerario lui è!",
            "Sempre pronto all'avventura lui è!"
        ],
        "correct": "Per lui nulla d'impossibile c'è!",
        "explanation": "",
    },
    {
        "question": "Due magiche gemelle, entrambe molto belle...",
        "image": "https://www.mammecreative.it/wp-content/uploads/2018/04/Terry-e-Maggie-quiz-trivia.004.jpeg",
        "choices": [
            "san teletrasportarsi sempre qua e là",
            "san teletrasportarsi con facilità",
            "san disegnare il mondo con la verità",
            "san teletrasportarsi con abilità"
        ],
        "correct": "san teletrasportarsi sempre qua e là",
        "explanation": "",
    },
    {
        "question": "Rossana dai pensaci un po tu, perchè così non se ne può più, sappiamo che non ti arrendi mai..",
        "image": "https://www.hallofseries.com/wp-content/uploads/2016/10/rossana_copertina-758x426.jpg",
        "choices": [
            "E provi e riprovi finchè ce la fai",
            "E provi e riprovi finchè non lo fai",
            "E riprovi e riprovi finchè vincerai",
            "E riprovi di nuovo finchè non lo fai"
        ],
        "correct": "E provi e riprovi finchè ce la fai",
        "explanation": "",
    },
    {
        "question": "Ogni Pokémn è il più... Via i Pokémon!",
        "image": "https://i.ytimg.com/vi/nTg7WA5_g90/hqdefault.jpg",
        "choices": [
            "Sorprendente, grande e combattente",
            "Sorprendente, furbo e accattivante",
            "Scoppiettante, furbo e accattivante",
            "Sorprendente, grande e accattivante"
        ],
        "correct": "Scoppiettante, furbo e accattivante",
        "explanation": "",
    },
    {
        "question": "perchè non c'è.. un drago che..",
        "image": "https://www.socialup.it/wp-content/uploads/2015/09/dragon-ball-1200x674.jpg",
        "choices": [
            "sia forte come te!",
            "sia grande come te!",
            "sia in gamba come te!",
            "sia furbo come te!"
        ],
        "correct": "sia grande come te!",
        "explanation": "",
    },
    {
        "question": "Vinci la tua battaglia e vai..",
        "image": "https://toonitalia.org/wp-content/uploads/2017/10/Pokemon-Johto-League-Champions-1.png",
        "choices": [
            "corri e non ti stancare mai.",
            "gli incontri non finiranno mai.",
            "solo tu sai come farai.",
            "a comprare del latte."
        ],
        "correct": "solo tu sai come farai.",
        "explanation": "",
    }
];

/******* No need to edit below this line *********/
jQuery(document).ready(function($) {
    var currentquestion = 0,
        score = 0,
        submt = true,
        picked;

    const body = '{"rest_api_key":"' + apkey + '", "page": 1}';

    function caricaPunteggi() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                debugger;
            }
        };
        xhttp.open("GET", quizurl, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(body);
    }
    /**
     * This will add the individual choices for each question to the ul#choice-block
     *
     * @param {choices} array The choices from each question
     */
    function addChoices(choices) {
        if (typeof choices !== "undefined" && $.type(choices) == "array") {
            $('#choice-block').empty();
            for (var i = 0; i < choices.length; i++) {
                $(document.createElement('li')).addClass('choice choice-box').attr('data-index', i).text(choices[i]).appendTo('#choice-block');
            }
        }
    }
    ///////////////////////////
    function progress(timeleft, timetotal, $element, newQuestion) {
        if (newQuestion == true) {
            clearTimeout(theTimer);
        }
        var progressBarWidth = timeleft * $element.width() / timetotal;
        possScore = timetotal - timeleft;
        $element.find('div').animate({ width: progressBarWidth }, 500).html(Math.floor(timeleft / 60) + ":" + timeleft % 60);
        if (timeleft > 0) {
            theTimer = setTimeout(function() {
                progress(timeleft - 1, timetotal, $element, false);
            }, 1000);
        }
    };
    //////////////////////
    /**
     * Resets all of the fields to prepare for next question
     */
    function nextQuestion() {
        submt = true;
        possScore = 0;
        $('#explanation').empty();
        $('#question').text(quiz[currentquestion]['question']);
        $('#pager').text('Domanda ' + Number(currentquestion + 1) + ' di ' + quiz.length);
        if (quiz[currentquestion].hasOwnProperty('image') && quiz[currentquestion]['image'] != "") {
            if ($('#question-image').length == 0) {
                $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[currentquestion]['image']).insertAfter('#question');
            } else {
                $('#question-image').attr('src', quiz[currentquestion]['image']);
            }
        } else {
            $('#question-image').remove();
        }
        progress(secondsToAnswer, secondsToAnswer, $('#progressBar'), true);
        addChoices(quiz[currentquestion]['choices']);
        setupButtons();
    }

    /**
     * After a selection is submitted, checks if its the right answer
     *
     * @param {choice} number The li zero-based index of the choice picked
     */
    function processQuestion(choice) {
        if (quiz[currentquestion]['choices'][choice] == quiz[currentquestion]['correct']) {
            if (previousCorrect) {
                chain++;
            }
            score++;
            currentquestion++;
            previousCorrect = true;
            if (currentquestion == quiz.length) {
                calculatePoints(true);
            } else {
                calculatePoints(false);
            }
        } else {
            chain = 1;
            currentquestion++;
            previousCorrect = false;
        }
        if (currentquestion == quiz.length) {
            if ($('#question-image').length != 0) {
                $('#question-image').remove();
            }
            endQuiz();
        } else {
            nextQuestion();
        }
    }

    /**
     * Sets up the event listeners for each button.
     */
    function setupButtons() {
        $('.choice').on('click', function() {
            picked = $(this).attr('data-index');
            $('.choice').removeAttr('style').off('mouseout mouseover');
            $(this).css({ 'border-color': '#222', 'font-weight': 700, 'background-color': '#2274e5', 'color': 'white' });
            if (submt) {
                submt = false;
                $('#submitbutton').css({ 'color': '#000' }).on('click', function() {
                    $('.choice').off('click');
                    $(this).off('click');
                    processQuestion(picked);
                });
            }
        })
    }

    //Randomize bar colors
    function RandomizeBarColors() {
        var bar1 = document.getElementById('progressBar');
        var bar2 = document.getElementById('secBar');
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        var color2 = '#';
        for (var i = 0; i < 6; i++) {
            color2 += letters[Math.floor(Math.random() * 16)];
        }
        bar1.style.backgroundColor = color;
        bar2.style.backgroundColor = color2;
    }


    /**
     * Quiz ends, display a message.
     */
    function endQuiz() {
        clearInterval(myVar);
        $('#explanation').empty();
        $('#question').empty();
        $('#choice-block').empty();
        $('#submitbutton').remove();
        document.getElementById("progressBar").style.display = "none";
        document.getElementById("secBar").style.display = "none";
        $('#question').text("Hai risposto correttamente a " + score + " domande su " + quiz.length + ".");
        $(document.createElement('h2')).css({ 'text-align': 'center', 'font-size': '2em' }).text('Hai totalizzato ' + totalScore + ' punti').insertAfter('#question');
        createScoreBoard();
    }

    //////////////////////////////
    function calculatePoints(theEnd) {
        var curTimer = theTimer / currentquestion;
        var partScore = 10000 / (curTimer - possScore);
        totalScore += partScore;
        if (theEnd) {
            totalScore = Math.round(totalScore + (perfectScore / theTimer) * score);
        }
    }

    /**
     * Runs the first time and creates all of the elements for the quiz
     */
    function splashPage() {
        $(document.createElement('div')).attr('id', 'splashdiv').appendTo('#frame');
        $(document.createElement('h1')).text(quiztitle).attr('id', 'textlogosplash').appendTo('#splashdiv');
        $(document.createElement('img')).attr('id', 'imageLogo').attr('src', 'http://www.lineadiretta24.it/wp-content/uploads/2017/04/robot-anni-70-e-80-860x450_c.jpg').appendTo('#splashdiv');
        $(document.createElement('div')).attr('id', 'imageLogo').attr('src', 'http://www.lineadiretta24.it/wp-content/uploads/2017/04/robot-anni-70-e-80-860x450_c.jpg').appendTo('#splashdiv');
        $(document.createElement('h3')).text(quizdesc).attr('id', 'descQuiz').appendTo('#splashdiv');
        $(document.createElement('button')).text("¡Vámos!").attr('id', 'buttonStart').click(function() { startQuiz() }).appendTo('#splashdiv');
    }

    function createScoreBoard() {
        var isHighscore = false;
        scoreboard.sort(function(a, b) {
            return parseFloat(b.points) - parseFloat(a.points);
        });
        $(document.createElement('div')).attr('id', 'leaderboard').appendTo('#frame');
        $(document.createElement('h1')).text("Leader Board").attr('id', 'leadbTitle').appendTo('#leaderboard');
        //Description row
        $(document.createElement('div')).attr('id', 'descRow').addClass('leadRow').appendTo('#leaderboard');
        $(document.createElement('div')).attr('id', 'firstCelldesc').appendTo('#descRow');
        $(document.createElement('p')).text("Nome").appendTo('#firstCelldesc');
        $(document.createElement('div')).attr('id', 'secondCelldesc').appendTo('#descRow');
        $(document.createElement('p')).text("Punteggio").appendTo('#secondCelldesc');
        $(document.createElement('div')).attr('id', 'thirdCelldesc').appendTo('#descRow');
        $(document.createElement('p')).text("Tempo").appendTo('#thirdCelldesc');
        //Scores
        for (var i = 0; i < scoreboard.length; i++) {
            if (i % 2 == 0) {
                $(document.createElement('div')).attr('id', 'leadRow' + [i]).addClass('leadRow').appendTo('#leaderboard');
            } else {
                $(document.createElement('div')).attr('id', 'leadRow' + [i]).addClass('oddRows').addClass('leadRow').appendTo('#leaderboard');
            }
            $(document.createElement('div')).attr('id', 'firstCell' + [i]).appendTo('#leadRow' + [i]);
            $(document.createElement('p')).text(scoreboard[i].name).appendTo('#firstCell' + [i]);
            $(document.createElement('div')).attr('id', 'secondCell' + [i]).appendTo('#leadRow' + [i]);
            $(document.createElement('p')).text(scoreboard[i].points).appendTo('#secondCell' + [i]);
            $(document.createElement('div')).attr('id', 'thirdCell' + [i]).appendTo('#leadRow' + [i]);
            $(document.createElement('p')).text(scoreboard[i].time).appendTo('#thirdCell' + [i]);

            //controlla che sia entrato nella leaderboard
            if (totalScore > scoreboard[i].points) {
                isHighscore = true;
            }
        }
        if (isHighscore) {
            addSelfToLeaderboard();
        }
    }

    function addSelfToLeaderboard() {
        $(document.createElement('h2')).attr('id', 'greetings').text('Complimenti! Sei entrato nella Leaderboard!').insertAfter('#question');
        var name = prompt("Inserisci il tuo nome!");
        if (name == null) {
            name = "Giocatore Anonimo";
        }

        var req = new XMLHttpRequest();

        req.onreadystatechange = function() {
            if (req.readyState == XMLHttpRequest.DONE) {
                console.log(req.responseText);
            }
        };
        var jsonToSend = JSON.stringify('{"name":"' + name + '", "points":' + totalScore + ',"time":' + timePassed + '}');
        postRequest("https://raw.githubusercontent.com/Navamaru/QuizToonScoreboard/master/score.json", jsonToSend);
        /*
    
        req.open("PUT", "https://raw.githubusercontent.com/Navamaru/QuizToonScoreboard/master/score.json", true);
        req.setRequestHeader("Content-type", "application/json");
        //req.setRequestHeader("secret-key", "$2a$10$rn.15PCE6YuVgI3prmmkLOqyN.DGx5XizZaGCww.ticWa5QDE4/Iy");
        req.send('{"name":"'+name+'", "points":'+totalScore+',"time":'+timePassed+'}');
        */

    }

    function postRequest(url, data) {
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", url + '/12', true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = function() {
            var users = JSON.parse(xhr.responseText);
            if (xhr.readyState == 4 && xhr.status == "200") {
                console.table(users);
            } else {
                console.error(users);
            }
        }
        xhr.send(data);
    }

    function startQuiz() {
        document.getElementById("splashdiv").style.display = "none";
        init();
    }

    function init() {
        myVar = setInterval(function() { timePassed++ }, 1000);
        //load the questions
        for (var i = 0; i < numberOfQuestionsPerQuiz; i++) {
            var randomNumber = Math.floor(Math.random() * (quizQuestions.length));
            if (!questionsSelected.includes(randomNumber)) {
                questionsSelected.push(randomNumber);
                quiz.push(quizQuestions[randomNumber]);
            } else {
                i--;
            }
        }
        $(document.createElement('div')).attr('id', 'quizContainer').appendTo('#frame');
        //add title
        if (typeof quiztitle !== "undefined" && $.type(quiztitle) === "string") {
            $(document.createElement('h1')).text(quiztitle).appendTo('#quizContainer');
        } else {
            $(document.createElement('h1')).text("Quiz").appendTo('#quizContainer');
        }

        //add pager and questions
        if (typeof quiz !== "undefined" && $.type(quiz) === "array") {
            //add pager
            $(document.createElement('div')).addClass('bar').attr('id', 'infoBar').appendTo('#quizContainer');
            $(document.createElement('p')).addClass('pager').attr('id', 'pager').text('Domanda 1 di ' + quiz.length).appendTo('#infoBar');
            $(document.createElement('div')).attr('id', 'progressBar').appendTo('#infoBar');
            $(document.createElement('div')).addClass('bar').attr('id', 'secBar').appendTo('#progressBar');
            //add first question
            $(document.createElement('h2')).addClass('question').attr('id', 'question').text(quiz[0]['question']).appendTo('#quizContainer');
            //add image if present
            if (quiz[0].hasOwnProperty('image') && quiz[0]['image'] != "") {
                $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[0]['image']).appendTo('#quizContainer');
            }
            $(document.createElement('p')).addClass('explanation').attr('id', 'explanation').html('&nbsp;').appendTo('#quizContainer');



            //questions holder
            $(document.createElement('ul')).attr('id', 'choice-block').appendTo('#quizContainer');

            //add choices
            addChoices(quiz[0]['choices']);

            //add submit button
            $(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Conferma').css({ 'font-weight': 700, 'color': '#222' }).appendTo('#quizContainer');
            barWidth = document.getElementById('progressBar').offsetWidth;
            setupButtons();
            progress(secondsToAnswer, secondsToAnswer, $('#progressBar'), true);
            RandomizeBarColors();
        }
    }
    splashPage();
    caricaPunteggi();
});