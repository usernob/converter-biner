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
    
  }
  heksa_to_desimal(){
    
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
    
  }
  get heksadesimal(){
    
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

//let test = new Converter('8','desimal')
//console.log(test.biner)