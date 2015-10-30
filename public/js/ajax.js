$('document').ready(function(){
	

	$("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });


		$('#productSearchBar').keydown(function(){
			var searchValue = $('#productSearchBar').val();
			$.get('/products/search/' + searchValue, function(results){
				$('#productList').html(results);
			});
		});
});