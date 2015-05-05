<?php
function refrwsh() {
	include 'refresh_control.php';
	
	ignore_user_abort (); // 即使Client断开(如关掉浏览器)，PHP脚本也可以继续执行.
	set_time_limit ( 0 ); // 执行时间为无限制，php默认的执行时间是30秒，通过set_time_limit(0)可以让程序无限制的执行下去
	
	do {
		if ($refresh_show) {
			header ( "Refresh:0; URL=http://localhost/swwx/show_schedule.php" );
			$refresh_show = false;
		}
		sleep(1);
		echo $refresh_show;
	} while ( true );
}
?>