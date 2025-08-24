/////s7 comm ini
var nodes7 = require('nodes7'); // This is the package name, if the repository is cloned you may need to require 'nodeS7' with uppercase S
var  random=0;
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
//   TEST2: 'DB5,REAL226',  //DB57.DBW4
TEST2: 'DB5,INT226', 
P1: 'DB3,DINT0', 
P2: 'DB3,DINT4',
P3: 'DB3,DINT8',
P4: 'DB3,DINT12',
P5: 'DB3,DINT16',
P6: 'DB3,DINT20',
P7: 'DB3,DINT24',
P8: 'DB3,DINT28',
P9: 'DB3,DINT32',
P10: 'DB3,DINT36',
P11: 'DB3,DINT40',
P12: 'DB3,DINT44',
P13: 'DB3,DINT48',

P14: 'DB3,DINT52',
P15: 'DB3,DINT56',
P16: 'DB3,DINT60',
P17: 'DB3,DINT64',
P18: 'DB3,DINT68',
P19: 'DB3,DINT72',
P20: 'DB3,DINT76',
P21: 'DB3,DINT80',
P22: 'DB3,DINT84',
P23: 'DB3,DINT88',
P24: 'DB3,DINT92',
P25: 'DB3,DINT96',
P26: 'DB3,DINT100',
P27: 'DB3,DINT104',
P28: 'DB3,DINT108',
P29: 'DB3,DINT112',

P30: 'DB3,DINT116',
P31: 'DB3,DINT120',
P32: 'DB3,DINT124',
P33: 'DB3,DINT128',
P34: 'DB3,DINT132',
P35: 'DB3,DINT136',
P36: 'DB3,DINT140'


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
        //*********************************************1500***************************** */

   // var conn1 = new nodes7;
    // conn1.initiateConnection({port: 102, host: '192.168.0.2', localTSAP: 0x0100, remoteTSAP: 0x0200, timeout: 8000, doNotOptimize: true}, connected1);
    // local and remote TSAP can also be directly specified instead. The timeout option specifies the TCP timeout.
   // conn1.initiateConnection({port: 102, host: '192.168.0.1', localTSAP: 0x0100, remoteTSAP: 0x0200, timeout: 8000, doNotOptimize: false}, connected1);

    


    function connected1(err) {
      if (typeof(err) !== "undefined") {
        // We have an error. Maybe the PLC is not reachable.
   //     console.log(err);
      //  process.exit();
      }
      conn1.setTranslationCB(function(tag) { return variables1[tag]; }); // This sets the "translation" to allow us to work with object names
    //  conn1.addItems(['TEST1', 'TEST2','TEST3','TEST4','TEST5']);
    //  conn1.addItems('TEST1');
    //  conn1.addItems('TEST2');
    //  conn1.addItems('TEST3');
      conn1.addItems(['P1', 'P2','P3','P4','P5','P6', 'P7','P8','P9','P10','P11', 'P12','P13','P14','P15','P16', 'P17','P18','P19',
        'P20','P21', 'P22','P23','P24','P25','P26','P27','P28','P29','P30','P31', 'P32','P33','P34','P35','P36']);//,'P31', 'P32','P33','P34','P35','P36'
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
      console.log("1500:",values);
      console.log("1500_P1: ",values.P1);
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
 //  TEST1: 'DB5,REAL222',//15
   TEST2: 'DB2,REAL4',  //1200
  // TEST3: 'DB2,REAL8',
 //  TEST4: 'DB2,REAL12',
   //TEST5: 'DB2,REAL16',
   //TEST6: 'DB2,REAL20'
 //  TEST1: 'DB2,REAL0',
};
   //////////start

    //conn1.initiateConnection({ port: 102, host: '192.168.0.2', rack: 0, slot: 1, debug: false }, connected); // slot 2 for 300/400, slot 1 for 1200/1500, change debug to true to get more info
    conn2.initiateConnection({ port: 102, host: '192.168.0.1', rack: 0, slot: 1, debug: false }, connected2); // slot 2 for 300/400, slot 1 for 1200/1500, change debug to true to get more info
    //*********************************************1200***************************** */

   // var conn2 = new nodes7;
    // conn2.initiateConnection({port: 102, host: '192.168.0.2', localTSAP: 0x0100, remoteTSAP: 0x0200, timeout: 8000, doNotOptimize: true}, connected);
    // local and remote TSAP can also be directly specified instead. The timeout option specifies the TCP timeout.
   // conn2.initiateConnection({port: 102, host: '192.168.0.1', localTSAP: 0x0100, remoteTSAP: 0x0200, timeout: 8000, doNotOptimize: false}, connected);

    


    function connected2(err) {
      if (typeof(err) !== "undefined") {
        // We have an error. Maybe the PLC is not reachable.
//        console.log(err);
      //  process.exit();
      }
      conn2.setTranslationCB(function(tag) { return variables2[tag]; }); // This sets the "translation" to allow us to work with object names
    //  conn1.addItems(['TEST1', 'TEST2','TEST3','TEST4','TEST5']);
      conn2.addItems('TEST2');
//    conn1.addItems('TEST1');
      // conn1.removeItems(['TEST2', 'TEST3']); // We could do this.
      // conn1.writeItems(['TEST5', 'TEST6'], [ 867.5309, 9 ], valuesWritten); // You can write an array of items as well.
      // conn1.writeItems('TEST7', [666, 777], valuesWritten); // You can write a single array item too.
    //  conn1.writeItems('TEST3', true, valuesWritten); // This writes a single boolean item (one bit) to true
   // conn1.addItems('TEST6');
      conn2.readAllItems(valuesReady2);
    }
    
    function valuesReady2(anythingBad, values) {
      if (anythingBad) { console.log("SOMETHING WENT WRONG READING VALUES!!!!"); }
      console.log("1200: ",values);
      doneReading2 = true;
    //  if (doneWriting1) { process.exit(); }
    if (doneWriting2) { console.log("written"); }
    }
    
    function valuesWritten2(anythingBad) {
      if (anythingBad) { console.log("SOMETHING WENT WRONG WRITING VALUES!!!!"); }
      console.log("Done writing.");
      doneWriting2 = true;
    //  if (doneReading1) { process.exit(); }
    if (doneReading2) { console.log("read done");  }

    }
