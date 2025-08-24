

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./zf.db', (err) => {
  if (err) { console.error(err.message); }
  console.log('Connected to the zf.db database.');});
/////s7 comm ini
var gl_from="";
var gl_to="";
var nodes7 = require('nodes7'); // This is the package name, if the repository is cloned you may need to require 'nodeS7' with uppercase S
var  random=0;
///PRVI PLC START   11111111111111111111111111111111111111111111111111111111111
var conn1 = new nodes7;
var doneReading1 = false;
var doneWriting1 = false;
var log=1;
var variables1 = {


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
P27: 'DB28,X3.2',
P28: 'DB28,X3.3',
P29: 'DB28,X3.4',

P30: 'DB28,X3.5',
P31: 'DB28,X3.6',
P32:'DB28,X3.7',
P33: 'DB28,X4.0',
P34: 'DB28,X4.1',
P35: 'DB28,X4.2',
P36: 'DB28,X4.3'

 
 
};
   //////////start

    //conn1.initiateConnection({ port: 102, host: '192.168.0.2', rack: 0, slot: 1, debug: false }, connected); // slot 2 for 300/400, slot 1 for 1200/1500, change debug to true to get more info
   // conn1.initiateConnection({ port: 102, host: '192.168.0.10', rack: 0, slot: 1, debug: false }, connected1); // slot 2 for 300/400, slot 1 for 1200/1500, change debug to true to get more info
    conn1.initiateConnection({ port: 102, host: '192.168.0.10', rack: 0, slot: 1, debug: false }, connected1); // slot 2 for 300/400, slot 1 for 1200/1500, change debug to true to get more info
    
    
    //*********************************************1500***************************** */

   // var conn1 = new nodes7;
    // conn1.initiateConnection({port: 102, host: '192.168.0.2', localTSAP: 0x0100, remoteTSAP: 0x0200, timeout: 8000, doNotOptimize: true}, connected1);
    // local and remote TSAP can also be directly specified instead. The timeout option specifies the TCP timeout.
   // conn1.initiateConnection({port: 102, host: '192.168.0.10', localTSAP: 0x0100, remoteTSAP: 0x0200, timeout: 8000, doNotOptimize: false}, connected1);
  //  conn1.initiateConnection({port: 102, host: '192.168.0.10', localTSAP: 0x0100, remoteTSAP: 0x0200, timeout: 8000, doNotOptimize: false}, connected1);
    


    function connected1(err) {
      if (typeof(err) !== "undefined") {
        // We have an error. Maybe the PLC is not reachable.
   //     console.log(err);
      //  process.exit();
      }
      conn1.setTranslationCB(function(tag) { return variables1[tag]; }); // This sets the "translation" to allow us to work with object names
    //  conn1.addItems(['TEST1', 'TEST2','TEST3','TEST4','TEST5']);
    //  conn1.addItems('TEST1');
    
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
    //  conn1.readAllItems(valuesReady1);
    }
    let colo=[0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0
            
            ];
    async   function valuesReady1(anythingBad, values) {
      if (anythingBad) {
       //  console.log("SOMETHING WENT WRONG READING VALUES!!!!"); 
        }
    //  console.log("1500:",values);
      console.log("1500_P1: ",values.P1);

      if(values.P1==false){ io.emit('conn_1500');}
      if(values.P1!= false){ io.emit('conn_1500b');}
      let smt=false;
      let  arr=[];
    //  let colo=[];
      if(values.P1==true){sql(1);colo[1]=1;};
      if(values.P2==true){sql(2);colo[2]=1;};
      if(values.P3==true){sql(3);colo[3]=1;};
      if(values.P4==true){sql(4);colo[4]=1;};
      if(values.P5==true){sql(5);colo[5]=1;};
      if(values.P6==true){sql(6);colo[6]=1;};
      if(values.P7==true){sql(7);colo[7]=1;};
      if(values.P8==true){sql(8);colo[8]=1;};
      if(values.P9==true){sql(9);colo[9]=1;};
      if(values.P10==true){sql(10);colo[10]=1;};
      if(values.P11==true){sql(11);colo[11]=1;};
      if(values.P12==true){sql(12);colo[12]=1;};
      if(values.P13==true){sql(13);colo[13]=1;};
      if(values.P14==true){sql(14);colo[14]=1;};
      if(values.P15==true){sql(15);colo[15]=1;};
      if(values.P16==true){sql(16);colo[16]=1;};
      if(values.P17==true){sql(17);colo[17]=1;};
      if(values.P18==true){sql(18);colo[18]=1;};
      if(values.P19==true){sql(19);colo[19]=1;};
      if(values.P20==true){sql(20);colo[20]=1;};
      if(values.P21==true){sql(21);colo[21]=1;};
      if(values.P22==true){sql(22);colo[22]=1;};
      if(values.P23==true){sql(23);colo[23]=1;};
      if(values.P24==true){sql(24);colo[24]=1;};
      if(values.P25==true){sql(25);colo[25]=1;};
      if(values.P26==true){sql(26);colo[26]=1;};
      if(values.P27==true){sql(27);colo[27]=1;};
      if(values.P28==true){sql(28);colo[28]=1;};
      if(values.P29==true){sql(29);colo[29]=1;};
      if(values.P30==true){sql(30);colo[30]=1;};
      if(values.P31==true){sql(31);colo[31]=1;};
      if(values.P32==true){sql(32);colo[32]=1;};
      if(values.P33==true){sql(33);colo[33]=1;};
      if(values.P34==true){sql(34);colo[34]=1;};
      if(values.P35==true){sql(35);colo[35]=1;};
      if(values.P36==true){sql(36);colo[36]=1;};
    
     
   //   if(values.P1==true){ conn1.writeItems(['P1','P2','P3','P4','P5'], [false], valuesWritten1);  }/*
 //  if(values.P1==true){ conn1.writeItems(['P1','P2'], [false,false], valuesWritten1);  }
   //  conn1.writeItems(['P1','P2'], [false,false], valuesWritten1);
   setTimeout(() => {
    io.emit('colo', colo); 
    colo=[0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0
    
    ];  
   
  }, "100");



if(  log==0){
     conn1.writeItems(['P1','P2','P3', 'P4','P5','P6','P7','P8','P9','P10',
                     'P11', 'P12','P13','P14','P15','P16', 'P17','P18','P19','P20',
                      'P21', 'P22','P23','P24','P25','P26','P27','P28','P29','P30',
                      'P31', 'P32','P33','P34','P35','P36'], [false,false,false,false,false,false,false,false,false,false,
                                                              false,false,false,false,false,false,false,false,false,false, 
                                                              false,false,false,false,false,false,false,false,false,false, 
                                                              false,false,false,false,false,false  ], valuesWritten1);
                      }
 


   
 
   
   /*
      if(values.P2==true){ conn1.writeItems('P2', [false], valuesWritten1);  }
     if(values.P3==true){ conn1.writeItems('P3', [false], valuesWritten1);  }
      if(values.P4==true){ conn1.writeItems('P4', [false], valuesWritten1);  }
      if(values.P5==true){ conn1.writeItems('P5', [false], valuesWritten1);  }
      if(values.P6==true){ conn1.writeItems('P6', [false], valuesWritten1);  }
*/




       doneReading1 = true;//

      doneReading1 = false;//
    //  if (doneWriting1) { process.exit(); }
  //  if (doneWriting1) { console.log("written"); }
  
   
    }
    
    function valuesWritten1(anythingBad) {
      if (anythingBad) {
     //    console.log("SOMETHING WENT WRONG WRITING VALUES!!!!");
         }
    //  console.log("Done writing.");
      doneWriting1 = false;
    //  if (doneReading1) { process.exit(); }
  //  if (doneReading1) { console.log("read done");  }

    }
///PRVI PLC END

///DRUGI PLC START   22222222222222222222222222222222222222222222222222222222222222222222222222222222222
var conn2 = new nodes7;
var doneReading2 = false;
var doneWriting2 = false;

var variables2 = {


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
  P27: 'DB28,X3.2',
  P28: 'DB28,X3.3',
  P29: 'DB28,X3.4',
  
  P30: 'DB28,X3.5',
  P31: 'DB28,X3.6',
  P32:'DB28,X3.7',
  P33: 'DB28,X4.0',
  P34: 'DB28,X4.1',
  P35: 'DB28,X4.2',
  P36: 'DB28,X4.3'
  
   
};
   //////////start

    //conn1.initiateConnection({ port: 102, host: '192.168.0.2', rack: 0, slot: 1, debug: false }, connected); // slot 2 for 300/400, slot 1 for 1200/1500, change debug to true to get more info
   // conn2.initiateConnection({ port: 102, host: '192.168.0.1', rack: 0, slot: 1, debug: false }, connected2); // slot 2 for 300/400, slot 1 for 1200/1500, change debug to true to get more info
    //*********************************************1200***************************** */

   // var conn2 = new nodes7;
    // conn2.initiateConnection({port: 102, host: '192.168.0.2', localTSAP: 0x0100, remoteTSAP: 0x0200, timeout: 8000, doNotOptimize: true}, connected);
    // local and remote TSAP can also be directly specified instead. The timeout option specifies the TCP timeout.
    conn2.initiateConnection({port: 102, host: '192.168.0.1', localTSAP: 0x0100, remoteTSAP: 0x0200, timeout: 8000, doNotOptimize: false}, connected2);

    


    function connected2(err) {
      if (typeof(err) !== "undefined") {
        // We have an error. Maybe the PLC is not reachable.
//        console.log(err);
      //  process.exit();
      }
      conn2.setTranslationCB(function(tag) { return variables2[tag]; }); // This sets the "translation" to allow us to work with object names
    //  conn1.addItems(['TEST1', 'TEST2','TEST3','TEST4','TEST5']);
     // conn2.addItems('TEST2');
      conn2.addItems(['P1', 'P2','P3','P4','P5','P6','P7','P8','P9'
        ,'P6', 'P7','P8','P9','P10',
        'P11', 'P12','P13','P14','P15','P16', 'P17','P18','P19','P20',
        'P21', 'P22','P23','P24','P25','P26','P27','P28','P29','P30','P31', 'P32','P33','P34','P35','P36']);
//    conn1.addItems('TEST1');
      // conn1.removeItems(['TEST2', 'TEST3']); // We could do this.
      // conn1.writeItems(['TEST5', 'TEST6'], [ 867.5309, 9 ], valuesWritten); // You can write an array of items as well.
      // conn1.writeItems('TEST7', [666, 777], valuesWritten); // You can write a single array item too.
    //  conn1.writeItems('TEST3', true, valuesWritten); // This writes a single boolean item (one bit) to true
   // conn1.addItems('TEST6');
     // conn2.readAllItems(valuesReady2);  //  bilo je
    }
    
    
    ///////***** */
    
    /*/*//// */
    let colo_=[0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0
    
    ];
