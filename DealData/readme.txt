（1）interface_dealData 为接口文件
   
     定义了四个外部方法依据前台和后面逻辑部分使用

     其中，AddData(data)、UpdataDta(data)、DelData(data)分别表示添加记录、修改记录、删除记录

     data为json数据，函数或返回bool型数据

     三个方法的外部使用示例如下（可参看测试文件test.js）：

     A、使用下面语句包含接口脚本
        document.write("<script language=javascript src='interface_dealData.js'></script");

     B、调用相应函数
        var res1 = dealData.AddData(data);

    
 
     GetData()函数用于获得组装后的json数据

     函数将会返回一个json数组，类似以下结构：
      
     [[{"name":"liwei","age":"20"},{"name":"scsdvd","age":"202"}],[{"ds":"sfssasd","aa":"11"},{"ds":"sdff","aa":"22"}]]

     使用示例如上示例

(2) test.js 和test.html 为测试接口使用的测试文件 
 
    其中定义了一些按钮获取一些输出

(3) json2.js 格式转换插件

