<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Xiao
 * Date: 10/7/13
 * Time: 8:38 AM
 * To change this template use File | Settings | File Templates.
 */
Class monModel extends baseModel
{
    public function get_sachtheomonhoc($mamonhoc)
    {
        global $db;
        $db->query("SELECT * FROM xiaob_book WHERE mamon='".$mamonhoc."'");
        return $db->fetch_object();

    }
}