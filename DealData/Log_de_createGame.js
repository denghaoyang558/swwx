/**
 * @author liwei
 * 
 * 处理封装游戏信息类
 * 
 * 
 */

document.write("<script language=javascript src='Log_de_edit.js'></script");

var Log_de_createGame = function() {

	var GameData = {
		"dataID" : "GAMEDATA",
		"content" : []
	}; // 地图数据
	/**
	 * 地图数据封装格式 GameData ={"dataID":"GAMEDATA","content":[
	 * {"dataID":"gameInfo","gameName":"","gameType":"","roleNum":""}
	 * {"dataID":"roleInfo","roleName":"","roleResource":"","roleUrl":""}
	 * {"dataID":"mapInfo","mapName":"","mapSize":"","mapEditGirdSize":"","bgName":"","bgUrl":""} ]}
	 */

	/**
	 * 继承基类
	 */
	Log_de_createGame.prototype = new Log_de_edit(); // 修复原型

	Log_de_createGame.prototype.constructor = Log_de_createGame; // 构造函数

	Log_de_createGame.prototype.supr = Log_de_edit.prototype; // 父类

	/**
	 * 增加数据
	 * 
	 * @param json
	 *            data 游戏数据 其中格式之一如 gameInfo =
	 *            {"dataID":"gameInfo","gameName":"","gameType":"","roleNum":""}
	 */
	this._AddData = function(data) {

		var _data = eval(data);

		// 数据格式出错
		if (_data["dataID"] == undefined)
			return;

		switch (_data["dataID"]) {

			// 游戏基本信息
			case "gameInfo" : {
				// 数据不存在是进行添加，否则只能进行修改
				if (GameData.content[0] == undefined)
					GameData.content[0] = _data;
			}
				break;
			// 角色信息
			case "roleInfo" : {
				// 数据不存在是进行添加，否则只能进行修改
				if (GameData.content[1] == undefined)
					GameData.content[1] = _data;
			}
				break;
			// 地图信息
			case "mapInfo" : {
				// 数据不存在是进行添加，否则只能进行修改
				if (GameData.content[2] == undefined)
					GameData.content[2] = _data;
			}
				break;

			default :
				return;
				break;
		}

	}

	/**
	 * 删除数据
	 * 
	 * @param json
	 *            data 游戏数据 其中格式之一如 gameInfo =
	 *            {"dataID":"gameInfo","gameName":"","gameType":"","roleNum":""}
	 */
	this._DelData = function(data) {

		var _data = eval(data);

		// 数据格式出错
		if (_data["dataID"] == undefined)
			return;

		switch (_data["dataID"]) {

			// 游戏基本信息
			case "gameInfo" : {
				// 数据不存在是进行添加，否则只能进行修改
				if (GameData.content[0].dataID == "gameInfo")
					delete GameData.content[0];
			}
				break;
			// 角色信息
			case "roleInfo" : {
				// 数据不存在是进行添加，否则只能进行修改
				if (GameData.content[1].dataID == "roleInfo")
					delete GameData.content[1];
			}
				break;
			// 地图信息
			case "mapInfo" : {
				// 数据不存在是进行添加，否则只能进行修改
				if (GameData.content[2].dataID == "mapInfo")
					delete GameData.content[2];
			}
				break;

			default :
				return;
				break;
		}

	}

	/**
	 * 修改数据
	 * 
	 * @param json
	 *            data 游戏数据 其中格式之一如 gameInfo =
	 *            {"dataID":"gameInfo","gameName":"","gameType":"","roleNum":""}
	 */
	this._UpdataDta = function(data) {

		var _data = eval(data);

		// 数据格式出错
		if (_data["dataID"] == undefined)
			return;

		switch (_data["dataID"]) {

			// 游戏基本信息
			case "gameInfo" : {
				if (GameData.content[0].dataID == "gameInfo")
					GameData.content[0] = _data;
			}
				break;
			// 角色信息
			case "roleInfo" : {
				if (GameData.content[1].dataID == "roleInfo")
					GameData.content[1] = _data;
			}
				break;
			// 地图信息
			case "mapInfo" : {
				if (GameData.content[2].dataID == "mapInfo")
					GameData.content[2] = _data;
			}
				break;

			default :
				return;
				break;
		}

	}

	/** 2014、12、11 finsh */
	this._GetData = function() {
		return transToJsonArray();
	}

	/** ****************************以下为工具类函数******************************** */

	/**
	 * 对数据进行组装，同时可以进行缺省值配置 —— 未完成2014、12、29
	 */
	var transToJsonArray = function() {

		// 对游戏数据进行缺省配置

		// 将所有数据组装成json数组进行发送
		var Data = GameData;
		return eval(Data); // 用于处理数组
	}

}

/**
 * 公共方法，供外部调用，用于添加数据
 */
Log_de_createGame.prototype.AddData = function(data) {
	return this._AddData(data);
}

/**
 * 公共方法，供外部调用，用于添加删除数据
 */
Log_de_createGame.prototype.DelData = function(data) {
	return this._DelData(data);
}

/**
 * 公共方法，供外部调用，用于修改数据
 */
Log_de_createGame.prototype.UpdateDta = function(data) {
	return this._UpdataDta(data);
}

/**
 * 公共方法，供外部调用，用于外部获取处理后的数据表
 */
Log_de_createGame.prototype.GetData = function() {
	return this._GetData();
}

/**
 * 创建游戏类实例
 */
var log_de_createGame = new Log_de_createGame();