async   function valuesReady2(anythingBad, values) {
if (anythingBad) {
//  console.log("SOMETHING WENT WRONG READING VALUES!!!!"); 
}
//  console.log("1500:",values);
console.log("1200_P1: ",values.P1);

if(values.P1==false){ io.emit('conn_1200');}
if(values.P1!= false){ io.emit('conn_1200b');}
let smt=false;
let  arr=[];
//  let colo=[];
if(values.P1==true){sql_(1);colo_[1]=1;};
if(values.P2==true){sql_(2);colo_[2]=1;};
if(values.P3==true){sql_(3);colo_[3]=1;};
if(values.P4==true){sql_(4);colo_[4]=1;};
if(values.P5==true){sql_(5);colo_[5]=1;};
if(values.P6==true){sql_(6);colo_[6]=1;};
if(values.P7==true){sql_(7);colo_[7]=1;};
if(values.P8==true){sql_(8);colo_[8]=1;};
if(values.P9==true){sql_(9);colo_[9]=1;};
if(values.P10==true){sql_(10);colo_[10]=1;};
if(values.P11==true){sql_(11);colo_[11]=1;};
if(values.P12==true){sql_(12);colo_[12]=1;};
if(values.P13==true){sql_(13);colo_[13]=1;};
if(values.P14==true){sql_(14);colo_[14]=1;};
if(values.P15==true){sql_(15);colo_[15]=1;};
if(values.P16==true){sql_(16);colo_[16]=1;};
if(values.P17==true){sql_(17);colo_[17]=1;};
if(values.P18==true){sql_(18);colo_[18]=1;};
if(values.P19==true){sql_(19);colo_[19]=1;};
if(values.P20==true){sql_(20);colo_[20]=1;};
if(values.P21==true){sql_(21);colo_[21]=1;};
if(values.P22==true){sql_(22);colo_[22]=1;};
if(values.P23==true){sql_(23);colo_[23]=1;};
if(values.P24==true){sql_(24);colo_[24]=1;};
if(values.P25==true){sql_(25);colo_[25]=1;};
if(values.P26==true){sql_(26);colo_[26]=1;};
if(values.P27==true){sql_(27);colo_[27]=1;};
if(values.P28==true){sql_(28);colo_[28]=1;};
if(values.P29==true){sql_(29);colo_[29]=1;};
if(values.P30==true){sql_(30);colo_[30]=1;};
if(values.P31==true){sql_(31);colo_[31]=1;};
if(values.P32==true){sql_(32);colo_[32]=1;};
if(values.P33==true){sql_(33);colo_[33]=1;};
if(values.P34==true){sql_(34);colo_[34]=1;};
if(values.P35==true){sql_(35);colo_[35]=1;};
if(values.P36==true){sql_(36);colo_[36]=1;};


//   if(values.P1==true){ conn1.writeItems(['P1','P2','P3','P4','P5'], [false], valuesWritten1);  }/*
//  if(values.P1==true){ conn1.writeItems(['P1','P2'], [false,false], valuesWritten1);  }
//  conn1.writeItems(['P1','P2'], [false,false], valuesWritten1);
setTimeout(() => {
io.emit('colo_', colo_); 
colo_=[0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0

];  

}, "100");



if(  log==0){
conn2.writeItems(['P1','P2','P3', 'P4','P5','P6','P7','P8','P9','P10',
             'P11', 'P12','P13','P14','P15','P16', 'P17','P18','P19','P20',
              'P21', 'P22','P23','P24','P25','P26','P27','P28','P29','P30',
              'P31', 'P32','P33','P34','P35','P36'], [false,false,false,false,false,false,false,false,false,false,
                                                      false,false,false,false,false,false,false,false,false,false, 
                                                      false,false,false,false,false,false,false,false,false,false, 
                                                      false,false,false,false,false,false  ], valuesWritten2);
              };






/*
if(values.P2==true){ conn1.writeItems('P2', [false], valuesWritten1);  }
if(values.P3==true){ conn1.writeItems('P3', [false], valuesWritten1);  }
if(values.P4==true){ conn1.writeItems('P4', [false], valuesWritten1);  }
if(values.P5==true){ conn1.writeItems('P5', [false], valuesWritten1);  }
if(values.P6==true){ conn1.writeItems('P6', [false], valuesWritten1);  }
*/




doneReading2 = true;//

doneReading2 = false;//
//  if (doneWriting1) { process.exit(); }
//  if (doneWriting1) { console.log("written"); }


}
function valuesWritten2(anythingBad) {
  if (anythingBad) {
 //    console.log("SOMETHING WENT WRONG WRITING VALUES!!!!");
     }
//  console.log("Done writing.");
  doneWriting1 = false;
//  if (doneReading1) { process.exit(); }
//  if (doneReading1) { console.log("read done");  }

}
///DRUGI PLC END
    ///////////end
    // 
     const http = require('http');
     const bcrypt = require('bcrypt');
     const path = require("path");
     const bodyParser = require('body-parser');
     const users = require('./data').userDB;


const port = 1880;
//const port = 8004;
const express = require('express');
let app    = require('express')();
let server = app.listen(port);
let io     = require('socket.io')(server);
app.use(express.json());
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use(bodyParser.urlencoded({extended: false}));
/*  //  bilo je
app.get('/', function(req, res){  
   '/index.html'
   res.sendFile(__dirname + "/public");
  });
*/
app.get('/',(req,res) => {
  console.log("users_from /:",users);
    res.sendFile(path.join(__dirname,'./public/index.html'));
});
const getData = (slug)=>{
  console.log ("get data _slug::",slug);
    return new Promise((resolve, reject)=>{
    db.serialize(()=>{
   
        db.get('SELECT COUNT(*) FROM users WHERE user = ?',[slug], (err, rows)=>{
            if (err)
                reject(err)
     
        resolve(rows)
          })
    });
    })
  }

  async function f1(a) {

    const x = getData(a);
     console.log(`from f1: ${a}`,x); 
     return x;
   }
 
   async function ema(a) {
     const x = await getData(a); 
   }
let ee=ema(1);
console.log ("ee::",ee);
//  let we= f1(); 

  console.log ("we::",we);
  app.post('/register', async (req, res) => {
    try{   
     let we=await getData(req.body.username)
     let n_user= req.body.username
 
     let n_user_pass=await bcrypt.hash(req.body.password, 10);

        console.log ("we_from reg::",we);
        console.log ("we_from reg:['COUNT(*)']:",we['COUNT(*)']);

if (we['COUNT(*)']>0){        console.log ("Vec postoji !!!");}       

      let foundUser = users.find((data) => req.body.username === data.username);

    
          if (we['COUNT(*)']==0){        console.log ("Nema korisnika");
            db.run('INSERT INTO users(user,password) VALUES(?, ?)', [n_user,n_user_pass], (err) => {
              if(err) {
                return console.log(err.message); 
              }
              console.log('User Added-Reg');
              })
          

            res.send("<div align ='center'><h2>Registration successful</h2></div><br><br><div align='center'><a href='./login.html'>login</a></div><br><br><div align='center'><a href='./registration.html'>Register another user</a></div>");
        } else {
            res.send("<div align ='center'><h2>Username already used</h2></div><br><br><div align='center'><a href='./registration.html'>Register again</a></div>");
        }
    } catch{
        res.send("Internal server error");
    }
});
const getData1 = (slug)=>{
  console.log ("get data1 _slug::",slug);
    return new Promise((resolve, reject)=>{
    db.serialize(()=>{

          db.get('SELECT * FROM users WHERE user = ?',(slug), (err, row)=>{
            if (err)
                reject(err)
   
        console.log ("from get data:_1:",row);
        if (typeof row !== 'undefined' && row !== null) {
          
        resolve(row.password)
        }
          })
    });
    })
  }

  async function f2(a) {
  
    const x = await getData1(a);
     console.log(`from f2: ${a}`,x); 
     return x;
   }
   async function ema1(a) {
    const x = await getData1(a); 
    console.log(`from ema11: ${a}`,x);
  }

