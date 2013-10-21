<?php
/**
 * Project: thuvien.
 * File: m3317Model.php.
 * Author: Ken Zaki
 * Email: kenzaki@xiao.vn
 * Create Date: 09:25 - 20/10/2013
 * Website: www.xiao.vn
 */
Class m3317Model extends baseModel
{
    public function get_book_of_tailieu()
    {
        global $db;
        $db->query("SELECT * FROM xiaob_book WHERE bookcat = 2 ORDER BY bookid DESC LIMIT 5");
        return $db->fetch_object();
    }
}