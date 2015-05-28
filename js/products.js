// Array of products

var products = [
	{
		"title": "Leather Loafers",
		"image_path" : "../images/products/males/formal/loafers/loafer1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : true,
		"category" : "formal",
		"tags" : [ "men","formal","loafer" ]
	},
	{
		"title": "Cool Catz",
		"image_path" : "../images/products/males/formal/loafers/loafer2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : true,
		"category" : "formal",
		"tags" : [ "men","formal","loafer" ]
	},
	{
		"title": "Suede Loafers",
		"image_path" : "../images/products/males/formal/loafers/loafer3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "formal",
		"tags" : [ "men","formal","loafer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/formal/monk_strap/monk1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "formal",
		"tags" : [ "men","formal","monk strap" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/formal/monk_strap/monk2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "formal",
		"tags" : [ "men","formal","monk strap" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/formal/monk_strap/monk3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "formal",
		"tags" : [ "men","formal","monk strap" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/formal/oxfords/oxfords1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "formal",
		"tags" : [ "men","formal","oxfords" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/formal/oxfords/oxfords2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "formal",
		"tags" : [ "men","formal","oxfords" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/formal/oxfords/oxfords3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "formal",
		"tags" : [ "men","formal","oxfords" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/safety/electric_hazard/electric_hazard1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "safety",
		"tags" : [ "men","safety","electric-hazard" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/safety/electric_hazard/electric_hazard2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "safety",
		"tags" : [ "men","safety","electric-hazard" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/safety/electric_hazard/electric_hazard3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "safety",
		"tags" : [ "men","safety","electric-hazard" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/safety/hiking/hiking1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "safety",
		"tags" : [ "men","safety","hiking" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/safety/hiking/hiking2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "safety",
		"tags" : [ "men","safety","hiking" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/safety/hiking/hiking3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "safety",
		"tags" : [ "men","safety","hiking" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/safety/metatarsal/metatarsal1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "safety",
		"tags" : [ "men","safety","metatarsal" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/safety/metatarsal/metatarsal2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "safety",
		"tags" : [ "men","safety","metatarsal" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/safety/metatarsal/metatarsal3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "safety",
		"tags" : [ "men","safety","metatarsal" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/sport/basketball/basketball1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","basketball" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/sport/basketball/basketball2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","basketball" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/sport/basketball/basketball3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","basketball" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/sport/gym/gym1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","gym" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/sport/gym/gym2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","gym" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/sport/gym/gym3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","gym" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/sport/soccer/soccer1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/sport/soccer/soccer2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/sport/soccer/soccer3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	}
]

