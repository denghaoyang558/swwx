/**
 * @author liwei
 * 
 * 事件结果处理类
 */

var Log_de_resultDataPlaying = function() {

	/**
	 * 游戏运行时来自UI的事件数据 格式如下 playData =
	 * {"dataID":"playData","contentType":"result","content":{ }}
	 */
	var resultFormView; // UI层数据
	var resultFromLog; // 数据处理结果

	this._sendDataToLog = function(data) {

	}

	this._getDataFromLog = function(data) {

	}

	this._sendDataToLogDe = function(data) {

	}

	this._getDataFromLog = function(data) {

	}

}

/**
 * 从前台获取数据
 */
Log_de_resultDataPlaying.prototype.sendDataToLog = function(data) {
	var _data = eval(data);

	if (_data["dataID"] == undefined)
		return;

	// 清理json数据
	for (var i = 0; i < resultFormUI.length; i++) {
		delete resultFormUI[i];
	}

	switch (_data["dataID"]) {

		case "smallGame" : {
			// 内容的长度
			var i = MapData.content.length;
			// 将内容加在最后
			resultFormView.dataID = _data.dataID;
			resultFormView.score = _data.score;
			resultFormView.curTag = _data.curTag;
			resultFormView.scoreBound = _data.scoreBound;
			break;
		}

		default :
			return;
			break;
	}
}

/**
 * 发送数据给view层
 */
Log_de_resultDataPlaying.prototype.getDataFromLog = function() {
	return resultFromLog;
}

/**
 * 发送数据给逻辑控制模块处理
 */
Log_de_resultDataPlaying.prototype.getDataFromLogDe = function() {
	return resultFormView;
}

/**
 * 从逻辑控制层获取数据处理结果
 */
Log_de_resultDataPlaying.prototype.sendDataToLogDe = function() {

}

// 实例化
var log_de_res = new Log_de_resultDataPlaying();