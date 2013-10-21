<?php
/**
 * Project: thuvien.
 * File: book.class.php.
 * Author: Ken Zaki
 * Email: kenzaki@xiao.vn
 * Create Date: 11:11 - 20/10/2013
 * Website: www.xiao.vn
 */
Class book{


    /*
     * @Variables array
     * @access public
     */
    private static $instance;

    /**
     *
     * @constructor
     *
     * @access public
     *
     * @return void
     *
     */
    function __construct() {

    }

    public static function getInstance() {
        if (!self::$instance)
        {
            self::$instance = new book();
        }
        return self::$instance;
    }
    public function get_info($bookid,$info)
    {
        if(isset($bookid) && $bookid != "" && isset($info) && $info != "")
        {
            global $db;
            $db->query("SELECT ".$info." FROM xiaob_book WHERE bookid = ".$bookid);
            $book = $db->fetch_object($first_row = true);
            return $book->$info;
        }
        else
        {
            return "";
        }
    }
}