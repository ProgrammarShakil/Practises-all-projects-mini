var btn=document.querySelectorAll(".btn");
var tab=document.querySelectorAll(".tab");

function resett(){
    for( var a=0;a<tab.length;a++){
    tab[a].style.display="none";
    btn[a].style.backgroundColor="grey";
    }     
}

function clickTab(){
    resett();
    tab[0].style.display="block";

}
    clickTab();

for(let i=0; i<tab.length;i++){
    btn[i].addEventListener("click",function(){
        resett();
        
    tab[i].style.display="block";
    btn[i].style.backgroundColor="aqua";

    });
}
