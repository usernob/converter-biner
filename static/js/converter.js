class Converter {
  constructor(num, type){
    this.num = num;
    this.type = type;
    this.desimal;
    switch (this.type) {
      case 'desimal':
        this.desimal = parseInt(this.num);
        break;
      case 'biner':
        this.desimal = this.biner_to_desimal();
        break;
      case 'oktal':
        this.desimal = this.oktal_to_desimal();
        break;
      case 'heksadesimal':
        this.desimal = this.heksa_to_desimal();
        break;
      default:
        throw 'error'
    }
  }
  biner_to_desimal(){
    let result = 0;
    for(let i = 0; i < this.num.length; i++){
      if(this.num[i] === '1'){
        result += 2 ** (this.num.length - i - 1)
      }
    }
    return result;
  }
  oktal_to_desimal(){
    let result = 0;
    for(let i = 0; i < this.num.length; i++){
      result += this.num[i] * 8 ** (this.num.length - i - 1)
    }
    return result;
  }
  heksa_to_desimal(){
    let result = 0;
    let data = {
      'A':10,
      'B':11,
      'C':12,
      'D':13,
      'E':14,
      'F':15
    }
    for(let i = 0; i < this.num.length; i++){
      if(this.num[i].toUpperCase() in data){
        result += data[this.num[i].toUpperCase()] * 16 ** (this.num.length - i -1)
      }
      else {
        result += this.num[i] * 16 ** (this.num.length - i - 1)
      }
    }
    return result;
  }
  get biner(){
    let desimal = this.desimal;
    let result = '';
    while(desimal > 0){
      result = (desimal % 2) + result;
      desimal = parseInt(desimal / 2);
    }
    return result;
  }
  get oktal(){
    let desimal = this.desimal;
    let result = '';
    while(desimal > 0){
      result = (desimal % 8) + result;
      desimal = parseInt(desimal / 8);
    }
    return result;
  }
  get heksadesimal(){
    let desimal = this.desimal;
    let result = '';
    let x;
    while(desimal > 0){
      x = desimal % 16
      if(x >= 10){
        result = String.fromCodePoint(55 + x) + result
      }
      else {
        result = x + result;
      }
      desimal = parseInt(desimal / 16);
    }
    return result;
  }
  get array(){
    return [
      this.desimal,
      this.biner,
      this.oktal,
      this.heksadesimal
    ]
  }
}

//let test = new Converter('7a','heksadesimal')
//console.log(test.array)