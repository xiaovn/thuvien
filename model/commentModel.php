<?php
/**
 * Project: thuvien.
 * File: commentModel.php.
 * Author: Ken Zaki
 * Email: kenzaki@xiao.vn
 * Create Date: 14:44 - 16/10/2013
 * Website: www.xiao.vn
 */
Class commentModel extends baseModel
{
    public function get_comment($bookid)
    {
        if(isset($bookid) && $bookid != "")
        {
            global $db;
            $db->query("SELECT * FROM xiaob_comment WHERE bookid = '".$bookid."'");
            return $db->fetch_object();
        }
        else
        {
            return null;
        }
    }
}