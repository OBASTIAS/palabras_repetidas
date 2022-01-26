var text_letter = document.getElementById('text_letter')
text_letter.addEventListener('change', (event) => {
       
        letter_count(event.target.value)
});
function letter_count(letter){
    var p_input = document.querySelector("#texto-entrada")
    var cant = 0
    str_p_input = p_input.innerHTML
    for (let i = 0; i < str_p_input.length; i++) {
        if (str_p_input[i] === letter){
            cant++
        }
    }

    var resultados = document.querySelector("#resultados")

    while (resultados.firstChild) {
        resultados.removeChild(resultados.firstChild)
    }
    var nuevoElementoP = document.createElement("p")
    var nuevoElementoStrong = document.createElement("strong")
    var nuevoElementoSpan = document.createElement("span")
    let textoDelElemento = document.createTextNode("Letra: " + letter)
    let textoDelElementoSpan = document.createTextNode(" Cantidad: " + cant)

    nuevoElementoP.appendChild(nuevoElementoStrong)
    nuevoElementoStrong.appendChild(textoDelElemento)
    nuevoElementoSpan.appendChild(textoDelElementoSpan)
    nuevoElementoP.appendChild(nuevoElementoSpan)
    resultados.appendChild(nuevoElementoP)

}