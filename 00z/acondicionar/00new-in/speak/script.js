/* JS comes here */
function runSpeechRecognition() {
  // get output div reference
  var output = document.getElementById("output");
  // get action element reference
  var action = document.getElementById("action");
  // new speech recognition object
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
  recognition.lang = "es";

  // This runs when the speech recognition service starts
  recognition.onstart = function() {
    action.innerHTML = "<small>listening, please speak...</small>";
  };

  recognition.onspeechend = function() {
    action.innerHTML = "<small>stopped listening, hope you are done...</small>";
    recognition.stop();
  }
  
  recognition.onerror = function(e) {
    console.log("error!!!", e)
  }

  // This runs when the speech recognition service returns result
  recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
    var confidence = event.results[0][0].confidence;
    output.innerHTML = "<b>Text:</b> " + transcript + "<br/> <b>Confidence:</b> " + confidence*100+"%";
    output.classList.remove("hide");
    
    let textoaleer = "No comprendo";
    const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    if ((transcript.indexOf(" día") > -1 || transcript.indexOf(" dia") > -1) && transcript.indexOf(" hoy") > -1) {
      
      var d = new Date();
      var n = d.getDay();
      textoaleer = `Hoy es ${dias[n]}`;
    } else if ((transcript.indexOf(" día") > -1 || transcript.indexOf(" dia") > -1) && transcript.indexOf(" mañana") > -1) {
      var d = new Date();
      var n = d.getDay();
      textoaleer = `Mañana es ${dias[(n+1)%7]}`;
    } else if (transcript.indexOf("tiempo") > -1) {
      textoaleer = "Hoy está nublado";
    } else if (transcript.indexOf(" fecha") > -1 && transcript.indexOf(" hoy") > -1) {
      var d = new Date();
      
      textoaleer = `Hoy es ${d.getDate()} de Julio`;
    } else if (transcript.indexOf(" fecha") > -1 && transcript.indexOf(" mañana") > -1) {
      var d = new Date();
      
      textoaleer = `Mañana será ${d.getDate()} de Julio`;
    }
    
    
    textoaleer = transcript;
    
    let speech = new SpeechSynthesisUtterance();
  speech.lang = "es";
  speech.text = textoaleer;
  window.speechSynthesis.speak(speech);
  };

  // start recognition
  recognition.start();
}

document.querySelector("#aux").addEventListener("click", function() {
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "es";
  speech.text = "¿Dónde están Sofía y mamá?";
  window.speechSynthesis.speak(speech);
})