/**
 * 保存数据到xml文件中
 */

document.write("<script language=javascript src='log_de_factory.js'></script");

var saveToXML = function(_filename) {

	var path = ""; // 路径
	var filename = path + "game_" + string(time()) + _filename; // 文件名
	var gameData; // xml文档对象根节点

	/**
	 * 创建xml文档
	 * 
	 */
	var _createXML = function() {
		var xmldoc = new ActiveXObject("Microsoft.XMLDOM");
		xmldoc.async = false;
		xmldoc.load(filename);

		var temp = xmldoc.createProcessingInstruction("xml",
				"version='1.0' encoding='gb2312'"); // 创建声明
		xmldoc.appendChild(temp); // 添加声明

		// 添加根节点
		gameData = xmlDoc.createElement("GameData"); // 根节点
		gameData.SetAttribute("dataID", "gameData");
		xmldoc.appendChild(gameData);
	}

	/**
	 * 保存游戏基本数据
	 */
	var _saveGameData = function() {

		// 获取游戏基本数据

		var factory = Log_de_factory("CreateGame");
		var data = factory.GetData();

		var factory = Log_de_factory("PlayGame");
		// var obj = factory.init(data);
		// var data = obj.sendDataToLog(data);
		// var data = obj.getDataFromLog(data);
		// var data = obj.getDataFromLogDe(data);
		// var data = obj.sendDataToLogDe(data);

		// 游戏信息
		var gameInfo = xmlDoc.createElement("GameInfo"); // GameInfo
		gameInfo.SetAttribute("dataID", "gameInfo"); // 添加属性
		gameData.appendChild(gameInfo);
		// 游戏名称
		var gameName = xmlDoc.createElement("gameName");
		gameName.InnerText = data.content[0].gameName;
		gameInfo.appendChild(gameName);
		// 游戏类型
		var gameType = xmlDoc.createElement("gameType");
		gameType.InnerText = data.content[0].gameType;
		gameInfo.appendChild(gameType);
		// 游戏人数
		var roleNum = xmlDoc.createElement("roleNum");
		roleNum.InnerText = data.content[0].roleNum;
		gameInfo.appendChild(roleNum);

		// 角色信息
		var roleInfo = xmlDoc.createElement("RoleInfo"); // RoleInfo
		roleInfo.SetAttribute("dataID", "roleInfo"); // 添加属性
		gameData.appendChild(roleInfo);
		// 角色名称
		var roleName = xmlDoc.createElement("roleName");
		roleName.InnerText = data.content[1].roleName;
		roleInfo.appendChild(roleName);
		// 角色资源名称
		var roleResource = xmlDoc.createElement("roleResource");
		roleResource.InnerText = data.content[1].roleResource;
		roleInfo.appendChild(roleResource);
		// 角色资源地址
		var roleUrl = xmlDoc.createElement("roleUrl");
		roleUrl.InnerText = data.content[1].roleUrl;
		roleInfo.appendChild(roleUrl);

		// 地图信息
		var mapInfo = xmlDoc.createElement("MapInfo"); // MapInfo
		mapInfo.SetAttribute("dataID", "mapInfo"); // 添加属性
		gameData.appendChild(mapInfo);
		// 地图名字
		var mapName = xmlDoc.createElement("mapName");
		mapName.InnerText = data.content[2].mapName;
		mapInfo.appendChild(mapName);
		// 地图尺寸
		var mapSize = xmlDoc.createElement("mapSize");
		mapSize.InnerText = data.content[2].mapSize;
		mapInfo.appendChild(mapSize);
		// 地图网格尺寸
		var mapEditGirdSiz = xmlDoc.createElement("mapEditGirdSiz");
		mapEditGirdSiz.InnerText = data.content[2].mapEditGirdSiz;
		mapInfo.appendChild(mapEditGirdSiz);
		// 地图背景名称
		var bgUrl = xmlDoc.createElement("bgUrl");
		bgUrl.InnerText = data.content[2].bgUrl;
		mapInfo.appendChild(bgUrl);
		// 地图背景地址
		var bgName = xmlDoc.createElement("bgName");
		bgName.InnerText = data.content[2].bgName;
		mapInfo.appendChild(bgName);
	}

	/**
	 * 保存游戏地图数据
	 */
	var _saveMapData = function() {
		// 获取游戏地图数据
		var factory = Log_de_factory("MapEdit");
		var data = factory.GetData();

		// 游戏信息
		var MapData = xmlDoc.createElement("MapData"); // MapData
		MapData.SetAttribute("dataID", "mapData"); // 添加属性
		gameData.appendChild(MapData);

		for (var i = 0; i < data.content.length; i++) {

			var mapData = xmlDoc.createElement("mapData"); // MapData
			MapData.appendChild(mapData);

			// 层级
			var curLevel = xmlDoc.createElement("curLevel");
			curLevel.InnerText = data.content[i].curLevel;
			mapData.appendChild(curLevel);
			// 位置
			var location = xmlDoc.createElement("location");
			mapData.appendChild(location);
			var locationX = xmlDoc.createElement("locationX");
			locationX.InnerText = data.content[i].location_x;
			location.appendChild(locationX);
			var locationY = xmlDoc.createElement("locationY");
			locationY.InnerText = data.content[i].location_y;
			location.appendChild(locationY);
			// 图块名称
			var segmentName = xmlDoc.createElement("segmentName");
			segmentName.InnerText = data.content[i].segmentName;
			mapData.appendChild(segmentName);
			// 图块地址
			var segmentUrl = xmlDoc.createElement("segmentUrl");
			segmentUrl.InnerText = data.content[i].segmentUrl;
			mapData.appendChild(segmentUrl);

		}/* for loop */

	}

	/**
	 * 保存游戏事件数据
	 */
	var _saveEventData = function() {
		// 获取游戏事件数据
		var factory = Log_de_factory("EventEdit");
		var data = factory.GetData();

		// 游戏信息
		var EventData = xmlDoc.createElement("EventData"); // EventData
		EventData.SetAttribute("dataID", "eventData"); // 添加属性
		gameData.appendChild(EventData);

		for (var i = 0; i < data.content.length; i++) {

			var eventData = xmlDoc.createElement("eventData");
			EventData.appendChild(eventData);

			// 位置
			var location = xmlDoc.createElement("location");
			eventData.appendChild(location);
			var locationX = xmlDoc.createElement("locationX");
			locationX.InnerText = data.content[i].location_x;
			location.appendChild(locationX);
			var locationY = xmlDoc.createElement("locationY");
			locationY.InnerText = data.content[i].location_y;
			location.appendChild(locationY);
			// 是否是道路
			var isRoad = xmlDoc.createElement("isRoad");
			isRoad.InnerText = data.content[i].isRoad;
			eventData.appendChild(isRoad);
			// 事件名称
			var eventName = xmlDoc.createElement("eventName");
			eventName.InnerText = data.content[i].eventName;
			eventData.appendChild(eventName);
			// 前置条件
			var pre_condition = xmlDoc.createElement("pre_condition");
			pre_condition.InnerText = data.content[i].pre_condition;
			eventData.appendChild(pre_condition);
			// 事件内容
			var eventContent = xmlDoc.createElement("eventContent");
			eventContent.InnerText = data.content[i].eventContent;
			eventData.appendChild(eventContent);
			// **以上为必须属性**/

		}/* for loop */
	}

	/**
	 * 保存小游戏数据
	 */
	var _saveSmallGameData = function() {
		// 获取游戏事件数据
		var factory = Log_de_factory("SmallGame");
		var data = factory.GetData();

		// 游戏信息
		var SmallGame = xmlDoc.createElement("SmallGame"); // EventData
		SmallGame.SetAttribute("dataID", "smallGame"); // 添加属性
		gameData.appendChild(SmallGame);

		for (var i = 0; i < data.content.length; i++) {

			var smallGame = xmlDoc.createElement("smallGame");
			SmallGame.appendChild(smallGame);

			// 位置
			var location = xmlDoc.createElement("location");
			smallGame.appendChild(location);
			var locationX = xmlDoc.createElement("locationX");
			locationX.InnerText = data.content[i].location_x;
			location.appendChild(locationX);
			var locationY = xmlDoc.createElement("locationY");
			locationY.InnerText = data.content[i].location_y;
			location.appendChild(locationY);
			// 小游戏名称
			var samllGameName = xmlDoc.createElement("samllGameName");
			samllGameName.InnerText = data.content[i].samllGameName;
			smallGame.appendChild(samllGameName);
			// 小游戏地址
			var samllGameUrl = xmlDoc.createElement("samllGameUrl");
			samllGameUrl.InnerText = data.content[i].samllGameUrl;
			smallGame.appendChild(samllGameUrl);
			// **以上为必须属性**/

		}/* for loop */
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

	// 保存文件到磁盘
	var _save = function() {
		xmlDoc.save(filename);
	}
}

/**
 * 公有方法，保存数据 保存游戏所有数据
 */
saveToXML.prototype.saveData = function() {
	_createXML();
	_saveGameData();
	_saveMapData();
	_saveEventData();
	_saveSmallGameData();
	_save();
}

// 实例化
// var saveData = new saveToXML("filename");

// 执行数据保存
// saveData.saveData();
