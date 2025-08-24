
/*
let btn1 = document.querySelector('#addBtn1');
let input1 = document.querySelector('#input1');
let btn2 = document.querySelector('#addBtn2');
let input2 = document.querySelector('#input2');
*/
////   change div contenr


// change div content   endd
let btn3 = document.querySelector('#addBtn3');
let btn4 = document.querySelector('#addBtn4');
let btn5 = document.querySelector('#addBtn5');
//let btn9 = document.querySelector('#addBtn9');
let btn15 = document.querySelector('#addBtn15');
let btn15_ = document.querySelector('#addBtn15_');
let btn200 = document.querySelector('#addBtn200');
let btn200_ = document.querySelector('#addBtn200_');
let btn201 = document.querySelector('#addBtn201');
let btn202 = document.querySelector('#addBtn202');
let btn203 = document.querySelector('#addBtn203');
let btn204 = document.querySelector('#addBtn204');
//let btn16 = document.querySelector('#addBtn16');
//let btn17 = document.querySelector('#addBtn17');
let btn16 = 1;
let btn17=1

//b201
btn201.addEventListener('click',function(){
  $('#div1').hide();
  let xml =new XMLHttpRequest();
  xml.open('post','/b201');
  xml.onreadystatechange = function(){
    if(xml.readyState == 4 && xml.status ==200){
        console.log(xml.responseText);
       // document.getElementById('a10').innerHTML=data[5].name; 
      // document.getElementById('a1').innerHTML=xml.responseText;
     }}
        xml.setRequestHeader('Content-Type','application/json')
        xml.send(JSON.stringify({msg:123}));
          })

//b202
btn202.addEventListener('click',function(){
  $('#div1').show();
  let xml =new XMLHttpRequest();
  xml.open('post','/b202');
  xml.onreadystatechange = function(){
    if(xml.readyState == 4 && xml.status ==200){
        console.log(xml.responseText);
       // document.getElementById('a10').innerHTML=data[5].name; 
      // document.getElementById('a1').innerHTML=xml.responseText;
     }}
        xml.setRequestHeader('Content-Type','application/json')
        xml.send(JSON.stringify({msg:123}));
          })

//b203
btn203.addEventListener('click',function(){
  $('#div2').hide();
  let xml =new XMLHttpRequest();
  xml.open('post','/b203');
  xml.onreadystatechange = function(){
    if(xml.readyState == 4 && xml.status ==200){
        console.log(xml.responseText);
       // document.getElementById('a10').innerHTML=data[5].name; 
      // document.getElementById('a1').innerHTML=xml.responseText;
     }}
        xml.setRequestHeader('Content-Type','application/json')
        xml.send(JSON.stringify({msg:123}));
          })

//b204
btn204.addEventListener('click',function(){
  $('#div2').show();
  let xml =new XMLHttpRequest();
  xml.open('post','/b204');
  xml.onreadystatechange = function(){
    if(xml.readyState == 4 && xml.status ==200){
        console.log(xml.responseText);
       // document.getElementById('a10').innerHTML=data[5].name; 
      // document.getElementById('a1').innerHTML=xml.responseText;
     }}
        xml.setRequestHeader('Content-Type','application/json')
        xml.send(JSON.stringify({msg:123}));
          })




let btn5_ = document.querySelector('#addBtn55');



/*
//1
btn1.addEventListener('click',function(){
  let inputVal = input1.value;
  let xml =new XMLHttpRequest();
  xml.open('post','/b1');
  xml.onreadystatechange = function(){
    if(xml.readyState == 4 && xml.status ==200){
        console.log(xml.responseText);
       // document.getElementById('a10').innerHTML=data[5].name; 
       document.getElementById('a1').innerHTML=xml.responseText;
     }}
        xml.setRequestHeader('Content-Type','application/json')
        xml.send(JSON.stringify({msg:inputVal}));
          })

//2
btn2.addEventListener('click',function(){
    let inputVal = input2.value;
    let xml =new XMLHttpRequest();
    xml.open('post','/b2');
    xml.onreadystatechange = function(){
        if(xml.readyState == 4 && xml.status ==200){
            console.log(xml.responseText);
           // document.getElementById('a10').innerHTML=data[5].name; 
           document.getElementById('a1').innerHTML=xml.responseText;
        }}
           xml.setRequestHeader('Content-Type','application/json')
           xml.send(JSON.stringify({msg:inputVal}));
            })
           */
