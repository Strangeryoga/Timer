var h1=document.querySelector("h1")

var inc=0

setInterval(function(){
    if(inc<100){
        inc+=Math.floor(Math.random()*15)
        h1.innerHTML=inc+"%"
    }else{
        inc=100
        h1.innerHTML=inc+"%"
        document.body.style.backgroundColor = "red"; 
    }
    
},Math.floor(Math.random()*200))