
exports.init_db = function(){
        // id ,thing_content,happen_time,money_change,
        const sqlite3 = require('sqlite3').verbose();
        const db = new sqlite3.Database('data.db',(err)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log('数据库连接成功');
                }       
        });
        return db;
}

exports.create_table = function(db){
        const sql = `CREATE TABLE IF NOT EXISTS schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            thing_content TEXT,
            happen_time date,
            money_change real
        )`;
        db.run(sql);
}

exports.insert_data = function(db){
        const sql = `INSERT INTO schedule (thing_content,happen_time,money_change) VALUES (?,?,?)`;
        // db.run(sql,'bank_card_balance','2024-12-08',5558.75);
        // this.delete_data(db);
}       

exports.delete_data = function(db){
        const sql = `DELETE FROM schedule WHERE id = ?`;
        db.run(sql,1);
}
