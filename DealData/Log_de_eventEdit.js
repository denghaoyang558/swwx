/**
 * @author liwei
 * 
 * 事件编辑类
 * 
 */

var Log_de_eventEdit = function() {

	/*
	 * 使用var方法直接定义的为私有 使用this定义的为公有
	 */

	/**
	 * 事件数据，格式如下 EventData = {"dataID":"EVENTDATA","content":[
	 * {"dataID":"EventData","location":{"location_x":"","location_y":""},"isRoad":"",
	 * "pre_condition":"","eventName":"","eventContent":"","triggerCondition":""}
	 * {"dataID":"EventData","location":{"location_x":"","location_y":""},"isRoad":"",
	 * "pre_condition":"","eventName":"","eventContent":"","triggerCondition":""} ]}
	 */
	var EventData = {
		"dataID" : "EVENTDATA",
		"content" : []
	};

	// 2014、12、11，框架基本完成，迭代过程将主要是修改以下三个函数

	/**
	 * 增加数据
	 */
	this._AddData = function(data) {

		var _data = eval(data);

		if (_data["dataID"] == undefined)
			return;

		switch (_data["dataID"]) {

			case "eventData" : {
				// 内容的长度
				var i = GameData.content.length;
				// 将内容加在最后
				GameData.content[i] = _data;

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
				var i = GameData.content.length;

				for (var j = 0; j < i; j++) {
					// 利用位置来判断，在一个位置处只有一个事件,倘若有多个事件，多增加一层判断，并且break换成continue
					if (GameData.content[j].location.location_x == _data.location.location_x
							&& GameData.content[j].location.location_y == _data.location.location_y) {
						delete GameData.content[j];
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
	 * 
	 */
	this._UpdataDta = function(data) {

		var _data = eval(data);

		if (_data["dataID"] == undefined)
			return;

		switch (_data["dataID"]) {

			case "eventData" : {
				// 内容的长度
				var i = GameData.content.length;

				for (var j = 0; j < i; j++) {
					// 利用位置来判断，在一个位置处只有一个事件,倘若有多个事件，多增加一层判断，并且break换成continue
					if (GameData.content[j].location.location_x == _data.location.location_x
							&& GameData.content[j].location.location_y == _data.location.location_y) {
						// 将数据加在最后
						GameData.content[j] = _data;
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
		var Data = EventData;

		// 通过eval() 函数可以将JSON字符串转化为对象
		// return eval('('+Data[0]+')'); //此格式用于处理单个字符串
		return eval(Data); // 用于处理数组
	}

}

/**
 * 公共方法，供外部调用，用于添加数据
 */
Log_de_eventEdit.prototype.AddData = function(data) {
	return this._AddData(data);
}

/**
 * 公共方法，供外部调用，用于添加删除数据
 */
Log_de_eventEdit.prototype.DelData = function(data) {
	return this._DelData(data);
}

/**
 * 公共方法，供外部调用，用于修改数据
 */
Log_de_eventEdit.prototype.UpdateDta = function(data) {
	return this._UpdataDta(data);
}

/**
 * 公共方法，供外部调用，用于外部获取处理后的数据表
 */
Log_de_eventEdit.prototype.GetData = function() {
	return this._GetData();
}

/**
 * 实例化
 */
var log_de_eventEdit = new Log_de_eventEdit();
