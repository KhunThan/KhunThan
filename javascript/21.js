var showing;
var hiding;
var ids = [];
function showhide(showing,hiding,animationtype){
    for(var i =0;i<hiding.length;i++){
            hiding[i].style.visibility = 'hidden';
            hiding[i].style.animationName = 'animat';
    }
    for(var i = 0;i<showing.length;i++){
        showing[i].style.visibility = 'visible';
        showing[i].style.animationName = 'animat';
        showing[showing.length-1].style.animationName = animationtype;
        
    }
}
