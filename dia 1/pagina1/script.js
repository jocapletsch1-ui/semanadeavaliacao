 function calcular(){
    var m1 = parseFloat(document.getElementById("filhadaputa1").value)
    var m2 = parseFloat(document.getElementById("filhadaputa2").value)
    var media = (m1 + m2 ) / 2
    document.getElementById("resultado").textContent = media.toFixed(2)
    
}