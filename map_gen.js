let row = 24;
let col = 80;
let floor = ".";
let wall = "#";
let canvas = "";
let map = "";

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

function mutate_wall(x,y){
  var cont = 0;
  for(let i = -1; i < 2; i++){
    for(let j = -1; j < 2; j++){
      try {
        if(map[x+i][y+j] == wall){
          cont += 1;
        } 
      } catch (e) {
        continue;
      }
    }
  }
  return cont >= 5;
}

function do_automata_rule_5(map){
    for (let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
          switch(map[i][j]){
            case wall:
              if(mutate_wall(i, j)){
                map[i][j] = wall
              }
              else{
                map[i][j] = floor
              }
              break;
            case floor:
              if(mutate_wall(i, j)){
                map[i][j] = wall
              }
              else{
                map[i][j] = floor
              }
              break;
          }
        }
    }
    return map;
}

function generate_random_in_range(min, max){
  let x = Math.floor(Math.random() * (max - min) + min);
  return x;
}

// Create the empty map and then it fills it with wall tiles, except for the player position which is randomized
function map_gen(){
  map = createArray(row, col);
  for (let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(Math.random() < 0.52){
                map[i][j] = wall;
            }
            else{
                map[i][j] = floor;
            }
        }
    }
  for(let i = 0; i < 5; i++){
    do_automata_rule_5(map)
  }
  return map;
}

function drop_player(max_x, min_x, max_y, min_y){
  let position = [generate_random_in_range(max_x, min_x),generate_random_in_range(max_y, min_y)];
  while(map[position[0]][position[1]] != floor){
    position = [generate_random_in_range(max_x, min_x),generate_random_in_range(max_y, min_y)]
  }
  return position;
}