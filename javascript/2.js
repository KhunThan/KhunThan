var count =0;
var prev =0;
var typeofanimate = ['animate','animate1','animate2','animate3','animate4'];
var timing;

function constant(){
    c2.style.visibility = 'hidden';
    c3.style.visibility = 'hidden';
    c4.style.visibility = 'hidden';
    c5.style.visibility = 'hidden';
    a1.style.visibility = 'hidden';
    a2.style.visibility = 'hidden';
    a3.style.visibility = 'hidden';
    a4.style.visibility = 'hidden';
    a5.style.visibility = 'hidden';
    a1.style.animationName = 'animat';  
    a2.style.animationName = 'animat';
    a3.style.animationName = 'animat';
    a4.style.animationName = 'animat';
    a5.style.animationName = 'animat';                                
      
}
function colorchange(){
    b1.style.backgroundColor = 'gray';   
    b2.style.backgroundColor = 'gray';   
    b3.style.backgroundColor = 'gray';   
    b4.style.backgroundColor = 'gray';   
    b5.style.backgroundColor = 'gray';     
}

function hoverbutton(n){
    if(count == 1 && n ==b1){b1.style.backgroundColor = 'red';}
    else if(count == 2 && n ==b2){b2.style.backgroundColor = 'red';}
    else if(count == 3 && n ==b3){b3.style.backgroundColor = 'red';}
    else if(count == 4 && n ==b4){b4.style.backgroundColor = 'red';}
    else if(count == 5 && n ==b5){b5.style.backgroundColor = 'red';}
    else{n.style.backgroundColor =  'rgb(196, 189, 189)';}
}
function mouseout(n){
    if(count == 1 && n ==b1){b1.style.backgroundColor = 'red';}
    else if(count == 2 && n ==b2){b2.style.backgroundColor = 'red';}
    else if(count == 3 && n ==b3){b3.style.backgroundColor = 'red';}
    else if(count == 4 && n ==b4){b4.style.backgroundColor = 'red';}
    else if(count == 5 && n ==b5){b5.style.backgroundColor = 'red';}    
    else{n.style.backgroundColor = 'gray';}
}

function one(){
    constant();
    a1.style.visibility = 'visible';
    if(prev == 2){c2.style.visibility = 'visible';}
    if(prev == 3){c3.style.visibility = 'visible';}
    if(prev == 4){c4.style.visibility = 'visible';}
    if(prev == 5){c5.style.visibility = 'visible';}  
    prev = 1;   
    colorchange();      
    b1.style.backgroundColor = 'red';               
    a1.style.animationName = 'animate';
    
}            
function two(){
    constant();
    if(prev == 1){a1.style.visibility = 'visible';}
    if(prev == 3){c3.style.visibility = 'visible';}
    if(prev == 4){c4.style.visibility = 'visible';}
    if(prev == 5){c5.style.visibility = 'visible';}   
    a2.style.visibility = 'visible';  
    prev = 2;     
    colorchange();
    b2.style.backgroundColor = 'red';                         
    a2.style.animationName = 'animate1';
    
}
function three(){
    constant();
    a3.style.visibility = 'visible';
    if(prev == 1){a1.style.visibility = 'visible';}
    if(prev == 2){a2.style.visibility = 'visible';}
    if(prev == 4){c4.style.visibility = 'visible';}
    if(prev == 5){c5.style.visibility = 'visible';}   
    prev = 3;   
    colorchange();
    b3.style.backgroundColor = 'red';       
    a3.style.animationName = 'animate2';
    
}
function four(){
    constant();
    if(prev == 1){a1.style.visibility = 'visible';}
    if(prev == 2){a2.style.visibility = 'visible';}
    if(prev == 3){a3.style.visibility = 'visible';}
    if(prev == 5){c5.style.visibility = 'visible';}  
    a4.style.visibility = 'visible';
    prev = 4;
    colorchange();
    b4.style.backgroundColor = 'red';   
    a4.style.animationName = 'animate3';
    
}
function five(){
    constant();
    a5.style.visibility = 'visible';
    if(prev == 1){a1.style.visibility = 'visible';}
    if(prev == 2){a2.style.visibility = 'visible';}
    if(prev == 3){a3.style.visibility = 'visible';}
    if(prev == 4){a4.style.visibility = 'visible';}  
    prev = 5;
    colorchange();
    b5.style.backgroundColor = 'red';   
    a5.style.animationName = 'animate4';
    
}  
function ckill(n){
    c = null;
    timing = null;
    count = n;
    c = c();
}         
                                  
var c = function c(time){
for(var i = 0;i<8000;i++){
timing = setTimeout(function(){
   
    count = count+1;
    if(count == 6){count = 1;}
    if(count == 1){one();}
    if(count == 2){two();}
    if(count == 3){three();}
    if(count == 4){four();}
    if(count == 5){five();}
},i*time*1000);}}
function next(){
    count = prev;
}
function previous(){
    if(prev <2){count = 4;}else{
    count = prev-2;}
}    
