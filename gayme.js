var row = 24;
var col = 80;
var floor = ".";
var player = {
  pos_x: Math.floor(Math.random() * (row - 0) + 0),
  pos_y: Math.floor(Math.random() * (col - 0) + 0),
  glyph: "@"
}
function draw(){
  var canvas = document.getElementById("gameBoard");
  canvas.value = "";
    for (i = 0; i < row; i++){
      for(j = 0; j < col; j++){
        if(i == player.pos_x && j == player.pos_y){
          canvas.value += player.glyph;
        }
        else{
          canvas.value += "."
        }
      }
      canvas.value += "\n"
    }  
}

function can_move(p_target_x, p_target_y){
  if(p_target_x > 23 || p_target_x < 0){
    return false
  }
  if(p_target_y > 79 || p_target_y < 0){
    return false
  }
  return true;
}

window.addEventListener('load', (event) => {
  draw()
});
window.addEventListener('keypress', (event) => {
  var key = event.key;
  switch(key) {
    case "w": 
      if(can_move(player.pos_x -= 1, 0)){
        draw()
      }
      else{
        player.pos_x += 1
      }
    break;
    case "a":
      if(can_move(0, player.pos_y -= 1)){
        draw()
      }
      else{
        player.pos_y += 1
      }
    break;
    case "s":
      if(can_move(player.pos_x += 1, 0)){
        draw()
      }
      else{
        player.pos_x -= 1
      }
    break;
    case "d":
      if(can_move(0, player.pos_y += 1)){
        draw()
      }
      else{
        player.pos_y -= 1
      }
    break;
  }
})