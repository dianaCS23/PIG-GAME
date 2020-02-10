
var scores,roundScore,activePlayer;

/*Arrays */
scores = [0,0];
roundScore = 0;
activePlayer = 0;

/*  Math.floor=Devuelve el máximo entero menor o igual a un número. */
/*  Math.random = La función Math.random() retorna un punto flotante, un número pseudo-aleatorio dentro del rango [0, 1).
 Esto es, desde el 0 (Incluido) hasta el 1 pero sin incluirlo (excluido), el cual se puede escalar hasta el rango deseado. 
 La implementación selecciona la semilla inicial hasta el algoritmo que genera el número aleatorio; este no puede ser elegido o cambiado por el usuario. */

 

//document.querySelector('#current-0').textContent = dice;
/* remove the dice image at the beginning*/
document.querySelector('.dice').style.display = 'none'; 
//pone todos los numeros en cero
document.getElementById('score-0').textContent ='0';
document.getElementById('score-1').textContent ='0';
document.getElementById('current-0').textContent ='0';
document.getElementById('current-1').textContent ='0';







document.querySelector('.btn-roll').addEventListener('click', function(){
 
    //1.First we need a randow number
    var dice = Math.floor(Math.random() * 6) + 1; 

    //2.Second we are going to show te image result
   var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png'; 
 //3.Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        //Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //Next player
        /*nextPlayer();*/
    }



});