// Array of products

var products = [
	{
		"title": "Leather Loafers",
		"image_path" : "../images/products/males/formal/loafers/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Tucker Venetian' Loafer (men)",
		"price" : "1250.50",
		"available" : true,
		"category" : "formal",
		"tags" : [ "men","formal","loafer" ]
	},
	{
		"title": "Cool Catz",
		"image_path" : "../images/products/males/formal/loafers/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "'Mopsa' Driving Shoe (men).",
		"price" : "999.99",
		"available" : true,
		"category" : "formal",
		"tags" : [ "men","formal","loafer" ]
	},
	{
		"title": "Suede Loafers",
		"image_path" : "../images/products/males/formal/loafers/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "'Nydausen' Suede Driving Shoe (men).",
		"price" : "1199.99",
		"available" : false,
		"category" : "formal",
		"tags" : [ "men","formal","loafer" ]
	},
	{
		"title": "One Strap",
		"image_path" : "../images/products/males/formal/monk_strap/1.png",
		"image_alt" : "Description of Shoe",
		"description" : " 'Marko Monk' strap loafer (men).",
		"price" : "1325.99",
		"available" : false,
		"category" : "formal",
		"tags" : [ "men","formal","monk strap" ]
	},
	{
		"title": "Brown single Strap",
		"image_path" : "../images/products/males/formal/monk_strap/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Marko's Veroulu beige single strap (men).",
		"price" : "1500.00",
		"available" : false,
		"category" : "formal",
		"tags" : [ "men","formal","monk strap" ]
	},
	{
		"title": "Double Strap",
		"image_path" : "../images/products/males/formal/monk_strap/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Marko' Monk Double Strap (men).",
		"price" : "2500.00",
		"available" : false,
		"category" : "formal",
		"tags" : [ "men","formal","monk strap" ]
	},
	{
		"title": "Black Big Boy",
		"image_path" : "../images/products/males/formal/oxfords/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Park Avenue' Oxford (men).",
		"price" : "2299.99",
		"available" : false,
		"category" : "formal",
		"tags" : [ "men","formal","oxfords" ]
	},
	{
		"title": "The wing Man",
		"image_path" : "../images/products/males/formal/oxfords/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "'Great Jones' WingTip (men).",
		"price" : "2350.99",
		"available" : false,
		"category" : "formal",
		"tags" : [ "men","formal","oxfords" ]
	},
	{
		"title": "Brandon exclusive",
		"image_path" : "../images/products/males/formal/oxfords/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Brandon' Cap Toe (men).",
		"price" : "2900",
		"available" : false,
		"category" : "formal",
		"tags" : [ "men","formal","oxfords" ]
	},
	{
		"title": "The choice",
		"image_path" : "../images/products/males/safety/electric_hazard/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Slip resistant Black (men).",
		"price" : "1300.00",
		"available" : false,
		"category" : "safety",
		"tags" : [ "men","safety","electric-hazard" ]
	},
	{
		"title": "Men at work",
		"image_path" : "../images/products/males/safety/electric_hazard/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Waterproof Black (men).",
		"price" : "1250.00",
		"available" : false,
		"category" : "safety",
		"tags" : [ "men","safety","electric-hazard" ]
	},
	{
		"title": "The heavy metal",
		"image_path" : "../images/products/males/safety/electric_hazard/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "WZS660 Black 6 inch Pull-on steel toe (men).",
		"price" : "1500.00",
		"available" : false,
		"category" : "safety",
		"tags" : [ "men","safety","electric-hazard" ]
	},
	{
		"title": "The hiker",
		"image_path" : "../images/products/males/safety/hiking/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Crestbound Gore-Tex.",
		"price" : "2300.00",
		"available" : false,
		"category" : "safety",
		"tags" : [ "men","safety","hiking" ]
	},
	{
		"title": "The King",
		"image_path" : "../images/products/males/safety/hiking/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Pulsate Waterproof.",
		"price" : "1400.00",
		"available" : false,
		"category" : "safety",
		"tags" : [ "men","safety","hiking" ]
	},
	{
		"title": "The Fitter",
		"image_path" : "../images/products/males/safety/hiking/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "the best fitting shoe.",
		"price" : "1330.99",
		"available" : false,
		"category" : "safety",
		"tags" : [ "men","safety","hiking" ]
	},
	{
		"title": "Metatarsal",
		"image_path" : "../images/products/males/safety/metatarsal/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "The protector.",
		"price" : "2500.00",
		"available" : false,
		"category" : "safety",
		"tags" : [ "men","safety","metatarsal" ]
	},
	{
		"title": "The Engenior",
		"image_path" : "../images/products/males/safety/metatarsal/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Ankle and Metatarsal guard",
		"price" : "2500.00",
		"available" : false,
		"category" : "safety",
		"tags" : [ "men","safety","metatarsal" ]
	},
	{
		"title": "The one",
		"image_path" : "../images/products/males/safety/metatarsal/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "High tech and waterproof.",
		"price" : "2600.00",
		"available" : false,
		"category" : "safety",
		"tags" : [ "men","safety","metatarsal" ]
	},
	{
		"title": "Lebron James",
		"image_path" : "../images/products/males/sport/basketball/1.png",
		"image_alt" : "Description of Shoe",
		"description" :" Nike'Trillion Dollar Man.",
		"price" : "6300.00",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","basketball" ]
	},
	{
		"title": "John Wall",
		"image_path" : "../images/products/males/sport/basketball/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Adidas J Wall Sky Blue.",
		"price" : "6500.00",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","basketball" ]
	},
	{
		"title": "Derek Rose",
		"image_path" : "../images/products/males/sport/basketball/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Adidas D. Rose Black.",
		"price" : "5630",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","basketball" ]
	},
	{
		"title": "Nike",
		"image_path" : "../images/products/males/sport/gym/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Air Max 2015 Men's Running shoe.",
		"price" : "1500.00",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","gym" ]
	},
	{
		"title": "DMX",
		"image_path" : "../images/products/males/sport/gym/2.png",
		"image_alt" : "Description of Shoe",
		"description" : " Breathable Technology, air cushion.",
		"price" : "600.00",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","gym" ]
	},
	{
		"title": "Nike",
		"image_path" : "../images/products/males/sport/gym/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Men's Dual Fusion ST 2",
		"price" : "700.00",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","gym" ]
	},
	{
		"title": "Nike",
		"image_path" : "../images/products/males/sport/soccer/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Mercurial Vapor X FG.",
		"price" : "1500.00",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Adidas",
		"image_path" : "../images/products/males/sport/soccer/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Predator LZ TRX FG.",
		"price" : "1600.00",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Puma",
		"image_path" : "../images/products/males/sport/soccer/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "EVOSPEED 1.2 SL.",
		"price" : "1300.00",
		"available" : false,
		"category" : "sport",
		"tags" : [ "men","sport","soccer" ]
	},
	{
		"title": "Promo",
		"image_path" : "../images/products/females/formal/evening/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Evening High heels shoes.",
		"price" : "700.00",
		"available" : false,
		"category" : "formal",
		"tags" : [ "women","formal","evening" ]
	},
	{
		"title": "Coquette of Las Vegas",
		"image_path" : "../images/products/females/formal/evening/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Clear heels .",
		"price" : "2500.00",
		"available" : false,
		"category" : "formal",
		"tags" : [ "women","formal","evening" ]
	},
	{
		"title": "Liliane JESSE",
		"image_path" : "../images/products/females/formal/evening/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Large Ankle Open toe and ankle strap.",
		"price" : "1500.00",
		"available" : false,
		"category" : "formal",
		"tags" : [ "women","formal","evening" ]
	},
	{
		"title": "Ollio Ballet Flat",
		"image_path" : "../images/products/females/formal/flat/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Cute Comfort Loafers suede.",
		"price" : "300.00",
		"available" : false,
		"category" : "formal",
		"tags" : [ "women","formal","flat" ]
	},
	{
		"title": "Flat For women",
		"image_path" : "../images/products/females/formal/flat/2.png",
		"image_alt" : "Description of Shoe",
		"description" : " Different colours formal flat.",
		"price" : "250.00",
		"available" : false,
		"category" : "formal",
		"tags" : [ "women","formal","flat" ]
	},
	{
		"title": "Sweet Flat",
		"image_path" : "../images/products/females/formal/flat/3.png",
		"image_alt" : "Description of Shoe",
		"description" : " Tough Girl Summer flat shoe.",
		"price" : "500.00",
		"available" : false,
		"category" : "formal",
		"tags" : [ "women","formal","flat" ]
	},
	{
		"title": "Gladiator Sandal",
		"image_path" : "../images/products/females/formal/gladiators/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Madden Girl Oppal sandal.",
		"price" : "600.00",
		"available" : false,
		"category" : "formal",
		"tags" : [ "women","formal","gladiators" ]
	},
	{
		"title": "Gladiator",
		"image_path" : "../images/products/females/formal/gladiators/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Spring Sandal.",
		"price" : "800.00",
		"available" : false,
		"category" : "formal",
		"tags" : [ "women","formal","gladiators" ]
	},
	{
		"title": "Summer Time",
		"image_path" : "../images/products/females/formal/gladiators/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "The fashionista.",
		"price" : "650.00",
		"available" : false,
		"category" : "formal",
		"tags" : [ "women","formal","gladiators" ]
	},
	{
		"title": "Bella",
		"image_path" : "../images/products/females/safety/bella/1.png",
		"image_alt" : "Description of Shoe",
		"description" : " Bata Industrial gum boots.",
		"price" : "200.00",
		"available" : false,
		"category" : "safety",
		"tags" : [ "women","safety","bella" ]
	},
	{
		"title": "Safe and sound",
		"image_path" : "../images/products/females/safety/bella/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "slip resistant.",
		"price" : "250.00",
		"available" : false,
		"category" : "safety",
		"tags" : [ "women","safety","bella" ]
	},
	{
		"title": "Elegant ladies",
		"image_path" : "../images/products/females/safety/bella/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Ideal For Exposure to sharp material.",
		"price" : "250.00",
		"available" : false,
		"category" : "safety",
		"tags" : [ "women","safety","bella" ]
	},
	{
		"title": "Lightwear",
		"image_path" : "../images/products/females/safety/boots/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Everyday business hazards.",
		"price" : "250.00",
		"available" : false,
		"category" : "safety",
		"tags" : [ "women","safety","boots" ]
	},
	{
		"title": "The hard worker",
		"image_path" : "../images/products/females/safety/boots/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Bad weather boot.",
		"price" : "400.00",
		"available" : false,
		"category" : "safety",
		"tags" : [ "women","safety","boots" ]
	},
	{
		"title": "Bickz BI 753",
		"image_path" : "../images/products/females/safety/boots/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "The safest for the ladies.",
		"price" : "500.00",
		"available" : false,
		"category" : "safety",
		"tags" : [ "women","safety","boots" ]
	},
	{
		"title": "Lemaitre Pisces",
		"image_path" : "../images/products/females/safety/lemaitre/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "The chain saw.",
		"price" : "400.00",
		"available" : false,
		"category" : "safety",
		"tags" : [ "women","safety","lemaitre" ]
	},
	{
		"title": "Lemaitre sagittarius",
		"image_path" : "../images/products/females/safety/lemaitre/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "The comfort.",
		"price" : "350.00",
		"available" : false,
		"category" : "safety",
		"tags" : [ "women","safety","lemaitre" ]
	},
	{
		"title": "Lemaitre Alice",
		"image_path" : "../images/products/females/safety/lemaitre/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Ladies Diamond lace up shoe.",
		"price" : "250.00",
		"available" : false,
		"category" : "safety",
		"tags" : [ "women","safety","lemaitre" ]
	},
	{
		"title": "Nike",
		"image_path" : "../images/products/females/sport/basketball/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Hyperdunk 2014 Red for Ladies.",
		"price" : "2000.00",
		"available" : false,
		"category" : "sport",
		"tags" : [ "women","sport","basketball" ]
	},
	{
		"title": "Adidas",
		"image_path" : "../images/products/females/sport/basketball/2.png",
		"image_alt" : "Description of Shoe",
		"description" : " Crazy Strike.",
		"price" : "2500.00",
		"available" : false,
		"category" : "sport",
		"tags" : [ "women","sport","basketball" ]
	},
	{
		"title": "Reebok",
		"image_path" : "../images/products/females/sport/basketball/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "The rebound.",
		"price" : "1900.00",
		"available" : false,
		"category" : "sport",
		"tags" : [ "women","sport","basketball" ]
	},
	{
		"title": "Nike",
		"image_path" : "../images/products/females/sport/running/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Free 5.0 (G.S) pink foil black cool.",
		"price" : "700.00",
		"available" : false,
		"category" : "sport",
		"tags" : [ "women","sport","running" ]
	},
	{
		"title": "Adidas",
		"image_path" : "../images/products/females/sport/running/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "adifast SL-K.",
		"price" : "600.00",
		"available" : false,
		"category" : "sport",
		"tags" : [ "women","sport","running" ]
	},
	{
		"title": "Reebok",
		"image_path" : "../images/products/females/sport/running/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Ladies ZigTech shark.",
		"price" : "700.00",
		"available" : false,
		"category" : "sport",
		"tags" : [ "women","sport","running" ]
	},
	{
		"title": "Puma",
		"image_path" : "../images/products/females/sport/sneakers/1.png",
		"image_alt" : "Description of Shoe",
		"description" : "Drift Cat.",
		"price" : "500.00",
		"available" : false,
		"category" : "sport",
		"tags" : [ "women","sport","sneakers" ]
	},
	{
		"title": "Puma",
		"image_path" : "../images/products/females/sport/sneakers/2.png",
		"image_alt" : "Description of Shoe",
		"description" : "Belerinki.",
		"price" : "450.00",
		"available" : false,
		"category" : "sport",
		"tags" : [ "women","sport","sneakers" ]
	},
	{
		"title": "Converse",
		"image_path" : "../images/products/females/sport/sneakers/3.png",
		"image_alt" : "Description of Shoe",
		"description" : "Black.",
		"price" : "600.00",
		"available" : false,
		"category" : "sport",
		"tags" : [ "women","sport","sneakers" ]
	}
]

