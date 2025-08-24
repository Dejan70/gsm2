/////s7 comm ini
var nodes7 = require('nodes7'); // This is the package name, if the repository is cloned you may need to require 'nodeS7' with uppercase S

///PRVI PLC START   11111111111111111111111111111111111111111111111111111111111
var conn1 = new nodes7;
var doneReading1 = false;
var doneWriting1 = false;

var variables1 = {
    //  TEST1: 'MR4',          // Memory real at MD4
     // TEST2: 'M32.2',        // Bit at M32.2
    //  TEST3: 'M20.0',        // Bit at M20.0
   //   TEST4: 'DB1,REAL0.20', // Array of 20 values in DB1
   //   TEST5: 'DB1,REAL4',    // Single real value
    //  TEST6: 'DB1,REAL8',    // Another single real value
     // TEST7: 'DB1,INT12.2',  // Two integer value array
    //  TEST8: 'DB1,LREAL4',   // Single 8-byte real value
    //  TEST9: 'DB1,X14.0',    // Single bit in a data block
   //   TEST10: 'DB1,X14.0.8'  // Array of 8 bits in a data block
   TEST1: 'DB5,REAL222',
  // TEST2: 'DB2,REAL4',
  // TEST3: 'DB2,REAL8',
 //  TEST4: 'DB2,REAL12',
   //TEST5: 'DB2,REAL16',
   //TEST6: 'DB2,REAL20'
 //  TEST1: 'DB2,REAL0',
};
   //////////start

    //conn1.initiateConnection({ port: 102, host: '192.168.0.2', rack: 0, slot: 1, debug: false }, connected); // slot 2 for 300/400, slot 1 for 1200/1500, change debug to true to get more info
    conn1.initiateConnection({ port: 102, host: '192.168.0.10', rack: 0, slot: 1, debug: false }, connected1); // slot 2 for 300/400, slot 1 for 1200/1500, change debug to true to get more info
    

   // var conn1 = new nodes7;
    // conn1.initiateConnection({port: 102, host: '192.168.0.2', localTSAP: 0x0100, remoteTSAP: 0x0200, timeout: 8000, doNotOptimize: true}, connected1);
    // local and remote TSAP can also be directly specified instead. The timeout option specifies the TCP timeout.
   // conn1.initiateConnection({port: 102, host: '192.168.0.1', localTSAP: 0x0100, remoteTSAP: 0x0200, timeout: 8000, doNotOptimize: false}, connected1);

    


    function connected1(err) {
      if (typeof(err) !== "undefined") {
        // We have an error. Maybe the PLC is not reachable.
        console.log(err);
      //  process.exit();
      }
      conn1.setTranslationCB(function(tag) { return variables1[tag]; }); // This sets the "translation" to allow us to work with object names
    //  conn1.addItems(['TEST1', 'TEST2','TEST3','TEST4','TEST5']);
      conn1.addItems('TEST1');
//    conn1.addItems('TEST1');
      // conn1.removeItems(['TEST2', 'TEST3']); // We could do this.
      // conn1.writeItems(['TEST5', 'TEST6'], [ 867.5309, 9 ], valuesWritten); // You can write an array of items as well.
      // conn1.writeItems('TEST7', [666, 777], valuesWritten); // You can write a single array item too.
    //  conn1.writeItems('TEST3', true, valuesWritten); // This writes a single boolean item (one bit) to true
   // conn1.addItems('TEST6');
      conn1.readAllItems(valuesReady1);
    }
    
    function valuesReady1(anythingBad, values) {
      if (anythingBad) { console.log("SOMETHING WENT WRONG READING VALUES!!!!"); }
      console.log(values);
      doneReading1 = true;
    //  if (doneWriting1) { process.exit(); }
    if (doneWriting1) { console.log("written"); }
    }
    
    function valuesWritten1(anythingBad) {
      if (anythingBad) { console.log("SOMETHING WENT WRONG WRITING VALUES!!!!"); }
      console.log("Done writing.");
      doneWriting1 = true;
    //  if (doneReading1) { process.exit(); }
    if (doneReading1) { console.log("read done");  }

    }
///PRVI PLC END

///DRUGI PLC START   22222222222222222222222222222222222222222222222222222222222222222222222222222222222
var conn2 = new nodes7;
var doneReading2 = false;
var doneWriting2 = false;

