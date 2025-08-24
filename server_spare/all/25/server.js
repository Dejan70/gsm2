const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./zf.db', (err) => {
  if (err) { console.error(err.message); }
  console.log('Connected to the zf.db database.');});
/////s7 comm ini
var gl_from="";
var gl_to="";
;var nodes7 = require('nodes7'); // This is the package name, if the repository is cloned you may need to require 'nodeS7' with uppercase S
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
    //  console.log("1500:",values);
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

//////pretraga po datumu start------------------------------------
app.post('/b4',(req,res) => { //*******************write */   button Get Data1
  console.log("bb14");  
  let msg = req.body.msg;   
  console.log ("server_msg_/b4:",msg);    
  try {
    //  proba citanja iy tabele

    let cc=0;
    let length_1 =0;

  //  let ti1='2024-12-2T10:12';
  ///  let ti2='2029-12-2T20:15';

   let ti1=msg[0];
   let ti2=msg[1];

/////  get from sql
// first get row number
//let sql = `SELECT * FROM ping where nr=55`;
console.log("cc_1",cc);
//let sql = `SELECT COUNT(*) FROM users WHERE nr = 1`;  //SELECT COUNT(*) FROM tracks WHERE albumid = 10;
//let sql = `SELECT COUNT(*) FROM users WHERE nr = 1`; 
//let sql = `SELECT COUNT(*) FROM ping WHERE tmst > ' 2024-12-2'`; 
//let sql = `SELECT COUNT(*) FROM ping WHERE tmst > ? AND tmst <?`;  //ovo je bilo
//let sql = `SELECT COUNT(*) FROM ping WHERE tmst BETWEEN ? AND ?`;///   BILO ZADNJE
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
 //function vrati(a) ;
 // console.log("server_sql_read1_b_return",ret);
  //return 333;
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

/* let sql_data=[777,0,0,0,0,0,0,0,0,0,0,
                  0,0,0,0,0,0,0,0,0,0,
                  0,0,0,0,0,0,0,0,0,0,
                  0,0,0,0,0,0];
                  */

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

 let sql_data={1:0,2:2,3:"0",4:"0",5:"0",6:"0",7:"0",8:"0",9:"0",10:"0",
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
db.get(sql36,[a,b,36], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; console.log("broj_rezultat_pretrage_cc_place 36:",cc);sql_data[36]=cc;sql_data[37]=a;sql_data[38]=b;sql_data[39]=m;
  setTimeout(() => {
    console.log("server_sql_read > sql_data ",JSON.stringify(sql_data));
   // asy[indx]=sql_data;
    console.log("server_sql_read > indx",indx);
  }, "100");
}});
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

//return data;
}



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
  let msg = req.body.msg;
  console.log("server_5:",msg);
  let resl={"from":" ","to":" " ,"place":" ","res":" " }
  let ti1=msg[0];
  let ti2=msg[1];
  let ti3=msg[2];
  let ret=100;
  let r=[];
let t1_s= ti1.replace("T", " ");
let t2_s= ti2.replace("T", " ");

// console.log("server4_1");
 //sql_read(ti1,ti2);
 //let dat=sql_read1(t1_s,t2_s,ti3);
 //console.log("server_b4_1_dat",String(dat));
 //console.log("from_b5:  ",sql_read1(t1_s,t2_s,ti3));
  console.log("butt5");
  console.log("server_butt_5_msg",msg);
  let sql1 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
  db.get(sql1,[ti1,ti2,ti3], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0];ret=cc; console.log("broj_rezultat_pretrage_cc_place 1:",`${ti3}`,"*",cc);    console.log("server_sql_read1_ret ",ret);
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
/*
r[0]=[ti1];
r[1]=[ti2];
r[2]=[ret];
*/
 // console.log("server >> r[0]: ",r[0],"r[1]: ",r[1],"r[2]: ",r[2],)
  //////////start
 
  ///////////end
 // res.send("Sve ok1_b5");
 // res.send("Sve ok1_b5");
          })



             setInterval( function() {
           //   conn1.readAllItems(valuesReady1);
           //   conn2.readAllItems(valuesReady2);

             }, 1000);
 setInterval( function() {
              //   conn1.readAllItems(valuesReady1);
              //   conn2.readAllItems(valuesReady2);
          //    conn1.readAllItems(valuesReady1); //  !!!!!!!!!!!!!!!!!!!!  glavno
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
  async function listEntities() {

  }
  const listResults = [sq1,sq2,sq3];
 //for await (const product of listResults) {
 //   console.log("1: ",`${product.name}: ${product.price}`);

     console.log(`${sq1}`,`${sq2}`);
   
  }


  //////
  function fn1( rule ) {

    //The rules here
   // if( rule == 'right' ) return true;
 //   return false;
    
  }
  
  function fn2() {
    if( fn1('right') ) {
       // fn2 codes here
       console.log('fn1, right');
       sq1 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `; db.get(sq1,[t1,t2,1], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; console.log("broj_rezultat_pretrage_cc_place 1:",cc);ak[1]=cc;return cc}});

    }
  }
  
  console.log("server_fn2",fn2());
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
 // console.log("main_time_get hour:",ress_1,"a");
  let ress_2=Number(ress_1);
 // console.log("main_time_ress_2:",ress_2);
//  let ress_3=ress_2-1;
let ress_3=ress_2-b;
//    if  (ress_3<10){let ress_4="0"}
  let prvi_deo=a_s.substring(0, 11);
  //console.log("main_time_prvi_deo:",prvi_deo);
  let drugi_deo=a_s.substring(13, 16);
  //console.log("main_time_drugi_deo:",drugi_deo);
 if(ress_3>10){ let fin_s=prvi_deo+String(ress_3)+drugi_deo;
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




async function myDisplay(a,b) {let myPromise = new Promise(function() {
  setTimeout(function() {sql_read(a,b)}, 2200);
  //  setTimeout(function() {sql_read("2025-04-10 16:46","2025-04-10 17:46",1,1,2)}, 2200);
  });}
  async function myDisplay1() {let myPromise1 = new Promise(function() {
    setTimeout(function() {
     // asy[1]=sql_data
      o1=sql_data
   //   tab1=sql_data;
      console.log("asy 1: ",sql_data)
      io.emit('plc1',sql_data );
      // tab[1]=sql_data;
       //tab.push(sql_data);
      }, 2500);
  });}
async function myDisplay2(a,b) {let myPromise2 = new Promise(function() {
    setTimeout(function() {sql_read(a,b);}, 2800);
  });}
  async function myDisplay3() {let myPromise3 = new Promise(function() {
    setTimeout(function() {    console.log("asy 2: ",sql_data); io.emit('plc2',sql_data ); }, 3220);
  });}
async function myDisplay4(a,b) { let myPromise4 = new Promise(function() {
    setTimeout(function() {sql_read(a,b);}, 3850);
  });}
  async function myDisplay5() {let myPromise5 = new Promise(function() {
    setTimeout(function() { 
     o3=sql_data;
      
      console.log("asy 3: ",sql_data)
      io.emit('plc3',sql_data );
    }, 4280);
      
  });}
  async function myDisplay6() {let myPromise6 = new Promise(function() {
    setTimeout(function() { console.log("asy_f :   ",o1,o2,o3);}, 6010);
  });}
myDisplay();
myDisplay1();
myDisplay2();
myDisplay3();
myDisplay4();
myDisplay5();
myDisplay6();



//console.log('Hello');

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
  setTimeout(() => {  
  }, "300");  
  console.log("server_15_tab_data",tab_data)
 
   

//   console.log("server_15_return_sql_read",rr)
 
  

  


}

app.post('/b15',(req,res) => {


 // istEntities()
              let msg = req.body.msg;
              let t1=msg[0];
              
              let t2=msg[1];
              myDisplay(n_time(t2,1),n_time(t2,0));
              myDisplay1(
                
              );
              myDisplay2(n_time(t2,2),n_time(t2,1));
              myDisplay3();
              myDisplay4(n_time(t2,3),n_time(t2,2));
              myDisplay5();
              myDisplay6();
              tab_cr(t1,t2);
            




let a=[777];
              console.log("server_time_15",msg);
              console.log("/b15");

        //      var   sq1 = () =>{ const sq1 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `; db.get(sq1,[t1,t2,1], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; console.log("broj_rezultat_pretrage_cc_place 1:",cc);a[1]=cc;}});}
         //     var sq2 = () =>{ const sq2 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `; db.get(sq2,[t1,t2,2], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; console.log("broj_rezultat_pretrage_cc_place 2:",cc);a[2]=cc;}});}
      //    var      sq3 = () =>{ const  sq3 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `; db.get(sq3,[t1,t2,3], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; console.log("broj_rezultat_pretrage_cc_place 3:",cc);a[3]=cc;console.log(a);}});}
      //    var  fin_15 = () =>    const a
          
             // const  fin_15 = () =>  {  console.log("server_fin_15",a);}
      // console.log(sq1,sq2,sq3)
        //   const sum = x => y => z => x + y + z;
       //    console.log(sum(1)(5)(6));

    //   const sum = sq1 => sq2 => sq3 => [sq1 , sq2,sq3]
          

/*
              const delay = (ms, value) => new Promise(resolve => 
                setTimeout(() => resolve(value), ms)
            );
            
            const output = console.log;
            const error = console.error;
            const opA = () => delay(500, 'A');
            const opB = () => delay(250, 'B');
            const opC = () => delay(125, 'C');
            */
           

/*
              doSomething().then((result) => doSomethingElse(result))
              .then((newResult) => doThirdThing(newResult))
              .then((finalResult) => {
                console.log(`Got the final result: ${finalResult}`);
              })
              .catch(failureCallback);
              */
///for sqlite
//   for (let i = 0; i < cars.length; i++) {
  for (let i = 0; i < 5; i++) {}
 // text += cars[i] + "<br>";

//let sql32 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
//db.get(sql32,[a,b,32], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; console.log("broj_rezultat_pretrage_cc_place 32:",cc);}});
//let sql32 = `SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=? `;
//db.get(sql32,[a,b,32], (err, row) => {if(typeof row !== "undefined"){let cc=Object.values(row)[0]; console.log("broj_rezultat_pretrage_cc_place 32:",cc);}});



//for sqlite end

              //////////start
            //  let m= time();
              res.send("Sve ok");
              ///////////end
             // res.send("Sve ok1_b4");
                      })
            