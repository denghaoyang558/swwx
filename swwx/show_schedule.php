<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<!-- 根据设备的不同显示不同的页面 -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="showSchedules.css" rel="stylesheet" type="text/css"/>

<title>索味餐点预定管理</title>
</head>

<body >
	<!-- 页面头部 -->
	<header>
		<h1>索味餐点预定管理</h1>
	</header>
	<hr />	
		
<?php
//包含保存到数据库和删除xml的文件
include 'svaeToDataBase.php';
include 'delSchedule.php';
//对象声明
$save_to_db = new SaveToMySql ();
$Delete_Schedule = new Del_Schedule ();
?>
	
<!-- 主题 -->
<section onload="myrefresh();">
<script type="text/javascript">
function myrefresh()
{
       window.location.reload();
}
setTimeout('myrefresh()',10000); //指定3秒刷新一次
</script>

<table  class="schedule_table" border="1" >
<caption></caption>
 <tr>
<th id="tel">电话</th>
<th id="food">套餐</th>
<th id="address">地点</th>
<th id="time">时间</th>
<th id="requirement">要求</th>
<th id="total">总价</th>
<th id="isFinsh">处理情况</th>
</tr>


		<!-- 读取xml中的数据 -->	
<?php
// 启动session
session_start ();
//设置session
$_SESSION ['length'] = 0;

	$doc = new DOMDocument ();
	$doc->load ( 'Schedule.xml' ); // 读取xml文件
	                               
	// 获得根节点
	$node_recode = $doc->getElementsByTagName ( "schedule" );
	
	// 数据有了变化才执行
	if ($_SESSION ['length'] != $node_recode->length) {
		
		//先销毁该值，然后重新赋给
		unset($_SESSION['length']);
		$_SESSION ['length'] = $node_recode->length;
		
		//遍历
		foreach ( $node_recode as $recode ) {
			
			$menus = $recode->getElementsByTagName ( "menu" );
			$item_menus = ""; // 餐点
			foreach ( $menus as $_menu_list ) {
				$names = $_menu_list->getElementsByTagName ( "name" );
				$name = $names->item ( 0 )->nodeValue;
				$counts = $_menu_list->getElementsByTagName ( "count" );
				$count = $counts->item ( 0 )->nodeValue;
				$prices = $_menu_list->getElementsByTagName ( "price" );
				$price = $prices->item ( 0 )->nodeValue;
				
				$item_menus .= $name . "  " . $count . "<br/>";
			}
			
			$phoneNumbers = $recode->getElementsByTagName ( "phoneNumber" );
			$item_phoneNumber = $phoneNumbers->item ( 0 )->nodeValue;
			
			$addresses = $recode->getElementsByTagName ( "address" );
			$item_address = $addresses->item ( 0 )->nodeValue;
			
			$times = $recode->getElementsByTagName ( "time" );
			$item_time = "";
			foreach ( $times as $m_time ) {
				$dates = $m_time->getElementsByTagName ( "date" );
				$date = $dates->item ( 0 )->nodeValue;
				$timePoints = $m_time->getElementsByTagName ( "timePoint" );
				$timePoint = $timePoints->item ( 0 )->nodeValue;
				$item_time = $date . "   " . $timePoint;
			}
			
			$totales = $recode->getElementsByTagName ( "total" );
			$item_total = $totales->item ( 0 )->nodeValue;
			
			$requirements = $recode->getElementsByTagName ( "requirement" );
			$item_requirement = $requirements->item ( 0 )->nodeValue;
			
			$isFinsh = $recode->getElementsByTagName ( "isFinsh" );
			$item_isFinsh = $isFinsh->item ( 0 )->nodeValue;
			
			// 只有未完成才显示
			if ($item_isFinsh == 0) {
		
				echo '<tr>';
				
				echo '<td height="25" align="center" >';
				echo $item_phoneNumber;
				echo '</td>';
				
				echo '<td height="25" align="center">';
				echo $item_menus;
				echo '</td>';
				
				echo '<td height="25" align="center">';
				echo $item_address;
				echo '</td>';
				
				echo '<td height="25" align="center" >';
				echo $item_time;
				echo '</td>';
				
				echo '<td height="25" align="center" >';
				echo $item_requirement;
				echo '</td>';
				
				echo '<td height="25" align="center" >';
				echo $item_total;
				echo '</td>';
				
				echo '<td height="25" align="center" >';
				
				?>
				
        <!-- 完成按钮  -->
		<form action="editSchedule.php" method="post">
			<input type="hidden" value='<?php echo $item_phoneNumber;?>'
				name="isFinsh" /> 
			<input type="submit" value="未完成" />
		</form>		
<?php
				echo '</td></tr>';
			} // 只有未完成才显示
		}
	} // if
?>	



<?php
	// 保存已完成订单到数据库和从订单表中删除相应订单
	//函数调用
	$save_to_db->read_xml ();	
	$Delete_Schedule->delete_schedule ( 1 );
?>
</table>
</section>

	<!-- 页脚   -->
	<footer> </footer>

</body>
</html>




