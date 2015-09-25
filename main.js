var path = require("path");
var Sealious = require("sealious");
var DatastoreMysql = require("sealious-datastore-mysql");

require("./field_types/field_type.category.js");
require("./field_types/field_type.subcategory.js");

Sealious.init();
/*
Sealious.ConfigManager.set_default_config(
	"datastore_chip_name", 
	{}
);*/

var www_server = Sealious.ChipManager.get_chip("channel", "www_server");

var places = new Sealious.ChipTypes.ResourceType({name: "places",
	fields:[
	    {name: "name", type: "text"},
	    //zmiana na int z text
	    {name: "address", type: "int"},
	    {name: "city", type: "text"},
	    {name: "country", type: "text"},

	    //dodane
	    {name: "region", type:"text"},
	    
	    {name: "category", type: "category"},
	    {name: "subcategory", type: "subcategory"},
	    
	    {name: "description", type: "text"},
	    {name: "votes", type: "int"},
	    {name: "sum", type: "int"},
	    {name: "globalRate", type: "int"},
	    {name: "myRate", type: "int"},
	    {name: "longitude", type: "float", required: true}, //52 dlugosc
	    {name: "latitude", type: "float", required: true},  //16 szerokosc
	    //files
	    {name: "image", type: "file", params: {no_file_value: "/img/places/default.jpg"}},
	    {name: "image_name", type: "text"},
	    
	    //to compare
	    {name: "owner_id", type: "text"}
	],
	access_strategy: "public"
});

var students = new Sealious.ChipTypes.ResourceType({name: "students",
	fields:[
	    {name: "name", type: "text"},
	    //zmiana na int z text
	    {name: "age", type: "int"},
	   
	],
	access_strategy: "public"
});



var rest = Sealious.ChipManager.get_chip("channel", "rest");
rest.add_path("/api/v1/places", "places");
rest.add_path("/api/v1/students", "students");

www_server.static_route(path.resolve( __dirname, "./public"), "");

//DatastoreMysql.start();

Sealious.start();