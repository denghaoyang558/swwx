<?php
//解决字符显示乱码问题
header("Content-type: text/html; charset=utf-8");

//读取显示xml文档
class Update_schedule extends DOMDocument {

	//构造函数——加载xml文件
	public function __construct() {
		parent::__construct();
		$this->Load ( "Schedule.xml" );
	}
	
	public function amend_schedule($phoneNumber){
		$panduan=false;;
		$Root = $this->documentElement;
		$xpath = new DOMXPath($this);
		//按电话号码查询
		$Node_Record = $xpath->query("//schedule[phoneNumber='$phoneNumber']");
		$isFinsh=1;
		
		if(empty($Node_Record->item(0)->nodeValue))
		{
			//echo "<script>alert('找不到！');</script>";
		}else{
			foreach ($Node_Record->item(0)->childNodes as $node)
			{
				if($node->nodeValue == "0"){
					$new_node= $this->createTextNode($isFinsh);
					$node->replaceChild($new_node,$node->lastChild);
					$panduan=true;
					//echo "<script>alert('修改成功！');</script>";
				}	
			}		
		}	
		/*
		foreach ($Node_Record->item(0)->childNodes as $node){
			if($node->textContent == 0)
				$node->replaceChild($isFinsh,$node->lastChild);
		}
		*/
			//echo "<script>alert('修改失败！');</script>";
		$this->save( "Schedule.xml" );
		
		return $panduan;
	}
}

$amend_schedule = new Update_schedule ();
$panduan = $amend_schedule->amend_schedule ($_POST["isFinsh"] );
header("Location:http://localhost/swwx/show_schedule.php");

?>