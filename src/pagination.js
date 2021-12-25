const pgnButtons = document.querySelectorAll(".pgn__num");

for( item of pgnButtons ){
    item.addEventListener("click",function(){
    let pgnNumber = this.textContent
    let minLimitVal = pgnNumber*5-4
    let maxLimitVal = pgnNumber*5
    console.log("from" + minLimitVal + "to"+ maxLimitVal);
    })
    
}