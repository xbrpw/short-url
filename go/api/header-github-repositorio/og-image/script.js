function baixa() {
  domtoimage
    .toBlob(document.getElementById("assinaturaFinal"))
    .then(function (blob) {
      window.saveAs(blob, "Assinatura.png");
    });
}

/*--------- NOME ---------*/
function insereNome() {
  var conteudoNome = document.getElementById("nomeConteudo").value;
  document.getElementById("containerNome").innerHTML = conteudoNome;
}
/*------------------*/

/*--------- CARGO ---------*/
function insereCargo() {
  var conteudoCargo = document.getElementById("cargoConteudo").value;
  document.getElementById("containerCargo").innerHTML = conteudoCargo;
}
/*------------------*/

/*--------- TELEFONE ---------*/
function telefoneOpcional() {
  var x = document.getElementsByClassName("campoTelefone");
  var i;
  for (i = 0; i < x.length; i++) {
    if (x[i].style.display === "none") {
      x[i].style.display = "block";
    } else {
      x[i].style.display = "none";
    }
  }
}

function insereTelefone() {
  var conteudoTelefone = document.getElementById("telefoneConteudo").value;
  document.getElementById("containerTelefone").innerHTML = conteudoTelefone;
}
/*------------------*/

function mudaCor(hex) {
  let root = document.querySelector(":root");
  root.style.setProperty("--cor", hex);
}