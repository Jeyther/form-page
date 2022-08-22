read();

function read()
{
	oData        = new Object();	
	oData.action = "read";
    
	$.ajax({
		type: "POST",
		url: "https://techo.org/denuncia/controller/controller.php",
		dataType: "json",
		data: oData,
		success: function(response)
		{	
			$('#listdenuncias').html(response['results']);
			console.log(response['results']);
		}
	});	
}