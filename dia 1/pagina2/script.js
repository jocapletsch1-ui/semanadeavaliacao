function calcular(){    
    var idade = parseFloat(document.getElementById("anal").value)
    var tempoatual = (new Date().getFullYear() - idade)
    document.getElementById("filhadaputa1").textContent = tempoatual
}