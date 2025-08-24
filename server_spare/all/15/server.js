const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./zf.db', (err) => {
  if (err) { console.error(err.message); }
  console.log('Connected to the zf.db database.');});
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
 //  TEST1: 'DB5,REAL222',
//   TEST2: 'DB5,REAL226',  //DB57.DBW4
//TEST2: 'DB5,INT226', 
/*
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
*/
P1: 'DB28,X0.0', 
P2: 'DB28,X0.1',
P3: 'DB28,X0.2',
P4: 'DB28,X0.3',
P5: 'DB28,X0.4',
P6: 'DB28,X0.5',
P7: 'DB28,X0.6',
P8: 'DB28,X0.7',
P9: 'DB28,X1.0',
P10: 'DB28,X1.1',
P11: 'DB28,X1.2',
P12: 'DB28,X1.3',
P13: 'DB28,X1.4',
P14: 'DB28,X1.5',
P15: 'DB28,X1.6',
P16: 'DB28,X1.7',
P17:'DB28,X2.0',
P18: 'DB28,X2.1',
P19: 'DB28,X2.2',
P20: 'DB28,X2.3',
P21: 'DB28,X2.4',
P22: 'DB28,X2.5',
P23: 'DB28,X2.6',
P24: 'DB28,X2.7',
P25: 'DB28,X3.0',
P26: 'DB28,X3.1',
P27: 'DB28.X3.2',
P28: 'DB28,X3.3',
P29: 'DB28,X3.4',

P30: 'DB28,X3.5',
P31: 'DB28,X3.6',
P32:'DB28,X3.7',
P33: 'DB28,X4.0',
P34: 'DB28,X4.1',
P35: 'DB28,X4.2',
P36: 'DB28,X4.3'

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
      conn1.addItems(['P1', 'P2','P3','P4','P5','P6','P7','P8','P9'
        ,'P6', 'P7','P8','P9','P10',
        'P11', 'P12','P13','P14','P15','P16', 'P17','P18','P19','P20',
        'P21', 'P22','P23','P24','P25','P26','P27','P28','P29','P30','P31', 'P32','P33','P34','P35','P36']);//,'P31', 'P32','P33','P34','P35','P36'
