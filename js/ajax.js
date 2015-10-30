$('document').ready(function(){
	$('#searchBar').keypress(function(){
		var searchValue = $('#searchBar').val;
		
		$('#productSearchBar').keydown(function(){
			var searchValue = $('#productSearchBar').val();
			$.get('/products/search/' + searchValue, function(results){
				$('#productList').html(results);
			});
		});
	});
};