<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Xiao
 * Date: 10/7/13
 * Time: 8:40 AM
 * To change this template use File | Settings | File Templates.
 */
Class doituongModel extends baseModel
{
    public function get_sachtheodoituong($madoituong)
    {
        global $db;
        $db->query("SELECT * FROM xiaob_book WHERE madoituong='".$madoituong."'");
        return $db->fetch_object();

    }
}