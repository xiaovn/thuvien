<?php
/**
 * Project: thuvien.
 * File: m3201Model.php.
 * Author: Ken Zaki
 * Email: kenzaki@xiao.vn
 * Create Date: 18:50 - 20/10/2013
 * Website: www.xiao.vn
 */
Class m3201Model extends baseModel
{
    public function bookquery($sql,$fr)
    {
        global $db;
        $db->query($sql);
        return $db->fetch_object($first_row = $fr);
    }
}