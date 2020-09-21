var row = 24;
var col = 80;
var floor = ".";
var wall = "#";
var canvas = "";
var map = "";

// Create a nd array (in this case, 2d)
function createArray(len){
    var arr = new Array(len || 0),
        i = len;
    if (arguments.length > 1){
      var args = Array.prototype.slice.call(arguments, 1);
      while(i--) arr[len-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

function do_automata_rule_5(map){
    for (i = 0; i < row; i++){
            for(j = 0; j < col; j++){
            if(Math.floor(Math.random)%2 == 0){
                map[i][j] = wall
            }
            else{
                map[i][j] = floor
            }
        }
    }
}

// Create the empty map and then it fills it with wall tiles, except for the player position which is randomized
function map_gen(){
  map = createArray(row, col);
  for (i = 0; i < row; i++){
        for(j = 0; j < col; j++){
        map[i][j] = wall
    }
  }
  do_automata_rule_5(map)
  return map
}

// Updates the map every "tick" (player movement)
function update_map(){
    for (i = 0; i < row; i++){
        for(j = 0; j < col; j++){
          if(player.pos_x == i && player.pos_y == j){
            map[i][j] = "<span id='player'>"+player.glyph+"</span>"
          }
          else{
            map[i][j] = wall
          }
        }
      }
    return map
}