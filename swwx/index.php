<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<!-- 根据设备的不同显示不同的页面 -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="web_schedule.css" rel="stylesheet" type="text/css"/>
<title>索味餐点预定</title>
</head>


<body >

	<!-- 页面头部 -->
	<header>
		<h1 >索味咖啡餐点</h1>
	</header>
	<hr>
	<!-- 页面正文 -->
	<section>
		<!-- 表单 使用accept_schedule.php 接收表单-->
	
		<div class="schedule">
		
		<form name="schedules" method="post" action="accept_schedule.php">
			<div class="item">餐点选择:</div>
			<input type="checkbox" name="menu[]" value="candian1" class="choice"/>
			<label class="foods" >餐点一(￥30)</label>
			<select id="count" name="cd_count1" class="dropdown-select">
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</select>
			<br /> <br /> 
			<img src="images/1.jpg" width="300" height="300" /> <br /> <br /> 
			
			<input type="checkbox" name="menu[]" value="candian2" class="choice"/>
			<label class="foods">餐点二(￥30)</label> 
			<select id="count" name="cd_count2"  class="dropdown-select">
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</select> <br /> <br /> <img src="images/2.jpg" width="300" height="300" /><br /> <br />
			
			<input type="checkbox" name="menu[]" value="candian3" class="choice"/>
			<label class="foods">餐点三(￥30)</label>
			<select id="count" name="cd_count3"  class="dropdown-select">
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</select> <br /> <br /> <img src="images/3.jpg" width="300" height="300" /> <br /> <br /> 
	
	        <input type="checkbox" name="menu[]" value="candian4" class="choice" />
			<label class="foods">餐点四(￥30) </label> 
			<select id="count" name="cd_count4" size="1" class="dropdown-select">
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</select> <br /> <br /> <img src="images/4.jpg" width="300" height="300" /> <br /> 
		
			<div class="item">电话：</div>
			<!--  pattern="[0-9]{11}" -->
			<input type="tel" name="phoneNumber" size="25" 
				placeholder="请输入11位手机号" />

			<div class="item">送餐地点：</div>
			<label class="select">
			<select id="addressid" name="address">
				<option value="海韵教学楼">海韵教学楼</option>
				<option value="海韵园科研1">海韵园科研1</option>
				<option value="海韵园科研2">海韵园科研2</option>
				<option value="海韵园实验楼">海韵园实验楼</option>
				<option value="海韵物机大楼">海韵物机大楼</option>
				<option value="行政楼A（软件学院）">行政楼A（软件学院）</option>
				<option value="行政楼B（数学学院）">行政楼B（数学学院）</option>
				<option value="行政楼C（信科学院）">行政楼C（信科学院）</option>
			</select></label>

			<div class="item">送餐时间：</div> <!-- pattern="[2][0][1][4-9][-][0-1][0-9][-][0-3][0-9]" -->
			<input type="text" name="date" id="dateid" 			
				placeholder="请按10-29格式输入" size="10">

				<!-- pattern="[0-2][0-9][:][0-6][0-9]" -->
		   <input type="text" name="timePoint" id="timeid"  
		       placeholder="请按11:00格式输入" size="10">

			<div class="item">要求:</div>
			<textarea name="requirement" placeholder="请在这里填写你的要求!"></textarea>
			<br /> <br /> 
			
			<div id="submit">
			<input type="submit" value="提交订单"
				onclick="return check();" />
				<br /> <br /> 
			</div>
			<script type=text/javascript>
			
var check = function()
{	
	var has1=false;
	for (i=0;i<document.schedules.length;i++)
		if (document.schedules.elements[i].type=='checkbox')
			if (document.schedules.elements[i].checked) 
				has1=true;
	if(has1==false)
	{
		alert("请至少选择一份套餐！");	
		return false;
	}

	if(document.getElementsByName("phoneNumber")[0].value==""||document.getElementsByName("phoneNumber")[0].value==null)
	{
		alert("请填写手机号！");	
		return false;
	}

	 var tel_num=document.getElementsByName("phoneNumber")[0].value;
	 var reg =/^1\d{10}$/;
	 if(!reg.test(tel_num))
	 {
		 alert("请填写正确的手机号码！");	
		 return false;
	 }
	 
	if(document.getElementsByName("date")[0].value==null||document.getElementsByName("date")[0].value==""||
			document.getElementsByName("timePoint")[0].value==null||document.getElementsByName("timePoint")[0].value=="")
	{
		alert("请填写日期或时间！");	
		return false;
	}

	 var m_date=document.getElementsByName("date")[0].value;
	 var reg =/^[0-1]\d[-][0-3]\d$/;
	 if(!reg.test(m_date))
	 {
		 alert("请填写正确的日期！");	
		 return false;
	 }

	 var m_time=document.getElementsByName("timePoint")[0].value;
	 var reg =/^[0-2]\d[:：][0-6]\d$/;
	 if(!reg.test(m_time))
	 {
		 alert("请填写正确的时间！");	
		 return false;
	 }
	
	//获得当前的实时时间
	var date=new Date();
    var month="",day="",hour="",minute="";
    month=date.getMonth()+1;
    day=date.getDate();
    hour=date.getHours();
    minute=date.getMinutes();
    
    var m_date0 =""+month+""+day;
    var m_time0 =hour+""+minute;

    //填写的时间
    var m_date = document.getElementsByName("date")[0].value;
    var m_time = document.getElementsByName("timePoint")[0].value;
    
    var m_date=m_date.split("-");
    var m_time=m_time.split(":");
    
    var fD=m_date[0]+""+m_date[1];
    var fT=m_time[0]+""+m_time[1];

    
	if(m_date0>fD)
	{
		alert("请检查你的预定日期！");	
		return false;	
	} 
	else if(m_date0 == fD)
	{
		if(m_time0>fT)
		{
			alert("请检查你的送餐时间！");	
			return false;
		}
	}//以下可以添加送餐的时间段
	else
	{		
	} 
 	
    return true;
	
}


</script>

</form>
</div>
	</section>


	<!-- 页脚   -->
	<footer> 
	<hr/>
	<br>
	<br>
	<br>
	</footer>
</body>
</html>