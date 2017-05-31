function to1240(num) {
  var reminder = num;
  var share = 0;
  var toArray = [];

  do {
    share = Math.floor(reminder % 4);
    reminder = Math.floor(reminder / 4);

    if(share === 3) {
      toArray.unshift(4);
    } else {
      toArray.unshift(share);
    }

  }while(reminder > 0)

  return toArray.join('');
}

function toDec(str) {
  var dec = 0;
  var index = 1;

  for(var i = str.length-1; i >= 0; i--) {
    if(str[i] === '4') {
      dec = dec + index * 3;
    } else {
      dec = dec + index * str[i];
    }

    index = index*4;
  }

  return dec;
}

function parseData(map_string) {
  var width = map_string.match(/\d+/g)[0];
  var height = map_string.match(/\d+/g)[1];
  var data = map_string.match(/[Po+-]+/g).join("").replace(/-/g, " ");

  return { "width" : width, "height" : height, "data" : data};
}

function drawMap(json) {
  var index = 0;
  var map = [];
  while(index < json.height) {
    map.push(json.data.split("").slice(json.width * index, json.width * (index+1)).join(""));
    index++;
  }

  console.log(map[0] + "\n" + map[1] + "\n" + map[2] + "\n" + map[3] + "\n" + map[4]);
}
