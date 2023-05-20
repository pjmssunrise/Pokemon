const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/';

let i =0;
while (i < 151) {

    //Criando um elemento <div>
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon'); //Adicionando a class pokemon ao div. Ex.: <div class = 'pokemon'></div>
                                      //A classe pokemon está definida no arquivo app.css

    //Criando um elemento <span>
    const rotulo = document.createElement('span');
    rotulo.innerText = (i+1); //Colocando o número do pokemon ao no texto do <span> criado.
    rotulo.classList.add('numero')

    //Criando um elemento <img>
    const novaImg = document.createElement('img');
    novaImg.src = baseURL+(i+1)+".gif"; //Atribuindo o endereço e o nome do arquivo de imagem no atributo src do <img> criado.

    //______________________
    const informacao = document.createElement('div');
    informacao.classList.add('informacao');

    const botaoInfo = document.createElement('button');
    botaoInfo.classList.add('botaoInfo');
    botaoInfo.innerText = ("sobre")



    // botaoInfo.addEventListener("click", function() {
    //     window.location.src = "Pokemon/pokemon.html";
    // });
      
    //______________________


    //Adicionando a imagem e o rótulo ao <div> criado
    pokemon.appendChild(novaImg);
    pokemon.appendChild(rotulo);
    document.getElementById('card').appendChild(pokemon)
    pokemon.appendChild(informacao);
    informacao.appendChild(botaoInfo);


    //Adicionando o <div> à página
    // document.body.appendChild(pokemon);
    
    i++;
}

