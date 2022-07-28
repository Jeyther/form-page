
function GrabarUsuario()
{
	oData        = new Object();	
	oData.action = "saveData";
	oData.nombre = $('#nombre').val(); 
		
	$.ajax({
				type: "POST",
				url: "../controller/controller.php",
				dataType: "json",
				data: oData,
				success: function(oData)
				{	
					
				}
			});	
}