//3
/*
btn3.addEventListener('click',function(){
  console.log("but3");
  let inputVal = input2.value;
  let xml =new XMLHttpRequest();
  xml.open('post','/b3');
  xml.onreadystatechange = function(){
    console.log("but3");
  //  let a=[1,2,3]
 // let a=  [{"db_user_type":[4,4,4,4,4,4,4,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,4,4,3,3,3,3,3,3],"db_user_status":[0,0,0,0,0,0,0,1,0,null,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],"db_user_tmst":["2023-12-01 10:10","2024-12-01 12:50:10","2024-12-01 12:50:20","2024-12-01 12:50:20","2024-12-01 14:50:30","2024-12-01 14:50:40","2024-12-2 12:44:12","2024-12-2 12:44:48","2024-12-2 12:46:23","2024-12-2 12:46:23","2024-12-2 12:48:54","2024-12-2 12:50:10","2024- 12-2 12:51:27","2024-12-2 12:52:43","2024- 12-2 13:2:53","2023-12-01 10:10","2023-12-01 10:10","2023-12-01 10:10","2023-12-01 10:10","2023-12-01 10:10","2023-12-01 10:10","2023-12-01 10:10","2023-12-01 10:10","2023-12-01 10:10","2023-12-01 10:10","2023-12-01 10:10","2023-12-01 10:10","2023-12-01 10:10","2023-12-01 10:10","2023-12-01 10:10","2023-12-01 10:10","2023-12-01 10:10","2023-12-01 10:10","2023-12-01 10:10","2024-12-2 12:44:48","2024-12-2 12:44:48","2024-12-2 12:44:48","2024-12-2 12:44:48","2024-12-2 12:44:48","2024-12-2 12:44:48"],"db_user_id":[857,858,859,860,861,862,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,1321,1322,1323,1324,1325,1326]}]
  //  tabledraw(xml.responseText)
    let a='{"db_user_type":[4,4,4],"db_user_status":[0,0,0],"db_user_tmst":[1,2,3],"db_user_id":[857,858,1]}'
 // console.log("from main_table _draw_a",a);
  tabledraw(a)
      if(xml.readyState == 4 && xml.status ==200){
          console.log(xml.responseText);
         // document.getElementById('a10').innerHTML=data[5].name; 
       //  document.getElementById('a1').innerHTML=xml.responseText;

//test get row
var table = document.getElementById("table");
var rows = table.getElementsByTagName("tr");
table.rows[2].getElementsByTagName("td")[4].innerHTML=777
//   table.rows[i].getElementsByTagName("td")[4]).innerHTML
table.rows[i].getElementsByTagName("td")[4].style.backgroundColor = '#CFB6BF';
var g_id=0;
var g_id_1=0;
///bojenje prve kolone
var table = document.getElementById("table");
table.style.backgroundColor = 'red';
var rows = table.getElementsByTagName("tr");
var cell = row.getElementsByTagName("td")[0];
//row.getElementsByTagName("td")[0];
row.getElementsByTagName("td")[0].style.backgroundColor = 'red';;
//currentRow.style.backgroundColor = '#CFB6BF';
//cell.style.backgroundColor = '#CFB6BF';
cell.style.backgroundColor = 'red';
//currentRow.style.backgroundColor = "white";
currentRow.style.backgroundColor = "green";
row.style.backgroundColor = "yellow"; 
row[0].style.backgroundColor = "yellow"; 


///bojenje prve kolone  end



      }}
         xml.setRequestHeader('Content-Type','application/json')
         xml.send(JSON.stringify({msg:inputVal}));
          })   
 */        
//4

//btn4.addEventListener('click',function(){
//test get row

/*   ovaj deo radi
var table = document.getElementById("table");
var rows = table.getElementsByTagName("tr");
table.rows[2].getElementsByTagName("td")[4].innerHTML=777
table.rows[0].getElementsByTagName("td")[5].style.backgroundColor = 'red';
*/



