var MongoClient = require('mongodb').MongoClient
	, Server = require('mongodb').Server
	, ObjectId = require('mongodb').ObjectId;

var _id = new ObjectId("10cb4e505b314bde792f1072");

// var items = [
// 	{ token: 'hTYaHt', "project_id" : _id, "year" : 2015, "file" : "Taptik-EEHC7-AngelsShare-B001", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
// 	{ token: 'RUtbuo', "project_id" : _id, "year" : 2015, "file" : "Taptik-EEHC7-AngelsShare-B002", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
// 	{ token: 'YfHbVi', "project_id" : _id, "year" : 2015, "file" : "Taptik-EEHC7-AngelsShare-B003", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
// 	{ token: 'kcLGob', "project_id" : _id, "year" : 2015, "file" : "Taptik-EEHC7-AngelsShare-B004", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
// 	{ token: 'ZjjNTQ', "project_id" : _id, "year" : 2015, "file" : "Taptik-EEHC7-AngelsShare-B005", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
// 	{ token: 'VVSqyA', "project_id" : _id, "year" : 2015, "file" : "Taptik-EEHC7-AngelsShare-B006", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
// 	{ token: 'ehYdbT', "project_id" : _id, "year" : 2015, "file" : "Taptik-EEHC7-AngelsShare-B007", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
// 	{ token: 'yLoEFF', "project_id" : _id, "year" : 2015, "file" : "Taptik-EEHC7-AngelsShare-B009", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
// 	{ token: 'GqAoMR', "project_id" : _id, "year" : 2015, "file" : "Taptik-EEHC7-AngelsShare-B010", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
// 	{ token: 'kAbzXB', "project_id" : _id, "year" : 2015, "file" : "Taptik-EEHC7-AngelsShare-B011", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
// 	{ token: 'kkItCW', "project_id" : _id, "year" : 2015, "file" : "Taptik-EEHC7-AngelsShare-B012", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
// 	{ token: 'gvDIYa', "project_id" : _id, "year" : 2015, "file" : "Taptik-EEHC7-AngelsShare-B013", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
// 	{ token: 'suYArN', "project_id" : _id, "year" : 2015, "file" : "Taptik-EEHC7-AngelsShare-B014", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
// 	{ token: 'vqQhah', "project_id" : _id, "year" : 2015, "file" : "Taptik-EEHC7-AngelsShare-B015", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
// 	{ token: 'TUaTwP', "project_id" : _id, "year" : 2015, "file" : "Taptik-EEHC7-AngelsShare-B016", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
// 	{ token: 'diOhsf', "project_id" : _id, "year" : 2015, "file" : "Taptik-EEHC7-AngelsShare-B017", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
// 	{ token: 'ZJOICH', "project_id" : _id, "year" : 2015, "file" : "Taptik-EEHC7-AngelsShare-B018", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
// 	{ token: 'wJwlEl', "project_id" : _id, "year" : 2015, "file" : "Taptik-EEHC7-AngelsShare-B019", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
// 	{ token: 'zQesys', "project_id" : _id, "year" : 2015, "file" : "Taptik-EEHC7-AngelsShare-B020", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
// 	{ token: 'vzltcu', "project_id" : _id, "year" : 2015, "file" : "Taptik-EEHC7-AngelsShare-B021", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
// 	{ token: 'OAcRVE', "project_id" : _id, "year" : 2015, "file" : "Taptik-EEHC7-AngelsShare-B022", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
// 	{ token: 'vlhbqY', "project_id" : _id, "year" : 2015, "file" : "Taptik-EEHC7-AngelsShare-B023", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
// 	{ token: 'JsxHUC', "project_id" : _id, "year" : 2015, "file" : "Taptik-EEHC7-AngelsShare-B024", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 }
// ];

// var items = [
// 	{ token: 'ruOSDq', "project_id" : _id, "year" : 2015, "file" : "A1-Taptik-EEHC7-ShoppingWindows-NoBackground", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
// 	{ token: 'CwlcEh', "project_id" : _id, "year" : 2015, "file" : "A2-Taptik-EEHC7-Grating-NoBackground", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
// 	{ token: 'fBigCw', "project_id" : _id, "year" : 2015, "file" : "A3-Taptik-EEHC7-HoodOpen-NoBackground", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
// 	{ token: 'vFpJKW', "project_id" : _id, "year" : 2015, "file" : "D-Taptik-EEHC7-Loot-NoBackground", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
// 	{ token: 'kwBHuB', "project_id" : _id, "year" : 2015, "file" : "Taptik-Havana-AS-GridA4-Night-Youth-noback", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
// ];