let ee1=ema1("kide1");
console.log ("ee1_for_login::",ee1); 
app.post('/login', async (req, res) => {
  try{
    let submittedPass = req.body.password; 
    let we=await getData(req.body.username);
    console.log ("we_from_login::",we);
    if (we['COUNT(*)']==0){        console.log ("Nema korisnika_from  log");}
    if (we['COUNT(*)']>0){        console.log ("Postoji  user from log");
  
        db.get('SELECT * FROM users WHERE user = ?',[req.body.username], async (err, rows)=>{
        if(err) {
          return console.log(err.message); 
                }
        console.log("from login  pass : ",rows.password);
        let submittedPass = req.body.password; 
   
     let storedPass = rows.password;
        const passwordMatch = await bcrypt.compare(submittedPass, storedPass);
        if (passwordMatch) {console.log("password se poklapa : ");
              res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Food Packaging</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!--link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"-->


  <!--link rel="stylesheet" href="css/bootstrap.min.css" type="text/css"-->
    <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css">

 <link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.min.css" >

<!--script src="/node_modules/jquery/dist/jquery.slim.min.js"></script>
<script src="/node_modules/popper.js/dist/umd/popper.min.js"></script>
<script src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script-->



  <!--script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script-->
  <script src="./Chart.js"></script>
  <script src="/socket.io/socket.io.js"></script>

  <style>
  .fakeimg {
    height: 200px;
    background: #aaa;
  }
  /*
  .jumbotron text-center {
    height: 20px;
}
*/
    .container {
      /*  max-width: (1900px - @grid-gutter-width);   */
      width: 90%;
    min-width: 99%;
    max-width: 100%;
    margin-left: 7px;
  /*  margin-right: 15px;    */
    }
  </style>
</head>
<body onload="myFunction1()">  
  <script>


    var donut=5;
    var socket = io();

    socket.on('message', function(msg){
    //  console.log(msg);
    //  console.log("msg");

     // document.getElementById("1_1_6_1").innerHTML = msg;
  //   document.getElementById("1_1_6_1").innerHTML = msg[0].num;
    // console.log("msg.num",msg[0].num);
     donut=msg[0].donut;
   //  console.log("donut",msg[0].donut);
     chart1();
    });
     </script>





    <!--div c  ass="jumbotron text-center" style="margin-bottom:0; height: 80px;"-->
<!--div class="jumbotron text-center" style="height: 5vh;margin-top: -25px;"-->
  <h6 style="margin-top:5px">  <button class="save" mat-raised-button style=" background-COLOR:#222a2a00; bORDER-COLOR: rgb(119, 140, 185);color:#626C81;  position: absolute;  right: 0; "  onclick="toggleFullScreen()">Full</button><!--RADI BUTTON U FLEXU--> 
  </h6>

  <!--p>Resize this responsive page to see the effect!</p--> 
<!--/div-->
<!--Ajvar pocetak*******************************************************************************-->
<div class="row" name="aj"style="height: 55vh;">      
  <div class="col-sm-5" style="margin-top:5px; display: flex; flex-direction: row; gap: 3px;max-height: 40px;height: 30%;"name="aj1">
    <div style="display: flex;flex-direction: column;min-height: 20vh;gap: 1%;">
      <!--button id="addBtn6" class="btn btn-sm btn-primary">Last Hour</button>
      <button id="addBtn7" class="btn btn-sm btn-primary">This Shift</button>
      <button id="addBtn8" class="btn btn-sm btn-primary">This Week</button>
      <button id="addBtn9" class="btn btn-sm btn-primary">This Month</button-->
        <button id="addBtn5" class="btn btn-sm btn-primary">Period</button>

        <h4 id="1500"style="font-weight: bold;">PLC 15</h4>
        <!--p id="1500">1500 10</p-->
        <!--p style="font-weight: bold;">1200 20</p-->

    </div>
   
    <!--button id="addBtn1"style="visibility : hidden"; >Ajvar_1</button-->
    <!--button onclick="myFunction2()"class='child inline-block-child'>Click2</button-->
   
 
    <style>
      label {
        display:flex;
        flex-direction:column;
      /*  display: block;   */
    /*  display:flow-root;  */
        font:
          0.8rem 'Fira Sans',
          sans-serif;
      }
      
      input,
      label {
        font:
        0.8rem 'Fira Sans'
      /*  margin: 0.4rem 0;   */
      }
      
      
       </style>
      
         <!--label for="meeting-time">Choose a time :</label-->
         <!--div  style="margin-top:5px; display: flex; flex-direction: column; gap: 1px;max-height: 20px;"-->
         <div  style=" display: flex; flex-direction: column; ;max-height: 15px;">
      <input
        type="datetime-local"
        id="meeting-time"
        name="meeting-time"
        value="2025-04-06T15:12"
        min="2018-06-07T00:00"
        max="2026-06-14T00:00" />
       <!--NEW   INPUT-->
       <input
       type="datetime-local"
       id="meeting-time1"
       name="meeting-time1"
       value="2025-04-06T15:12"
       min="2018-06-07T00:00"
       max="2026-06-14T00:00" />
         </div>
    <!--option   start--><div style=" display: flex; flex-direction: column; ;max-height: 15px;  offset-position: up 20px;">
      <style>

        .wrapper{
      width:70px;
      padding:2px;  
      height: 150px;
      }
       </style>
       <!--small style=" offset-anchor: 10px;">Place_Nr</small-->
      
       <div class="wrapper"><select name="Nr"  id="place" class="form-control" onfocus='this.size=5;' onblur='this.size=1;' onchange='this.size=1; this.blur();'>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
        <option value="32">32</option>
        <option value="33">33</option>
        <option value="34">34</option>
        <option value="35">35</option>
        <option value="36">36</option>
      
      </select></div>
      <label for="meeting-time"style="display:flex;flex-direction:column;"> &nbsp&nbsp&nbspPlaceNr:</label>

    </div>


  
<!--input type="text" id="input1" class="form-control" placeholder="new message" style="max-width: 35%;"-->
<textarea id="text1" placeholder=""style="max-width: 55%;width: 40%;height: 250%;"></textarea>
<script>
 
   document.getElementById("text1").readOnly = true;
 //  document.getElementById("text1").innerHTML = "neki textyxcyxcycxycyxcyxcyxcyxcycxyxcyccycycyxcyxc";
 document.getElementById("text1").innerHTML = "";


 ///  socket//**//*/*/*//*
 var socket = io();

socket.on('plc2', function(msg){
console.log("socket");
console.log("plc2",msg);
});
socket.on('conn_1500', function(msg){
 // document.getElementById("table").;
  document.getElementById("1500").style.color = '#03fc66';
});
socket.on('conn_1500b', function(msg){
 // document.getElementById("table").;
  document.getElementById("1500").style.color = 'red'; 
});
socket.on('conn_1200', function(msg){
 // document.getElementById("table").;
  document.getElementById("1200").style.color = '#b1fc03';
});
socket.on('conn_1200b', function(msg){
 // document.getElementById("table").;
  document.getElementById("1200").style.color = 'red'; 
});
socket.on('plc3', function(msg){
  var table = document.getElementById("table");
//table.rows[2].getElementsByTagName("td")[4].style.backgroundColor = '#CFB6BF';

//table.rows[3].style.backgroundColor = '#CFB6BF';



});
socket.on('plc', function(msg){

  console.log("socket");
  console.log(msg);
  console.log("msg");


});

</script>


<button id="addBtn15" class="btn btn-sm btn-primary">Data_1</button>
<!--button id="addBtn16" class="btn btn-sm btn-primary">off</button><button id="addBtn17" class="btn btn-sm btn-primary">on</button-->
     <!--option   start-->
  </div>
  <div class="col-sm-7"name="aj2"><!--button id="addBtn1" >Ajvar_2</button-->
    <div id="d12345" name="d2" style="border:solid;border-style: groove; width:98%; max-height:95vh; overflow: auto; ">  <!--coment table  -->
      <style>
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  max-width: 40px;  
 /* letter-spacing: 1px;  */

   /* width: 100px;  */
}

caption {
  caption-side: bottom;
  padding: 1px;  
  font-weight: bold;
}

thead,
tfoot {
  background-color: rgb(228 240 245);
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
 /* max-width: 10cqmax;   /*  dodato */
/*    padding: 4px;   */ 
padding: 2pt; 

}

td:last-of-type {
  text-align: center;
}

tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}

tfoot th {
  text-align: right;
}

tfoot td {
  font-weight: bold;
}


        </style>
  
  <table style="max-width: inherit;"id="tab1">
    <caption>
      Parts by Hours Line 1
    </caption>
    <thead>
      <tr><td></td>
        <th scope="row" colspan="37"style="text-align:center">Places Line 1</th>
        
      </tr>
      <tr style='width:2%'>
        <th scope="col">Hour</th>
        <th scope="col">&nbsp1</th> <th scope="col">&nbsp2</th><th >&nbsp3</th> <th >&nbsp4</th> <th>&nbsp5</th> <th >&nbsp6</th> <th>&nbsp7</th> <th>&nbsp8</th> <th>&nbsp9</th><th>10</th> 
        <th>11</th><th>12</th><th>13</th> <th>14</th> <th>15</th> <th >16</th> <th>17</th> <th>18</th> <th>19</th><th>20</th> 
        <th>21</th><th>22</th> <th>23</th> <th>24</th> <th>25</th> <th >26</th> <th>27</th> <th>28</th> <th>29</th><th>30</th>
        <th>31</th> <th>32</th> <th>33</th> <th>34</th> <th>35</th> <th >36</th> <th >37opt</th> 
        <!--th scope="col">Age</th-->
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">-1</th>
        <td></td>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
      </tr>
      <tr>
        <th scope="row">-2</th>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
      </tr>
      <tr>
        <th scope="row">-3</th>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
       
      </tr>
      <tr>
        <th scope="row">-4</th>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        
      </tr>
      <tr>
        <th scope="row">-5</th>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
       
      </tr> <tr>
        <th scope="row">-6</th>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
       
      </tr> <tr>
        <th scope="row">-7</th>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        
      </tr> <tr>
        <th scope="row">-8</th>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th scope="row" colspan="2"></th>
        <td></td>
      </tr>
    </tfoot>
  </table>
    </div>
  
  </div>
</div>
<script>
//table js
//document.getElementById("tab1").rows[0].cells[0].innerHTML=777;
//document.getElementById("tab1").rows[0].height=55;

//   table js




  $(window).on('load', function() {
 
 myFunction1()
});



</script>
<!--Ajvar kraj-->
<!--Ajvar pocetak II                Ajvar   II******************************************************************-->
<div class="row" name="aj"style="height: 60vh;">      
  <div class="col-sm-5" style="margin-top:5px; display: flex; flex-direction: row; gap: 3px;max-height: 40px;height: 30%;"name="aj1">
    <div style="display: flex;flex-direction: column;min-height: 20vh;gap: 1%;">
      <!--button id="addBtn6" class="btn btn-sm btn-primary">Last Hour</button>
      <button id="addBtn7" class="btn btn-sm btn-primary">This Shift</button>
      <button id="addBtn8" class="btn btn-sm btn-primary">This Week</button>
      <button id="addBtn9" class="btn btn-sm btn-primary">This Month</button-->
        <button id="addBtn55" class="btn btn-sm btn-primary">Period</button>

        <h4 style="font-weight: bold;" id="1200">PLC 12</h4>
        <!--p id="1500">1500 10</p-->
       

    </div>
   
    <!--button id="addBtn1"style="visibility : hidden"; >Ajvar_1</button-->
    <!--button onclick="myFunction2()"class='child inline-block-child'>Click2</button-->
   
 
    <style>
      label {
        display:flex;
        flex-direction:column;
      /*  display: block;   */
    /*  display:flow-root;  */
        font:
          0.8rem 'Fira Sans',
          sans-serif;
      }
      
      input,
      label {
        font:
        0.8rem 'Fira Sans'
      /*  margin: 0.4rem 0;   */
      }
      
      
       </style>
      
         <!--label for="meeting-time">Choose a time :</label-->
         <!--div  style="margin-top:5px; display: flex; flex-direction: column; gap: 1px;max-height: 20px;"-->
         <div  style=" display: flex; flex-direction: column; ;max-height: 15px;">
      <input
        type="datetime-local"
        id="meeting-time_"
        name="meeting-time"
        value="2025-04-06T15:12"
        min="2018-06-07T00:00"
        max="2026-06-14T00:00" />
       <!--NEW   INPUT-->
       <input
       type="datetime-local"
       id="meeting-time1_"
       name="meeting-time1"
       value="2025-04-06T15:12"
       min="2018-06-07T00:00"
       max="2026-06-14T00:00" />
         </div>
    <!--option   start--><div style=" display: flex; flex-direction: column; ;max-height: 15px;  offset-position: up 20px;">
      <style>

        .wrapper{
      width:70px;
      padding:2px;  
      height: 150px;
      }
       </style>
       <!--small style=" offset-anchor: 10px;">Place_Nr</small-->
      
       <div class="wrapper"><select name="Nr"  id="place_" class="form-control" onfocus='this.size=5;' onblur='this.size=1;' onchange='this.size=1; this.blur();'>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
        <option value="32">32</option>
        <option value="33">33</option>
        <option value="34">34</option>
        <option value="35">35</option>
        <option value="36">36</option>
      
      </select></div>
      <label for="meeting-time"style="display:flex;flex-direction:column;"> &nbsp&nbsp&nbspPlaceNr:</label>

    </div>


  
<!--input type="text" id="input1" class="form-control" placeholder="new message" style="max-width: 35%;"-->
<textarea id="text1_" placeholder=""style="max-width: 55%;width: 40%;height: 250%;"></textarea>
<script>
 
   document.getElementById("text1_").readOnly = true;
 //  document.getElementById("text1").innerHTML = "neki textyxcyxcycxycyxcyxcyxcyxcycxyxcyccycycyxcyxc";
 document.getElementById("text1_").innerHTML = "";


 ///  socket//**//*/*/*//*
 var socket = io();

socket.on('plc2', function(msg){
console.log("socket");
console.log("plc2",msg);
});
socket.on('conn_1200', function(msg){
 // document.getElementById("table").;
  //document.getElementById("1200").style.color = 'green';   //#03fc7f
  document.getElementById("1200").style.color = '#b1fc03'; 

});
socket.on('conn_1200b', function(msg){
 // document.getElementById("table").;
  document.getElementById("1200").style.color = 'red';

});
socket.on('plc3', function(msg){
 // var table = document.getElementById("table");




});
socket.on('plc', function(msg){




});

</script>


<button id="addBtn15_" class="btn btn-sm btn-primary">Data_2</button>
     <!--option   start-->
  </div>
  <div class="col-sm-7"name="aj2"><!--button id="addBtn1" >Ajvar_2</button-->
    <div id="d12345" name="d2" style="border:solid;border-style: groove; width:98%; max-height:95vh; overflow: auto; ">  <!--coment table  -->
      <style>
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  max-width: 40px;  
 /* letter-spacing: 1px;  */

   /* width: 100px;  */
}

caption {
  caption-side: bottom;
  padding: 1px;  
  font-weight: bold;
}

thead,
tfoot {
  background-color: rgb(228 240 245);
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
 /* max-width: 10cqmax;   /*  dodato */
/*    padding: 4px;   */ 
padding: 2pt; 

}

td:last-of-type {
  text-align: center;
}

tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}

tfoot th {
  text-align: right;
}

tfoot td {
  font-weight: bold;
}


        </style>
  
  <table style="max-width: inherit;"id="tab2">
    <caption>
      Parts by Hours Line 2
    </caption>
    <thead>
      <tr><td></td>
        <th scope="row" colspan="37"style="text-align:center">Places Line 2</th>
        
      </tr>
      <tr style='width:2%'>
        <th scope="col">Hour</th>
        <th scope="col">&nbsp1</th> <th scope="col">&nbsp2</th><th >&nbsp3</th> <th >&nbsp4</th> <th>&nbsp5</th> <th >&nbsp6</th> <th>&nbsp7</th> <th>&nbsp8</th> <th>&nbsp9</th><th>10</th> 
        <th>11</th><th>12</th><th>13</th> <th>14</th> <th>15</th> <th >16</th> <th>17</th> <th>18</th> <th>19</th><th>20</th> 
        <th>21</th><th>22</th> <th>23</th> <th>24</th> <th>25</th> <th >26</th> <th>27</th> <th>28</th> <th>29</th><th>30</th>
        <th>31</th> <th>32</th> <th>33</th> <th>34</th> <th>35</th> <th >36</th> <th >37opt</th> 
        <!--th scope="col">Age</th-->
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">-1</th>
        <td></td>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
      </tr>
      <tr>
        <th scope="row">-2</th>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
      </tr>
      <tr>
        <th scope="row">-3</th>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
       
      </tr>
      <tr>
        <th scope="row">-4</th>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        
      </tr>
      <tr>
        <th scope="row">-5</th>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
       
      </tr> <tr>
        <th scope="row">-6</th>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
       
      </tr> <tr>
        <th scope="row">-7</th>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        
      </tr> <tr>
        <th scope="row">-8</th>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th scope="row" colspan="2"></th>
        <td></td>
      </tr>
    </tfoot>
  </table>
    </div>
  
  </div>
</div>
<script>




</script>
<!--Ajvar kraj 22-->
<!--div class="container" style="margin-top:5px;margin-left: 15px"-->
<div class="container" style="margin-top:5px">
  <div class="row" >      
    <div class="col-sm-4" style="margin-top:5px; display: flex; flex-direction: row; gap: 3px;max-height: 40px;">

      <!--button id="addBtn1" class='child inline-block-child'>Create</button-->
   
   
    <div>     </div><div>    <p   style=" font-size:12px; color:black;" id="a2">O</p>  </div>


    <script>
   
  </script>
   <!--TIME INPUT-->



    </div>
    </div>
  <div class="row">
    <div class="col-sm-4">
   
  

      
     
      <hr class="d-sm-none">
    </div>
    <div class="col-sm-8">

      <!--h2>TITLE HEADING</h2-->
   

      <!--p>Some text..</p-->
       <p>.</p>
      

  
    </div>
  </div>
  <div class="row">
   
</div>
</div>






<script>
 

///prvi plc 1500
 socket.on('plc1', function(msg){

//ob=JSON.parse(msg);
console.log("socket");
console.log("plc1",msg);
//console.log("plc1 , msg.1",msg);
console.log("plc1 , msg.1",msg[1]);

document.getElementById("tab1").rows[2].cells[1].innerHTML=msg[1];
for(i=1; i++; i<36){document.getElementById("tab1").rows[2].cells[i].innerHTML=msg[i];}

});
socket.on('plc2', function(msg){
//ob=JSON.parse(msg);
console.log("socket");
console.log("plc2",msg);

document.getElementById("tab1").rows[3].cells[1].innerHTML=msg[1];
for(i=1; i++; i<36){document.getElementById("tab1").rows[3].cells[i].innerHTML=msg[i];}
//table.rows[2].getElementsByTagName("td")[1].innerHTML =msg[1];
});
socket.on('plc3', function(msg){
//ob=JSON.parse(msg);
console.log("socket");
console.log("plc3",msg);

document.getElementById("tab1").rows[4].cells[1].innerHTML=msg[1];
for(i=1; i++; i<36){document.getElementById("tab1").rows[4].cells[i].innerHTML=msg[i];}
//table.rows[2].getElementsByTagName("td")[1].innerHTML =msg[1];
});

socket.on('plc4', function(msg){
//ob=JSON.parse(msg);
console.log("socket");
console.log("plc4",msg);

document.getElementById("tab1").rows[5].cells[1].innerHTML=msg[1];
for(i=1; i++; i<36){document.getElementById("tab1").rows[5].cells[i].innerHTML=msg[i];}
//table.rows[2].getElementsByTagName("td")[1].innerHTML =msg[1];
});
socket.on('plc5', function(msg){
//ob=JSON.parse(msg);
console.log("socket");
console.log("plc5",msg);

document.getElementById("tab1").rows[6].cells[1].innerHTML=msg[1];
for(i=1; i++; i<36){document.getElementById("tab1").rows[6].cells[i].innerHTML=msg[i];}
//table.rows[2].getElementsByTagName("td")[1].innerHTML =msg[1];
});

socket.on('plc6', function(msg){
//ob=JSON.parse(msg);
console.log("socket");
console.log("plc6",msg);

document.getElementById("tab1").rows[7].cells[1].innerHTML=msg[1];
for(i=1; i++; i<36){document.getElementById("tab1").rows[7].cells[i].innerHTML=msg[i];}
//table.rows[2].getElementsByTagName("td")[1].innerHTML =msg[1];
});
socket.on('plc7', function(msg){
//ob=JSON.parse(msg);
console.log("socket");
console.log("plc7",msg);

document.getElementById("tab1").rows[8].cells[1].innerHTML=msg[1];
for(i=1; i++; i<36){document.getElementById("tab1").rows[8].cells[i].innerHTML=msg[i];}
//table.rows[2].getElementsByTagName("td")[1].innerHTML =msg[1];
});
socket.on('plc8', function(msg){

console.log("socket");
console.log("plc8",msg);

document.getElementById("tab1").rows[9].cells[1].innerHTML=msg[1];
for(i=1; i++; i<36){document.getElementById("tab1").rows[9].cells[i].innerHTML=msg[i];}

});
var table = document.getElementById("tab1");
socket.on('colo', function(msg){
console.log("colo : ",msg);

       if(msg[1]==1){table.rows[2].getElementsByTagName("td")[1-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[1-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
       if(msg[2]==1){table.rows[2].getElementsByTagName("td")[2-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[2-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
       if(msg[3]==1){table.rows[2].getElementsByTagName("td")[3-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[3-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
      if(msg[4]==1){table.rows[2].getElementsByTagName("td")[4-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[4-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
     if(msg[5]==1){table.rows[2].getElementsByTagName("td")[5-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[5-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
     if(msg[6]==1){table.rows[2].getElementsByTagName("td")[6-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[6-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
     if(msg[7]==1){table.rows[2].getElementsByTagName("td")[7-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[7-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
      if(msg[8]==1){table.rows[2].getElementsByTagName("td")[8-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[8-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
      if(msg[9]==1){table.rows[2].getElementsByTagName("td")[9-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[9-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
      if(msg[10]==1){table.rows[2].getElementsByTagName("td")[10-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[10-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[11]==1){table.rows[2].getElementsByTagName("td")[11-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[11-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[12]==1){table.rows[2].getElementsByTagName("td")[12-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[12-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[13]==1){table.rows[2].getElementsByTagName("td")[13-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[13-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[14]==1){table.rows[2].getElementsByTagName("td")[14-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[14-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[15]==1){table.rows[2].getElementsByTagName("td")[15-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[15-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[16]==1){table.rows[2].getElementsByTagName("td")[16-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[16-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[17]==1){table.rows[2].getElementsByTagName("td")[17-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[17-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[18]==1){table.rows[2].getElementsByTagName("td")[18-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[18-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[19]==1){table.rows[2].getElementsByTagName("td")[19-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[19-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[20]==1){table.rows[2].getElementsByTagName("td")[20-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[20-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[21]==1){table.rows[2].getElementsByTagName("td")[21-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[21-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[22]==1){table.rows[2].getElementsByTagName("td")[22-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[22-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[23]==1){table.rows[2].getElementsByTagName("td")[23-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[23-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[24]==1){table.rows[2].getElementsByTagName("td")[24-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[24-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[25]==1){table.rows[2].getElementsByTagName("td")[25-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[25-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[26]==1){table.rows[2].getElementsByTagName("td")[26-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[26-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[27]==1){table.rows[2].getElementsByTagName("td")[27-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[27-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[28]==1){table.rows[2].getElementsByTagName("td")[28-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[28-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[29]==1){table.rows[2].getElementsByTagName("td")[29-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[29-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[30]==1){table.rows[2].getElementsByTagName("td")[30-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[30-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[31]==1){table.rows[2].getElementsByTagName("td")[31-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[31-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[32]==1){table.rows[2].getElementsByTagName("td")[32-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[32-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[33]==1){table.rows[2].getElementsByTagName("td")[33-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[33-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[34]==1){table.rows[2].getElementsByTagName("td")[34-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[34-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[35]==1){table.rows[2].getElementsByTagName("td")[35-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[35-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[36]==1){table.rows[2].getElementsByTagName("td")[36-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table.rows[2].getElementsByTagName("td")[36-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2

});
//document.getElementById("tab1").rows[1].cells[i].backgroundColor='#65d457'
////drugi plc

socket.on('plc1_', function(msg){

//ob=JSON.parse(msg);
console.log("socket");
console.log("plc1_",msg);
//console.log("plc1 , msg.1",msg);
console.log("plc1_ , msg.1",msg[1]);

document.getElementById("tab2").rows[2].cells[1].innerHTML=msg[1];
for(i=1; i++; i<36){document.getElementById("tab2").rows[2].cells[i].innerHTML=msg[i];}

});
socket.on('plc2_', function(msg){
//ob=JSON.parse(msg);
console.log("socket");
console.log("plc2_",msg);

document.getElementById("tab2").rows[3].cells[1].innerHTML=msg[1];
for(i=1; i++; i<36){document.getElementById("tab2").rows[3].cells[i].innerHTML=msg[i];}
//table.rows[2].getElementsByTagName("td")[1].innerHTML =msg[1];
});
socket.on('plc3_', function(msg){
//ob=JSON.parse(msg);
console.log("socket");
console.log("plc3_",msg);

document.getElementById("tab2").rows[4].cells[1].innerHTML=msg[1];
for(i=1; i++; i<36){document.getElementById("tab2").rows[4].cells[i].innerHTML=msg[i];}
//table.rows[2].getElementsByTagName("td")[1].innerHTML =msg[1];
});

socket.on('plc4_', function(msg){
//ob=JSON.parse(msg);
console.log("socket");
console.log("plc4_",msg);

document.getElementById("tab2").rows[5].cells[1].innerHTML=msg[1];
for(i=1; i++; i<36){document.getElementById("tab2").rows[5].cells[i].innerHTML=msg[i];}
//table.rows[2].getElementsByTagName("td")[1].innerHTML =msg[1];
});
socket.on('plc5_', function(msg){
//ob=JSON.parse(msg);
console.log("socket");
console.log("plc5_",msg);

document.getElementById("tab2").rows[6].cells[1].innerHTML=msg[1];
for(i=1; i++; i<36){document.getElementById("tab2").rows[6].cells[i].innerHTML=msg[i];}
//table.rows[2].getElementsByTagName("td")[1].innerHTML =msg[1];
});

socket.on('plc6_', function(msg){
//ob=JSON.parse(msg);
console.log("socket");
console.log("plc6_",msg);

document.getElementById("tab2").rows[7].cells[1].innerHTML=msg[1];
for(i=1; i++; i<36){document.getElementById("tab2").rows[7].cells[i].innerHTML=msg[i];}
//table.rows[2].getElementsByTagName("td")[1].innerHTML =msg[1];
});
socket.on('plc7_', function(msg){
//ob=JSON.parse(msg);
console.log("socket");
console.log("plc7_",msg);

document.getElementById("tab2").rows[8].cells[1].innerHTML=msg[1];
for(i=1; i++; i<36){document.getElementById("tab2").rows[8].cells[i].innerHTML=msg[i];}
//table.rows[2].getElementsByTagName("td")[1].innerHTML =msg[1];
});
socket.on('plc8_', function(msg){

//console.log("socket");
console.log("plc8_",msg);

document.getElementById("tab2").rows[9].cells[1].innerHTML=msg[1];
for(i=1; i++; i<36){document.getElementById("tab2").rows[9].cells[i].innerHTML=msg[i];}

});
var table_ = document.getElementById("tab2");
socket.on('colo_', function(msg){
console.log("colo_ : ",msg);

       if(msg[1]==1){table_.rows[2].getElementsByTagName("td")[1-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[1-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
       if(msg[2]==1){table_.rows[2].getElementsByTagName("td")[2-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[2-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
       if(msg[3]==1){table_.rows[2].getElementsByTagName("td")[3-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[3-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
      if(msg[4]==1){table_.rows[2].getElementsByTagName("td")[4-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[4-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
     if(msg[5]==1){table_.rows[2].getElementsByTagName("td")[5-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[5-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
     if(msg[6]==1){table_.rows[2].getElementsByTagName("td")[6-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[6-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
     if(msg[7]==1){table_.rows[2].getElementsByTagName("td")[7-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[7-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
      if(msg[8]==1){table_.rows[2].getElementsByTagName("td")[8-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[8-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
      if(msg[9]==1){table_.rows[2].getElementsByTagName("td")[9-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[9-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
      if(msg[10]==1){table_.rows[2].getElementsByTagName("td")[10-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[10-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[11]==1){table_.rows[2].getElementsByTagName("td")[11-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[11-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[12]==1){table_.rows[2].getElementsByTagName("td")[12-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[12-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[13]==1){table_.rows[2].getElementsByTagName("td")[13-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[13-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[14]==1){table_.rows[2].getElementsByTagName("td")[14-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[14-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[15]==1){table_.rows[2].getElementsByTagName("td")[15-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[15-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[16]==1){table_.rows[2].getElementsByTagName("td")[16-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[16-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[17]==1){table_.rows[2].getElementsByTagName("td")[17-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[17-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[18]==1){table_.rows[2].getElementsByTagName("td")[18-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[18-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[19]==1){table_.rows[2].getElementsByTagName("td")[19-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[19-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[20]==1){table_.rows[2].getElementsByTagName("td")[20-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[20-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[21]==1){table_.rows[2].getElementsByTagName("td")[21-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[21-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[22]==1){table_.rows[2].getElementsByTagName("td")[22-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[22-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[23]==1){table_.rows[2].getElementsByTagName("td")[23-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[23-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[24]==1){table_.rows[2].getElementsByTagName("td")[24-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[24-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[25]==1){table_.rows[2].getElementsByTagName("td")[25-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[25-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[26]==1){table_.rows[2].getElementsByTagName("td")[26-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[26-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[27]==1){table_.rows[2].getElementsByTagName("td")[27-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[27-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[28]==1){table_.rows[2].getElementsByTagName("td")[28-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[28-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[29]==1){table_.rows[2].getElementsByTagName("td")[29-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[29-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[30]==1){table_.rows[2].getElementsByTagName("td")[30-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[30-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[31]==1){table_.rows[2].getElementsByTagName("td")[31-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[31-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[32]==1){table_.rows[2].getElementsByTagName("td")[32-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[32-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[33]==1){table_.rows[2].getElementsByTagName("td")[33-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[33-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[34]==1){table_.rows[2].getElementsByTagName("td")[34-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[34-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[35]==1){table_.rows[2].getElementsByTagName("td")[35-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[35-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2
  if(msg[36]==1){table_.rows[2].getElementsByTagName("td")[36-1].style.backgroundColor = '#32ed41';
  setTimeout(() => { table_.rows[2].getElementsByTagName("td")[36-1].style.backgroundColor = 'white';   }, "5000"); };   // rgb(228 240 245)  rgb(160 160 160)'white'    #edeef2

});

</script>            <!--script onload="chart100()"-->
  
<!--     //  chart100();  -->





<!--*************  full Screen************  -->
<!--input type="button"      value="Fullscreen" onclick="toggleFullScreen()"  style="position: absolute;left: 1430px;  top: 30px;  background-COLOR:#141B2D; bORDER-COLOR: BLACK;color:#626C81;   " -->
<script>
  function toggleFullScreen() {
if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
 (!document.mozFullScreen && !document.webkitIsFullScreen)) {
  if (document.documentElement.requestFullScreen) {  
    document.documentElement.requestFullScreen();  
  } else if (document.documentElement.mozRequestFullScreen) {  
    document.documentElement.mozRequestFullScreen();  
  } else if (document.documentElement.webkitRequestFullScreen) {  
    document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
  }  
} else {  
  if (document.cancelFullScreen) {  
    document.cancelFullScreen();  
  } else if (document.mozCancelFullScreen) {  
    document.mozCancelFullScreen();  
  } else if (document.webkitCancelFullScreen) {  
    document.webkitCancelFullScreen();  
  }  
}  
}

</script>
<!--************* full screen************  -->
<script src="main.js"></script>
<script src="/node_modules/jquery/src/"></script>
<script src="/jquery.min.js"></script>
</body>
</html>
`);
               }  else {
  res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align ='center'><a href='./login.html'>login again</a></div>");

}
    })
            }
else {

let fakePass = `$2b$$10$ifgfgfgfgfgfgfggfgfgfggggfgfgfga`;
await bcrypt.compare(req.body.password, fakePass);

res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align='center'><a href='./login.html'>login again<a><div>");
}

} catch{
res.send("Internal server error");
}
});






//******************* */
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

//   upis u ajvar
function sql(a){
  let m= time();
//   let tt= String(time());
  console.log("time.date",m);
  let ge=a;

db.run('INSERT INTO ajvar(place, tmst) VALUES(?,?)', [ge,m], (err) => {
if(err) {
  return console.log(err.message); 
}
//	console.log('Row was added to the table: ${this.lastID}');
console.log('upisao');
})
};
//   upis u ajvar_
function sql_(a){
  let m= time();
//   let tt= String(time());
  //console.log("time.date",m);
  let ge=a;

db.run('INSERT INTO ajvar_ (place, tmst) VALUES(?,?)', [ge,m], (err) => {
if(err) {
  return console.log(err.message); 
}
//	console.log('Row was added to the table: ${this.lastID}');
console.log('upisao');
})
};
//////pretraga po datumu start------------------------------------
app.post('/b4',(req,res) => { //*******************write */   button Get Data1
  console.log("bb14");  
  let msg = req.body.msg;   
  console.log ("server_msg_/b4:",msg);    
  try {
    //  proba citanja iy tabele

    let cc=0;
    let length_1 =0;

   let ti1=msg[0];
   let ti2=msg[1];


console.log("cc_1",cc);

let sql = `SELECT COUNT(*) FROM ping WHERE tmst BETWEEN ? AND ?`;
     db.get(sql,[ti1,ti2], (err, row) => {    
    /////  console.log("aw_count  ",Object.values(row)[0]);

    if(typeof row !== "undefined")
      {
        cc=Object.values(row)[0];
      }
      console.log("broj_rezultat_pretrage_cc:",cc);

      //kad dobijes broj rezultata pozovi rezultate
      db.serialize(() => {
        console.log("serialize: ",cc);
        let br=0;
     //   let res=[0,0,0];
     let res_test=[];
     let res_t2=[];
     let db_user_type=[];
     let db_user_status=[];
     let db_user_tmst=[];
     let db_user_id=[];

      //   db.each(`SELECT * FROM ping  WHERE tmst > ? AND tmst <?`,[ti1,ti2], (err, row) => {if (err) {  console.log(err);throw err; }; //   ovo je billo
         db.each(`SELECT * FROM ping  WHERE tmst BETWEEN ? AND ?`,[ti1,ti2], (err, row) => {if (err) {  console.log(err);throw err; };
         //  console.log(row);  // prikazace sve!!!!!!
           
           for(let i = 0; i ==cc; i++)
            {
               // arr[i] = []; 
               res[i]=nr[i].test;
            }  
          // res_test[br]=row.test;
        //   res_test[br]=row.email;
        res_test[br]=row.tmst;
           res_t2[br]=row.t2;
///new 
db_user_status[br]=row.status;
db_user_type[br]=row.type;
db_user_id[br]=row.id;
//let tmst1=text.replace("Microsoft", "W3Schools");
let tmst1=row.tmst.replace("T", " ");
db_user_tmst[br]=tmst1;

//db_user_tmst[br]=row.tmst;

//   new end
           br=br+1;

      //     console.log("br: ",br);
         //  console.log("row[ ]: ",row.email[br]);
    //     console.log("row[ ]: ",row.id[br]);
        //   console.log("row.email: ",row.email);
     //   console.log("row.tmst: ",row.tmst);
           if (br==cc){console.log("kraj res_test: ",res_test);
             length_1 =  res_test.length;
            console.log("res_lenht: ",length_1);
           
            for(let i = 0; i <length_1; i++)
              {
              //  console.log(i,". clan_test :",res_test[i]);
              //  console.log(i,". clan_t2 :",res_t2[i]);
                 // arr[i] = []; 
               //  res[i]=nr[i].test;
              }
              let ad =[res_test,res_t2]
            //  io.emit('tab', ad);
            let ad1 =[db_user_type,db_user_status,db_user_tmst]
            let ad2 ={db_user_type,db_user_status,db_user_tmst,db_user_id}

            //  console.log("ad1 :",ad1);
           //   let ad1 ={"status":a11,"tmst":a22,"type":a33}
         //     io.emit('tab', ad1);
         //   res.send(res_test); ///   ok radi!!!
            ///    res.send(ad1); 
            res.send(ad2); 
            //  res.send(db_user_type,db_user_status,db_user_tmst); 
           }
          });
        });
        console.log(". clan :");
       //kad dobijes broj rezultata pozovi rezultate    
if (err) {throw err;}
 console.log("done");

// res.send(res_test);
 });
// res.send(res_test);
// res.send("tets");
    console.log ("b7");          
  } catch (error) {
    console.log ("writte  err");
  }
//  res.send("tetsi");
//   res.send(res_test);
// res.send("Sve ok2_14");
//  res.send(res_test);
           })                        
   ////new sql_read
   var ret=0;
   function  sql_read1(a,b,c){
   

    console.log("server_sql_read1_a ",a);
    console.log("server_sql_read1_b ",b);
    console.log("server_sql_read1_b ",c);
  
  
   ///1
   // let sql1 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
    let sql1 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
    db.get(sql1,[a,b,c], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0];ret=cc; console.log("broj_rezultat_pretrage_cc_place 1:",`${c}`,"*",cc);    console.log("server_sql_read1_ret ",ret);}});
   return ret; // radi ali kasni
 
   }
   
////new sql_read  end

/////pretraga podatumu end--------------------------------------------------------------------------=============
///////////////SQL   END
///////pretraga ajvar
var tab_data=[[],[],[],[]];
//var tab_data={1:[],2:[],3:[],4:[]};
//tab_data[0]=[1,2,3]
//console.log("tab_data[0] ",tab_data[0]);
//console.log("tab_data ",tab_data);
//var tab_data=[[1,2,3],[],[],[]];



 let asy=[] ;                
 let o1={1:0,2:2,3:"0",4:"0",5:"0",6:"0",7:"0",8:"0",9:"0",10:"0",
  11:"0",12:"0",13:"0",14:"0",15:"0",16:"0",17:"0",18:"0",19:"0",20:"0",
  21:"0",22:"0",23:"0",24:"0",25:"0",26:"0",27:"0",28:"0",29:"0",30:"0",
  31:"0",32:"0",33:"0",34:"0",35:"0",36:"0",37:"0",38:"0",39:"0"}
  let o2={1:0,2:2,3:"0",4:"0",5:"0",6:"0",7:"0",8:"0",9:"0",10:"0",
    11:"0",12:"0",13:"0",14:"0",15:"0",16:"0",17:"0",18:"0",19:"0",20:"0",
    21:"0",22:"0",23:"0",24:"0",25:"0",26:"0",27:"0",28:"0",29:"0",30:"0",
    31:"0",32:"0",33:"0",34:"0",35:"0",36:"0",37:"0",38:"0",39:"0"}
    let o3={1:0,2:2,3:"0",4:"0",5:"0",6:"0",7:"0",8:"0",9:"0",10:"0",
      11:"0",12:"0",13:"0",14:"0",15:"0",16:"0",17:"0",18:"0",19:"0",20:"0",
      21:"0",22:"0",23:"0",24:"0",25:"0",26:"0",27:"0",28:"0",29:"0",30:"0",
      31:"0",32:"0",33:"0",34:"0",35:"0",36:"0",37:"0",38:"0",39:"0"}

 let sql_data={0:0,1:0,2:2,3:"0",4:"0",5:"0",6:"0",7:"0",8:"0",9:"0",10:"0",
                  11:"0",12:"0",13:"0",14:"0",15:"0",16:"0",17:"0",18:"0",19:"0",20:"0",
                  21:"0",22:"0",23:"0",24:"0",25:"0",26:"0",27:"0",28:"0",29:"0",30:"0",
                  31:"0",32:"0",33:"0",34:"0",35:"0",36:"0",37:"0",38:"0",39:"0"}
function  sql_read(a,b,m,indx,res_i){

  console.log("server_sql_read_a ",a);
  console.log("server_sql_read_b ",b);

//sql_data=[777];
 ///1
 // let sql1 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
  let sql1 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
  db.get(sql1,[a,b,1], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[1]=cc;}});
 ///2/*
 
 let sql2 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
  db.get(sql2,[a,b,2], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; ;sql_data[2]=cc;}});
 ///3
 let sql3 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
 db.get(sql3,[a,b,3], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[3]=cc;}});
///4
let sql4 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
 db.get(sql4,[a,b,4], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; ;sql_data[4]=cc;}});
 //
 let sql5 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
 db.get(sql5,[a,b,5], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; ;sql_data[5]=cc;}});
///6
let sql6 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
 db.get(sql6,[a,b,6], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; ;sql_data[6]=cc;}});
///7
let sql7 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql7,[a,b,7], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[7]=cc;}});
///8
let sql8 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql8,[a,b,8], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[8]=cc;}});

///9
let sql9 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql9,[a,b,9], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[9]=cc;}});
///10
let sql10 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql10,[a,b,10], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[10]=cc;}});
////////////////////////
let sql11 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql11,[a,b,11], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[11]=cc;}});
//1/12/*

let sql12 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql12,[a,b,12], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[12]=cc;}});
///13
let sql13 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql13,[a,b,13], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[13]=cc;}});
///14
let sql14 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql14,[a,b,14], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[14]=cc;}});
///15
let sql15 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql15,[a,b,15], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[15]=cc;}});
///16
let sql16 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql16,[a,b,16], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[16]=cc;}});
///17
let sql17 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql17,[a,b,17], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[17]=cc;}});
///18
let sql18 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql18,[a,b,18], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[18]=cc;}});

///19
let sql19 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql19,[a,b,19], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[19]=cc;}});
///20
let sql20 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql20,[a,b,20], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[20]=cc;}});


let sql21 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql21,[a,b,21], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[21]=cc;}});
///2/*

let sql22 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql22,[a,b,22], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[22]=cc;}});
///3
let sql23 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql23,[a,b,23], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[23]=cc;}});
///4
let sql24 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql24,[a,b,24], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[24]=cc;}});
///5
let sql25 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql25,[a,b,25], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[25]=cc;}});
///6
let sql26 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql26,[a,b,26], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[26]=cc;}});
///7
let sql27 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql27,[a,b,27], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[27]=cc;}});
///8
let sql28 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql28,[a,b,28], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[28]=cc;}});

///9
let sql29 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql29,[a,b,29], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[29]=cc;}});
///30
let sql30 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql30,[a,b,30], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[30]=cc;}});

//31
let sql31 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql31,[a,b,31], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[31]=cc;}});
///32/*

let sql32 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql32,[a,b,32], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[32]=cc;}});
///33
let sql33 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql33,[a,b,33], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[33]=cc;}});
///34
let sql34 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql34,[a,b,34], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0];sql_data[34]=cc;}});
///35
let sql35 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql35,[a,b,35], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data[35]=cc;}});
///6
let sql36 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql36,[a,b,36], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; console.log("broj_rezultat_pretrage_cc_place 36:",cc);sql_data[36]=cc;sql_data[37]=a;sql_data[38]=b;
  sql_data[39]=m;
 // sql_data[39]=777;
  setTimeout(() => {
    console.log("server_sql_read > sql_data ",JSON.stringify(sql_data));
   // asy[indx]=sql_data;
    console.log("server_sql_read > indx",indx);
  }, "100");
}});
/*
setTimeout(() => {
 // console.log("server_sql_read > sql_data ",JSON.stringify(sql_data));
 // if(res_i==1){asy=[]};
 // if(res_i==2){asy.push(sql_data);}
  //  if(res_i==3){console.log("server_sql_read > asy: ",asy );
//
 // };
 // asy[indx]=sql_data;
//  console.log("server_sql_read > indx",indx);
}, "100");
*/
//return data;
}
///////drugi  sql read////////////////////////////**************************************** */
let sql_data_={0:0,1:"0",2:"0",3:"0",4:"0",5:"0",6:"0",7:"0",8:"0",9:"0",10:"0",
  11:"0",12:"0",13:"0",14:"0",15:"0",16:"0",17:"0",18:"0",19:"0",20:"0",
  21:"0",22:"0",23:"0",24:"0",25:"0",26:"0",27:"0",28:"0",29:"0",30:"0",
  31:"0",32:"0",33:"0",34:"0",35:"0",36:"0",37:"0",38:"0",39:"0"}
function  sql_read_(a,b,m,indx,res_i){

  console.log("server_sql____read_a ",a);
  console.log("server_sql____read_b ",b);

//sql_data=[777];
 ///1
 // let sql1 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
  let sql1 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
  db.get(sql1,[a,b,1], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[1]=cc;}});
 ///2/*
 
 let sql2 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
  db.get(sql2,[a,b,2], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; ;sql_data_[2]=cc;}});
 ///3
 let sql3 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
 db.get(sql3,[a,b,3], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[3]=cc;}});
///4
let sql4 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
 db.get(sql4,[a,b,4], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; ;sql_data_[4]=cc;}});
 //
 let sql5 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
 db.get(sql5,[a,b,5], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; ;sql_data_[5]=cc;}});
///6
let sql6 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
 db.get(sql6,[a,b,6], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; ;sql_data_[6]=cc;}});
///7
let sql7 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql7,[a,b,7], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[7]=cc;}});
///8
let sql8 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql8,[a,b,8], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[8]=cc;}});

///9
let sql9 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql9,[a,b,9], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[9]=cc;}});
///10
let sql10 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql10,[a,b,10], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[10]=cc;}});
////////////////////////
let sql11 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql11,[a,b,11], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[11]=cc;}});
//1/12/*

let sql12 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql12,[a,b,12], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[12]=cc;}});
///13
let sql13 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql13,[a,b,13], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[13]=cc;}});
///14
let sql14 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql14,[a,b,14], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[14]=cc;}});
///15
let sql15 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql15,[a,b,15], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[15]=cc;}});
///16
let sql16 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql16,[a,b,16], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[16]=cc;}});
///17
let sql17 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql17,[a,b,17], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[17]=cc;}});
///18
let sql18 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql18,[a,b,18], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[18]=cc;}});

///19
let sql19 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql19,[a,b,19], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[19]=cc;}});
///20
let sql20 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql20,[a,b,20], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[20]=cc;}});


let sql21 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql21,[a,b,21], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[21]=cc;}});
///2/*

let sql22 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql22,[a,b,22], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[22]=cc;}});
///3
let sql23 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql23,[a,b,23], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[23]=cc;}});
///4
let sql24 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql24,[a,b,24], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[24]=cc;}});
///5
let sql25 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql25,[a,b,25], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[25]=cc;}});
///6
let sql26 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql26,[a,b,26], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[26]=cc;}});
///7
let sql27 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql27,[a,b,27], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[27]=cc;}});
///8
let sql28 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql28,[a,b,28], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[28]=cc;}});

///9
let sql29 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql29,[a,b,29], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[29]=cc;}});
///30
let sql30 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql30,[a,b,30], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[30]=cc;}});

//31
let sql31 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql31,[a,b,31], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[31]=cc;}});
///32/*

let sql32 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql32,[a,b,32], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[32]=cc;}});
///33
let sql33 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql33,[a,b,33], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[33]=cc;}});
///34
let sql34 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql34,[a,b,34], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0];sql_data_[34]=cc;}});
///35
let sql35 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql35,[a,b,35], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; sql_data_[35]=cc;}});
///6
let sql36 = `SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=? `;
db.get(sql36,[a,b,36], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; console.log("broj_rezultat_pretrage_cc_place 36:",cc);sql_data_[36]=cc;sql_data_[37]=a;sql_data[38]=b;
  sql_data_[39]=m;
 // sql_data[39]=777;
  setTimeout(() => {
    console.log("server_sql_read > sql_data ",JSON.stringify(sql_data_));
   // asy[indx]=sql_data;
    console.log("server_sql_read > indx",indx);
  }, "100");
}});
/*
setTimeout(() => {
 // console.log("server_sql_read > sql_data ",JSON.stringify(sql_data));
 // if(res_i==1){asy=[]};
 // if(res_i==2){asy.push(sql_data);}
  //  if(res_i==3){console.log("server_sql_read > asy: ",asy );
//
 // };
 // asy[indx]=sql_data;
//  console.log("server_sql_read > indx",indx);
}, "100");
*/
//return data;
}
/////*drugi sql read kraj */


app.post('/b4_1',(req,res) => {
  let msg = req.body.msg;
  console.log("server4_1, datumi",msg);
  let ti1=msg[0];
  let ti2=msg[1];
let t1_s= ti1.replace("T", " ");
let t2_s= ti2.replace("T", " ");



 console.log("server4_1");
 //sql_read(ti1,ti2);
 let dat=sql_read(t1_s,t2_s);
 console.log("server_b4_1_dat",dat);

//let P1=sql_read(ti1,ti2,1);
//let P1=sql_read(t1_s,t2_s,1);
//console.log("server_b4_1_P1",P1);

//let P2=sql_read(ti1,ti2,2);
//let P2=sql_read(t1_s,t2_s,2);
//console.log("server_b4_1_P2",P2);
 //let sql = `SELECT COUNT(*) FROM ping WHERE tmst BETWEEN ? AND ?`;
// let sql = `SELECT COUNT(*) FROM ajvar WHERE tmst BETWEEN ? AND ?`;  //ok
//*************************************************************************************** */



//**************************************************** */
 
     //sql end
     res.send("Sve ok2");
              })
 
////////pretraga ajvar end
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

///   b5
app.post('/b5',(req,res) => {
 // conn1.readAllItems(valuesReady1);
  let msg = req.body.msg;
  console.log("server_5,msg[0]:",msg[0]);
  console.log("server_5,msg[1]:",msg[1]);
 // console.log("server_5:",msg);
 // myDisplay_2(n_time(t2,2),n_time(t2,1));
t1=n_time(msg[0],0);
console.log("server_5,  t1:",t1);

   // bilo je
  let resl={"from":" ","to":" " ,"place":" ","res":" " }
  let ti1=msg[0];
  console.log("server_5,msg[0]:",msg[0]);
  console.log("server_5,msg[1]:",msg[1]);

  let ti2=msg[1];
  let ti3=msg[2];
  let ret=100;
  let r=[];
  let t1_s=n_time(msg[0],0);
  let t2_s=n_time(msg[1],0);
//let t1_s= ti1.replace("T", " ");
//let t2_s= ti2.replace("T", " ");

// console.log("server4_1");
 //sql_read(ti1,ti2);
 //let dat=sql_read1(t1_s,t2_s,ti3);
 //console.log("server_b4_1_dat",String(dat));
 //console.log("from_b5:  ",sql_read1(t1_s,t2_s,ti3));
  console.log("butt5");
  console.log("server_butt_5_msg",msg);
  let sql100 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
  db.get(sql100,[t1_s,t2_s,msg[2]], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0];ret=cc; console.log("broj_rezultat_pretrage_cc_place 1:","*",cc);    console.log("server_sql_read1_ret ",ret);
 // console.log("server >> r[0]: ",r[0],"r[1]: ",r[1],"r[2]: ",cc)
 //rr[0]=[ti1];
 r[0]=ti1;
 r[1]=ti2;
 r[2]=cc;
 console.log("server_r: ",r);
 resl.from=t1_s;
 resl.to=t2_s;
 resl.place=ti3;
 resl.res=cc;

 console.log("server5 resl: ",resl);
 const r_JSON = JSON.stringify(r);
 res.send(resl);

 //res.send(stringify(`${t1_s}`,`${t2_s}`,`${cc}`));
}});

          })
///   b5_
app.post('/b5_',(req,res) => {
  // conn1.readAllItems(valuesReady1);
   let msg = req.body.msg;
   console.log("server_5,msg[0]:",msg[0]);
   console.log("server_5,msg[1]:",msg[1]);
  // console.log("server_5:",msg);
  // myDisplay_2(n_time(t2,2),n_time(t2,1));
 t1=n_time(msg[0],0);
 console.log("server_5,  t1:",t1);
 
    // bilo je
   let resl={"from":" ","to":" " ,"place":" ","res":" " }
   let ti1=msg[0];
   console.log("server_5,msg[0]:",msg[0]);
   console.log("server_5,msg[1]:",msg[1]);
 
   let ti2=msg[1];
   let ti3=msg[2];
   let ret=100;
   let r=[];
   let t1_s=n_time(msg[0],0);
   let t2_s=n_time(msg[1],0);
 //let t1_s= ti1.replace("T", " ");
 //let t2_s= ti2.replace("T", " ");
 
 // console.log("server4_1");
  //sql_read(ti1,ti2);
  //let dat=sql_read1(t1_s,t2_s,ti3);
  //console.log("server_b4_1_dat",String(dat));
  //console.log("from_b5:  ",sql_read1(t1_s,t2_s,ti3));
   console.log("butt55555555_______________");
   console.log("server_butt_5_msg",msg);
   let sql101 = `SELECT COUNT(*) FROM ajvar_  WHERE(tmst BETWEEN ? AND ?) AND place=? `;
   db.get(sql101,[t1_s,t2_s,msg[2]], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0];ret=cc; console.log("broj_rezultat_pretrage_cc_place 1:","*",cc);    console.log("server_sql_read1_ret ",ret);
  // console.log("server >> r[0]: ",r[0],"r[1]: ",r[1],"r[2]: ",cc)
  //rr[0]=[ti1];
  r[0]=ti1;
  r[1]=ti2;
  r[2]=cc;
  console.log("server_r: ",r);
  resl.from=t1_s;
  resl.to=t2_s;
  resl.place=ti3;
  resl.res=cc;
 
  console.log("server5 resl: ",resl);
  const r_JSON = JSON.stringify(r);
  res.send(resl);
 
  //res.send(stringify(`${t1_s}`,`${t2_s}`,`${cc}`));
 }});
 
           })
 
        

          app.post('/con_staus',(req,res) => {
            let msg = req.body.msg;
            console.log("status");
            
            //////////start
           
            ///////////end
            res.send("Sve ok1_b3");
                    })

             setInterval( function() {
            //  conn1.readAllItems(valuesReady1);
           //   conn2.readAllItems(valuesReady2);

             }, 1000);
 setInterval( function() {
              //   conn1.readAllItems(valuesReady1);
              //   conn2.readAllItems(valuesReady2);
           //   conn1.readAllItems(valuesReady1); //  !!!!!!!!!!!!!!!!!!!!  glavno
               random=generateRandomInteger(-9,9)
            //   console.log("random (-9,9): ",random);
            if(log==0){
            conn1.readAllItems(valuesReady1);
            conn2.readAllItems(valuesReady2);
 }
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
  
  ///   onstart time
  ///   b4
app.post('/time',(req,res) => {
  let msg = req.body.msg;
  console.log("time_onload_msg",msg);
  console.log("time_onload");

  //////////start
  let m= time();
  res.send(m);
  ///////////end
 // res.send("Sve ok1_b4");
          })

  ///   month  b9
  app.post('/b9',(req,res) => {
    let msg = req.body.msg;
 //   console.log("time_onload_msg",msg);
    console.log("/b9");
  
    //////////start
  //  let m= time();
    res.send("Sve ok");
    ///////////end
   // res.send("Sve ok1_b4");
            })
 
          
 
/*

var ak=[]
   var   sq1 = () =>{ const sq1 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `; db.get(sq1,[t1,t2,1], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; console.log("broj_rezultat_pretrage_cc_place 1:",cc);ak[1]=cc;}});}
    var sq2 = (t1,t2) =>{ const sq2 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `; db.get(sq2,[t1,t2,2], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; console.log("broj_rezultat_pretrage_cc_place 2:",cc);ak[2]=cc;}});}
var      sq3 = (t1,t2) =>{ const  sq3 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `; db.get(sq3,[t1,t2,3], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; console.log("broj_rezultat_pretrage_cc_place 3:",cc);ak[3]=cc;}});}
     sq4 = (t1,t2) =>{  sq4 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `; db.get(sq4,[t1,t2,4], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; console.log("broj_rezultat_pretrage_cc_place 4:",cc);ak[4]=cc;}});}
      sq5 = (t1,t2) =>{sq5 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `; db.get(sq5,[t1,t2,5], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; console.log("broj_rezultat_pretrage_cc_place 5:",cc);ak[5]=cc;}});}
        fin_15 = () =>  {  console.log("server_fin_15",ak);}

        */
    //  const opC = () => delay(125, 'C');
//var  sq1 = () =>{ const  sq1 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `; db.get(sq1,[10,20,32], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; console.log("broj_rezultat_pretrage_cc_place 31:",cc);}});}
 //var  sq2 = () =>{const   sq2 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `; db.get(sq2,[10,20,1], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; console.log("broj_rezultat_pretrage_cc_place 32:",cc);}});}
//b15  button15*****//b15  button15*****//b15  button15*****//b15  button15*****//b15  button15*****//b15  button15*****//b15  button15*****//b15  button15*****
function n_time(a,b,c,d){
  let a_s1=String(a);

  let a_s = a_s1.replace("T", " ");
 // console.log("main_time_minus two chars:",a);
  let fin_s=''
 // console.log("main_time_minus two chars_a_s:",a_s);
  let ress = a_s.substring(0, 16);
 // console.log("main_time_minus two chars_ress:",ress);
 // document.getElementById("meeting-time1").value=ress;

  //from 
  let ress_1 = a_s.substring(11, 13);
  console.log("main_time_get hour:",ress_1,"a");
  let ress_2=Number(ress_1);
  console.log("main_time_ress_2:",ress_2);
//  let ress_3=ress_2-1;
let ress_3=ress_2-b;
//    if  (ress_3<10){let ress_4="0"}
  let prvi_deo=a_s.substring(0, 11);
  console.log("main_time_prvi_deo:",prvi_deo);
  let drugi_deo=a_s.substring(13, 16);
  //console.log("main_time_drugi_deo:",drugi_deo);
 if(ress_3>9){ let fin_s=prvi_deo+String(ress_3)+drugi_deo;
//  console.log("main_time_final:",fin_s);
  return  fin_s;}
//    let fin_s=prvi_deo+String(ress_3)+drugi_deo;
if(ress_3<10){   let fin_s=prvi_deo+"0"+String(ress_3)+drugi_deo;
//  console.log("main_time_final:",fin_s);
  return  fin_s;}
//return  fin_s;
}
function functionB(){
  sql_read("2025-04-10 16:46","2025-04-10 17:46");
}
function functionC(){
  sql_read("2025-04-10 17:46","2025-04-10 19:46"); 
}

var we=[]


async function myDisplay_1(a,b) {let myPromise = new Promise(function() {setTimeout(function()    {sql_read(a,b,1)}, 100);});}
async function myDisplay_1r() {let myPromise1 = new Promise(function() {setTimeout(function()     {o1=sql_data;io.emit('plc1',sql_data );we=sql_data}, 200);});}
async function myDisplay_2(a,b) {let myPromise2 = new Promise(function() {setTimeout(function()  {sql_read(a,b,2);}, 300);});}
  async function myDisplay_2r() {let myPromise3 = new Promise(function() {setTimeout(function()   { io.emit('plc2',sql_data ); }, 400);});}
async function myDisplay_3(a,b) { let myPromise4 = new Promise(function() {setTimeout(function() {sql_read(a,b,3);}, 500);});}
async function myDisplay_3r() {let myPromise5 = new Promise(function() {setTimeout(function()     {o3=sql_data;io.emit('plc3',sql_data ); }, 600);});}

async function myDisplay_4(a,b) { let myPromise4 = new Promise(function() {setTimeout(function() {sql_read(a,b,4);}, 700);});}
async function myDisplay_4r() {let myPromise5 = new Promise(function() {setTimeout(function()     {o3=sql_data;io.emit('plc4',sql_data ); }, 800);});}

async function myDisplay_5(a,b) { let myPromise4 = new Promise(function() {setTimeout(function() {sql_read(a,b,5);}, 900);});}
async function myDisplay_5r() {let myPromise5 = new Promise(function() {setTimeout(function()     {o3=sql_data;io.emit('plc5',sql_data ); }, 1000);});}


async function myDisplay_6(a,b) { let myPromise4 = new Promise(function() {setTimeout(function() {sql_read(a,b,6);}, 1100);});}
async function myDisplay_6r() {let myPromise5 = new Promise(function() {setTimeout(function()     {o3=sql_data;io.emit('plc6',sql_data ); }, 1200);});}


async function myDisplay_7(a,b) { let myPromise4 = new Promise(function() {setTimeout(function() {sql_read(a,b,7);}, 1300);});}
async function myDisplay_7r() {let myPromise5 = new Promise(function() {setTimeout(function()     {o3=sql_data;io.emit('plc7',sql_data ); }, 1400);});}

async function myDisplay_8(a,b) { let myPromise4 = new Promise(function() {setTimeout(function() {sql_read(a,b,8);}, 1500);});}
async function myDisplay_8r() {let myPromise5 = new Promise(function() {setTimeout(function()     {o3=sql_data;
  io.emit('plc8',sql_data ); }, 1600);});}



  async function myDisplay_end() {let myPromise6 = new Promise(function() {setTimeout(function()   {
 //   console.log("asy_f :   ",o1,o2,o3);
   // console.log("we :   ",we);
  }, 1700);});}
////kraj prva tabela
/////  druga
var we_=[]


async function myDisplay_1_(a,b) {let myPromise = new Promise(function() {setTimeout(function()    {sql_read_(a,b,1)}, 100);});}
async function myDisplay_1r_() {let myPromise1 = new Promise(function() {setTimeout(function()     {o1=sql_data;io.emit('plc1_',sql_data_ );we=sql_data}, 200);});}
async function myDisplay_2_(a,b) {let myPromise2 = new Promise(function() {setTimeout(function()  {sql_read_(a,b,2);}, 300);});}
  async function myDisplay_2r_() {let myPromise3 = new Promise(function() {setTimeout(function()   { io.emit('plc2_',sql_data_ ); }, 400);});}
async function myDisplay_3_(a,b) { let myPromise4 = new Promise(function() {setTimeout(function() {sql_read_(a,b,3);}, 500);});}
async function myDisplay_3r_() {let myPromise5 = new Promise(function() {setTimeout(function()     {o3=sql_data;io.emit('plc3_',sql_data_ ); }, 600);});}

async function myDisplay_4_(a,b) { let myPromise4 = new Promise(function() {setTimeout(function() {sql_read_(a,b,4);}, 700);});}
async function myDisplay_4r_() {let myPromise5 = new Promise(function() {setTimeout(function()     {o3=sql_data;io.emit('plc4_',sql_data_ ); }, 800);});}

async function myDisplay_5_(a,b) { let myPromise4 = new Promise(function() {setTimeout(function() {sql_read_(a,b,5);}, 900);});}
async function myDisplay_5r_() {let myPromise5 = new Promise(function() {setTimeout(function()     {o3=sql_data;io.emit('plc5_',sql_data_ ); }, 1000);});}


async function myDisplay_6_(a,b) { let myPromise4 = new Promise(function() {setTimeout(function() {sql_read_(a,b,6);}, 1100);});}
async function myDisplay_6r_() {let myPromise5 = new Promise(function() {setTimeout(function()     {o3=sql_data_;io.emit('plc6_',sql_data_ ); }, 1200);});}


async function myDisplay_7_(a,b) { let myPromise4 = new Promise(function() {setTimeout(function() {sql_read_(a,b,7);}, 1300);});}
async function myDisplay_7r_() {let myPromise5 = new Promise(function() {setTimeout(function()     {o3=sql_data_;io.emit('plc7_',sql_data_ ); }, 1400);});}

async function myDisplay_8_(a,b) { let myPromise4 = new Promise(function() {setTimeout(function() {sql_read_(a,b,8);}, 1500);});}
async function myDisplay_8r_() {let myPromise5 = new Promise(function() {setTimeout(function()     {o3=sql_data_;
  io.emit('plc8_',sql_data_ ); }, 1600);});}



  async function myDisplay_end_() {let myPromise6 = new Promise(function() {setTimeout(function()   {
 //   console.log("asy_f :   ",o1,o2,o3);
   // console.log("we :   ",we);
  }, 1700);});}
////kraj druga tabela
function tab_cr(f,t){
  console.log("server_tab_create,f,t",f,t)
    let t1_f=n_time(t,1,3,4) //(aktuelno_vreme, umanjilac,3,3)
    console.log("server_15_tab-cr_return_t4_f",t1_f)
    let t1_t=n_time(t,0,3,4)
    console.log("server_15_return_t4_t",t1_t)
   // let t2_f =n_time(t,2,3,4)
  //  console.log("server_15_return_t5_f",t2_f)
/// prvi sat   prvi zahtev
  setTimeout(() => {
 //   console.log("Delayed  1 ");

  
  //  sql_read(t1_f,t1_t,1); //
  // sql_read("2025-04-10 16:46","2025-04-10 17:46");

  }, "300");
//   drugi sat
  setTimeout(() => {
    console.log("Delayed  2 .");
    tab_data[1]=sql_data;


   

    //  tab_data[[0]]=sql_data;
    }, "300");
    setTimeout(() => {
      let t2_f=n_time(t,2,3,4)
      let t2_t=n_time(t,1,3,4)
    //  sql_read(t2_f,t2_t,2);
    }, "300"); 
  setTimeout(() => {  
    let t2_f=n_time(t,2,3,4)
    let t2_t=n_time(t,1,3,4)
 //  sql_read(t2_f,t2_t,2);
  //  console.log("Delayed 3.");
    tab_data[2]=sql_data;
  //  console.log("server_15_drugi interval,sql_data",sql_data)
   // io.emit('plc', "tab_data");
   
   
  //  console.log("server_15_tab_data[1]",tab_data[1])
 //   io.emit('plc', tab_data);


  }, "300"); 

  console.log("server_15_tab_data",tab_data)

//   console.log("server_15_return_sql_read",rr)

}
setInterval( function() {
  //   conn1.readAllItems(valuesReady1);
  //   conn2.readAllItems(valuesReady2);
  //console.clear();
    }, 5000);

app.post('/b15',(req,res) => {


 // istEntities()
              let msg = req.body.msg;
              let t1=msg[0];
              
              let t2=msg[1];
              myDisplay_1(n_time(t2,1),n_time(t2,0));
              myDisplay_1r(
                
              );
              myDisplay_2(n_time(t2,2),n_time(t2,1));
              myDisplay_2r();
              myDisplay_3(n_time(t2,3),n_time(t2,2));
              myDisplay_3r();
              myDisplay_4(n_time(t2,4),n_time(t2,3));
              myDisplay_4r();
              myDisplay_5(n_time(t2,5),n_time(t2,4));
              myDisplay_5r();
              myDisplay_6(n_time(t2,6),n_time(t2,5));
              myDisplay_6r();
              myDisplay_7(n_time(t2,7),n_time(t2,6));
              myDisplay_7r();
              myDisplay_8(n_time(t2,8),n_time(t2,7));
              myDisplay_8r();
              myDisplay_end();
           //   tab_cr(t1,t2);
            
let a=[777];
              console.log("server_time_15",msg);
              console.log("/b15");

  for (let i = 0; i < 5; i++) {}
 


           
              res.send("Sve ok");
           
                      })

app.post('/b15_',(req,res) => {


                        // istEntities()
                                     let msg = req.body.msg;
                                     let t1=msg[0];
                                     
                                     let t2=msg[1];
                                     myDisplay_1_(n_time(t2,1),n_time(t2,0));
                                     myDisplay_1r_(
                                       
                                     );
                                     myDisplay_2_(n_time(t2,2),n_time(t2,1));
                                     myDisplay_2r_();
                                     myDisplay_3_(n_time(t2,3),n_time(t2,2));
                                     myDisplay_3r_();
                                     myDisplay_4_(n_time(t2,4),n_time(t2,3));
                                     myDisplay_4r_();
                                     myDisplay_5_(n_time(t2,5),n_time(t2,4));
                                     myDisplay_5r_();
                                     myDisplay_6_(n_time(t2,6),n_time(t2,5));
                                     myDisplay_6r_();
                                     myDisplay_7_(n_time(t2,7),n_time(t2,6));
                                     myDisplay_7r_();
                                     myDisplay_8_(n_time(t2,8),n_time(t2,7));
                                     myDisplay_8r_();
                                     myDisplay_end_();
                                  //   tab_cr(t1,t2);
                                   
                       let a=[777];
                                     console.log("server_time_15",msg);
                                     console.log("/b15");
                       
                         for (let i = 0; i < 5; i++) {}
                        
                       
                       
                                  
                                     res.send("Sve ok");
                                  
                                             })

 
app.post('/b16',(req,res) => {

               let msg = req.body.msg;
               let t1=msg[0];
               console.log("log : ",log);
               console.log("/b16"); 
 log=1;          
               res.send("Sve ok");
            
                       })
app.post('/b17',(req,res) => {

                        let msg = req.body.msg;
                        let t1=msg[0];
                        console.log("log : ",log);
                        console.log("/b16"); 
          log=0;          
                        res.send("Sve ok");
                     
                                })
         
                                 


    //  prevent consoling                  
 // console.log = function () {};                      
            