<?php

Class blogModel Extends baseModel {

	public function get_blogs() 
	{
		 global $db;
		 $blog = $db->query('SELECT id, name, content FROM blog');
		 return $db->fetch_object();
	}

	public function get_blog_detail($id) 
	{	
		 global $db;
		 $blog = $db->query('SELECT id, name, content FROM blog where id = '.$db->sqlQuote($id));
		 return $db->fetch_object($first_row = true);
	}

}
?>
