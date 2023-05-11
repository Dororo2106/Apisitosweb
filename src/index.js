const express=require("express");
const app=express();
const morgan= require("morgan");
const sql = require('mssql')

//configuraciones
app.set("port",8001)
app.set("json spaces",2);
/*
  var Connection = require('tedious').Connection;  
  var config = {  
      server: 'LAPTOP-G7BI5T01',  //update me
      authentication: {
          type: 'default',
          options: {
              userName: 'sa', //update me
              pasword: "vfoa8kpi"
          }
      },
      options: {
          // If you are on Microsoft Azure, you need encryption:
          encrypt: true,
          database: 'PULSERA'  //update me
      }
  };  
  var connection = new Connection(config);  
  connection.on('connect', function(err) {  
      // If no error, then good to proceed.
      console.log("Connected");  
      executeStatement();  
      /*executeStatement1();  */


      /*
  });

  connection.connect();

  var Request = require('tedious').Request;  
  var TYPES = require('tedious').TYPES;  

  function executeStatement() {  
   Request = new Request("SELECT * FROM AGENTE;", function(err) {  
    if (err) {
        console.log(err);}
    });
    var result = "";
    Request.on('row', function(columns) {
        columns.forEach(function(column) {
          if (column.value === null) {
            console.log('');  
          } else {
            result+= column.value + " ";  
          }
        });
        console.log(result);
        result ="  ";  
    });  

    Request.on('done', function(rowCount, more) {  
    console.log(rowCount + ' rows returned');  
    });  
    
    // Close the connection after the final event emitted by the request, after the callback passes
    Request.on("requestCompleted", function (rowCount, more) {
        connection.close();
    });

    Request.on('done', function(rowCount, more) {  
      console.log(rowCount + ' rows returned');  
      });  
      
      // Close the connection after the final event emitted by the request, after the callback passes
      Request.on("requestCompleted", function (rowCount, more) {
          connection.close();
      });
      connection.execSql(Request);  
  } 
*/
  /*function executeStatement1() {  
    var request = new Request("INSERT AGENTE VALUES('TUPU', '4');", function(err) {  
     if (err) {  
        console.log(err);}  
    });  
    request.addParameter('Name', TYPES.NVarChar,'SQL Server Express 2014');  
    request.addParameter('Number', TYPES.NVarChar , 'SQLEXPRESS2014');  
    request.addParameter('Cost', TYPES.Int, 11);  
    request.addParameter('Price', TYPES.Int,11);  
    request.on('row', function(columns) {  
        columns.forEach(function(column) {  
          if (column.value === null) {  
            console.log('NULL');  
          } else {  
            console.log("Product id of inserted item is " + column.value);  
          }  
        });  
    });

    // Close the connection after the final event emitted by the request, after the callback passes
    request.on("requestCompleted", function (rowCount, more) {
        connection.close();
    });
    connection.execSql(request);
}  */

//middlewarenpms

app.use(morgan('dev'));
app.use(express.json());

//rutas
//app.listen(8000);
console.log("aaaaa");
app.use(require("../rutas/Rutas"))

//empezando el servidor
app.listen(app.get("port"));