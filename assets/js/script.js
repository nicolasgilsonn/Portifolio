document.querySelector("#memoria").addEventListener("change", calcular)
document.querySelector("#tipo").addEventListener("change", calcular)
document.querySelector("#prototipo_sim").addEventListener("change", calcular)
document.querySelector("#prototipo_nao").addEventListener("change", calcular)
document.querySelector("#prazo").addEventListener("input", function(){
    const pazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerText = "Prazo: " + prazo
    calcular()
})

function calcular(){
    const qtdM = document.querySelector("#memoria").value
    let valor = qtdM * 200
    

    const tipo = document.querySelector("#tipo").value
    if(tipo == 2) valor += 700

    const prototipo = document.querySelector("#prototipo_sim").checked
    if(prototipo) valor += 1500

    document.querySelector("#valor").innerText ='R$' + valor.toFixed(2)



}