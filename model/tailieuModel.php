<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Xiao
 * Date: 10/7/13
 * Time: 8:38 AM
 * To change this template use File | Settings | File Templates.
 */
Class tailieuModel extends baseModel
{
    public function get_sachtheotailieu($matailieu)
    {
        global $db;
        $db->query("SELECT * FROM xiaob_book WHERE matailieu='".$matailieu."'");
        return $db->fetch_object();

    }
}