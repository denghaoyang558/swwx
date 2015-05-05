/**
 * @author liwei
 * 
 * 事件处理类
 */

var Log_de_eventDataPlaying = function() {

	/**
	 * 游戏运行时来自UI的事件数据 格式如下 playData =
	 * {"dataID":"playData","contentType":"event","content":{ }}
	 */
	var eventFormUI; // UI层数据
	var eventFromLog; // 数据处理结果

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
Log_de_eventDataPlaying.prototype.sendDataToLog = function(data) {

}

/**
 * 发送数据给view层
 */
Log_de_eventDataPlaying.prototype.getDataFromLog = function(data) {

}

/**
 * 发送数据给逻辑控制模块处理
 */
Log_de_eventDataPlaying.prototype.getDataFromLogDe = function(data) {

}

/**
 * 从逻辑控制层获取数据处理结果
 */
Log_de_eventDataPlaying.prototype.sendDataToLogDe = function(data) {

}

// 实例化
var log_de_eventDataPlaying = new Log_de_eventDataPlaying();