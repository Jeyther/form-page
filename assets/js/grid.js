read();

$("#btn-process").click(function() {
	process();
});

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
			$('#listagem').html(response['results']);
			console.log(response['results']);
			$('#example').DataTable({
				"language": {
						  "url": "https://cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
				}
			  });
		}
	});	
}

function process()
{
	var checkeds = new Array();
	$.each($("input[name='checks']:checked"), function(){
		checkeds.push($(this).attr('id'));
	});

    let country = $('#paises').val();
	let type = 'process';

	$.ajax({
		type: "POST",
		url: "https://techo.org/denuncia/controller/controller.php",
		dataType: "json",
		data: {ids: checkeds, pais: country, action: type},
		success: function(response)
		{	
			console.log(response);
			$.confirm({
				title: 'Alerta de Seguridad',
				content: response['message'],
				buttons: {
					ok: function(){
						location.href = "https://techo.org/denuncia/grid.html";
					}
				}
			});
		}
	});	
}