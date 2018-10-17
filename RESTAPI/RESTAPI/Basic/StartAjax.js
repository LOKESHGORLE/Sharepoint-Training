$(document).ready(function () {
    alert("hi entered loop");
    $("#GetData").click(function () {
        alert("grf");
        $("#TestData").css('color', 'red');
        
    });

    $("#CallAjax").click(function() {
             
         AjaxCall();
    });

       
   

});

function AjaxCall() {
    
    $.ajax({
        url: 'StartService.asmx/HelloWorld',
        type: 'POST',
        dataType: 'json',
        async: true,
        contentType: 'application/json;charset="utf-8"',
        //contentType: "application/json",
        //datatype: "json",
        //var dat : JQuery.parse(data),
        success: function (data) {
            alert(data.d)
        }

    });

}


