<?php
/**
 * Project: thuvien.
 * File: m3318Model.php.
 * Author: Ken Zaki
 * Email: kenzaki@xiao.vn
 * Create Date: 09:30 - 20/10/2013
 * Website: www.xiao.vn
 */
Class m3318Model extends baseModel
{
    public function get_book_of_dethi()
    {
        global $db;
        $db->query("SELECT * FROM xiaob_book WHERE bookcat = 3 ORDER BY bookid DESC LIMIT 5");
        return $db->fetch_object();
    }
}