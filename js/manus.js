$(document).ready(function(){

	var shoes = products;

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
		"<div class='tags'></div>"
		"<img src='http://placehold.it/350x250' alt='" + object.image_alt + "'/>" +
		"</div>";

		item.append( data );

		// Append tags to the item
		var tagDiv = item.find(".tags");
		tagIterator( tagDiv, object.tags );

		return item;
	}

	function tagIterator( element, array ){
		$.each(array, function( idx, val ){
			element.append( "<span>" + val + "</span>" );
		});
	}

	function filterbyCategory( e ){
		//
	}

	// Run functions
	buildProductPage();
});