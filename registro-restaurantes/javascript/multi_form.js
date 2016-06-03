function show_next(id,nextid,baricon)
{
  var ele=document.getElementById(id).getElementsByTagName("input");
  var error=0;
  for(var i=0;i<ele.length;i++)
  {
    if(ele[i].type=="text" && ele[i].value=="")
    {
      error++;
    }
  }

  if(error>=0)
  {
    document.getElementById("register-personal").style.display="none";
    document.getElementById("register-restaurant").style.display="none";
    $("#"+nextid).fadeIn();
    //document.getElementById("register-restaurant").style.setProperty ("display", "flex", "important");
    document.getElementById(baricon).style.backgroundColor="yellow";
    document.getElementById(baricon).style.color="white";
  }
  else
  {
    alert("LLENE TODOS LOS CAMPOS");
  }
}

function show_prev(previd,baricon)
{
  document.getElementById("register-personal").style.display="none";
  document.getElementById("register-restaurant").style.display="none";
  $("#"+previd).fadeIn();
  document.getElementById(baricon).style.backgroundColor="white";
  document.getElementById(baricon).style.color="yellow";
}
