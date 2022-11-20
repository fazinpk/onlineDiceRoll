function rollDice(){
    dice=document.getElementsByClassName("dice");
    n=Math.floor(Math.random()*6);
    for(i=0;i<6;i++){
        dice[i].style.display="none";
    }
    dice[n].style.display="block"
    

    
    



}