window.onload=function(){

    
    var table = document.getElementById('table');
}

const validate=()=>{ 

    var name = document.getElementById('name').value;
    var mark = document.getElementById('mark').value;
    if(name==""||mark==""){
        alert("Name or mark not filled!")
        return 
    }
    let data = document.createElement("td");
    let tr=document.createElement("tr")
    data.innerHTML="Name:"+name+" , Mark: "+mark
    tr.appendChild(data)
    table.appendChild(tr)

    // document.body.appendChild(data);
    console.log(document.getElementsByTagName('body').innerHTML) ;

    return false;
}

