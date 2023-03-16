/*

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

function pariDispari(num1, num2) {
    
    if((num1 + num2) % 2 === 0){
        return "Pari";
    }
    return "Dispari";
}

const play = document.getElementById('play');

play.addEventListener('click', function(){

    let a = parseInt(document.getElementById('num1').value); 
    let b = Math.floor(Math.random() * 5) + 1;
    let numbers = pariDispari(a, b);
    console.log(a, b)

    let select = document.getElementById('pariDispari').value;
    if(select === numbers){
        document.getElementById('WinLost').innerHTML = `<h1>Hai vinto</h1>`;
    }else{
        document.getElementById('WinLost').innerHTML = `<h1>Hai perso</h1>`;
    }

})



/*
 Palindroma Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

function check(word, paliNoPali) {
    for(let i = 0; i < word.length; i++){
    if(word[i] === word[word.length - 1 - i]){
        paliNoPali = true;
    }else{
        paliNoPali = false;
    }
}
return paliNoPali
}

const button = document.getElementById('check');
let paliNoPali = false;

button.addEventListener('click', function(){
    const word = document.getElementById('Pali').value;
    paliNoPali = check(word, paliNoPali);
    console.log(paliNoPali);
    if(paliNoPali === true){
        document.getElementById('PaliNoPali').innerHTML = `<h1>La parola è palindroma</h1>`
    }else{
        document.getElementById('PaliNoPali').innerHTML = `<h1>La parola non è palindroma</h1>`
    }
})















