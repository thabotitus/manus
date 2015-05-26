$(document).ready(function(){

	var shoes = products;

	function buildProductPage(){
		$.each(shoes, function( idx, val ){
			$("#latest-items").append( buildItem( val ) );
		});
	}

	function buildItem( object ){
		var item = "<div class='item one column'>" + 
		"<div class='title'>" + object.title + "</div>" + 
		"<p class='description'>" + object.description + "</p>" + 
		"<span class='price'> R " + object.price + "</span>" +
		"<img src='http://placehold.it/350x250' alt='" + object.image_alt + "'/>" +
		"</div>";

		return item;
	}

	// Run functions
	buildProductPage();
});