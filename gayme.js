let entity_list = [];
let player = {};
// Calls the map_gen() on window load, generating the map
function setup(){
  return map_gen();
}

//updates the map
function update(){
  return update_map();
}


// Loops through the 2d array and draws it on the screen
function draw(){
  canvas.innerHTML = "";
  var output = "";
  for (i = 0; i < row; i++){
    for(j = 0; j < col; j++){
      if(player.pos[0] == i && player.pos[1] == j){
        output += "<span id='player'>"+player.glyph+"</span>";
      }
      else{
      output += map[i][j]
      }
    }
    output += "<br>";
  }
  canvas.innerHTML = output;
}

// Checks if the player can move into that position, if not it stops the player from moving.
function can_move(p_target_x, p_target_y){
  if(p_target_x > row-1 || p_target_x < 0 || map[p_target_x][player.pos[1]] == wall){
    return false;
  }
  if(p_target_y > col-1 || p_target_y < 0 || map[player.pos[0]][p_target_y] == wall){
    return false;
  }
  return true;
}

//When the window loads the script locates the "gameCanvas" div and calls the setup and draw functions, which setup and draw the map
window.addEventListener('load', (event) => {
  canvas = document.getElementById("gameCanvas");
  setup();
  
player = {
  pos: drop_player(row, 0, col, 0),
  glyph: "@"
}

entity_list.push(player);
  draw();
});


// Main game loop, basic movement and checks for OOB.
function game_loop(){
  window.addEventListener('keypress', (event) => {
    var key = event.key;
    switch(key) {
      case "w": 
        if(can_move(player.pos[0] - 1, 0)){
          player.pos[0] -= 1;
        }
      break;
      case "a":
        if(can_move(0, player.pos[1] - 1)){
          player.pos[1] -= 1;
        }
      break;
      case "s":
        if(can_move(player.pos[0] + 1, 0)){
          player.pos[0] += 1;
        }
      break;
      case "d":
        if(can_move(0, player.pos[1] + 1)){
          player.pos[1] += 1;
        }
      break;
    }
    //update_map();
    draw();
  })
}
game_loop()
