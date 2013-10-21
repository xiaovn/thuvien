<?php
/**
 * Project: thuvien.
 * File: m2027Model.php.
 * Author: Ken Zaki
 * Email: kenzaki@xiao.vn
 * Create Date: 17:59 - 17/10/2013
 * Website: www.xiao.vn
 */
Class m2027Model extends baseModel
{
    public function updatediem($bookid,$ip)
    {
        global $db;
        $db->query("UPDATE xiaob_book SET bookscore = bookscore + 1 WHERE bookid = ".$bookid);
        $db->query("INSERT INTO xiaob_bookrate(bookid,ipadd) VALUES (".$bookid.",'".$ip."')");
    }
}