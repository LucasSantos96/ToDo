


function adicionarItem(){
    
    let ul = document.getElementById('lista')
    let newLi = document.createElement('li') //Cria uma li
    let item = document.getElementById('item').value //Pega o valor do input
    let textSpan = document.createElement('span') // Cria um span para o texto
    let btnRemove = document.createElement('button') //Cria o botão delete task
    let img = document.createElement('img') //Cria o elemento img delete
    let img02 = document.createElement('img') //Cria o elemento img checked
    let btnCheck = document.createElement('button')//Cria o botão check

    
    // Verifica se o input está vazio
    if(item === ""){
        alert("Adicione uma tarefa a sua lista")
        return // interrompe a função
    }
    else{
        textSpan.textContent = item //adiciona o texto do input dentro do span
    }
    //Adiciona o li criado dentro da Lista 
    ul.appendChild(newLi)
    document.getElementById('item').value = "" // limpa o campo
    
    
    //Adiciona o icone de check na imagem
    img02.src = "./img/check.png"
    img02.alt = "Icon-check"
    
    //Adiciona os atributos ao bõtao check e referencia ele mesmo(this)
    btnCheck.setAttribute("onclick", "check(this)")
    btnCheck.type = "button"
    btnCheck.classList.add("btnCheck")
    btnCheck.appendChild(img02) //Adiciona img dentro do botão
    newLi.appendChild(btnCheck) //Adiciona botão check dentro da li
    
    
    newLi.appendChild(textSpan) //Adiciona o textspan(Span que recebe o conteudo do input) ao meio da li entre os icones
    

    //Adiciona os atributos ao bõtao de apagar e referencia ele mesmo(this)
    btnRemove.setAttribute("onclick", "apagar(this)")
    btnRemove.type = "button"
    btnRemove.classList.add("btnApagar")
    newLi.appendChild(btnRemove) //Adiciona botão remove dentro da li
       
    //Adiciona o icone de delete na imagem
    img.src = "./img/remove.png"
    img.alt = "Icon-Delete"
    btnRemove.appendChild(img) //Adiciona img dentro do botão
   
}

//Cria a função de check ao clicar no botão usando a referencia dele mesmo criado antes no check(this) mudando a cor do background e riscando o texto dando como concluído a task
function check(button){
    //Pega o valor o li e todo o valor dentro dele, li e pai do button
    let btnCheckLi = button.parentNode
    btnCheckLi.classList.add("checkActive")
    

}


//Cria a função de deletar a li ao clicar no botão usando a referencia dele mesmo criado antes no apagar(this)
function apagar(button){
    //Pega o valor o li e todo o valor dentro dele, li e pai do button
    let btnRemoveLi = button.parentNode

    //remove a li de dentro da ul ao apertar o botão de remove, li filha da ul
    document.getElementById("lista").removeChild(btnRemoveLi)
    



}
