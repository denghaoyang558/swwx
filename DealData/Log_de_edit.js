/**
 * @author liwei
 * 
 * 游戏编辑状态的基类
 * 
 */

var DealData = function() {

	/**
	 * 增加数据
	 */
	this._AddData = function(data) {
		return;
	}

	/**
	 * 删除数据
	 */
	this._DelData = function(data) {
		return;
	}

	/**
	 * 修改数据
	 */
	this._UpdataDta = function(data) {
		return;
	}

	/**
	 * 获取数据
	 */
	this._GetData = function() {
		return transToJsonArray();
	}

	/** ****************************以下为工具类函数******************************** */
	/**
	 * 将数据组装成json数组
	 */
	var transToJsonArray = function() {

		// 将所有数据组装成json数组进行发送
		var Data = {
			"dataID" : "undefined"
		};

		// 通过eval() 函数可以将JSON字符串转化为对象
		// return eval('('+Data[0]+')'); //此格式用于处理单个字符串
		return eval(Data); // 用于处理数组
	}

}

/**
 * 公共方法，外部调用，添加数据
 */
DealData.prototype.AddData = function(data) {
	return this._AddData(data);
}

/**
 * 公共方法，外部调用，删除数据
 */
DealData.prototype.DelData = function(data) {
	return this._DelData(data);
}

/**
 * 公共方法，外部调用，修改数据
 */
DealData.prototype.UpdateDta = function(data) {
	return this._UpdataDta(data);
}

/**
 * 公共方法，外部调用，获取处理后的数据表
 */
DealData.prototype.GetData = function() {
	return this._GetData();
}
