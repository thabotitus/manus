// Array of products

var products = [
	{
		"title": "Leather Loafers",
		"image_path" : "../images/products/males/formal/loafers/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : true,
		"category" : "formal",
		"tags" : [ "men","formal","loafer" ]
	},
	{
		"title": "Cool Catz",
		"image_path" : "../images/products/males/formal/loafers/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : true,
		"category" : "formal",
		"tags" : [ "men","formal","loafer" ]
	},
	{
		"title": "Suede Loafers",
		"image_path" : "../images/products/males/formal/loafers/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "formal",
		"tags" : [ "men","formal","loafer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/formal/monk_strap/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "formal",
		"tags" : [ "men","formal","monk strap" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/formal/monk_strap/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "formal",
		"tags" : [ "men","formal","monk strap" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/formal/monk_strap/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "formal",
		"tags" : [ "men","formal","monk strap" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/formal/oxfords/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "formal",
		"tags" : [ "men","formal","oxfords" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/formal/oxfords/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "formal",
		"tags" : [ "men","formal","oxfords" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/formal/oxfords/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "formal",
		"tags" : [ "men","formal","oxfords" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/safety/electric_hazard/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "safety",
		"tags" : [ "men","safety","electric-hazard" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/safety/electric_hazard/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "safety",
		"tags" : [ "men","safety","electric-hazard" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/safety/electric_hazard/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "safety",
		"tags" : [ "men","safety","electric-hazard" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/safety/hiking/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "safety",
		"tags" : [ "men","safety","hiking" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/safety/hiking/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "safety",
		"tags" : [ "men","safety","hiking" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/safety/hiking/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "safety",
		"tags" : [ "men","safety","hiking" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/safety/metatarsal/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "safety",
		"tags" : [ "men","safety","metatarsal" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/safety/metatarsal/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "safety",
		"tags" : [ "men","safety","metatarsal" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/safety/metatarsal/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "safety",
		"tags" : [ "men","safety","metatarsal" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/sport/basketball/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","basketball" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/sport/basketball/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","basketball" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/sport/basketball/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","basketball" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/sport/gym/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","gym" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/sport/gym/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","gym" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/sport/gym/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","gym" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/sport/soccer/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/sport/soccer/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/males/sport/soccer/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/females/formal/evening/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/females/formal/evening/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/females/formal/evening/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/females/formal/flat/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/females/formal/flat/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/females/formal/flat/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/females/formal/gladiators/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/females/formal/gladiators/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/females/formal/gladiators/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/females/safety/bella/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/females/safety/bella/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/females/safety/bella/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/females/safety/boots/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/females/safety/boots/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/females/safety/boots/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/females/safety/lemaitre/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/females/safety/lemaitre/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/females/safety/lemaitre/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/females/sport/basketball/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/females/sport/basketball/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/females/sport/basketball/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/females/sport/running/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/females/sport/running/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/females/sport/running/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/females/sport/sneakers/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/females/sport/sneakers/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Fourth",
		"image_path" : "../images/products/females/sport/sneakers/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet posuere tellus. Vestibulum convallis, leo pharetra sollicitudin viverra, tellus libero pulvinar leo, ut lobortis dui eros sit amet felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
		"price" : "250",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	}
]

