
$("#btn").on("click",function(){
   var Check = true;
   $("input").each(function(){
    if($(this).val()==""){
        Check = false;
    }
   })
   if($("textarea").val()==="")
    Check = false;

    if(Check == true)
        alert("Thank you for your request, we will respond shortly.")
    else
        alert("Please fill out all forms.")
});