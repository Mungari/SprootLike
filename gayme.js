var player = {
  pos_x: Math.floor(Math.random() * (row - 0) + 0),
  pos_y: Math.floor(Math.random() * (col - 0) + 0),
  glyph: "@"
}

// Calls the map_gen() on window load, generating the map
function setup(){
  return map_gen()
}

//updates the map
function update(){
  return update_map()
}

// Loops through the 2d array and draws it on the screen
function draw(){
  canvas.innerHTML = "";
  for (i = 0; i < row; i++){
    for(j = 0; j < col; j++){
      canvas.innerHTML += map[i][j]
    }
    canvas.innerHTML += "<br>"
  }
}

// Checks if the player can move into that position, if not it stops the player from moving.
function can_move(p_target_x, p_target_y){
  if(p_target_x > row-1 || p_target_x < 0){
    return false
  }
  if(p_target_y > col-1 || p_target_y < 0){
    return false
  }
  return true;
}

//When the window loads the script locates the "gameCanvas" div and calls the setup and draw functions, which setup and draw the map
window.addEventListener('load', (event) => {
  canvas = document.getElementById("gameCanvas");
  setup()
  draw()
});


// Main game loop, basic movement and checks for OOB.
function game_loop(){
  window.addEventListener('keypress', (event) => {
    var key = event.key;
    switch(key) {
      case "w": 
        if(can_move(player.pos_x - 1, 0)){
          player.pos_x -= 1
        }
      break;
      case "a":
        if(can_move(0, player.pos_y - 1)){
          player.pos_y -= 1
        }
      break;
      case "s":
        if(can_move(player.pos_x + 1, 0)){
          player.pos_x += 1
        }
      break;
      case "d":
        if(can_move(0, player.pos_y + 1)){
          player.pos_y += 1
        }
      break;
    }
    update_map()
    draw()
  })
}
game_loop()
