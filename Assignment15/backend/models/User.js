const db = require("../util/database");

class User{
  constructor( username, phone, email){
    
    this.username = username;
    this.phone = phone;
    this.email = email;
  }

  save(){
    
    return db.execute(`insert into user(username, phone, email) values('${this.username}', '${this.phone}', '${this.email}')`);
  }

  static findAll(){
    return db.execute(`select * from user`);
  }

  static deleteById(id){
    return db.execute(`delete from user where id= ${id}`)
  }

  static updateUser(body){
    const {id, username, phone, email} = body;
    return db.execute(`update user set username='${username}', phone='${phone}', email='${email}' where id=${id}`)
  }

  static findById(id){
    return db.execute(`select * from user where id=${id}`);
  }
}

module.exports = User;