/*
//   table.rows[i].getElementsByTagName("td")[4]).innerHTML
table.rows[i].getElementsByTagName("td")[4].style.backgroundColor = '#CFB6BF';
var g_id=0;
var g_id_1=0;
///bojenje prve kolone
var table = document.getElementById("table");
table.style.backgroundColor = 'red';
var rows = table.getElementsByTagName("tr");
var cell = row.getElementsByTagName("td")[0];
//row.getElementsByTagName("td")[0];/*
row.getElementsByTagName("td")[0].style.backgroundColor = 'red';;
//currentRow.style.backgroundColor = '#CFB6BF';
//cell.style.backgroundColor = '#CFB6BF';
cell.style.backgroundColor = 'red';
//currentRow.style.backgroundColor = "white";
currentRow.style.backgroundColor = "green";
row.style.backgroundColor = "yellow"; 
row[0].style.backgroundColor = "yellow"; 
*/

///bojenje prve kolone  end*******************






/*

  let ad=[]

    ad[0]= document.getElementById("meeting-time").value;
    ad[1]= document.getElementById("meeting-time1").value;

   console.log("ad: ", ad );

  console.log("but4");
  let inputVal = input2.value;
  let xml =new XMLHttpRequest();
  xml.open('post','/b4_1');
  xml.onreadystatechange = function(){
      if(xml.readyState == 4 && xml.status ==200){
          console.log(xml.responseText);
         // document.getElementById('a10').innerHTML=data[5].name; 
       //  document.getElementById('a1').innerHTML=xml.responseText;
      }}
         xml.setRequestHeader('Content-Type','application/json')
       //  xml.send(JSON.stringify({msg:inputVal}));
       xml.send(JSON.stringify({msg:ad}));
          })                      
*/
 //5
btn5.addEventListener('click',function(){
  let ad=[]

    ad[0]= document.getElementById("meeting-time").value;
    ad[1]= document.getElementById("meeting-time1").value;
  // let pl= document.getElementById("place").value;
 // let pl= document.getElementById("place").innerHTML;
  let pl= document.getElementById("place").inputVal;

   console.log("ad: ", ad );
   console.log("from _main_place: ", pl );
  console.log("but5");

  var select = document.getElementById('place');
// var text = select.options[select.selectedIndex].text;
ad[2] = select.options[select.selectedIndex].value;
  console.log("ad: ",ad);

 // let inputVal = input2.value;
  let xml =new XMLHttpRequest();
  xml.open('post','/b5');
  xml.onreadystatechange = function(){
      if(xml.readyState == 4 && xml.status ==200){
          console.log("main_5_resp: ",xml.responseText);
          let resp=JSON.parse(xml.responseText);
          console.log("main_5_resp_parsed: ",resp);
         // let resp_s=stringify("From:",`${resp.from}`,"\n","To: ",`${resp.from}`);
      //   let resp_s=String("From:"+resp.from+"  To: "+resp.to+"  Place: "+resp.place+" ProductNr: "+resp.res);//ok
        let resp_s=String("From:  "+resp.from+"\nTo:       "+resp.to+"\nPlace: "+resp.place+"\nProduct realized: "+resp.res);
          console.log("main_5_resp_s_string: ",resp_s);

         // document.getElementById("text1").innerHTML = stringify("From:",`${resp.from}`,"\n","To: ",`${resp.from}`);
        //  document.getElementById("text1").innerHTML = "From:",,"\n","To: ",`${resp.from}`;
        document.getElementById("text1").innerHTML =resp_s

         // document.getElementById('a10').innerHTML=data[5].name; 
       //  document.getElementById('a1').innerHTML=xml.responseText;
      }}
         xml.setRequestHeader('Content-Type','application/json')
       //  xml.send(JSON.stringify({msg:inputVal}));
       xml.send(JSON.stringify({msg:ad}));
          }) 

          //btn5_
