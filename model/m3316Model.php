<?php
/**
 * Project: thuvien.
 * File: m3316Model.php.
 * Author: Ken Zaki
 * Email: kenzaki@xiao.vn
 * Create Date: 09:16 - 20/10/2013
 * Website: www.xiao.vn
 */
Class m3316Model extends baseModel
{
    public function get_book_of_baigiang()
    {
        global $db;
        $db->query("SELECT * FROM xiaob_book WHERE bookcat = 1 ORDER BY bookid DESC LIMIT 5");
        return $db->fetch_object();
    }
}