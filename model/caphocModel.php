<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Xiao
 * Date: 10/7/13
 * Time: 8:39 AM
 * To change this template use File | Settings | File Templates.
 */
Class caphocModel extends baseModel
{
    public function get_sachtheocaphoc($macaphoc)
    {
        global $db;
        $db->query("SELECT * FROM xiaob_book WHERE macaphoc='".$macaphoc."'");
        return $db->fetch_object();

    }
}