var variables2 = {
    //  TEST1: 'MR4',          // Memory real at MD4
     // TEST2: 'M32.2',        // Bit at M32.2
    //  TEST3: 'M20.0',        // Bit at M20.0
   //   TEST4: 'DB1,REAL0.20', // Array of 20 values in DB1
   //   TEST5: 'DB1,REAL4',    // Single real value
    //  TEST6: 'DB1,REAL8',    // Another single real value
     // TEST7: 'DB1,INT12.2',  // Two integer value array
    //  TEST8: 'DB1,LREAL4',   // Single 8-byte real value
    //  TEST9: 'DB1,X14.0',    // Single bit in a data block
   //   TEST10: 'DB1,X14.0.8'  // Array of 8 bits in a data block
   TEST1: 'DB5,REAL222',
  // TEST2: 'DB2,REAL4',
  // TEST3: 'DB2,REAL8',
 //  TEST4: 'DB2,REAL12',
   //TEST5: 'DB2,REAL16',
   //TEST6: 'DB2,REAL20'
 //  TEST1: 'DB2,REAL0',
};
   //////////start

    //conn1.initiateConnection({ port: 102, host: '192.168.0.2', rack: 0, slot: 1, debug: false }, connected); // slot 2 for 300/400, slot 1 for 1200/1500, change debug to true to get more info
    conn2.initiateConnection({ port: 102, host: '192.168.0.1', rack: 0, slot: 1, debug: false }, connected); // slot 2 for 300/400, slot 1 for 1200/1500, change debug to true to get more info
    

   // var conn2 = new nodes7;
    // conn2.initiateConnection({port: 102, host: '192.168.0.2', localTSAP: 0x0100, remoteTSAP: 0x0200, timeout: 8000, doNotOptimize: true}, connected);
    // local and remote TSAP can also be directly specified instead. The timeout option specifies the TCP timeout.
   // conn2.initiateConnection({port: 102, host: '192.168.0.1', localTSAP: 0x0100, remoteTSAP: 0x0200, timeout: 8000, doNotOptimize: false}, connected);

    


    function connected(err) {
      if (typeof(err) !== "undefined") {
        // We have an error. Maybe the PLC is not reachable.
        console.log(err);
      //  process.exit();
      }
      conn1.setTranslationCB(function(tag) { return variables2[tag]; }); // This sets the "translation" to allow us to work with object names
    //  conn1.addItems(['TEST1', 'TEST2','TEST3','TEST4','TEST5']);
      conn1.addItems('TEST1');
//    conn1.addItems('TEST1');
      // conn1.removeItems(['TEST2', 'TEST3']); // We could do this.
      // conn1.writeItems(['TEST5', 'TEST6'], [ 867.5309, 9 ], valuesWritten); // You can write an array of items as well.
      // conn1.writeItems('TEST7', [666, 777], valuesWritten); // You can write a single array item too.
    //  conn1.writeItems('TEST3', true, valuesWritten); // This writes a single boolean item (one bit) to true
   // conn1.addItems('TEST6');
      conn1.readAllItems(valuesReady);
    }
    
    function valuesReady(anythingBad, values) {
      if (anythingBad) { console.log("SOMETHING WENT WRONG READING VALUES!!!!"); }
      console.log(values);
      doneReading1 = true;
    //  if (doneWriting1) { process.exit(); }
    if (doneWriting1) { console.log("written"); }
    }
    
    function valuesWritten(anythingBad) {
      if (anythingBad) { console.log("SOMETHING WENT WRONG WRITING VALUES!!!!"); }
      console.log("Done writing.");
      doneWriting1 = true;
    //  if (doneReading1) { process.exit(); }
    if (doneReading1) { console.log("read done");  }

    }
///DRUGI PLC START
    ///////////end

///////s7 com end

const port = 1880;

let app    = require('express')();
let server = app.listen(port);
let io     = require('socket.io')(server);

app.get('/', function(req, res){
   
   '/index.html'
   res.sendFile(__dirname + "/public");

  });

  setInterval( function() {
   
  
   const snd1=[
      {name0:"0",result:"0",name:"0",ip:"0", num:"0",lay:"nn", x:1,y:5,},  
    ]
   var msg = "‚23";
 // snd1[1].name0="deki";
   io.emit('message', snd1);
  }, 1000);
//soc 2 end

  const express = require('express');

app.use(express.json());
app.use(express.static(__dirname +"/public"));

////   butt 1111***************************
app.post('/save',(req,res) => {
    let msg = req.body.msg;
    console.log("butt1");

    //////////start
    conn1.readAllItems(valuesReady);
    
    ///////////end
    res.send("Sve ok1");
            })

app.post('/sav',(req,res) => {
 // conn1.writeItems('TEST2', [777], valuesWritten); 
 // conn1.writeItems(['TEST1', 'TEST3'], [ 20.5309, 100], valuesWritten); 
  console.log("butt2");
    let msg = req.body.msg;
    res.send("Sve ok2");
             })

             setInterval( function() {
              conn1.readAllItems(valuesReady);
          


             }, 1000);