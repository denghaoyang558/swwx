/**
 * @author liwei
 * 
 * 
 */

document.write("<script language=javascript src='Log_de_playing.js'></script");
document
		.write("<script language=javascript src='Log_de_roleDataPlaying.js'></script");
document
		.write("<script language=javascript src='Log_de_resultDataPlaying.js'></script");
document
		.write("<script language=javascript src='Log_de_eventDataPlaying.js'></script");

/**
 * 游戏运行处理总调用函数
 * 
 * @param json
 *            data 游戏运行实时数据
 */

var _log_de_playGame = function(data) {

}

_log_de_playGame.prototype.init = function(data) {

	var _data = eval(data);

	// 数据格式不对
	if (_data["dataID"] != "playData")
		return;

	// 对信息进行分类识别
	switch (_data["contentType"]) {

		case "role" : // 角色状态数据
			return log_de_roleDataPlaying;
			break;

		case "event" : // 事件数据
			return log_de_eventDataPlaying;
			break;

		case "smallGame" : // 小游戏结果数据
			return log_de_resultDataPlaying;
			break;
	}

	return log_de_playing;
}

// 实例化
var log_de_playGame = new _log_de_playGame();