<?php
/**
 * Project: thuvien.
 * File: viewModel.php.
 * Author: Ken Zaki
 * Email: kenzaki@xiao.vn
 * Create Date: 19:25 - 12/10/2013
 * Website: www.xiao.vn
 */
Class viewModel extends baseModel
{
    public function getbook($bookid)
    {
        global $db;
        $db->query("SELECT * FROM xiaob_book WHERE bookid = '".$bookid."'");
        return $db->fetch_object($first_row = true);
    }
}