btn5_.addEventListener('click',function(){
            let ad=[]
          
              ad[0]= document.getElementById("meeting-time_").value;
              ad[1]= document.getElementById("meeting-time1_").value;
            // let pl= document.getElementById("place").value;
           // let pl= document.getElementById("place").innerHTML;
            let pl= document.getElementById("place_").inputVal;
          
             console.log("ad: ", ad );
             console.log("from _main_place: ", pl );
            console.log("but5_");
          
            var select = document.getElementById('place_');
          // var text = select.options[select.selectedIndex].text;
          ad[2] = select.options[select.selectedIndex].value;
            console.log("ad: ",ad);
          
           // let inputVal = input2.value;
            let xml =new XMLHttpRequest();
            xml.open('post','/b5_');
            xml.onreadystatechange = function(){
                if(xml.readyState == 4 && xml.status ==200){
                    console.log("main_5_resp: ",xml.responseText);
                    let resp=JSON.parse(xml.responseText);
                    console.log("main_5_resp_parsed: ",resp);
                   // let resp_s=stringify("From:",`${resp.from}`,"\n","To: ",`${resp.from}`);
                //   let resp_s=String("From:"+resp.from+"  To: "+resp.to+"  Place: "+resp.place+" ProductNr: "+resp.res);//ok
                  let resp_s=String("From:  "+resp.from+"\nTo:       "+resp.to+"\nPlace: "+resp.place+"\nProduct realized: "+resp.res);
                    console.log("main_5_resp_s_string: ",resp_s);
          
                   // document.getElementById("text1").innerHTML = stringify("From:",`${resp.from}`,"\n","To: ",`${resp.from}`);
                  //  document.getElementById("text1").innerHTML = "From:",,"\n","To: ",`${resp.from}`;
                  document.getElementById("text1_").innerHTML =resp_s
          
                   // document.getElementById('a10').innerHTML=data[5].name; 
                 //  document.getElementById('a1').innerHTML=xml.responseText;
                }}
                   xml.setRequestHeader('Content-Type','application/json')
                 //  xml.send(JSON.stringify({msg:inputVal}));
                 xml.send(JSON.stringify({msg:ad}));
                    })           
//get 
/*
btn9.addEventListener('click',function(){
           // let inputVal = input1.value;
           console.log("main-butt_9");
            let xml =new XMLHttpRequest();
            xml.open('post','/b9');
            xml.onreadystatechange = function(){
              if(xml.readyState == 4 && xml.status ==200){
                  console.log(xml.responseText);
                 // document.getElementById('a10').innerHTML=data[5].name; 
               //  document.getElementById('a1').innerHTML=xml.responseText;
               }}
                  xml.setRequestHeader('Content-Type','application/json')
                  xml.send(JSON.stringify({msg:123}));
                    })
                  
*/


function myFunction2(){console.log("start ok  function2()");


  let xml =new XMLHttpRequest();
                   xml.open('post','/fun2');
                   xml.onreadystatechange = function(){
                       if(xml.readyState == 4 && xml.status ==200){
                           console.log(xml.responseText);
                          // document.getElementById('a10').innerHTML=data[5].name; 
                        //  document.getElementById('a1').innerHTML=xml.responseText;
                       }}
                          xml.setRequestHeader('Content-Type','application/json')
                        //  xml.send(JSON.stringify({msg:inputVal}));
                        xml.send(JSON.stringify({msg:123}));

};
function myFunction1(){console.log("start ok");

let a=1;
             let xml =new XMLHttpRequest();
             xml.open('post','/time');
             xml.onreadystatechange = function(){
               if(xml.readyState == 4 && xml.status ==200){
                   console.log("main_time:",xml.responseText);
                  // document.getElementById('a10').innerHTML=data[5].name; 
               //   document.getElementById("meeting-time1").value=xml.responseText;  //ok
               let a= xml.responseText;
               let a_s=String(a);
               console.log("main_time_string from request:",a);
            
             //  console.log("main_time_minus two chars_a_s:",a_s);
               let ress = a_s.substring(0, 16);
               console.log("main_time_prvih 16 karaktera:",ress);
               document.getElementById("meeting-time1").value=ress;
               document.getElementById("meeting-time1_").value=ress;

               //from 
               let ress_1 = a_s.substring(11, 13);
               console.log("main_time_get hour:",ress_1,"a");
               let ress_2=Number(ress_1);
               console.log("main_time_ress_2:",ress_2);
               let ress_3=ress_2-1;
           //    if  (ress_3<10){let ress_4="0"}
               let prvi_deo=a_s.substring(0, 11);
               console.log("main_time_prvi_deo:",prvi_deo);
               let drugi_deo=a_s.substring(13, 16);
               console.log("main_time_drugi_deo:",drugi_deo);
              if(ress_3>10){ let fin_s=prvi_deo+String(ress_3)+drugi_deo; document.getElementById("meeting-time").value=fin_s;document.getElementById("meeting-time_").value=fin_s;}
           //    let fin_s=prvi_deo+String(ress_3)+drugi_deo;
           if(ress_3<10){   let fin_s=prvi_deo+"0"+String(ress_3)+drugi_deo; document.getElementById("meeting-time").value=fin_s;document.getElementById("meeting-time_").value=fin_s;}
                          //  let fin_s=prvi_deo+ress_4+String(ress_3)+drugi_deo;
                          console.log("main_time_final:");
               console.log("main_time_final:",fin_s);
              
              // let rr= "2025-04-02T15:12"
              //  let rr= "2025-04-02 15:12"

             //  document.getElementById("meeting-time1").value=ress;
               
                }}
                   xml.setRequestHeader('Content-Type','application/json')
                  // xml.send(JSON.stringify({msg:a}));
                 // xml.send(JSON.stringify({msg:ress}));
                 xml.send(JSON.stringify({msg:a}));
           }
           
