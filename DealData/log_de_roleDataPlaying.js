/**
 * @author liwei
 * 
 * 角色状态处理类
 */

var Log_de_roleDataPlaying = function() {

	/**
	 * 游戏运行时来自UI的事件数据 格式如下 playData =
	 * {"dataID":"playData","contentType":"role","content":{ }}
	 */
	var roleFormUI; // UI层数据
	var roleFromLog; // 数据处理结果

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
Log_de_roleDataPlaying.prototype.sendDataToLog = function(data) {

}

/**
 * 发送数据给view层
 */
Log_de_roleDataPlaying.prototype.getDataFromLog = function(data) {

}

/**
 * 发送数据给逻辑控制模块处理
 */
Log_de_roleDataPlaying.prototype.getDataFromLogDe = function(data) {

}

/**
 * 从逻辑控制层获取数据处理结果
 */
Log_de_roleDataPlaying.prototype.sendDataToLogDe = function(data) {

}

// 实例化
var log_de_roleDataPlaying = new Log_de_roleDataPlaying();