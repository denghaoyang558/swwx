/**
 * test interface_dealData.js
 */

// 包含interface_dealData.js文件
document.write("<script language=javascript src='log_de_factory.js'></script");
document.write("<script language=javascript src='json2.js'></script");
// 测试json数据结构
var gameInfo = {
	"dataID" : "gameInfo",
	"gameName" : "",
	"gameType" : "",
	"roleNum" : ""
}

var roleInfo = {
	"dataID" : "roleInfo",
	"roleName" : "",
	"roleResource" : "",
	"roleUrl" : ""
}

var mapInfo = {
	"dataID" : "mapInfo",
	"mapName" : "",
	"mapSize" : "",
	"mapEditGirdSize" : "",
	"bgName" : "",
	"bgUrl" : ""
}

var mapData = {
	"dataID" : "mapData",
	"curLevel" : "up/mid/down/all/road",
	"location" : {
		"location_x" : "",
		"location_y" : ""
	},
	"segmentName" : "",
	"segmentUrl" : ""
}

var eventData = {
	"dataID" : "eventData",
	"location" : {
		"location_x" : "",
		"location_y" : ""
	},
	"isRoad" : "",
	"pre_condition" : "",
	"eventName" : "",
	"eventContent" : "",
	"triggerCondition" : ""
}

var toolData = {
	"dataID" : "ToolData",
	"location" : {
		"location_x" : "",
		"location_y" : ""
	},
	"toolName" : "",
	"toolContent" : ""
}

var samllGameData = {
	"dataID" : "samllGameData",
	"location" : {
		"location_x" : "",
		"location_y" : ""
	},
	"samllGameName" : "",
	"samllGameUrl" : ""
}

var playData1 = {
	"dataID" : "playData",
	"contentType" : "role",
	"content" : {}
}
var playData2 = {
	"dataID" : "playData",
	"contentType" : "event",
	"content" : {}
}
var playData3 = {
	"dataID" : "playData",
	"contentType" : "result",
	"content" : {}
}

// 添加测试
var createGame_click = function() {
	var res1 = Log_de_factory("CreateGame");
	res1.AddData(data);
	res1.DelData(data);
	res1.UpdateData(data);
}

// 获取处理结果测试
var get_click = function() {
	var res = dealData.GetData();

	// stringifier 函数的作用跟 parse 相反， 用来将一个js对象转换为 JSON 文本。
	document.getElementById("getData").innerHTML = JSON.stringify(res);
	// document.getElementById("getData").innerHTML=res.name;

	/** *对json数组的调用 */
	var myobj = eval(res);

	for (var i = 0; i < myobj.length; i++) {
		alert(myobj[i][0].name);
		alert(myobj[i][0].age);
	}

}