//butt 15
btn15.addEventListener('click',function(){
  // let inputVal = input1.value;
  let ad=[]

  ad[0]= document.getElementById("meeting-time").value;
  ad[1]= document.getElementById("meeting-time1").value;
  console.log("main-butt_15");
   let xml =new XMLHttpRequest();
   xml.open('post','/b15');
   xml.onreadystatechange = function(){
     if(xml.readyState == 4 && xml.status ==200){
         console.log(xml.responseText);
///new draw table
 // let a='{"db_user_type":[4,4,4],"db_user_status":[0,0,0],"db_user_tmst":[1,2,3],"db_user_id":[857,858,1]}'
   let a='{"db_user_type":[4,4,8],"db_user_status":[0,8,0,0,0,0,0,0],"db_user_tmst":[1,9,3],"db_user_id":[857,858,1]}'
// console.log("from main_table _draw_a",a);
 tabledraw1(a)
///new draw table
        // document.getElementById('a10').innerHTML=data[5].name; 
      //  document.getElementById('a1').innerHTML=xml.responseText;
      }}
         xml.setRequestHeader('Content-Type','application/json')
       //  xml.send(JSON.stringify({msg:123}));
       xml.send(JSON.stringify({msg:ad}));
           })
//butt 15_         
btn15_.addEventListener('click',function(){
  // let inputVal = input1.value;
  let ad=[]

  ad[0]= document.getElementById("meeting-time").value;
  ad[1]= document.getElementById("meeting-time1").value;
  console.log("main-butt_15_");
   let xml =new XMLHttpRequest();
   xml.open('post','/b15_');
   xml.onreadystatechange = function(){
     if(xml.readyState == 4 && xml.status ==200){
         console.log(xml.responseText);
///new draw table
 // let a='{"db_user_type":[4,4,4],"db_user_status":[0,0,0],"db_user_tmst":[1,2,3],"db_user_id":[857,858,1]}'
   let a='{"db_user_type":[4,4,8],"db_user_status":[0,8,0,0,0,0,0,0],"db_user_tmst":[1,9,3],"db_user_id":[857,858,1]}'
// console.log("from main_table _draw_a",a);
 tabledraw1_(a)
///new draw table
        // document.getElementById('a10').innerHTML=data[5].name; 
      //  document.getElementById('a1').innerHTML=xml.responseText;
      }}
         xml.setRequestHeader('Content-Type','application/json')
       //  xml.send(JSON.stringify({msg:123}));
       xml.send(JSON.stringify({msg:ad}));
           })



