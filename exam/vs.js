
function validate(event)
{ 
    var f1=document.getElementById("firstname");
    // if(f1.value="")
    // {
        event.preventDefault();
        document.getElementById("p1").innerHtml="Firstname not blank";
       

    //}
    var f2=document.getElementById("lastname");
    if(f1.value=" ")
    {
        getElementById("p2").innerHtml="lastname not blank";
    }
    var v1=RegEx (/^[A-z0-9][A-z0-9@]/);
    var v1=document.getElementById("email");
    if(RegEx.value==email)
    {
        getElementById("p4").innerHtml="you Entered valid email";
    }
    var f1=document.getElementById("password");    
    {
        var pwd;
        getElementById("p5").innerHtml="password";
        if(pwd.lenth()<=8)
        getElementById("p5").innerHtml="The password contains 8 characters";
        
    }
    var pwd1=document.getElementById("confirmpassword");

    if(pwd==pwd1)
    {
        getElementById("p6").innerHtml="password entered is matched";
    }

    }

