<?php
/**
 * Project: thuvien.
 * File: m4011Model.php.
 * Author: Ken Zaki
 * Email: kenzaki@xiao.vn
 * Create Date: 09:07 - 18/10/2013
 * Website: www.xiao.vn
 */

Class m4011Model extends baseModel
{
    public function updateview($bookid)
    {
        global $db;
        $db->query("UPDATE xiaob_book SET bookview = bookview + 1 WHERE bookid = ".$bookid);
    }
}