//  TABELA 1 
 btn200.addEventListener('click',function(){
 let t= document.getElementById("meeting-time1").value;
                                // let inputVal = input1.value;
                                console.log("main-butt_200");
                                console.log("time?b/200:", t);
                                 let xml =new XMLHttpRequest();
                                 xml.open('post','/b200');
                                 xml.onreadystatechange = function(){
                                   if(xml.readyState == 4 && xml.status ==200){
                                     //  console.log("main_btn200: ",xml.responseText);
                                       let am=JSON.parse(xml.responseText)
                                       console.log(am[0])
                                       console.log("main_am",am)
                           
                          tabs1(am) ; 
                          tabs2(am) ; 
                          tabs3(am) ; 
                          tabs4(am) ; 
                          tabs5(am) ; 
                          tabs6(am) ; 
                          tabs7(am) ; 
                          tabs8(am) ;                 
                                    }}
                                       xml.setRequestHeader('Content-Type','application/json')
                                       xml.send(JSON.stringify({msg:t}));
                                         })

 async function tabs1(am) { 
 for(i=1; i++; i<36){document.getElementById("tab1").rows[2].cells[i].innerHTML=am[0][i];
   document.getElementById("tab1").rows[2].cells[1].innerHTML=am[0][1]; 
           document.getElementById("tab1").rows[2].cells[37].innerHTML=am[0][38]; 
           }
                                          
   // console.log("main_tabs ",am[0]);
 };


                                      
 async function tabs2(am) { 
  for(i=1; i++; i<36){document.getElementById("tab1").rows[3].cells[i].innerHTML=am[1][i];
    document.getElementById("tab1").rows[3].cells[1].innerHTML=am[1][1]; 
    document.getElementById("tab1").rows[3].cells[37].innerHTML=am[1][38]; 
     }
  
 // console.log("main_tabs ",am[0]);
 };
 async function tabs3(am) { 
  for(i=1; i++; i<36){document.getElementById("tab1").rows[4].cells[i].innerHTML=am[2][i];
    document.getElementById("tab1").rows[4].cells[1].innerHTML=am[2][1]; 
    document.getElementById("tab1").rows[4].cells[37].innerHTML=am[2][38]; 
     }
 };
 async function tabs4(am) { 
  for(i=1; i++; i<36){document.getElementById("tab1").rows[5].cells[i].innerHTML=am[3][i];
    document.getElementById("tab1").rows[5].cells[1].innerHTML=am[3][1]; 
    document.getElementById("tab1").rows[5].cells[37].innerHTML=am[3][38]; 
     }
 };

 async function tabs5(am) { 
  for(i=1; i++; i<36){document.getElementById("tab1").rows[6].cells[i].innerHTML=am[4][i];
    document.getElementById("tab1").rows[6].cells[1].innerHTML=am[4][1]; 
    document.getElementById("tab1").rows[6].cells[37].innerHTML=am[4][38]; 
     }
 };
 async function tabs6(am) { 
  for(i=1; i++; i<36){document.getElementById("tab1").rows[7].cells[i].innerHTML=am[5][i];
    document.getElementById("tab1").rows[7].cells[1].innerHTML=am[5][1]; 
    document.getElementById("tab1").rows[7].cells[37].innerHTML=am[5][38]; 
     }
 };
 async function tabs7(am) { 
  for(i=1; i++; i<36){document.getElementById("tab1").rows[8].cells[i].innerHTML=am[6][i];
    document.getElementById("tab1").rows[8].cells[1].innerHTML=am[6][1]; 
    document.getElementById("tab1").rows[8].cells[37].innerHTML=am[6][38]; 
     }
 };
 async function tabs8(am) { 
  for(i=1; i++; i<36){document.getElementById("tab1").rows[9].cells[i].innerHTML=am[7][i];
    document.getElementById("tab1").rows[9].cells[1].innerHTML=am[7][1]; 
    document.getElementById("tab1").rows[9].cells[37].innerHTML=am[7][38]; 
     }
 };
//  TABELA 1 END

