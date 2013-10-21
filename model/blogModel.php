<?php

Class blogModel Extends baseModel {

	public function get_blogs() 
	{
		 global $db;
		 $blog = $db->query('SELECT id, name, content FROM blog');
		 return $db->fetch_object();
	}
    public function get_binhluan($id)
    {
        global $db;
        $view = $db->query("SELECT * FROM xiaob_comment where id = ".$id);
        return $db->fetch_object($first_row = false);
    }

	public function get_blog_detail($bookid)
	{	
		 global $db;
		 $blog = $db->query('SELECT id, name, content FROM xiaob_book where bookid = '.$db->sqlQuote($bookid));
		 return $db->fetch_object($first_row = true);
	}
    public function guibinhluan($xid,$bookid,$comment,$status,$time)
    {
        global $db;
        $db->query("INSERT INTO xiaob_comment(xid,bookid,comment,status,xtime) VALUE (".$xid.",'".$bookid."','".$comment."','".$status."','".$time."')");
        return true;
    }

}
?>
