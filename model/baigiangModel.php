<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Xiao
 * Date: 10/7/13
 * Time: 8:37 AM
 * To change this template use File | Settings | File Templates.
 */
Class baigiangModel extends baseModel
{
    public function get_sachtheobaigiang($mabaigiang)
    {
        global $db;
        $db->query("SELECT * FROM xiaob_book WHERE mabaigiang='".$mabaigiang."'");
        return $db->fetch_object();

    }
}