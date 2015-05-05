<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<!-- 根据设备的不同显示不同的页面 -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>索味餐点预定</title>
</head>

<body style="background-color:orange;">
<header>
	<h1 style='text-align: center; 
		font: 13px/20px 'Lucida Grande', Tahoma, Verdana, sans-serif;'>索味餐点预定</h1>
</header>
  <hr>
<?php
header ( "Content-Type: text/html; charset=utf-8" );

$num_count = array (); // 将每种套餐数量保存
                       // 价格数组
$prices = array (
		"candian1" => "20",
		"candian2" => "20",
		"candian3" => "20",
		"candian4" => "20" 
);
$total = 0; // 计算总价格
            
// 接收复选框数据
$menus = $_POST ['menu'];
foreach ( $menus as $key => $menu ) {
	// 接收数量
	switch ($menu) {
		case "candian1" :
			{
				$cd_count1 = $_POST ['cd_count1'];
				// 将套餐的数量添加到关联数组
				$num_count ['candian1'] = $cd_count1;
				$total += $prices ['candian1'] * $cd_count1;
				break;
			}
		case "candian2" :
			{
				$cd_count2 = $_POST ['cd_count2'];
				$num_count ['candian2'] = $cd_count2;
				$total += $prices ['candian2'] * $cd_count2;
				break;
			}
		case "candian3" :
			{
				$cd_count3 = $_POST ['cd_count3'];
				$num_count ['candian3'] = $cd_count3;
				$total += $prices ['candian3'] * $cd_count3;
				break;
			}
		case "candian4" :
			{
				$cd_count4 = $_POST ['cd_count4'];
				$num_count ['candian4'] = $cd_count4;
				$total += $prices ['candian4'] * $cd_count4;
				break;
			}
		default :
			break;
	}
	echo '<br/>';
}

// 接收电话
$phoneNumber = $_POST ['phoneNumber'];
// 接收送餐地点
$address = $_POST ['address'];

$date = $_POST ['date'];

$timePoint = $_POST ['timePoint'];

$requirement = $_POST ['requirement'];

?>


<?php

$isSubmit = true; // 判断是否提交表单的变量

//执行检查

	$doc = new DOMDocument ();
	$doc->load ( 'Schedule.xml' ); // 读取xml文件
	                               
	// 获得根节点
	$node_recode = $doc->getElementsByTagName ( "schedule" );
	
	//if($node_recode->length==0)
		//$isSubmit = true;
	
	foreach ( $node_recode as $recode ) {
		$phoneNumbers = $recode->getElementsByTagName ( "phoneNumber" );
		$item_phoneNumber = $phoneNumbers->item ( 0 )->nodeValue;
		if ($phoneNumber == $item_phoneNumber) {	
			$isSubmit = false;
			break;
		}
	}
	
?>

<?php
// 页面重新定向
// header("Location:http://localhost/swwx/web_schedule.php");

if ($isSubmit) {
	include ('saveSchedule.php');
	$add_schedule_record = new AddSchedule_XML ();
	$add_schedule_record->add_schedule ( $menus, $num_count, $prices, $phoneNumber, $address, $date, $timePoint, $total, $requirement, 0 );
    
    echo "<h1 style='text-align: center; 
		font: 13px/20px 'Lucida Grande', Tahoma, Verdana, sans-serif;
		word-wrap:normal;'>订单提交成功!</h1>";
    echo "<h4 style='text-align: center; 
		font: 13px/20px 'Lucida Grande', Tahoma, Verdana, sans-serif;
		word-wrap:normal;'>3秒之后将回到首页!</h4>";  
    include 'refresh_control.php';
    $refresh_show=true;
    header("Refresh:5;URL=http://localhost/swwx/web_schedule.php");
}
else{
	echo "<h1 style='text-align: center; 
		font: 13px/20px 'Lucida Grande', Tahoma, Verdana, sans-serif;
		word-wrap:normal;
' >
		你已经有订单在处理了,如需修改订单请致电：！</h1>";
}
?>


</body>
</html>