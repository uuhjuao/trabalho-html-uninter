/*TRECHO DO CÓDIGO DO BOTÃO QUE MOSTRA A MENSAGEM*/
document.getElementById("botaoMensagem").addEventListener("click", function () {
    document.getElementById("js").innerHTML = "Para ser melhor do que 99% das pessoas, você tem que fazer o que 99% das pessoas não fazem!";

    setTimeout(function () {
        document.getElementById("js").innerHTML = "";

    }, 7000);
});