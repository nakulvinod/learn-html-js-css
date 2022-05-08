function change_color(){
    let arr =["red","yellow","green"]
    let elem=document.getElementById("box")
    let rand=Math.ceil(Math.random()*10 )
    rand=rand%3
    let rand1=Math.ceil(Math.random()*10 )
    rand1=rand%3
    if(rand1==2){
        rand1++
        
    }
    console.log(rand,rand1)

    elem.style.background =arr[rand]
    
}