var items = [
	{ token: 'AVRitA', "project_id" : _id, "year" : 2015, "file" : "C001-Taptik_EEHC7-FS1005", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
	{ token: 'wIDnIo', "project_id" : _id, "year" : 2015, "file" : "C002-Taptik_EEHC7-PF010", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
	{ token: 'uUATKw', "project_id" : _id, "year" : 2015, "file" : "C003-Taptik_EEHC7-PF027", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
	{ token: 'YoSwVL', "project_id" : _id, "year" : 2015, "file" : "C004-Taptik_EEHC7-PF017", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
	{ token: 'YWbIex', "project_id" : _id, "year" : 2015, "file" : "C005-Taptik_EEHC7-PF049", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
	{ token: 'cUwqOo', "project_id" : _id, "year" : 2015, "file" : "C006-Taptik_EEHC7-PF022", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
	{ token: 'BwYBsp', "project_id" : _id, "year" : 2015, "file" : "C007-Taptik_EEHC7-PF024", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
	{ token: 'fYlDht', "project_id" : _id, "year" : 2015, "file" : "C008-Taptik_EEHC7-PF042", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
	{ token: 'ShCDpZ', "project_id" : _id, "year" : 2015, "file" : "C009-Taptik_EEHC7-PF020", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
	{ token: 'bXLSjq', "project_id" : _id, "year" : 2015, "file" : "C010-Taptik_EEHC7-FS1007", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
	{ token: 'ROgstC', "project_id" : _id, "year" : 2015, "file" : "C011-Taptik_EEHC7-FS1014", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
	{ token: 'kDwOWI', "project_id" : _id, "year" : 2015, "file" : "C012-Taptik_EEHC7-PF018", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
	{ token: 'suGdmw', "project_id" : _id, "year" : 2015, "file" : "C013-Taptik_EEHC7-PF007", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
	{ token: 'yTrlde', "project_id" : _id, "year" : 2015, "file" : "C014-Taptik_EEHC7-PF001", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
	{ token: 'ARPTlN', "project_id" : _id, "year" : 2015, "file" : "C015-Taptik_EEHC7-PF016", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
	{ token: 'FGNfEw', "project_id" : _id, "year" : 2015, "file" : "C016-Taptik_EEHC7-PF046", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
	{ token: 'WeRboc', "project_id" : _id, "year" : 2015, "file" : "C017-Taptik_EEHC7-FS1006", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
	{ token: 'UbWect', "project_id" : _id, "year" : 2015, "file" : "C018-Taptik_EEHC7-PF015", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
	{ token: 'YvpUNv', "project_id" : _id, "year" : 2015, "file" : "C019-Taptik_EEHC7-PF028", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
	{ token: 'pIUWbW', "project_id" : _id, "year" : 2015, "file" : "C020-Taptik_EEHC7-PF033", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
	{ token: 'IyizGn', "project_id" : _id, "year" : 2015, "file" : "C021-Taptik_EEHC7-PF035", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
	{ token: 'meryGT', "project_id" : _id, "year" : 2015, "file" : "C022-Taptik_EEHC7-PF036", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
	{ token: 'WDcjoi', "project_id" : _id, "year" : 2015, "file" : "C023-Taptik_EEHC7-PF037", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
	{ token: 'iSmrxF', "project_id" : _id, "year" : 2015, "file" : "C024-Taptik_EEHC7-PF005", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
	{ token: 'YNFZRK', "project_id" : _id, "year" : 2015, "file" : "C025-Taptik_EEHC7-PF052", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
	{ token: 'CMDKIY', "project_id" : _id, "year" : 2015, "file" : "C026-Taptik_EEHC7-PF040", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
	{ token: 'eLLsCG', "project_id" : _id, "year" : 2015, "file" : "C027-Taptik_EEHC7-PF006", "alt" : "Elliott Erwitt Havana Club 7 Fellowship - Cuba 2015 Photography", "forsale" : false, "__v" : 0 },
];



// var mongoClient = new MongoClient(new Server('localhost', 27017));
MongoClient.connect("mongodb://localhost:27017/havana", function(err, db) {

	for (var i = 0; i < items.length; i++) {
		var item = items[i];
		console.log(item);
		db.collection("prints").insert(item);
	}
})
// mongoClient.open(function(err, mongoClient) {
//   var db1 = mongoClient.db("havana");
//   console.log(db1)
//   mongoClient.close();
// });