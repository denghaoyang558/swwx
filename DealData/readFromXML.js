/**
 * 
 */

var readFromXML = function(_filename) {

	var path = ""; // 路径
	var filename = path + "game_" + string(time()) + _filename; // 文件名

	var gameData = {
		"GameInfo" : {
			"dataID" : "GAMEDATA",
			"content" : []
		},
		"MapData" : {
			"dataID" : "MAPDATA",
			"content" : []
		},
		"EventData" : {
			"dataID" : "EVENTDATA",
			"content" : []
		},
		"SamllGameData" : {
			"dataID" : "SAMLLGAME",
			"content" : []
		}
	};
	// 文档根节点变量
	var root;
	/**
	 * 从xml文件中读取数据到json对象中
	 */
	var _readDataFromXML = function() {
		// 获得xml文档对象
		var xmlDoc = checkXMLDocObj(filename);
		// 获得文档根节点
		root = xmlDoc.documentElement;
		// 读取数据
		readGameInfo(root);
		readMapData(root);
		readEventData(root);
		readSmallData(root);
		// 返回游戏数据
		return gameData;
	}
	/**
	 * 读取游戏基本数据
	 */
	var readGameInfo = function(root) {
		//
		var gameInfo = {
			"dataID" : "gameInfo"
		};
		var roleInfo = {
			"dataID" : "roleInfo"
		};
		var mapInfo = {
			"dataID" : "mapInfo"
		};

		// 基本信息
		gameInfo["gameName"] = xmlDoc.documentElement
				.getElementsByTagName("GameInfo")
				.getElementsByTagName("gameName").text();
		gameInfo["gameType"] = xmlDoc.documentElement
				.getElementsByTagName("GameInfo")
				.getElementsByTagName("gameType").text();
		gameInfo["roleNum"] = xmlDoc.documentElement
				.getElementsByTagName("GameInfo")
				.getElementsByTagName("roleNum").text();

		//
		roleInfo["roleName"] = xmlDoc.documentElement
				.getElementsByTagName("RoleInfo")
				.getElementsByTagName("roleName").text();
		roleInfo["roleResource"] = xmlDoc.documentElement
				.getElementsByTagName("RoleInfo")
				.getElementsByTagName("roleResource").text();
		roleInfo["roleUrl"] = xmlDoc.documentElement
				.getElementsByTagName("RoleInfo")
				.getElementsByTagName("roleUrl").text();

		//
		mapInfo["mapName"] = xmlDoc.documentElement
				.getElementsByTagName("MapInfo")
				.getElementsByTagName("mapName").text();
		mapInfo["mapSize"] = xmlDoc.documentElement
				.getElementsByTagName("MapInfo")
				.getElementsByTagName("mapSize").text();
		mapInfo["mapEditGirdSiz"] = xmlDoc.documentElement
				.getElementsByTagName("MapInfo")
				.getElementsByTagName("mapEditGirdSiz").text();
		mapInfo["bgUrl"] = xmlDoc.documentElement
				.getElementsByTagName("MapInfo").getElementsByTagName("bgUrl")
				.text();
		mapInfo["bgName"] = xmlDoc.documentElement
				.getElementsByTagName("MapInfo").getElementsByTagName("bgName")
				.text();

		// 将数据赋到总数据表中
		gameData["GameInfo"]["content"][0] = gameInfo;
		gameData["GameInfo"]["content"][1] = roleInfo;
		gameData["GameInfo"]["content"][2] = mapInfo;

	}

	/**
	 * 读取地图数据
	 */
	var readMapData = function(root) {

		var MapData = xmlDoc.documentElement.getElementsByTagName("MapData");

		mapData = {
			"dataID" : "mapData"
		}

		for (var i = 0; i < MapData.length; i++) {
			// 从xml文档树中获取数据
			mapData["curLevel"] = MapData[i].getElementsByTagName("curLevel")
					.text();
			mapData["location"]["location_x"] = MapData[i]
					.getElementsByTagName("location")
					.getElementsByTagName("locationX").text();
			mapData["location"]["location_y"] = MapData[i]
					.getElementsByTagName("location")
					.getElementsByTagName("locationY").text();
			mapData["segmentName"] = MapData[i]
					.getElementsByTagName("segmentName").text();
			mapData["segmentUrl"] = MapData[i]
					.getElementsByTagName("segmentUrl").text();

			// 赋值
			gameData["MapData"]["content"][i] = mapData;
		}
	}

	/**
	 * 读取事件数据
	 */
	var readEventData = function(root) {

		var EventData = xmlDoc.documentElement
				.getElementsByTagName("EventData");

		eventData = {
			"dataID" : "EventData"
		}

		for (var i = 0; i < MapData.length; i++) {
			// 从xml文档树中获取数据
			mapData["location"]["location_x"] = EventData[i]
					.getElementsByTagName("location")
					.getElementsByTagName("locationX").text();
			mapData["location"]["location_y"] = EventData[i]
					.getElementsByTagName("location")
					.getElementsByTagName("locationY").text();
			mapData["isRoad"] = EventData[i].getElementsByTagName("isRoad")
					.text();
			mapData["eventName"] = EventData[i]
					.getElementsByTagName("eventName").text();
			mapData["pre_condition"] = EventData[i]
					.getElementsByTagName("pre_condition").text();
			mapData["eventConten"] = EventData[i]
					.getElementsByTagName("eventConten").text();
			// 赋值
			gameData["EventData"]["content"][i] = eventData;
		}

	}

	/**
	 * 读取小游戏数据
	 */
	var readSmallData = function(root) {

	}
	/**
	 * 私有方法，加载xml文档
	 */
	var loadXML = function(xmlFile) {

		var xmlDoc;

		if (window.ActiveXObject) {
			xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
			xmlDoc.async = false;
			xmlDoc.load(xmlFile);
		} else if (document.implementation
				&& document.implementation.createDocument) {
			xmlDoc = document.implementation.createDocument('', '', null);
			xmlDoc.load(xmlFile);
		} else {
			return null;
		}

		return xmlDoc;
	}

	/**
	 * 对xml对象进行判断
	 */
	var checkXMLDocObj = function(xmlFile) {

		var xmlDoc = loadXML(xmlFile);
		if (xmlDoc == null) {
			alert('您的浏览器不支持xml文件读取,请更换浏览器!');
			window.location.href = ""; // 页面重定向
		}
		return xmlDoc;
	}
}

/**
 * 公有方法 外部获取游戏数据
 */
readFromXML.prototype.getGameData = function() {
	_readDataFromXML();
	return gameData;
}

// 实例化
// var readData = new readFromXML("fileName");
// var data = readData.getGameData();
