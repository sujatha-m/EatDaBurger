const connection = require('./connection.js')


const orm = {
    selectAll: async function (tableInput, cb) {
      const sql = 'SELECT * FROM ??'
      const [rows] = await connection.query(sql, [tableInput])
      return cb(rows)
    },



    insertOne:async function(tableInput, whatToInsert, cb){
      const sql = 'INSERT INTO ?? SET ?'
      const[rows] = await connection.query(sql,[tableInput, whatToInsert])
      return cb(rows)
    },



    updateOne: async function(){

    }

}  

module.exports = orm