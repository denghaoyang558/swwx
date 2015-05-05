<?php
//解决字符显示乱码问题
header("Content-type: text/html; charset=utf-8");

//读取显示xml文档
class Search_schedule extends DOMDocument {

	//构造函数——加载xml文件
	public function __construct() {
		parent::__construct();
		$this->Load ( "Schedule.xml" );
	}
	
	public function Select_Schedule_By_Address($string)
	{
		$Root = $this->documentElement;
		$xpath = new DOMXPath($this);
		//按电话号码查询
		$Node_Record = $xpath->query("//schedule[address='$string']");
		
		for($i=0;$i<$Node_Record->length;$i++){
			$g=0;
			foreach ($Node_Record->item($i)->childNodes as $node){
				$filed[$g] = $node->textContent;
				$g++;
			}
			
			//echo $filed[0];
		}
	}
}
?>