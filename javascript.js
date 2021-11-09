
var calcular = document.getElementById("calcular")

calcular.addEventListener('click', imc);


function imc(){
    var n = document.getElementById("nome").value
    var altura = document.getElementById("altura").value
    var peso = document.getElementById("peso").value
    var resultado = document.getElementById("resultado")
    var nome = n.toUpperCase()

    if(nome !== "" && altura !== "" && peso !== ""){
        var calculo_imc = (peso/(altura*altura)).toFixed(2)
        var classificacao = ""
        if(calculo_imc < 18.5){
            classificacao = "ABAIXO DO PESO." 
        } else if (calculo_imc < 24.9 ){
            classificacao = "COM O PESO IDEAL. PARABÊNS!!"
        } else if(calculo_imc < 29.9){
            classificacao = "COM SOBREPESO."
        } else if (calculo_imc < 39.9){
            classificacao = "COM OBESIDADE GRAU II, CUIDADO."
        } else {
            classificacao = "COM OBESIDADE GRAVE, MUITO CUIDADO."
        }
        resultado.textContent = `${nome}, O SEU IMC É ${calculo_imc} E VOCÊ ESTA ${classificacao}`

    } else{
        resultado.textContent = "PREENCHA TODOS OS CAMPOS."
    }
}