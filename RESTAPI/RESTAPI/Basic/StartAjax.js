$(document).ready(function () {
    alert("hi entered loop");
    $("#GetData").click(function () {
        alert("grf");
        $("#TestData").css('color', 'red');
        $.ajax({url: 'StartService.asmx/HelloWorld',
            type: 'post',
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
    });
   

});



//function function11()
//{
    
//    );
//    // $("#TestData").css('color', 'red'  );
//}

   
    //$("#GetData").click() {
    //    $("#TestData").attr{ 'style': 'color:red;' }
    //}