var btn =document.querySelectorAll(".btn");
var tab =document.querySelectorAll(".tab");


function resett(){
     for( var a=0; a < tab.length; a++){
     tab[a].style.display="none";
    btn[a].style.backgroundColor="lightblue";
     }
}

function clicktab(){
    resett(); 
    tab[0].style.display="block";
}
  clicktab();

for(let i=0; i < btn.length;i++){
    btn[i].addEventListener("click",function(){
    resett();
    tab[i].style.display="block";
    btn[i].style.backgroundColor="aqua";
    });
}