<?php
//解决字符显示乱码问题
header("Content-type: text/html; charset=utf-8");

//读取显示xml文档
class SaveToMySql extends DOMDocument {
	          
	//构造函数——加载xml文件
	public function __construct() {
		parent::__construct();		
		$this->Load ( "Schedule.xml" );
	}

	//读取和显示xml
	public function read_xml() {
		
		$mysql_server_name="127.0.0.1";      //数据库服务器名称
		$mysql_username="root";              // 连接数据库用户名
		$mysql_password="root";              // 连接数据库密码
		$mysql_database="swscheduledb";      // 数据库的名字
		$mysql_table="schedules";            //数据表名字
		
		// 连接到数据库
		$conn=mysql_connect($mysql_server_name, $mysql_username,$mysql_password)
		or die("连接失败");
		//选择数据库
		$db = mysql_select_db($mysql_database,$conn)or die("选择失败");
		
		//获得根节点
		$node_recode = $this->getElementsByTagName ("schedule");

		foreach ( $node_recode as $recode ) {
				
			$menus = $recode->getElementsByTagName ( "menu" );
			$item_menus = "";    //餐点
			foreach ( $menus as $_menu_list ) {
				$names = $_menu_list->getElementsByTagName ( "name" );
				$name = $names->item ( 0 )->nodeValue;
				$counts = $_menu_list->getElementsByTagName ( "count" );
				$count = $counts->item ( 0 )->nodeValue;
				$prices = $_menu_list->getElementsByTagName ( "price" );
				$price = $prices->item ( 0 )->nodeValue;
				
				$item_menus .= $name." ".$count."\n";
			}
			
			$phoneNumbers = $recode->getElementsByTagName ( "phoneNumber" );
			$item_phoneNumber = $phoneNumbers->item ( 0 )->nodeValue;
			
			$addresses = $recode->getElementsByTagName ( "address" );
			$item_address = $addresses->item ( 0 )->nodeValue;
				
			$times = $recode->getElementsByTagName ( "time" );
			$item_time="";
			foreach ($times as $m_time)
			{
				$dates = $m_time->getElementsByTagName ( "date" );
				$date = $dates->item ( 0 )->nodeValue;
				$timePoints = $m_time->getElementsByTagName ( "timePoint" );
				$timePoint = $timePoints->item ( 0 )->nodeValue;
				$item_time = $date."  ".$timePoint;
			}
				
			$totales = $recode->getElementsByTagName ( "total" );
			$item_total = $totales->item ( 0 )->nodeValue;
				
			$requirements = $recode->getElementsByTagName ( "requirement" );
			$item_requirement = $requirements->item ( 0 )->nodeValue;
			
			$isFinsh = $recode->getElementsByTagName ( "isFinsh" );
			$item_isFinsh = $isFinsh->item ( 0 )->nodeValue;
			
			if($item_isFinsh==1)
			{
				// 插入命令
				$strsql="insert into $mysql_table values('$item_menus','$item_phoneNumber',
				'$item_address','$item_time','$item_total','$item_requirement');";
				//执行插入
				mysql_query("set names 'utf8'", $conn);    //设置使用utf8字符集读取，防止中文乱码
				
				$query=mysql_query($strsql,$conn) or die("meiyoulianjiechengong");
				
				/*
				if(!$query)
					echo "<script>alert('插入失败！');</script>";
				else 
					echo "<script>alert('插入成功！');</script>";
				*/				
			}	
		}//foreach
		// 关闭连接
		mysql_close($conn);
	}//function
		
}//class

?>
