

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./zf.db', (err) => {
  if (err) { console.error(err.message); }
  console.log('Connected to the zf.db database.');});
/////s7 comm inivaluesWritten1.10
var gl_from="";
var gl_to="";
var nodes7 = require('nodes7'); // This is the package name, if the repository is cloned you may need to require 'nodeS7' with uppercase S
var  random=0;
///PRVI PLC START   11111111111111111111111111111111111111111111111111111111111
var conn1 = new nodes7;
var doneReading1 = false;
var doneWriting1 = false;
var log=0;
console.log = function() {}  //  io.emit('cons', "/////////////////////////////b5");  io.emit('cons', var); 
var variables1 = {


//P1: 'DB28,X0.0', 
P1: 'DB28,DINT0', 
P2: 'DB28,Dint4',
P3: 'DB28,Dint8',
P4: 'DB28,Dint12',
P5: 'DB28,Dint16',
P6: 'DB28,Dint20',
P7: 'DB28,dint24',
P8: 'DB28,dint28',
P9: 'DB28,dint32',
P10: 'DB28,dint36',
P11: 'DB28,dint40',
P12: 'DB28,dint44',
P13: 'DB28,dint48',
P14: 'DB28,dint52',
P15: 'DB28,dint56',
P16: 'DB28,dint60',
P17: 'DB28,dint64',
P18: 'DB28,dint68',
P19: 'DB28,dint72',
P20: 'DB28,dint76',
P21: 'DB28,dint80',
P22: 'DB28,dint84',
P23: 'DB28,dint88',
P24: 'DB28,dint92',
P25: 'DB28,dint96',
P26: 'DB28,dint100',
P27: 'DB28,dint104',
P28: 'DB28,dint108',
P29: 'DB28,dint112',
P30: 'DB28,dint116',
P31: 'DB28,dint120',
P32:'DB28,dint124',
P33: 'DB28,dint128',
P34: 'DB28,dint132',
P35: 'DB28,dint136',
P36: 'DB28,dint140',
P_trig: 'DB28,dint144',

P1_c: 'DB28,DINT200', 
P2_c: 'DB28,Dint204',
P3_c: 'DB28,Dint208',
P4_c: 'DB28,Dint212',
P5_c: 'DB28,Dint216',
P6_c: 'DB28,Dint220',
P7_c: 'DB28,dint224',
P8_c: 'DB28,dint228',
P9_c: 'DB28,dint232',
P10_c: 'DB28,dint236',
P11_c: 'DB28,dint240',
P12_c: 'DB28,dint244',
P13_c: 'DB28,dint248',
P14_c: 'DB28,dint252',
P15_c: 'DB28,dint256',
P16_c: 'DB28,dint260',
P17_c: 'DB28,dint264',
P18_c: 'DB28,dint268',
P19_c: 'DB28,dint272',
P20_c: 'DB28,dint276',
P21_c: 'DB28,dint280',
P22_c: 'DB28,dint284',
P23_c: 'DB28,dint288',
P24_c: 'DB28,dint292',
P25_c: 'DB28,dint296',
P26_c: 'DB28,dint300',
P27_c: 'DB28,dint304',
P28_c: 'DB28,dint308',
P29_c: 'DB28,dint312',
P30_c: 'DB28,dint316',
P31_c: 'DB28,dint320',
P32_c: 'DB28,dint324',
P33_c: 'DB28,dint328',
P34_c: 'DB28,dint332',
P35_c: 'DB28,dint336',
P36_c: 'DB28,dint340',
 
 
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
    
      conn1.addItems(['P1','P2',
   'P3','P4','P5','P6','P7','P8','P9','P10',
       
        'P11', 'P12','P13','P14','P15','P16', 'P17','P18','P19','P20',
        'P21', 'P22','P23','P24','P25','P26','P27','P28','P29','P30','P31', 'P32','P33','P34','P35','P36','P_trig',
       'P1_c','P2_c','P3_c','P4_c','P5_c','P6_c','P7_c','P8_c','P9_c','P10_c',
       
       'P11_c', 'P12_c','P13_c','P14_c','P15_c','P16_c', 'P17_c','P18_c','P19_c','P20_c'/*

       , 'P21_c', 'P22_c','P23_c','P24_c','P25_c','P26_c','P27_c','P28_c','P29_c','P30_c','P31_c', 'P32_c','P33_c','P34_c','P35_c','P36_c' 
        */
      ]);//,'P31', 'P32','P33','P34','P35','P36'
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
      async   function valuesReady3(anythingBad, values) {  //b202
      if (anythingBad) {
       //  console.log("SOMETHING WENT WRONG READING VALUES!!!!"); 
        }

let ge=100;
let m=200;
        //   sql  start
// db.run('INSERT INTO ajvar_ (place, tmst) VALUES(?,?)', [ge,m], (err) => {
 // db.run('INSERT INTO data1 (time, pl2) VALUES(?,?)', [ge,m], (err) => {
 //  db.run('INSERT INTO data1 (time, pl1,pl2,pl3,pl4,pl5,pl6,pl7,pl8,pl9,pl10,pl11,pl12,pl13,pl14,pl15,pl16,pl17,pl18,pl19,pl20,pl21,pl22,pl23,pl24,pl25,pl26,pl27,pl28,pl29,pl30,pl31,pl32,pl33,pl34,pl35,pl36) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [time(),values.P1,values.P2], (err) => {
 // if(values.P_trig ==1 ){
 
  db.run('INSERT INTO data1 (time, pl1,pl2,pl3,pl4,pl5,pl6,pl7,pl8,pl9,pl10, pl11,pl12,pl13,pl14,pl15,pl16,pl17,pl18,pl19,pl20,  pl21,pl22,pl23,pl24,pl25,pl26,pl27,pl28,pl29,pl30,pl31,pl32,pl33,pl34,pl35,pl36) VALUES(?, ?,?,?,?,?,?,?,?,?,?, ?,?,?,?,?,?,?,?,?,?, ?,?,?,?,?,?,?,?,?,?, ?,?,?,?,?,?)', [time(),values.P1,values.P2,values.P3,values.P4,values.P5,values.P6,values.P7,values.P8,values.P9,values.P10,values.P11,values.P12,values.P13,values.P14,values.P15,values.P16,values.P17,values.P18,values.P19,values.P20,values.P21,values.P22,values.P23,values.P24,values.P25,values.P26,values.P27,values.P28,values.P29,values.P30,values.P31,values.P32,values.P33,values.P34,values.P35,values.P36], (err) => {

  if(err) {return console.log(err.message); }
console.log('upisao');sql_done()
io.emit('cons','frUpisao u bazu  '); 
})
// }

 function sql_done(){
 
 
  conn1.writeItems('P_trig', [false], valuesWritten1); 
 }


        //   sql  end
      //  return 100;
    //  console.log("1500:",values);
   // io.emit('cons', JSON.stringify(values)); 
   //    io.emit('cons', values); 
    //  console.log("1500_P1: ",values.P1);
     //  io.emit('cons','from v_ready::  '+ values.P1); 
// io.emit('cons','from v_valuesReady3:  '+ values.P2); 
io.emit('cons','from v_valuesReady3:  '+ values.P_trig); 
      }
 function get_last(){//203
  //db.get('SELECT * FROM users WHERE user = ?',(slug), (err, row)=>{
    //select * from my_table order by rowid desc LIMIT 1
    db.get('SELECT * FROM data1 order by id desc LIMIT 1', (err, row)=>{
            if (err)
                reject(err)
               conn1.writeItems(['P1_c', 'P2_c','P3_c', 'P4_c','P5_c', 'P6_c','P7_c', 'P8_c','P9_c', 'P10_c','P11_c', 'P12_c','P13_c', 'P14_c','P15_c', 'P16_c','P17_c', 'P18_c','P19_c', 'P20_c','P21_c', 'P22_c','P23_c', 'P24_c','P25_c', 'P26_c','P27_c', 'P28_c','P29_c', 'P30_c','P31_c', 'P32_c','P33_c', 'P34_c','P35_c', 'P36_c'], [ row.pl1,row.pl2,row.pl3,row.pl4,row.pl5,row.pl6,row.pl7,row.pl8,row.pl9,row.pl10,row.pl11,row.pl12,row.pl13,row.pl14,row.pl15,row.pl16,row.pl17,row.pl18,row.pl19,row.pl20,row.pl21,row.pl22,row.pl23,row.pl24,row.pl25,row.pl26,row.pl27,row.pl28,row.pl29,row.pl30, row.pl31,row.pl32,row.pl33,row.pl34,row.pl35,row.pl36], valuesWritten1);
 //  conn1.writeItems(['P1_c', 'P1_c'], [ row.P1, row.P2 ], valuesWritten1);
        console.log ("from get data:_1:",row);
        io.emit('cons',"get_last :  "+JSON.stringify(row)); 
        if (typeof row !== 'undefined' && row !== null) {
          
      //  resolve(row.password)
        }
          })

 };

 
    async   function valuesReady1(anythingBad, values) {
      if (anythingBad) {
       //  console.log("SOMETHING WENT WRONG READING VALUES!!!!"); 
        }
     //   return 100;
    //  console.log("1500:",values);
   // io.emit('cons', JSON.stringify(values)); 
   //    io.emit('cons', values); 
    //  console.log("1500_P1: ",values.P1);
       io.emit('cons','from v_valuesReady1y::  '+ values.P1); 
 io.emit('cons','from v_ready::  '+ values.P1); 
   //   if(values.P1==false){ io.emit('conn_1500');}
    //  if(values.P1!= false){ io.emit('conn_1500b');}
      let smt=false;
      let  arr=[];
      /*
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
    */
   //   if(values.P1==true){ conn1.writeItems(['P1','P2','P3','P4','P5'], [false], valuesWritten1);  }/*
 //  if(values.P1==true){ conn1.writeItems(['P1','P2'], [false,false], valuesWritten1);  }
   //  conn1.writeItems(['P1','P2'], [false,false], valuesWritten1);
   setTimeout(() => {
 //   io.emit('colo', colo); 
    colo=[0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0
    
    ];  
   
  }, "100");



if(  log==0){
  /*
     conn1.writeItems(['P1','P2','P3', 'P4','P5','P6','P7','P8','P9','P10',
                     'P11', 'P12','P13','P14','P15','P16', 'P17','P18','P19','P20',
                      'P21', 'P22','P23','P24','P25','P26','P27','P28','P29','P30',
                      'P31', 'P32','P33','P34','P35','P36'], [false,false,false,false,false,false,false,false,false,false,
                                                              false,false,false,false,false,false,false,false,false,false, 
                                                              false,false,false,false,false,false,false,false,false,false, 
                                                              false,false,false,false,false,false  ], valuesWritten1);

*/
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
  
   return 777;
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


const port = 1880
;
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
 
//    cut start 
  res.sendFile(path.join(__dirname,'./index_1.html')); //   !!!!!


//res.sendFile(path.join(__dirname,'./Ceodiv.html'));
//res.sendFile(path.join(__dirname,'./public/index_1.html'));
//    cut start
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
  io.emit('cons', "/////////////////////////////b5"); 
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
async function  red(){
  io.emit('cons', 'red()'); 
//  conn1.readAllItems(valuesReady1);

  //let a= JSON.stringify(conn1.readAllItems(valuesReady1));
  let a= await(conn1.readAllItems(valuesReady1));
 // let a= 333
    io.emit('cons',"reda: "+a); 
}
  ///  b201
  app.post('/b201',(req,res) => {
    let msg = req.body.msg;
 //   console.log("time_onload_msg",msg);
  //  console.log("/b9");
conn1.readAllItems(valuesReady1)

    io.emit('cons', '/b201'); 
    //////////start
  //  let m= time();
 // let m= time();
  res.send("server_b201");
   // res.send("fun2()");
    ///////////end
   // res.send("Sve ok1_b4");
            })

  ///   b201


   ///  b202
   app.post('/b202',async (req,res) => {
 //  a=(conn1.readAllItems(valuesReady1));
  //  io.emit('cons','a:', (conn1.readAllItems(valuesReady1))); 
    // conn1.readAllItems(valuesReady1);
conn1.readAllItems(valuesReady3);
 //await red();
// red();
  //  let msg = req.body.msg;
 //   console.log("time_onload_msg",msg);
  //  console.log("/b9");
    io.emit('cons', '/b202'); 
    //////////start
  //  let m= time();
 // let m= time();
  res.send("server_b202");
   // res.send("fun2()");
    ///////////end
   // res.send("Sve ok1_b4");
            })


 ///  b201
 app.post('/b203',(req,res) => {
 // let msg = req.body.msg;
//   console.log("time_onload_msg",msg);
//  console.log("/b9");
get_last();
  io.emit('cons', '/b203'); 
  //////////start
//  let m= time();
// let m= time();
res.send("server_b203");
 // res.send("fun2()");
  ///////////end
 // res.send("Sve ok1_b4");
          })

///   b201
 ///  b202
 app.post('/b204',(req,res) => {
  let msg = req.body.msg;
//   console.log("time_onload_msg",msg);
//  console.log("/b9");
  io.emit('cons', '/b204'); 
  //////////start
//  let m= time();
// let m= time();
//   proba file  send
//  res.sendFile(path.join(__dirname,'./index_1.html')); //   !!!!!


//res.sendFile(path.join(__dirname,'./Ceodiv.html'));
//res.sendFile(path.join(__dirname,'./public/index_1.html'));
//    cut start
            
 // res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align ='center'><a href='./login.html'>login again</a></div>");


//  proba file send


res.send("server_b204");  //  ovo je bilo
 // res.send("fun2()");
  ///////////end
 // res.send("Sve ok1_b4");
          })
 ///  b205
 app.post('/b205',(req,res) => {
  let msg = req.body.msg;
//   console.log("time_onload_msg",msg);
//  console.log("/b9");
  io.emit('cons', '/b205'); 
  //////////start
//  let m= time();
// let m= time();
//   proba file  send
//  res.sendFile(path.join(__dirname,'./index_1.html')); //   !!!!!


//res.sendFile(path.join(__dirname,'./Ceodiv.html'));
//res.sendFile(path.join(__dirname,'./public/index_1.html'));
//    cut start
            
 // res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align ='center'><a href='./login.html'>login again</a></div>");


//  proba file send


res.send("server_b205");  //  ovo je bilo
 // res.send("fun2()");
  ///////////end
 // res.send("Sve ok1_b4");
          })



          



app.post('/fun2',(req,res) => {
    let msg = req.body.msg;
 //   console.log("time_onload_msg",msg);
  //  console.log("/b9");
  //  io.emit('cons', '/function2()'); 
    //////////start
  //  let m= time();
  let m= time();
  res.send(m);
   // res.send("fun2()");
    ///////////end
   // res.send("Sve ok1_b4");
            })
  
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

           //    let msg = req.body.msg;
            //   let t1=msg[0];
          //     console.log("log : ",log);
            //   console.log("/b16"); 
 //log=1;          
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

////   querry  tab 1
const getData_3 = (t1,t2,place)=>{
 // io.emit('cons',"getData_3:"+t1+t2+place ); 
  return new Promise((resolve, reject)=>{
  db.serialize(()=>{
     // db.get('SELECT * FROM blog WHERE slug = ?',slug, (err, rows)=>{
  //   db.get('SELECT COUNT(*) FROM ping WHERE nr = ?',[slug], (err, rows)=>{
  //  db.get('SELECT COUNT(*) FROM ajvar WHERE place = ?',[slug], (err, rows)=>{//
      db.get('SELECT COUNT(*) FROM ajvar WHERE(tmst BETWEEN ? AND ?) AND place=?',[t1,t2,place], (err, rows)=>{ 
  //  db.get('SELECT COUNT(*) FROM ajvar WHERE tmst BETWEEN ? AND ? AND place=?',[t1,t2,place], (err, rows)=>{ 
   //   db.get('SELECT COUNT(*) FROM ajvar WHERE place = 1  AND tmst >"" ', (err, rows)=>{ 
      if (err)
              reject(err)
        //  resolve(rows)
     //   io.emit('cons',"row:"+JSON.stringify(rows['COUNT(*)'])  ); 
       resolve(rows['COUNT(*)'])
    //  resolve(rows)
        })
  });
  })
}


//TABELA 1
app.post('/b200',async (req,res) => {
  let msg = req.body.msg;
  let first_hour= n_time(msg,0)

 let vv=(")/b200_msg"+first_hour ) 


  io.emit('cons',vv  ); 

/*   //   ovo radi

for (let i = 0; i < 38; i++) {eme(i);}
for (let i = 0; i < 38; i++) {eme(i);}
*/
//for (let i = 0; i < 38; i++) {eme(i);}
let tt0= n_time(msg,0) 
io.emit('cons',"tt0:"+tt0  );  
let tt1= n_time(msg,1) 
io.emit('cons',"tt1:"+tt1 ); 
let tt2= n_time(msg,2) 
io.emit('cons',"tt2:"+tt2 ); 
let tt3= n_time(msg,3) 
io.emit('cons',"tt3:"+tt3 ); 
let tt4= n_time(msg,4) 
io.emit('cons',"tt3:"+tt4 ); 
let tt5= n_time(msg,5) 
io.emit('cons',"tt3:"+tt5 ); 
let tt6= n_time(msg,6) 
io.emit('cons',"tt3:"+tt6 ); 
let tt7= n_time(msg,7) 
io.emit('cons',"tt3:"+tt7 );
let tt8= n_time(msg,8) 
io.emit('cons',"tt8:"+tt8 );




let m1='2024-05-01 07:10'
let m2='2025-05-01 06:10'
let m3='2025-05-01 07:10'
/*
  const x =await getData_3(m1,tt2,1)
io.emit('cons',"x:"+JSON.stringify(x)  );  

*/
//for (let i = 0; i < 38; i++) {eme(i);}

/*   //    okokokokokokokokokokoko
tre=await getData_3(tt1,tt0,1);
  io.emit('cons',"tre: "+tre );
  */

a1=[777,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
a2=[777,1]
a3=[777,1,2,3]
a4=[777,1,2,3]
a5=[777,1,2,3]
a6=[777,1]
a7=[777,1]
a8=[777,1]

for (let i = 0; i < 38; i++) { a1[i] =await getData_3(tt1,tt0,i);
  if(i==37){a1[38] =tt1;a1[39] =tt0;io.emit('cons',"a1=[]:"+a1 );}
}
for (let i = 0; i < 38; i++) { a2[i] =await getData_3(tt2,tt1,i);
  if(i==37){a2[38] =tt2;a2[39] =tt1;io.emit('cons',"a2=[]:"+a2 );}
}
for (let i = 0; i < 38; i++) { a3[i] =await getData_3(tt3,tt2,i);
  if(i==37){a3[38] =tt3;a3[39] =tt2;io.emit('cons',"a3=[]:"+a3 );}
}
for (let i = 0; i < 38; i++) { a4[i] =await getData_3(tt4,tt3,i);
  if(i==37){a4[38] =tt4;a4[39] =tt3;io.emit('cons',"a4=[]:"+a4 );}
}
for (let i = 0; i < 38; i++) { a5[i] =await getData_3(tt5,tt4,i);
  if(i==37){a5[38] =tt5;a5[39] =tt4;io.emit('cons',"a5=[]:"+a5 );}
}
for (let i = 0; i < 38; i++) { a6[i] =await getData_3(tt6,tt5,i);
  if(i==37){a6[38] =tt6;a6[39] =tt5;io.emit('cons',"a6=[]:"+a6 );}
}
for (let i = 0; i < 38; i++) { a7[i] =await getData_3(tt7,tt6,i);
  if(i==37){a7[38] =tt7;a7[39] =tt6;io.emit('cons',"a7=[]:"+a7 );}
}
for (let i = 0; i < 38; i++) { a8[i] =await getData_3(tt8,tt7,i);
  if(i==37){a8[38] =tt8;a8[39] =tt7;io.emit('cons',"a8=[]:"+a8 );}
}
/*
/*
for (let i = 0; i < 38; i++) { a1[i] =await getData_3(m1,tt2,i);
  if(i==37){io.emit('cons',"a1=[]:"+a1 ); }
}
for (let i = 0; i < 38; i++) { a2[i] =await getData_3(m2,tt2,i);
  if(i==37){io.emit('cons',"a2=[]:"+a2 ); }
}
*/

                               //   let msg = req.body.msg;
                               //   let t1=msg[0];
                              //    console.log("log : ",log);
                               //   console.log("/b16"); 
                  //  log=0;  
               io.emit('cons',"/b200"   );        
                               //   res.send(await(a1));
      af= [a1,a2,a3,a4,a5,a6,a7,a8 ]
    //  res.send(await (a1 + a2));
    res.send(await af)
 // res.send("hello")
                               
                                          }) ;  
 //TABELA 1 END
 ////   querry  tab 1
const getData_3_ = (t1,t2,place)=>{
  // io.emit('cons',"getData_3:"+t1+t2+place ); 
   return new Promise((resolve, reject)=>{
   db.serialize(()=>{
      // db.get('SELECT * FROM blog WHERE slug = ?',slug, (err, rows)=>{
   //   db.get('SELECT COUNT(*) FROM ping WHERE nr = ?',[slug], (err, rows)=>{
   //  db.get('SELECT COUNT(*) FROM ajvar WHERE place = ?',[slug], (err, rows)=>{//
       db.get('SELECT COUNT(*) FROM ajvar_ WHERE(tmst BETWEEN ? AND ?) AND place=?',[t1,t2,place], (err, rows)=>{ 
   //  db.get('SELECT COUNT(*) FROM ajvar WHERE tmst BETWEEN ? AND ? AND place=?',[t1,t2,place], (err, rows)=>{ 
    //   db.get('SELECT COUNT(*) FROM ajvar WHERE place = 1  AND tmst >"" ', (err, rows)=>{ 
       if (err)
               reject(err)
         //  resolve(rows)
      //   io.emit('cons',"row:"+JSON.stringify(rows['COUNT(*)'])  ); 
        resolve(rows['COUNT(*)'])
     //  resolve(rows)
         })
   });
   })
 }
//TABELA 2
app.post('/b200_',async (req,res) => {
  let msg = req.body.msg;
  let first_hour= n_time(msg,0)

 let vv=(")/b200__msg"+first_hour ) 


  io.emit('cons',vv  ); 

/*   //   ovo radi

for (let i = 0; i < 38; i++) {eme(i);}
for (let i = 0; i < 38; i++) {eme(i);}
*/
//for (let i = 0; i < 38; i++) {eme(i);}
let tt0= n_time(msg,0) 
io.emit('cons',"tt0:"+tt0  );  
let tt1= n_time(msg,1) 
io.emit('cons',"tt1:"+tt1 ); 
let tt2= n_time(msg,2) 
io.emit('cons',"tt2:"+tt2 ); 
let tt3= n_time(msg,3) 
io.emit('cons',"tt3:"+tt3 ); 
let tt4= n_time(msg,4) 
io.emit('cons',"tt3:"+tt4 ); 
let tt5= n_time(msg,5) 
io.emit('cons',"tt3:"+tt5 ); 
let tt6= n_time(msg,6) 
io.emit('cons',"tt3:"+tt6 ); 
let tt7= n_time(msg,7) 
io.emit('cons',"tt3:"+tt7 );
let tt8= n_time(msg,8) 
io.emit('cons',"tt8:"+tt8 );




let m1='2024-05-01 07:10'
let m2='2025-05-01 06:10'
let m3='2025-05-01 07:10'
/*
  const x =await getData_3(m1,tt2,1)
io.emit('cons',"x:"+JSON.stringify(x)  );  

*/
//for (let i = 0; i < 38; i++) {eme(i);}

/*   //    okokokokokokokokokokoko
tre=await getData_3(tt1,tt0,1);
  io.emit('cons',"tre: "+tre );
  */

a1=[777,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
a2=[777,1]
a3=[777,1,2,3]
a4=[777,1,2,3]
a5=[777,1,2,3]
a6=[777,1]
a7=[777,1]
a8=[777,1]

for (let i = 0; i < 38; i++) { a1[i] =await getData_3_(tt1,tt0,i);
  if(i==37){a1[38] =tt1;a1[39] =tt0;io.emit('cons',"a1=[]:"+a1 );}
}
for (let i = 0; i < 38; i++) { a2[i] =await getData_3_(tt2,tt1,i);
  if(i==37){a2[38] =tt2;a2[39] =tt1;io.emit('cons',"a2=[]:"+a2 );}
}
for (let i = 0; i < 38; i++) { a3[i] =await getData_3_(tt3,tt2,i);
  if(i==37){a3[38] =tt3;a3[39] =tt2;io.emit('cons',"a3=[]:"+a3 );}
}
for (let i = 0; i < 38; i++) { a4[i] =await getData_3_(tt4,tt3,i);
  if(i==37){a4[38] =tt4;a4[39] =tt3;io.emit('cons',"a4=[]:"+a4 );}
}
for (let i = 0; i < 38; i++) { a5[i] =await getData_3_(tt5,tt4,i);
  if(i==37){a5[38] =tt5;a5[39] =tt4;io.emit('cons',"a5=[]:"+a5 );}
}
for (let i = 0; i < 38; i++) { a6[i] =await getData_3_(tt6,tt5,i);
  if(i==37){a6[38] =tt6;a6[39] =tt5;io.emit('cons',"a6=[]:"+a6 );}
}
for (let i = 0; i < 38; i++) { a7[i] =await getData_3_(tt7,tt6,i);
  if(i==37){a7[38] =tt7;a7[39] =tt6;io.emit('cons',"a7=[]:"+a7 );}
}
for (let i = 0; i < 38; i++) { a8[i] =await getData_3_(tt8,tt7,i);
  if(i==37){a8[38] =tt8;a8[39] =tt7;io.emit('cons',"a8=[]:"+a8 );}
}
/*
/*
for (let i = 0; i < 38; i++) { a1[i] =await getData_3(m1,tt2,i);
  if(i==37){io.emit('cons',"a1=[]:"+a1 ); }
}
for (let i = 0; i < 38; i++) { a2[i] =await getData_3(m2,tt2,i);
  if(i==37){io.emit('cons',"a2=[]:"+a2 ); }
}
*/

                               //   let msg = req.body.msg;
                               //   let t1=msg[0];
                              //    console.log("log : ",log);
                               //   console.log("/b16"); 
                  //  log=0;  
               io.emit('cons',"/b200"   );        
                               //   res.send(await(a1));
      af= [a1,a2,a3,a4,a5,a6,a7,a8 ]
    //  res.send(await (a1 + a2));
    res.send(await af)
 // res.send("hello")
                               
                                          }) ; 
//TABELA 2   END
//   test get DATA

let g_m1='2025-05-01 07:10'
let g_m2='2025-05-01 06:10'
let g_m3='2025-05-01 07:10'
/*
tre=await getData_3(m1,tt2,i);
  io.emit('cons',"tre: "+tre );*/
///  TEST GET DATA END




var eqc=[777,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35.36]
async function eme(a) {
  if (a==0){ eqc=[]}
  if (a==1){ const x = await getData_3(1); eqc[1]=x;}
  if (a==2){const x = await getData_3(2); eqc[2]=x;}
  if (a==3){const x = await getData_3(3); eqc[3]=x;}
  if (a==4){const x = await getData_3(4); eqc[4]=x;}
  if (a==5){const x = await getData_3(5); eqc[5]=x;}
  if (a==6){const x = await getData_3(6); eqc[6]=x;}
  if (a==7){const x = await getData_3(7); eqc[7]=x;}
  if (a==8){const x = await getData_3(8); eqc[8]=x;}
  if (a==9){const x = await getData_3(9); eqc[9]=x;}
  if (a==10){const x = await getData_3(10); eqc[10]=x;}
  if (a==11){const x = await getData_3(11); eqc[11]=x;}
  if (a==12){const x = await getData_3(12); eqc[12]=x;}
  if (a==13){const x = await getData_3(13); eqc[13]=x;}
  if (a==14){const x = await getData_3(14); eqc[14]=x;}
  if (a==15){const x = await getData_3(15); eqc[15]=x;}
  if (a==16){const x = await getData_3(16); eqc[16]=x;}
  if (a==17){const x = await getData_3(17); eqc[17]=x;}
  if (a==18){const x = await getData_3(18); eqc[18]=x;}
  if (a==19){const x = await getData_3(19); eqc[19]=x;}
  if (a==20){const x = await getData_3(20); eqc[20]=x;}
  if (a==21){const x = await getData_3(21); eqc[21]=x;}
  if (a==22){const x = await getData_3(22); eqc[22]=x;}
  if (a==23){const x = await getData_3(23); eqc[23]=x;}
  if (a==24){const x = await getData_3(24); eqc[24]=x;}
  if (a==25){const x = await getData_3(25); eqc[25]=x;}
  if (a==26){const x = await getData_3(26); eqc[26]=x;}
  if (a==27){const x = await getData_3(27); eqc[27]=x;}
  if (a==28){const x = await getData_3(28); eqc[28]=x;}
  if (a==29){const x = await getData_3(29); eqc[29]=x;}
  if (a==30){const x = await getData_3(30); eqc[30]=x;}
  if (a==31){const x = await getData_3(31); eqc[31]=x;}
  if (a==32){const x = await getData_3(32); eqc[32]=x;}
  if (a==33){const x = await getData_3(33); eqc[33]=x;}
  if (a==34){const x = await getData_3(34); eqc[34]=x;}
  if (a==35){const x = await getData_3(35); eqc[35]=x;}
  if (a==36){const x = await getData_3(36); eqc[36]=x;}



  if (a==37){
    const x = await getData_3(5);  
 console.log("4_finač",JSON.stringify(eqc))
 let cons= ("eme",JSON.stringify(eqc))
 io.emit('cons',cons  );
};
  
};
eme(0);eme(1);eme(2);eme(3);eme(4);eme(5);eme(6);eme(7);eme(8);eme(9);
eme(10);eme(11);eme(12);eme(13);eme(14);eme(15);eme(16);eme(17);eme(18);eme(19);
eme(20);eme(21);eme(22);eme(23);eme(24);eme(25);eme(26);eme(27);eme(28);eme(29);
eme(30);eme(31);eme(32);eme(33);eme(34);eme(35);eme(36);
eme(37);





                                                          


    //  prevent consoling                  
 // console.log = function () {};                      
        
            