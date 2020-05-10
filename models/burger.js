 // Import the ORM to create functions that will interact with the database.
 const orm = require('../config/orm.js')

   const burger = {
     selectAll: function (cb) {
         orm.selectAll("burgers", function (res) {
             cb(res);
         });
     },
     insertOne: function (name, cb) {
         orm.insertOne("burgers", [
             "burger_name", "devoured"
         ], [
             name, false
         ], cb);
     },
     updateOne: function (id, cb) {
         const condition = "id=" + id;
         orm.updateOne("burgers", {
             devoured: true
         }, condition, cb);
     }
 };
 
// Export the database functions for the controller (burgers_controller.js).
 module.exports = burger;