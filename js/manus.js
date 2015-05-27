$(document).ready(function(){

	var shoes = products;
	var tags = $(".tags");

	function buildProductPage(){
		$.each(shoes, function( idx, val ){
			$("#latest-items").append( buildItem( idx,val ) );
		});
	}

	function buildItem( id, object ){
		// Create new jQuery object to work with
		var item = $("<div></div>");

		// Add classes to this object
		item.addClass("item one column");

		// Add data to object
		var data = "<div class='title'>" + object.title + "</div>" + 
		"<p class='description'>" + object.description + "</p>" + 
		"<span class='price'> R " + object.price + "</span>" +
		// "<div class='tags'>" + tagIterator( id, object.tags ) + "</div>"
		"<img src='http://placehold.it/350x250' alt='" + object.image_alt + "'/>" +
		"</div>";

		item.append( data );


		// Append tags to the item
		item.find(".tags");

		

		return item;
	}

	function tagIterator( id, array ){
		$.each(array, function( idx, val ){
			
		});
	}

	function filterbyCategory( e ){
		//
	}

	// Run functions
	buildProductPage();
});