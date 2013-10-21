<?php
/**
 * Project: thuvien.
 * File: m4211Model.php.
 * Author: Ken Zaki
 * Email: kenzaki@xiao.vn
 * Create Date: 17:32 - 17/10/2013
 * Website: www.xiao.vn
 */
Class m4211Model extends baseModel
{
    public function baicungtacgia($tacgia,$limit = 5)
    {
        if(isset($tacgia) && $tacgia != "")
        {
            global $db;
            $db->query("SELECT * FROM xiaob_book WHERE bookpuber = '".$tacgia."' ORDER BY bookid DESC LIMIT ".$limit."");
            if($db->num_row())
            {
                return $db->fetch_object();
            }
            else
            {
                return null;
            }
        }
        else
        {
            return null;
        }
    }
}