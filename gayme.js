var row = 24;
var col = 80;
var floor = ".";
var wall = "#";
var canvas = "";
var player = {
  pos_x: Math.floor(Math.random() * (row - 0) + 0),
  pos_y: Math.floor(Math.random() * (col - 0) + 0),
  glyph: "@"
}
function draw(){
  canvas.innerHTML = "";
    for (i = 0; i < row; i++){
      for(j = 0; j < col; j++){
        if(i == player.pos_x && j == player.pos_y){
          canvas.innerText += player.glyph;
        }
        else{
          canvas.innerText += wall
        }
      }
      canvas.innerText += "\n"
    }  
}

function can_move(p_target_x, p_target_y){
  if(p_target_x > row-1 || p_target_x < 0){
    return false
  }
  if(p_target_y > col-1 || p_target_y < 0){
    return false
  }
  return true;
}

window.addEventListener('load', (event) => {
  canvas = document.getElementById("gameCanvas");
  draw()
});
window.addEventListener('keypress', (event) => {
  var key = event.key;
  switch(key) {
    case "w": 
      if(can_move(player.pos_x - 1, 0)){
        player.pos_x -= 1
        draw()
      }
    break;
    case "a":
      if(can_move(0, player.pos_y - 1)){
        player.pos_y -= 1
        draw()
      }
    break;
    case "s":
      if(can_move(player.pos_x + 1, 0)){
        player.pos_x += 1
        draw()
      }
    break;
    case "d":
      if(can_move(0, player.pos_y + 1)){
        player.pos_y += 1
        draw()
      }
    break;
  }
})