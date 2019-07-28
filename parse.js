
const fs = require("fs");

var result = "{";

let text = JSON.parse(fs.readFileSync("postman/parse.json", "utf8"));

parse(text);

function parse(json){
  if(Array.isArray(json)){
    result += "type:'array', items:{";
    parse(json[0]);
    result += "}";
  }else if(typeof json == "object"){
    result += "type:'object',properties:{";
    for (var variable in json) {
      result += variable + ":{";
      parse(json[variable]);
      result += "},";
    }
    result += "}";
  }else{
      result += "type:'" + typeof json + "'";
  }
}

result += "}";

console.log(result);
