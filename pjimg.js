let array=[ "percy.png","poseidon.png", "percy_jackson.jpg"];
let i=0;


function next(){
    if(i>2){
        i=0;
    }
    document.getElementById("imagem").src=array[i];
    i++;
 }
 //function back(){
 //   if(i<0){
    //    i=2;
   // }
   // document.getElementById("imagem").src=array[i];
  // i--;
 //}

