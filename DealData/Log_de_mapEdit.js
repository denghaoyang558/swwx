/**
 * @author liwei
 * 
 * 地图编辑类
 * 
 */

var Log_de_mapEdit = function() {

	/*
	 * 使用var方法直接定义的为私有 使用this定义的为公有
	 */

	/**
	 * 地图数据 基本格式如下 MapData = {"dataID":"MAPDATA","content":[
	 * {"dataID":"mapData","curLevel":"","location":{"location_x":"","location_y":""},"segmentName":"","segmentUrl":""}
	 * {"dataID":"mapData","curLevel":"","location":{"location_x":"","location_y":""},"segmentName":"","segmentUrl":""} ]}
	 */
	var MapData = {
		"dataID" : "MAPDATA",
		"content" : []
	}; // 地图数据

	// 2014、12、11，框架基本完成，迭代过程将主要是修改以下三个函数

	/**
	 * 增加数据
	 */
	this._AddData = function(data) {

		var _data = eval(data);

		if (_data["dataID"] == undefined)
			return;

		switch (_data["dataID"]) {

			case "mapData" : {
				// 内容的长度
				var i = MapData.content.length;
				// 将内容加在最后
				MapData.content[i] = _data;

			}
				break;

			default :
				return;
				break;
		}
	}

	/**
	 * 删除数据
	 */
	this._DelData = function(data) {

		var _data = eval(data);

		if (_data["dataID"] == undefined)
			return;

		switch (_data["dataID"]) {

			case "eventData" : {
				// 内容的长度
				var i = MapData.content.length;

				for (var j = 0; j < i; j++) {
					// 利用位置和层级来判断，具有唯一性
					if (MapData.content[j].location.location_x == _data.location.location_x
							&& MapData.content[j].location.location_y == _data.location.location_y
							&& MapData.content[j].location.curLevel == _data.curLevel) {
						delete MapData.content[j];
						break;
					}
				}

			}
				break;

			default :
				return;
				break;
		}
	}

	/**
	 * 修改数据
	 */
	this._UpdataDta = function(data) {

		var _data = eval(data);

		if (_data["dataID"] == undefined)
			return;

		switch (_data["dataID"]) {

			case "eventData" : {
				// 内容的长度
				var i = MapData.content.length;

				for (var j = 0; j < i; j++) {
					// 利用位置和层级来判断，具有唯一性
					if (MapData.content[j].location.location_x == _data.location.location_x
							&& MapData.content[j].location.location_y == _data.location.location_y
							&& MapData.content[j].location.curLevel == _data.curLevel) {
						MapData.content[i] = _data;
						break;
					}
				}
			}
		}
	}
	/** 2014、12、11 finsh */
	this._GetData = function() {
		return transToJsonArray();
	}

	/** ****************************以下为工具类函数******************************** */

	/**
	 * 将数据组装成json数组
	 */
	var transToJsonArray = function() {
		// 将所有数据组装成json数组进行发送
		var Data = MapData;
		// 通过eval() 函数可以将JSON字符串转化为对象
		// return eval('('+Data[0]+')'); //此格式用于处理单个字符串
		return eval(Data); // 用于处理数组
	}

}

/**
 * 公共方法，供外部调用，用于添加数据
 */
Log_de_mapEdit.prototype.AddData = function(data) {
	return this._AddData(data);
}

/**
 * 公共方法，供外部调用，用于添加删除数据
 */
Log_de_mapEdit.prototype.DelData = function(data) {
	return this._DelData(data);
}

/**
 * 公共方法，供外部调用，用于修改数据
 */
Log_de_mapEdit.prototype.UpdateDta = function(data) {
	return this._UpdataDta(data);
}

/**
 * 公共方法，供外部调用，用于外部获取处理后的数据表
 */
Log_de_mapEdit.prototype.GetData = function() {
	return this._GetData();
}

// 实例化对象，这里将使用dealData来对函数进行调用
var log_de_mapEdit = new Log_de_mapEdit();
