
/*
let btn1 = document.querySelector('#addBtn1');
let input1 = document.querySelector('#input1');
let btn2 = document.querySelector('#addBtn2');
let input2 = document.querySelector('#input2');
*/

let btn3 = document.querySelector('#addBtn3');
let btn4 = document.querySelector('#addBtn4');
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
  console.log("from main_table _draw_a",a);
  tabledraw(a)
      if(xml.readyState == 4 && xml.status ==200){
          console.log(xml.responseText);
         // document.getElementById('a10').innerHTML=data[5].name; 
       //  document.getElementById('a1').innerHTML=xml.responseText;
      }}
         xml.setRequestHeader('Content-Type','application/json')
         xml.send(JSON.stringify({msg:inputVal}));
          })   
   /*       
//4
btn4.addEventListener('click',function(){
  let inputVal = input2.value;
  let xml =new XMLHttpRequest();
  xml.open('post','/b4');
  xml.onreadystatechange = function(){
      if(xml.readyState == 4 && xml.status ==200){
          console.log(xml.responseText);
         // document.getElementById('a10').innerHTML=data[5].name; 
       //  document.getElementById('a1').innerHTML=xml.responseText;
      }}
         xml.setRequestHeader('Content-Type','application/json')
         xml.send(JSON.stringify({msg:inputVal}));
          })                      

          */