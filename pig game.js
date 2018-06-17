var scores,roundScores,activePlayer,gamePlay;

init();
document.querySelector('.btn-roll').addEventListener('click',function () {
    if(gamePlay) {
        var dice = Math.floor(Math.random() * 6) + 1;
        //display the dice
        var diceDom;
        diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';
        //update the scores
        if (dice != 1) {
            roundScores += dice;//addscore
            document.querySelector('#current-' + activePlayer).textContent = roundScores;

        } else {

            nextPlayer();
        }
    }
} );

document.querySelector('.btn-hold').addEventListener('click',function () {
    //adding current score to the global score
    if (gamePlay) {
        scores[activePlayer] += roundScores;
        //updating the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //check if the player won the game
        if (scores[activePlayer] > 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('Winner!');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlay = false;
        } else {
            //calling the next player function
            nextPlayer();
        }
    }
});
function nextPlayer() {
    //next player
    activePlayer===0?activePlayer=1:activePlayer=0;
    roundScores=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';

}
document.querySelector('.btn-new').addEventListener('click',init);

function init() {
    scores=[0,0];
    activePlayer=0;
    roundScores=0;
    gamePlay=true;
    document.querySelector('.dice').style.display='none';
    document.getElementById('score-0').textContent =  '0';
    document.getElementById('score-1').textContent =  '0';
    document.getElementById('current-0').textContent =  '0';
    document.getElementById('current-1').textContent =  '0';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('Winner!');
    document.querySelector('.player-1-panel').classList.remove('Winner!');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}
//document.querySelector('#current-'+activePlayer).textContent = dice;
//document.querySelector('#current-'+activePlayer).innerHTML = '<em>' + dice + '</em>';
