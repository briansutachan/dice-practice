function rollTheDie() {
    // console.log("Got Clicked")
    die.setAttribute(`src`, `img/Dodecahedron3.gif`)

    roll.textContent = `?`;

    setTimeout(function(){
        const num = Math.floor(Math.random() * 10 + 1)
        roll.textContent = num;

        if(turn === player1){
            player1position += num;
            movePlayer(player1, player1position);
            turn = player2;
        }
        else {
            player2position += num;
            movePlayer(player2, player2position);
            turn = player1;
        }


    }, 1990);
}
die.addEventListener(`click`, rollTheDie)
roll.addEventListener(`click`, rollTheDie);