<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Xiao
 * Date: 10/7/13
 * Time: 8:39 AM
 * To change this template use File | Settings | File Templates.
 */
Class classModel extends baseModel
{
    public function get_sachtheoclass($maclass)
    {
        global $db;
        $db->query("SELECT * FROM xiaob_book WHERE malophoc='".$maclass."'");
        return $db->fetch_object();

    }
}