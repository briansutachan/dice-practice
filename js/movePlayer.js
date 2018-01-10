function movePlayer(player, position){
    if(position > 10){
            gameOver(player)
            return false

    }

    const tilePosition = tiles[position -1].getBoundingClientRect()
    // console.log(tilePosition)
    player.style.top = tilePosition.top + `px`
    player.style.left = tilePosition.left + `px`

}