/**
 * @author liwei
 * 
 * 处理UI数据的工厂类文件
 * 
 */

document.write("<script language=javascript src='Log_de_edit.js'></script");
document
		.write("<script language=javascript src='Log_de_createGame.js'></script");
document.write("<script language=javascript src='Log_de_mapEdit.js'></script");
document
		.write("<script language=javascript src='Log_de_eventEdit.js'></script");
document.write("<script language=javascript src='Log_de_toolEdit.js'></script");
document
		.write("<script language=javascript src='Log_de_smallGame.js'></script");
document.write("<script language=javascript src='Log_de_playGame.js'></script");

/**
 * UI调用该函数处理所有的事件
 * 
 * @param string
 *            type 事件类型
 * @param json
 *            data 事件相关数据
 * @return 相应事件的处理函数
 */
var Log_de_factory = function(type) {

	switch (type) {

		case "CreateGame" :
			return log_de_createGame; // 创建游戏
			break;

		case "MapEdit" :
			return log_de_mapEdit; // 编辑地图
			break;

		case "EventEdit" :
			return log_de_eventEdit; // 编辑事件
			break;

		case "ToolEdit" :
			return log_de_toolEdit; // 编辑工具
			break;

		case "SmallGame" :
			return log_de_smallGame; // 编辑小游戏
			break;

		case "PlayGame" :
			return log_de_playGame; // 游戏运行
			break;
	}

	return;
}