///DRUGI PLC END
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
 //   conn1.readAllItems(valuesReady1);
    
    ///////////end
    res.send("Sve ok1");
            })
            function generateRandomInteger(min, max) {
              return Math.floor(min + Math.random()*(max - min + 1))
            }
app.post('/sav',(req,res) => {
 // conn1.writeItems('TEST2', [777], valuesWritten); 
 // conn1.writeItems(['TEST1', 'TEST3'], [ 20.5309, 100], valuesWritten); 
// const rand4 = Math.floor(Math.random() * 9) - 10;
// const rand4 = Math.floor(Math.random() * ) - 10;

let a=generateRandomInteger(-9,9)

 console.log("rand on b2: ",a);


  console.log("butt2");
    let msg = req.body.msg;

    let m= time()
    console.log("time.date",m);
    res.send("Sve ok2");
             })

             setInterval( function() {
           //   conn1.readAllItems(valuesReady1);
           //   conn2.readAllItems(valuesReady2);

             }, 1000);
 setInterval( function() {
              //   conn1.readAllItems(valuesReady1);
              //   conn2.readAllItems(valuesReady2);
             
               random=generateRandomInteger(-9,9)
            //   console.log("random (-9,9): ",random);
            conn1.readAllItems(valuesReady1);
          //  conn1.writeItems(['TEST5', 'TEST6'], [ 867.5309, 9 ], valuesWritten); 
            conn1.writeItems(['TEST2'], [ random ], valuesWritten1); 
                }, 5000);  
                
  function   time(){
    const d = new Date();

        d.getDate();
        console.log("date",d);
        return d;


  }              