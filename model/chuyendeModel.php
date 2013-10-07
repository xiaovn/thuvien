<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Xiao
 * Date: 10/7/13
 * Time: 8:39 AM
 * To change this template use File | Settings | File Templates.
 */
Class chuyendeModel extends baseModel
{
    public function get_sachtheochuyende($machuyende)
    {
        global $db;
        $db->query("SELECT * FROM xiaob_book WHERE machuyende='".$machuyende."'");
        return $db->fetch_object();

    }
}