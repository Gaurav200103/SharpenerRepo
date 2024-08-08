const db = require("../utils/database");

class Expence{
  constructor(expence, type, description){
    this.expence = expence;
    this.type = type;
    this.description = description;
  }

  static findAll(){
    return db.execute("select * from expence");
  }

  save(){
    return db.execute(`insert into expence(expence, type, description) value('${this.expence}','${this.type}','${this.description}')`);
  }

  static deleteExpence(id){
    return db.execute(`delete from expence where id = ${id}`);
  }
}

module.exports = Expence;