//  TABELA 2
btn200_.addEventListener('click',function(){
  let t= document.getElementById("meeting-time1").value;
                                 // let inputVal = input1.value;
                                 console.log("main-butt_200_");
                                 console.log("time?b/200:", t);
                                  let xml =new XMLHttpRequest();
                                  xml.open('post','/b200_');
                                  xml.onreadystatechange = function(){
                                    if(xml.readyState == 4 && xml.status ==200){
                                      //  console.log("main_btn200: ",xml.responseText);
                                        let am=JSON.parse(xml.responseText)
                                        console.log(am[0])
                                        console.log("main_am",am)
                            
                           tabs1_(am) ; 
                           tabs2_(am) ; 
                           tabs3_(am) ; 
                           tabs4_(am) ; 
                           tabs5_(am) ; 
                           tabs6_(am) ; 
                           tabs7_(am) ; 
                           tabs8_(am) ;
                                          
                                     }}
                                        xml.setRequestHeader('Content-Type','application/json')
                                        xml.send(JSON.stringify({msg:t}));
                                          })
 
  async function tabs1_(am) { 
  for(i=1; i++; i<36){document.getElementById("tab2").rows[2].cells[i].innerHTML=am[0][i];
    document.getElementById("tab2").rows[2].cells[1].innerHTML=am[0][1]; 
            document.getElementById("tab2").rows[2].cells[37].innerHTML=am[0][38]; 
            }
                                           
    // console.log("main_tabs ",am[0]);
  };
 
 
                                       
  async function tabs2_(am) { 
   for(i=1; i++; i<36){document.getElementById("tab2").rows[3].cells[i].innerHTML=am[1][i];
     document.getElementById("tab2").rows[3].cells[1].innerHTML=am[1][1]; 
     document.getElementById("tab2").rows[3].cells[37].innerHTML=am[1][38]; 
      }
   
  // console.log("main_tabs ",am[0]);
  };
  async function tabs3_(am) { 
   for(i=1; i++; i<36){document.getElementById("tab2").rows[4].cells[i].innerHTML=am[2][i];
     document.getElementById("tab2").rows[4].cells[1].innerHTML=am[2][1]; 
     document.getElementById("tab2").rows[4].cells[37].innerHTML=am[2][38]; 
      }
  };
  async function tabs4_(am) { 
   for(i=1; i++; i<36){document.getElementById("tab2").rows[5].cells[i].innerHTML=am[3][i];
     document.getElementById("tab2").rows[5].cells[1].innerHTML=am[3][1]; 
     document.getElementById("tab2").rows[5].cells[37].innerHTML=am[3][38]; 
      }
  };
 
  async function tabs5_(am) { 
   for(i=1; i++; i<36){document.getElementById("tab2").rows[6].cells[i].innerHTML=am[4][i];
     document.getElementById("tab2").rows[6].cells[1].innerHTML=am[4][1]; 
     document.getElementById("tab2").rows[6].cells[37].innerHTML=am[4][38]; 
      }
  };
  async function tabs6_(am) { 
   for(i=1; i++; i<36){document.getElementById("tab2").rows[7].cells[i].innerHTML=am[5][i];
     document.getElementById("tab2").rows[7].cells[1].innerHTML=am[5][1]; 
     document.getElementById("tab2").rows[7].cells[37].innerHTML=am[5][38]; 
      }
  };
  async function tabs7_(am) { 
   for(i=1; i++; i<36){document.getElementById("tab2").rows[8].cells[i].innerHTML=am[6][i];
     document.getElementById("tab2").rows[8].cells[1].innerHTML=am[6][1]; 
     document.getElementById("tab2").rows[8].cells[37].innerHTML=am[6][38]; 
      }
  };
  async function tabs8_(am) { 
   for(i=1; i++; i<36){document.getElementById("tab2").rows[9].cells[i].innerHTML=am[7][i];
     document.getElementById("tab2").rows[9].cells[1].innerHTML=am[7][1]; 
     document.getElementById("tab2").rows[9].cells[37].innerHTML=am[7][38]; 
      }
  };
 //  TABELA 2 END
           setInterval( function() {
          
              // let inputVal = input1.value;
              console.log("main-butt_9");
               let xml =new XMLHttpRequest();
               xml.open('post','/con_staus');
               xml.onreadystatechange = function(){
                 if(xml.readyState == 4 && xml.status ==200){
                     console.log(xml.responseText);
                    // document.getElementById('a10').innerHTML=data[5].name; 
                  //  document.getElementById('a1').innerHTML=xml.responseText;
                  }}
                     xml.setRequestHeader('Content-Type','application/json')
                     xml.send(JSON.stringify({msg:123}));
                     
 
              }, 3000);

                   //  clean   public request
/*
                   let xml =new XMLHttpRequest();
                   xml.open('post','/time');
                   xml.onreadystatechange = function(){
                       if(xml.readyState == 4 && xml.status ==200){
                           console.log(xml.responseText);
                          // document.getElementById('a10').innerHTML=data[5].name; 
                        //  document.getElementById('a1').innerHTML=xml.responseText;
                       }}
                          xml.setRequestHeader('Content-Type','application/json')
                        //  xml.send(JSON.stringify({msg:inputVal}));
                        xml.send(JSON.stringify({msg:ad}));
                 */