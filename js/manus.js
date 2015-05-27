$(document).ready(function(){

	// Get shoes from array described in products.js
	var shoes = products;
	//var filteredArray = [];

	// Generate products to showcase on products page
	function buildProductPage( category ){
		
		$.each( buildFilteredArray( category ), function( idx,val ){
			$("#products-list").append( buildItem( val ) );
		});
	}

	// Build the individual product item to inject into DOM
	function buildItem( object ){

		// Create new jQuery object to work with
		var item = $("<div></div>");

		// Add classes to this object
		item.addClass("item one column");

		// Add data to object
		var data = "<div class='title'>" + object.title + "</div>" + 
		"<p class='description'>" + object.description + "</p>" + 
		"<span class='price'> R " + object.price + "</span>" +
		"<div class='tags'></div>" +
		"<span class'button'>More Info</span>" +
		"<span class'button'>Add To Cart</span>" +
		"<img src='http://placehold.it/350x250' alt='" + object.image_alt + "'/>" +
		"</div>";

		item.append( data );

		// Append tags to the item
		var tagDiv = item.find(".tags");
		tagIterator( tagDiv, object.tags );

		return item;
	}

	function tagIterator( element,array ){
		$.each(array, function( idx,val ){
			element.append( "<span class='tag'>" + val + "</span>" );
		});
	}

	function filterbyCategory(){
		$(".category-link").click(function( e ){
			// Prevent default behaviour from clicking
			e.preventDefault();
			var cat_filter;

			// Rebuild the product page only products from the
			// chose category
			buildProductPage( cat_filter );

		});
	}

	// Build array with only filtered results
	function buildFilteredArray( filter ){
		var filteredArray = [];
		var count = 0;

		$.each( shoes, function( idx,val ){
			if ( val.category == filter ){
				filteredArray[count] = val;
				count += 1;
			}
		});

		return filteredArray;
	}


	// Only adds up total for fun
	function addToCart(){
		$(".add-to-cart").click(function(){
			//
		});
	}

	// Run functions
	buildProductPage("health");
	filterbyCategory();
});