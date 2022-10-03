(function() {
    var generateQuote, quotes, said, speaker;

    speaker = '';

    said = '';

    quotes = [{
            quote: "Ni tú, ni yo ni nadie golpea tan fuerte como la vida. Pero no importa qué tan duro lo hagas. Importa lo duro que resistas",
            character: "",
        },
        {
            quote: "Because he's holding a thermal detonator!",
            character: "",
        },
        {
            quote: "Ya estoy satisfecho. Tu orgullo está hecho pedazos, retaste y perdiste contra un peleador superior a ti y lo peor de todo es que solo es un mono",
            character: "",
        },
        {
            quote: "Prefiero ser un mono descerebrado que un monstruo sin corazón.",
            character: "",
        },
        {
            quote: "Parece ser que solo me quieren a mí. Si es así, es exactamente a quien tendrán.",
            character: "",
        },
        {
            quote: "Tus niveles de energía disminuyen con cada golpe, de hecho, ya no eres un reto para mí. No sería justo seguir peleando contigo.",
            character: "",
        },
        {
            quote: "No tiene sentido seguir peleando contigo, tienes demasiado miedo y vergüenza. Vive con ese temor. Que se quede encerrado contigo en silencio. Adiós Freezer, nunca hagas el mal de nuevo, ojalá vivas el resto de tu vida en paz.",
            character: "",
        },
        {
            quote: "Tengo familia propia ahora que atender, dos niños y una esposa. Una muy iracunda esposa que debe querer matarme ahora.",
            character: "",
        },
        {
            quote: "I find your lack of faith disturbing.",
            character: "",
        },
        {
            quote: "Once you start down the dark path, forever will it dominate your destiny.",
            character: "",
        }
    ];

    generateQuote = function() {
        var randomQuote;
        randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        if (randomQuote.quote.length + randomQuote.character.length > 97) {
            return generateQuote();
        } else {
            $('.quote').text(randomQuote.quote);
            $('.character').text(randomQuote.character);
            said = randomQuote.quote.split(' ').join('%20');
            return speaker = randomQuote.character.split(' ').join('%20');
        }
    };

    $(document).ready(function() {
        $('.btn-tweet').hide();
        return $('.btn-force').on('click', function() {
            generateQuote();
            $('.twitter').attr('href', 'https://twitter.com/intent/tweet?text=' + speaker + '%20said,%20"' + said + '"%20%23DragonBall%20https://www.luisangelmaciel.one').attr('target', '_blank');
            return $('.btn-tweet').show();
        });
    });

}).call(this);