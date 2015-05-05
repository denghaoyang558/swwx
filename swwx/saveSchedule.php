<?php

class AddSchedule_XML extends DOMDocument{
	private  $root;
	//构造函数
	public function __construct(){
		parent::__construct();
		if(!file_exists("Schedule.xml")){
			$xmlstr="<?xml version='1.0' encoding='utf-8'?><ScheduleForm></Schedule>";
			$this->loadXML($xmlstr);
			$this->save("Schedule.xml");
		}else{
			$this->load("Schedule.xml");
		}
		
	}
		
	public function add_schedule($menu,$num_count,$prices,$phoneNumber,
			$address,$date,$timePoint,$total,$requirement,$isFinsh)
	{
		$Root = $this->documentElement;
		//获得schedulex信息
		
		$Node_phoneNumber= $this->createElement("phoneNumber");
		$text = $this->createTextNode($phoneNumber);
		$Node_phoneNumber->appendChild($text);
		
		$Node_address= $this->createElement("address");
		$text = $this->createTextNode($address);
		$Node_address->appendChild($text);
		
		$Node_date= $this->createElement("date");
		$text = $this->createTextNode($date);
		$Node_date->appendChild($text);
		
		$Node_timePoint= $this->createElement("timePoint");
		$text = $this->createTextNode($timePoint);
		$Node_timePoint->appendChild($text);
		
		//创建时间元素
		$Node_time = $this->createElement("time");
		$Node_time->appendChild($Node_date);
		$Node_time->appendChild($Node_timePoint);
		
		$Node_total= $this->createElement("total");
		$text = $this->createTextNode($total);
		$Node_total->appendChild($text);
		
		$Node_requirement= $this->createElement("requirement");
		$text = $this->createTextNode($requirement);
		$Node_requirement->appendChild($text);
		
		$Node_isFinsh= $this->createElement("isFinsh");
		$text = $this->createTextNode($isFinsh);
		$Node_isFinsh->appendChild($text);
		
		
		//创建Schedule结点
		$Node_Schedule= $this->createElement("schedule");
		
		//添加menu
		foreach($menu as $key=>$m_menu)
		{
			$Node_name = $this->createElement("name");
			$text = $this->createTextNode($m_menu);
			$Node_name->appendChild($text);
				
			$Node_count= $this->createElement("count");
			$text = $this->createTextNode($num_count[$m_menu]);
			$Node_count->appendChild($text);
				
			$Node_price= $this->createElement("price");
			$text = $this->createTextNode($prices[$m_menu]);
			$Node_price->appendChild($text);
				
			$Node_menu = $this->createElement("menu");
			$Node_menu->appendChild($Node_name);
			$Node_menu->appendChild($Node_count);
			$Node_menu->appendChild($Node_price);
			
			//写入一份套餐
			$Node_Schedule->appendChild($Node_menu);
		}
		
		//添加
		$Node_Schedule->appendChild($Node_phoneNumber);
		$Node_Schedule->appendChild($Node_address);
		$Node_Schedule->appendChild($Node_time);
		$Node_Schedule->appendChild($Node_total);
		$Node_Schedule->appendChild($Node_requirement);
		$Node_Schedule->appendChild($Node_isFinsh);
		
		$Root->appendChild($Node_Schedule);
		
		$this->save("Schedule.xml");
		//echo "<script>alert('添加成功！');</script>";
		
	}
}
?>