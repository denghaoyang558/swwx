<?php
//解决字符显示乱码问题
header("Content-type: text/html; charset=utf-8");

//读取显示xml文档
class Del_Schedule extends DOMDocument {
	private  $root;
	//构造函数——加载xml文件
	public function __construct() {
		parent::__construct();
		$this->Load ( "Schedule.xml" );
	}
	public function delete_schedule($isFinsh)
	{
		//获得根结点
		$Root = $this->documentElement;
		//使用Xpath查询数据
		$xpath = new DOMXPath($this);
		
		//按是否完成进行删除
		$Node_Record = $xpath->query("//schedule[isFinsh='$isFinsh']");
		
		foreach ($Node_Record as $i=>$record)
		{
			if(empty($Node_Record->item($i)->nodeValue))
			{
				echo "<script>alert('删除失败！');</script>";
				return false;
			}
			$Root->removeChild($Node_Record->item($i)); //在节点中移除
			$i--;
		}
		$this->save("Schedule.xml");
		//echo "<script>alert('删除成功！');</script>";
        return true;   	
	}
}
?>