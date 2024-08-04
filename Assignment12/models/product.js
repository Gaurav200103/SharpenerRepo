let data = [];

module.exports = class Product{
  constructor(title){
    this.title = title;
  }


  save(){
    data.push(this.title);
  }

  static fetchAll(){
    return data;
  }
}