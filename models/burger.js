 // Import the ORM to create functions that will interact with the database.
 const orm = require('../config/orm.js')

 const burger = {
     selectAll: function(cb) {
       orm.selectAll("burgers", cb);
     },
     // The variables cols and vals are arrays.
     insertOne: function(cols, vals, cb) {
       orm.insertOne("burgers", cols, vals, function(res) {
         cb(res);
       });
     },
     updateOne: function(objColVals, condition, cb) {
       orm.updateOne("burgers", objColVals, condition, function(res) {
         cb(res);
       });
     }
   };
 
// Export the database functions for the controller (burgers_controller.js).
 module.exports = burger;