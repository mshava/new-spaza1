$('document').ready(function(){
	$('#searchProducts').keydown(function(){
		var searchValue = $('#searchProducts').val();
		$.get('/products/search/' + searchValue,function(results){
			$('#searchProducts').html(results);
		});
	});
};