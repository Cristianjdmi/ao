const kurva = document.querySelector("button.no")
kurva.addEventListener("mouseover", sposta);
const h1 = document.querySelector("h1")
const si = document.querySelector("button.si")
si.addEventListener("mouseover", sif)
kurva.addEventListener("click", sposta);
si.addEventListener("click", sif);

function sposta(){
    const i = Math.floor(Math.random()*500)+1; 
    const j = Math.floor(Math.random()*500)+1;    

    kurva.style.left=i+"px"
    kurva.style.top=j+"px"

}

function sif (){
    h1.innerHTML = "ANCHE IO TI AMO HAHAHAHAHAHAHAHAHAHAHAH"
        
}
    
    
