<?php
/**
 * Project: thuvien.
 * File: m4331Model.php.
 * Author: Ken Zaki
 * Email: kenzaki@xiao.vn
 * Create Date: 17:57 - 17/10/2013
 * Website: www.xiao.vn
 */
Class m4331Model extends baseModel
{
    public function baicungchude($chude,$limit = 5)
    {
        if(isset($chude) && $chude != "")
        {
            global $db;
            $db->query("SELECT * FROM xiaob_book WHERE bookname like '%".$chude."%' LIMIT ".$limit);
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