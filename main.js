const artigo = document.getElementById('artigo')

chamarArtigo()  
function chamarArtigo() {

    artigo.classList.add('artigo')

    artigo.innerHTML += `
        <h2> Ad til </h2>
        <p>
        Alguns dos benefícios desses é o poder regenerador da pele, hidratante, anti-inflamatório… 
        agindo em rugas, flacidez. São excelentes vitaminas para o tratamento anti-idade 
        </p>

        <h2>Pele</h2>
        <p>A epiderme (a camada externa de pele) tem normalmente 0.1mm de espessura. Ao redor dos
             olhos ela apresenta em torno de 0,05mm de espessura. A pele facial e o seu estado 
             variam de pessoa a pessoa, mas os tipos principais de pele são quatro: normal, seca, 
             oleosa e mista.</p>
    `
    console.log(artigo)
}