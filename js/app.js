var Enemy = function(x,y,speed) { //this function takes the x,y positions of enemies and also its speed
  this.x=x;
  this.y=y;
  this.speed=speed;
  console.log(x);
  this.sprite = "images/enemy-bug.png";
};
Enemy.prototype.update = function(dt) {
  this.x=this.x+this.speed*dt; // it will ensure that the game runs at the same speed for all computers.
  if(this.x>=500){
   this.x=0;    //makes the enemies come to starting position when the specified condition becomes true
  }
  if (this.x< player.x +80  && this.x +75 > player.x &&this.y < player.y +70 && this.y +80 > player.y) //condition for player and enemy are touching
   {
     player.x=200;       //when the player and enemy are touching player comes to actual position
     player.y=400;
      var mod=document.querySelector(".mo1"); //used for displaying modal box when the game is lost with messages(congratulations,playAgain button)
        var msg=document.querySelector(".msg1");
        msg.innerHTML="You have lost the game";
      mod.style.display="block";
      var play=document.querySelector(".p1");
      play.addEventListener("click",function(){window.location.reload()});
      document.querySelector(".close1").addEventListener("click",closed);
       function closed()
       {
        mod.style.display = "none";
       }
  }
};
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);//this method is used to draw the enemies in given x,y positions
};
var allEnemies=[];
var enemyLocation=[65,150,230];
enemyLocation.forEach(b=>{
  var enemy=new Enemy(0,b,Math.random()*220);
  allEnemies.push(enemy);//stored all enemy objects in an array called allEnemies
});
var Player=function(x,y){ //this method stores the starting position of the player and selects a sprite
 this.x=x;
 this.y=y;
 this.sprite="images/char-princess-girl.png";
}
var player=new Player(200,400);
Player.prototype.update=function(dt){ //this method is used for displaying modalbox after won the game i.e,based on the y distance of the player
  if(this.y<50){
    var mod=document.querySelector(".mo2");
      var msg=document.querySelector(".msg2");
      msg.innerHTML="Congrats"+"<br><br>"+" you have won the game";
      setTimeout(()=>{
          mod.style.display="block";
      },200);
    var play=document.querySelector(".p2");
    play.addEventListener("click",function(){window.location.reload();});
    document.querySelector(".close2").addEventListener("click",closed);
  }
  function closed()
  {
   mod.style.display = "none";
  }
}
Player.prototype.render=function(x,y){ //this method used to draw player sprite in given x,y positions
 ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
}
Player.prototype.handleInput=function(keys){ //this method handles the input from keypresses to move the player based on the key that is pressed
 if(keys==='left'&& this.x>0){
   this.x-=101;
 }
 else if(keys==='right'&& this.x<=400){
   this.x+=101;
 }
 else if (keys==='up'&& this.y>0) {
   this.y-=80;
 }
 else if (keys==='down'&& this.y<=320) {
   this.y+=80;
 }
}
document.addEventListener('keyup', function(e){  //listens for key presses and sends the keys to Player.handleInput() method when the keys are pressed.
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
