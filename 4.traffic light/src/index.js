let colors=['red','green','yellow']
let prevColor ="";
function renderColor(){
    let color_name=document.getElementById("color_name")
    let elem=document.getElementById("box")
    let arr=[...colors]
        if(prevColor != ""){
           // console.log("removing",arr, prevColor)
            let index = 0;
            for(const color of arr){
                if(color === prevColor ){
                    arr.splice(index,1)
                }
                index++;
            }
            
           // console.log("after removing ",arr)
        }
    rand=Math.ceil(Math.random()*10)
    rand1=rand%2
    console.log(arr[rand1])
    elem.style.backgroundColor=arr[rand1]
    prevColor= arr[rand1]
    
   
    delay += 10;
    if(delay > 300) {
        color_name.style.color=arr[rand1]
        color_name.innerHTML=arr[rand1]
    } else {
        setTimeout(()=>{renderColor();},delay);
    }
   
    
}
window.onload=function(){
    
    color_name.innerHTML="......"
  

}

let delay=100
 function startAnim(){
    delay= 100;
    color_name.innerHTML="......"
    renderColor();
 }