$(document).ready(function(){

	// Get shoes from array described in products.js
	var shoes = products;

	// Generate products to showcase on products page
	function buildProductPage( category ){
		// Clear all products first
		$(".item").remove();

		// if category is null return all the products
		// otherwise use the filtered array of products
		if(category == null){
			$.each( shoes, function( idx,val ){
				$("#products-list").append( buildItem( val ) );
			});
		}else{
			$.each( buildFilteredArray( category ), function( idx,val ){
				$("#products-list").append( buildItem( val ) );
			});
		}
	}

	// Build the individual product item to inject into DOM
	function buildItem( object ){

		// Create new jQuery object to work with
		var item = $("<div></div>");

		// Add classes to this object
		item.addClass("item one column");

		// Add data to object
		var data = "<div class='image-container'>" + 
			"<img src='" + object.image_path +  "' alt='" + object.image_alt + "'/>" +
			"</div>" +
			"<div class='title'><h4>" + object.title + "</h4></div>" + 
			"<p class='description'>" + object.description + "</p>" + 
			"<span class='price'> R " + object.price + "</span>" +
			"<div class='tags'></div>" +
			"<div class='actions'>" + 
			"<span class='button more-info'>More Info</span>" +
			"<span class='button add-to-cart'>Add To Cart</span>" +
			"</div>" +
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
			// Get the name of the category
			var cat_filter = $(this).text().toLowerCase();

			// Show all products if "all" is picked
			if( cat_filter == "all" ){
				cat_filter = null;
			}

			$("#filters .current").removeClass("current");
			$(this).parent().addClass("current");

			// Rebuild the product page showing only products 
			// from the chosen category
			buildProductPage( cat_filter );
			updatePageHeader( cat_filter );

		});
	}

	// Update page heading when category is selected
	function updatePageHeader( header ){
		$("#header").empty();
		$("#header").append( header );
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

	// Validate Form
	function validateForm(){

		// Get the contact form
		var contactForm = $("#contact-form");
		var fields = $("#contact-form input");
		var formInvalid = false;

		// Loop through each field and see if there's a value
		$("#contact-form input[type='submit']").click(function( e ){
			e.preventDefault();

			$.each(fields, function( idx, val ){
				if ( val.value == "" ){
					formInvalid = true;
				}
			});

			if ( formInvalid ){
				$("#invalid").show();
			}else{
				$(location).attr('href',"../pages/sign-up-success.html");
			}
		});
	}

	// Run functions
	buildProductPage();
	filterbyCategory();
	validateForm();
});