<?php
/**
 * Project: thuvien.
 * File: m4606Model.php.
 * Author: Ken Zaki
 * Email: kenzaki@xiao.vn
 * Create Date: 15:32 - 18/10/2013
 * Website: www.xiao.vn
 */
Class m4606Model extends baseModel
{
    public function get_tags($bookid)
    {
        global $db;
        $db->query("SELECT * FROM xiaob_tag WHERE bookid =".$bookid);
        return $db->fetch_object();
    }
}