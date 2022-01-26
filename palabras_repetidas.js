function word_count() {
    var x = document.getElementById("text_word").value;


    var p_input = document.querySelector("#texto-entrada")
    var cant = 0
    str_p_input = p_input.innerHTML
    array_words = str_p_input.split(" ")
    for (let i = 0; i < array_words.length; i++) {
       if (array_words[i] === x){
           cant++
       }
   }

    var resultados = document.querySelector("#resultados")

    var nuevoElementoP = document.createElement("p")
   var nuevoElementoStrong = document.createElement("strong")
   var nuevoElementoSpan = document.createElement("span")
   let textoDelElemento = document.createTextNode("Palabra: " + x)
   let textoDelElementoSpan = document.createTextNode(" Cantidad: " + cant)

   nuevoElementoP.appendChild(nuevoElementoStrong)
   nuevoElementoStrong.appendChild(textoDelElemento)
   nuevoElementoSpan.appendChild(textoDelElementoSpan)
   nuevoElementoP.appendChild(nuevoElementoSpan)
   resultados.appendChild(nuevoElementoP)

}