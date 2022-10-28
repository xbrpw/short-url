/*****
DONE: Add author to the tweet
TODO: Fix the 140 character tweet limit
TODO: Random number/quote on click shouldn't sometimes be the same as the previous one, making the quote form look unresponsive/broken
TODO: Rotating phone from landscape to portrait causes height issues
TODO: Give users the ability to add quotes and/or upvote or rate their favorite quotes -- could be abused though.
TODO: More quotes!
TODO: Add more cyberpunk-y effects and animations
*****/

$(document).ready(function() {
    var quoteList = [
        { author: "", source: "", quote: "Últimamente el café se esta volviendo mi mejor amigo. " },
        { author: "", source: "", quote: "Si lo intentas y fallas, ¡Felicitaciones! La mayoría ni siquiera lo intenta. " },
        { author: "", source: "", quote: "Lo que ha de ser será a su tiempo y en su momento" },
        { author: "", source: "", quote: "Trabaja duro, en silencio y deja que tu éxito haga todo el ruido. " },
        { author: "", source: "", quote: "Primero hazlo, luego hazlo bien, luego hazlo mejor" },
        { author: "", source: "", quote: "No maduramos por los años, sino con los daños. Cada experiencia es una nueva lección." },
        { author: "", source: "", quote: "Las personas que pasan contigo tus noches más obscuras, son las que merecen tus días más brillantes. " },
        { author: "", source: "", quote: "Dinero no tenemos, pero mala vida no nos damos. " },
        { author: "", source: "", quote: "Estigmatofilia. Amor y fascinación por los tatuajes y piercings, eso es lo que tengo." },
        { author: "", source: "", quote: "Nalgofilia, amor y obsesion por las nalgas. " },
        { author: "", source: "", quote: "No es lo mismo: Quiero darte mi amor. a:  Quiero darte, mi amor" },
        { author: "", source: "", quote: "Todos tenemos a alguien q ojalá viviera mas cerca" },
        { author: "", source: "", quote: "Ojalá te acuerdes de mi cuanto te masturbes " },
        { author: "", source: "", quote: "Crudo y con dolor anal" },
        { author: "", source: "", quote: "Andar conmigo es escucharme decir a cada rato: Tengo hambre" },
        { author: "", source: "", quote: "Necesito unos besitos, de esos que terminan en voltéate" },
        { author: "", source: "", quote: "Un mensaje suyo y ya me tiene como quiere." },
        { author: "", source: "", quote: "Lo que no te mata, te hace más criel, más frio, más hijo de puta" },
        { author: "", source: "", quote: "Si no te hace reír, dudo que te haga gemir" },
        { author: "", source: "", quote: "Un novio que se ponga 🎀 en el pito. 😍" },
        { author: "", source: "", quote: "Adios excusas, hola dolor, sudor y resultados." },
        { author: "", source: "", quote: "Si me extrañas, háblame. Yo siempre te voy a querer coger. " },
        { author: "", source: "", quote: "Las ganas de nadar, no se me quitan por arte de magia. " },
        { author: "", source: "", quote: "El mundo sería más bonito si los mosquitos chuparan grasa en vez de sangre. " },
        { author: "", source: "", quote: "Recuerda que no recibir un mensaje, también es un mensaje. " },
        { author: "", source: "", quote: "Está comprobado que el sexo en las máñanas es más efectivo que el café. " },
        { author: "", source: "", quote: "Te amo, incluso desde antes de tenerte en frente, porque en mis sueños ya varias veces nos habíamos encontrado." },
        { author: "", source: "", quote: "Que lo único amoargo sea el café, buenos días. " },
        { author: "", source: "", quote: "No se sientes a ver como pasa la vida, levántate y corre hacia ella. " },
        { author: "", source: "", quote: "La vida se trata de METAS, entre más la metas MEJOR. " },
        { author: "", source: "", quote: "No te puedo bajar la luna, pero si el calzón. Nose, piénsalo. " },
        { author: "", source: "", quote: "Yo no me masturbo, me vacio para que no se me ahoge el corazón. " },
        { author: "", source: "", quote: "Si me vas hacer un númerito que sea un 69, si no no. " },
        { author: "", source: "", quote: "Todo lo bonito, hermoso, precioso, chulo, bello, empieza con las letras: L,A,M y P" },
        { author: "", source: "", quote: "Buenas noches a todos, menos a los que andan publicando que: Hoy es viernes y el cuerpo lo sabe. A ellos no. " },
        { author: "", source: "", quote: "Julio, ese mes en donde la gente bonita, atractiva, sexy y con clase cumple años." },
        { author: "", source: "", quote: "Describe tu vida sexual con el titulo de una pelicula. " },
        { author: "", source: "", quote: "Los amigos son con los Pokémon, no necesitas muchos, solo los mejores. " },
        { author: "", source: "", quote: "Estaría bien padre adoptar un nuño de esos que escupen fuego en los semáfotos. Sería como tener tu propio Charmander. " },
        { author: "", source: "", quote: "Si tu mides menos de 1.65, tú no puedes coger de perrito, coges de cachorrito. " },
        { author: "", source: "", quote: "Las personas más enojonas, son más activas sexualmente. Yo decia que este mal genio tenia que servir para algo chingadamadre. " },
        { author: "", source: "", quote: "Pizza, pastel, papas, todo lo que me gusta empieza con P, hasta tu Pokémon. " },
        { author: "", source: "", quote: "Te cambio la fiesta por una charla mirando las estrellas. " },
        { author: "", source: "", quote: "Uno nunca se cansa de lo que realmente ama, por ejemplo viajar. " },
        { author: "", source: "", quote: "Nadie sabe lo que tienes hasta que su mamá le dice ¿Esta chingadera sirve o la tiro?" },
        { author: "", source: "", quote: "Debi  cogerte meás y amarte menos. " },
        { author: "", source: "", quote: "Me encanta cuando la risa de nua pers más divertida que el chiste" },
        { author: "", source: "", quote: "Y si termino siendo solo un recuerdo, espero ser de esos que te hagan sonreir" },
        { author: "", source: "", quote: "No le prohiban nada a su pareja. El que quiere fallar, falla y ya." },
        { author: "", source: "", quote: "Te curaste, cuando un domingo, estando solo, no extrañaste a nadie. " },
        { author: "", source: "", quote: "Podemos asegurar que de cada 10 personas que entran a Twitter, 5 son la mitad." },
        { author: "", source: "", quote: "Ojla mi ojala se cumpla" },
        { author: "", source: "", quote: "" },
        { author: "", source: "", quote: "" },
        { author: "", source: "", quote: "" },
        { author: "", source: "", quote: "Viajar siempre es una buena idea" },
        { author: "", source: "", quote: "El sentido de la vida es tener historias para contar, no cosas para mostrar" },
        { author: "", source: "", quote: "" },
        { author: "", source: "", quote: "" },
        { author: "", source: "", quote: "A tu lado soy un caballero, pero sobre ti, un animal. " },
        { author: "", source: "", quote: "Si te falta amor, solo avisame y yo te lo hago. " },
        { author: "", source: "", quote: "Ya esta tu licuado de proteina (venida)" },
        { author: "", source: "", quote: "Yale pedi disculpas a Dios por los pecados que vamos a cometer. " },
        { author: "", source: "", quote: "Acércate que te voy a demostrar cuánto te quiero ... (emoji diablito)" },
        { author: "", source: "", quote: "Starbucks $140, Starconmigo $0.00 Ponte pilas. " },
        { author: "", source: "", quote: "Sí piensas que voy a ser tu opción B, pes B te a la verga. " },
        { author: "", source: "", quote: "Si yo quiero contigo, no te preocupes de quién quiere conmigo. " },
        { author: "", source: "", quote: "¿Qué significa cuando te dicen: Amaneci bien paraguas  ?" },
        { author: "", source: "", quote: "" },
        { author: "", source: "", quote: "" },
        { author: "", source: "", quote: "" },
        { author: "", source: "", quote: "" },
        { author: "", source: "", quote: "Si nos dejan, nos vamos a beber toda la vida..." },
        { author: "", source: "", quote: "Los únicos hombres en los que debes confiar son: Johny Kalker, Jack Daniel´s, James Buchannan´s, Don Julio, José Cuervo y Eddy Warman. " },
        { author: "", source: "", quote: "" },
        { author: "", source: "", quote: "" },
        { author: "", source: "", quote: "" },
        { author: "", source: "", quote: "" },
        { author: "", source: "", quote: "" },
        { author: "", source: "", quote: "" },
        { author: "", source: "", quote: "G´day!" },
        { author: "", source: "", quote: "Eat, sleep, gym, travel, code, sex and repeat " },
        { author: "", source: "", quote: "First do it, then do it right, then do it better." },
        { author: "", source: "", quote: "I´m a CSS enthusiast/freelance web developer. If you like my work, check out my web site" },
        { author: "", source: "", quote: "" },
        { author: "", source: "", quote: "" },
        { author: "", source: "", quote: "No hay amor más sincero que el de un diseñador web." },
        { author: "", source: "", quote: "El pene hasta la garganta... ah, pero las pastillas ahí las andan partiendo a la mitad para tragárselas. " },
        { author: "", source: "", quote: "Querido diario, él me cambio por uno más delgado, pero yo lo cambié por uno más grueso." },
        { author: "", source: "", quote: "Me está llevando la verga amigos. Por favor digan, verga no te lo lleves" },
        { author: "", source: "", quote: "Que el manto lechoso de la divina verga te cubra y te protega de todo mal" },
        { author: "", source: "", quote: "Trátame como rey y te follare como actor porno Las madrugadas se hicieron para pensarte" },
        { author: "", source: "", quote: "" },
        { author: "", source: "", quote: "" },
        { author: "", source: "", quote: "" },
        { author: "", source: "", quote: "" },
        { author: "", source: "", quote: "Y si te digo accio, ¿vienes?" },
        { author: "", source: "", quote: "Otro día sin el buffet de Hogwarts" },
        { author: "", source: "", quote: "Repitan conmigo- Hoy va ser un día chingon y nadie me lo va a joder. " },
        { author: "", source: "", quote: "" }
    ];

    // var quoteRandomize = '';
    // var quoteMain = '';
    // var quoteAuthor = '';
    // var quoteSource = '';

    function quoteGenerate() {
        var quoteRandomize = Math.floor(Math.random() * quoteList.length);
        var quoteMain = quoteList[quoteRandomize].quote;
        var quoteAuthor = quoteList[quoteRandomize].author;
        var quoteSource = quoteList[quoteRandomize].source;

        $("#quote").text(quoteMain);
        $("#author").text(quoteAuthor);
        $("#source").text(quoteSource);
    };

    /**** Quote Limit Test ****/
    // function quoteTweet() {   
    //   if((quoteMain + quoteAuthor).length > 140 ){
    //     alert("no");
    //   } else {
    //     quoteTweet();
    //   }
    //   window.open("https://twitter.com/home/?status=" + "\"" + $("#quote").text() + "\"" + " - " + $("#author").text(), '_blank');
    // };

    $(".tweet").on("click", function() {
        window.open("https://twitter.com/home/?status=" + "\"" + $("#quote").text() + "\"" + " - " + $("#author").text(), '_blank');
    });

    // $(".tweet").on("click", function() {
    //  quoteTweet();
    // });

    $("#new-quote").on("click", function() {
        quoteGenerate();
    });
    // quoteTweet();
    quoteGenerate();
});
quoteGenerate();
});