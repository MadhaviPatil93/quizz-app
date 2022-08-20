function validate(){
   var first=document.getElementById("a").value;
    var second=document.getElementById("b").value;

    if(first=="Madhavi" && second=="123"){
        
        alert("form is successfully submitted");
        window.open("/bigtime.html","_self");
       
    }

    else{
        alert("Username and Password is Incorrect");
    }
}

