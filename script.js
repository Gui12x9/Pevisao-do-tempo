// VARIÁVEIS => Um espaço da memória do computador que guardamos algo (um numero, uma letra, um texto, uma imagem)
// FUNÇÃO => Um trecho de código que só é executado quando é chamado

const key = "c0e9cf253ac7f2e3c94fe16a512c5470"


function colocarDadosNaTela(dados){
    
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
document.querySelector(".descricao").innerHTML = dados.weather[0].description
document.querySelector(".icone").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
}



async function buscarCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

 colocarDadosNaTela(dados)
}



function cliqueiNoBotao() {   
const cidade= document.querySelector(".input-cidade").value

buscarCidade(cidade)
}
