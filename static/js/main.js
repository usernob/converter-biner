
function convert(){
  let pattern = {
    desimal: "^[0-9]+$",
    biner: "^[01]+$",
    oktal: "^[0-7]+$",
    heksadesimal: "^[1-9A-Fa-f]+$"
  }
  let content = document.getElementsByClassName('result_value')
  let type = document.getElementById('typeList').value
  let input = document.getElementById('num').value
  let regex = new RegExp(pattern[type])
  for(let i = 0; i < content.length; i++){
    if(regex.exec(input)){
      let result = new Converter(input, type)
      content[i].innerHTML = result.array[i]
    }
    else {
      content[i].innerHTML = 'invalid';
    }
  }
}