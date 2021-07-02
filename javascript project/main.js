var btn= document.querySelectorAll(".tab-btn");
var tab= document.querySelectorAll(".tab");

  function resett(){
       for(var i=0; i<tab.length;i++){
    tab[i].style.display="none";
btn[i].style.backgroundColor="#222";
    }
      
  }
  
function tabone(){
 resett();
tab[0].style.display="block";
}
tabone();
 for(let a=0; a<btn.length;a++){
     btn[a].addEventListener("click",function(){
       resett();
       tab[a].style.display="block";  
      btn[a].style.backgroundColor="blue";
     });
     
 }