/**
 * @author liwei
 * 
 * 工具编辑类
 * 
 */

var Log_de_toolEdit = function() {

	/*
	 * 使用var方法直接定义的为私有 使用this定义的为公有
	 */

	/**
	 * 工具信息 ToolData = {"dataID":"TOOLDATA","content":[
	 * {"dataID":"ToolData","location":{"location_x":"","location_y":""},"toolName":"","toolContent":""}
	 * {"dataID":"ToolData","location":{"location_x":"","location_y":""},"toolName":"","toolContent":""} ]}
	 */
	var ToolData = {
		"dataID" : "TOOLDATA"
	};

	// 2014、12、11，框架基本完成，迭代过程将主要是修改以下三个函数

	/**
	 * 增加数据
	 */
	this._AddData = function(data) {

	}

	/**
	 * 删除数据
	 */
	this._DelData = function(data) {

	}

	/**
	 * 修改数据
	 * 
	 */
	this._UpdataDta = function(data) {

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
		var Data = SmallGameData;
		// 通过eval() 函数可以将JSON字符串转化为对象
		// return eval('('+Data[0]+')'); //此格式用于处理单个字符串
		return eval(Data); // 用于处理数组
	}

}

/**
 * 公共方法，供外部调用，用于添加数据
 */
Log_de_toolEdit.prototype.AddData = function(data) {
	return this._AddData(data);
}

/**
 * 公共方法，供外部调用，用于添加删除数据
 */
Log_de_toolEdit.prototype.DelData = function(data) {
	return this._DelData(data);
}

/**
 * 公共方法，供外部调用，用于修改数据
 */
Log_de_toolEdit.prototype.UpdateDta = function(data) {
	return this._UpdataDta(data);
}

/**
 * 公共方法，供外部调用，用于外部获取处理后的数据表
 */
Log_de_toolEdit.prototype.GetData = function() {
	return this._GetData();
}

// 实例化对象
var log_de_toolEdit = new Log_de_toolEdit();