//    conn1.addItems('TEST1');
      // conn1.removeItems(['TEST2', 'TEST3']); // We could do this.
      // conn1.writeItems(['TEST5', 'TEST6'], [ 867.5309, 9 ], valuesWritten); // You can write an array of items as well.
      // conn1.writeItems('TEST7', [666, 777], valuesWritten); // You can write a single array item too.
    //  conn1.writeItems('TEST3', true, valuesWritten); // This writes a single boolean item (one bit) to true
   // conn1.addItems('TEST6');
      conn1.readAllItems(valuesReady1);
    }
    
    async   function valuesReady1(anythingBad, values) {
      if (anythingBad) { console.log("SOMETHING WENT WRONG READING VALUES!!!!"); }
      console.log("1500:",values);
      console.log("1500_P1: ",values.P1);
      let smt=false;
      let  arr=[];
      if(values.P1==true){sql(1)};
      if(values.P2==true){sql(2)};
      if(values.P3==true){sql(3)};
      if(values.P4==true){sql(4)};
      if(values.P5==true){sql(5)};
      if(values.P6==true){sql(6)};
      if(values.P7==true){sql(7)};
      if(values.P8==true){sql(8)};
      if(values.P9==true){sql(9)};
      if(values.P10==true){sql(10)};
      if(values.P11==true){sql(11)};
      if(values.P12==true){sql(12)};
      if(values.P13==true){sql(13)};
      if(values.P14==true){sql(14)};
      if(values.P15==true){sql(15)};
      if(values.P16==true){sql(16)};
      if(values.P17==true){sql(17)};
      if(values.P18==true){sql(18)};
      if(values.P19==true){sql(19)};
      if(values.P20==true){sql(20)};
      if(values.P21==true){sql(21)};
      if(values.P22==true){sql(22)};
      if(values.P23==true){sql(23)};
      if(values.P24==true){sql(24)};
      if(values.P25==true){sql(25)};
      if(values.P26==true){sql(26)};
      if(values.P27==true){sql(27)};
      if(values.P28==true){sql(28)};
      if(values.P29==true){sql(29)};
      if(values.P30==true){sql(30)};
      if(values.P31==true){sql(31)};
      if(values.P32==true){sql(32)};
      if(values.P33==true){sql(33)};
      if(values.P34==true){sql(34)};
      if(values.P35==true){sql(35)};
      if(values.P36==true){sql(36)};

   //   if(values.P1==true){ conn1.writeItems(['P1','P2','P3','P4','P5'], [false], valuesWritten1);  }/*
 //  if(values.P1==true){ conn1.writeItems(['P1','P2'], [false,false], valuesWritten1);  }
   //  conn1.writeItems(['P1','P2'], [false,false], valuesWritten1);





     conn1.writeItems(['P1','P2','P3', 'P4','P5','P6','P7','P8','P9','P10',
                     'P11', 'P12','P13','P14','P15','P16', 'P17','P18','P19','P20',
                      'P21', 'P22','P23','P24','P25','P26','P27','P28','P29','P30',
                      'P31', 'P32','P33','P34','P35','P36'], [false,false,false,false,false,false,false,false,false,false,
                                                              false,false,false,false,false,false,false,false,false,false, 
                                                              false,false,false,false,false,false,false,false,false,false, 
                                                              false,false,false,false,false,false  ], valuesWritten1);
 

   
   
   /*
      if(values.P2==true){ conn1.writeItems('P2', [false], valuesWritten1);  }
     if(values.P3==true){ conn1.writeItems('P3', [false], valuesWritten1);  }
      if(values.P4==true){ conn1.writeItems('P4', [false], valuesWritten1);  }
      if(values.P5==true){ conn1.writeItems('P5', [false], valuesWritten1);  }
      if(values.P6==true){ conn1.writeItems('P6', [false], valuesWritten1);  }
*/






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
const express = require('express');
let app    = require('express')();
let server = app.listen(port);
let io     = require('socket.io')(server);
app.use(express.json());
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

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

 // const express = require('express');

app.use(express.json());
app.use(express.static(__dirname +"/public"));


///////SQL START
function sql(a){
  let m= time();
//   let tt= String(time());
  console.log("time.date",m);
  let ge=a;
 // let ge=777;
  //sql  statr
  /*
  let sql = `SELECT COUNT(*) FROM ping WHERE tmst > ? AND tmst < ? ; `;    
   // db.get(sql,[que], (err, row) => { 
 //   db.get(sql,[que_date_1,que_date_2], (err, row) => { 
  db.get(sql,[2020,2025], (err, row) => { 
    console.log("broj_rezultat_pretrage_cc:",row);});
*/
// db.run('INSERT INTO ping(number, name) VALUES(?, ?)', [ge,ge1], (err) => {
// db.run('INSERT INTO ajvar(place, tmst) VALUES(5, 2024-5)',  (err) => {
// db.run('INSERT INTO ajvar(place, tmst) VALUES(5, 2024-5)',  (err) => {///  ok radi
db.run('INSERT INTO ajvar(place, tmst) VALUES(?,?)', [ge,m], (err) => {
if(err) {
  return console.log(err.message); 
}
//	console.log('Row was added to the table: ${this.lastID}');
console.log('upisao');
})
};


///////////////SQL   END

////   butt 1111***************************
app.post('/b1',(req,res) => {
    let msg = req.body.msg;
    console.log("butt1");

    //////////start
    conn1.readAllItems(valuesReady1);
   // sql(15);
    ///////////end
    res.send("Sve ok1");
            })
            function generateRandomInteger(min, max) {
              return Math.floor(min + Math.random()*(max - min + 1))
            }
            ///////dugme 22
app.post('/b2',(req,res) => {
 // conn1.writeItems('TEST2', [777], valuesWritten); 
 // conn1.writeItems(['TEST1', 'TEST3'], [ 20.5309, 100], valuesWritten); 
// const rand4 = Math.floor(Math.random() * 9) - 10;
// const rand4 = Math.floor(Math.random() * ) - 10;

let a=generateRandomInteger(-9,9)

 console.log("rand on b2: ",a);

// sql(25);
  console.log("butt2");
    let msg = req.body.msg;

    //sql end
    res.send("Sve ok2");
             })

///   b3*********
app.post('/b3',(req,res) => {
  let msg = req.body.msg;
  console.log("butt3");

  //////////start
 
  ///////////end
  res.send("Sve ok1_b3");
          })
///   b4
app.post('/b4',(req,res) => {
  let msg = req.body.msg;
  console.log("butt4");

  //////////start
 
  ///////////end
  res.send("Sve ok1_b4");
          })


             setInterval( function() {
           //   conn1.readAllItems(valuesReady1);
           //   conn2.readAllItems(valuesReady2);

             }, 1000);
 setInterval( function() {
              //   conn1.readAllItems(valuesReady1);
              //   conn2.readAllItems(valuesReady2);
              conn1.readAllItems(valuesReady1);
               random=generateRandomInteger(-9,9)
            //   console.log("random (-9,9): ",random);
      //      conn1.readAllItems(valuesReady1);
          //  conn1.writeItems(['TEST5', 'TEST6'], [ 867.5309, 9 ], valuesWritten); 
         //   conn1.writeItems(['TEST2'], [ random ], valuesWritten1); 
                }, 3000);  
                
  function   time(){
    const d = new Date();

        d.getDate();
   //    d.getDate(date string);
        console.log("date",d);
        console.log("date",String(d));


        const dat = new Date();
     
      //  console.log("month:",month);
     //   console.log("day:",dat.getDay());
     //   console.log("minute:",dat.getMinutes());
     //   console.log("sec:",dat.getSeconds());
     //   console.log("year:",dat.getFullYear());

        let year=dat.getFullYear();
        let month = dat.getMonth();
        let day= dat.getDate();
        console.log("time_now_day:",day);
        let hour= dat.getHours();
        let minute=dat.getMinutes();
        let second=dat.getSeconds();

        let year_s=String(year);
        let month_s = String(month+1);
        if(month<10){month_s='0'+month_s}
        let day_s= String(day);
        if(day<10){day_s='0'+day_s}
        let hour_s= String(hour);
        if(hour<10){hour_s='0'+hour_s}
        let minute_s=String(minute);
        if(minute<10){minute_s='0'+minute_s}

        let second_s=String(second);
        if(second<10){second_s='0'+second_s}

        
    //   let time_now=String(year)+'-'+String(month)+'-'+String(day);
       let time_now=year+'-'+month_s+'-'+day_s+' '+hour_s+':'+minute_s+':'+second_s;
       console.log("time_now:",time_now);
        




        return time_now;


  }              