<?php
/**
 * Project: thuvien.
 * File: general.class.php.
 * Author: Ken Zaki
 * Email: kenzaki@xiao.vn
 * Create Date: 08:50 - 07/10/2013
 * Website: www.xiao.vn
 */
Class general{


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
            self::$instance = new general();
        }
        return self::$instance;
    }
    public function getid($strings)
    {
        $ids = explode("-", $strings);
        $id = $ids[0];
        return $id;
    }
    public function checkid($id,$table,$idfield)
    {
        global $db;
        $db->query("SELECT * FROM ".$table." WHERE ".$idfield." = '".$id."'");
        if($db->num_row())
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    public function get_category($catid)
    {
        if($catid != "")
        {
            global $db;
            $blog = $db->query("SELECT * FROM xiaob_cat WHERE catid=".$catid);
            $me = $db->fetch_object($first_row = true);
            return $me->catname;
        }
        else return "";
    }
    public function get_grade($gradeid)
    {
        if($gradeid != "")
        {
            global $db;
            $blog = $db->query("SELECT * FROM xiaob_grade WHERE id=".$gradeid);
            $me = $db->fetch_object($first_row = true);
            return $me->gradename;
        }
        else return "";
    }
    public function get_subject($subjid)
    {
        if($subjid != "")
        {
            global $db;
            $blog = $db->query("SELECT * FROM xiaob_subj WHERE subjid=".$subjid);
            $me = $db->fetch_object($first_row = true);
            return $me->subjname;
        }
        else return "";
    }
    public function get_mem_account($xid,$info)
    {
        if(isset($xid) && $xid != "" && isset($info) && $info != "")
        {
            global $db;
            $db->query("SELECT ".$info." FROM xdata_account WHERE xid = ".$xid);
            $acc = $db->fetch_object($first_row = true);
            return $acc->$info;
        }
        else
        {
            return "";
        }
    }
    public function get_mem_info($xid,$info)
    {
        if(isset($xid) && $xid != "" && isset($info) && $info != "")
        {
            global $db;
            $db->query("SELECT ".$info." FROM xdata_info WHERE xid = ".$xid);
            $acc = $db->fetch_object($first_row = true);
            return $acc->$info;
        }
        else
        {
            return "";
        }
    }
    public function bodau($title) {
        $title = preg_replace('/(")/','',$title);
        $url_pattern = array('` &(amp;|"| |"|#)?[a-z0-9]+;`i', '`[^a-z0-9]`i');

        $title = htmlentities($title, ENT_COMPAT, 'utf-8');
        $title = preg_replace( '`&([a-z]+)(acute|uml|circ|quot|grave|ring|cedil|slash|tilde|caron|lig);`i', "\\1", $title );
        $title = preg_replace('`\[.*\]`U','',$title);
        $title = strtolower(trim($title, '-'));

        $title = preg_replace("/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|À|Á|Ả|Ã|Ạ|Ằ|Ắ|Ẳ|Ẵ|Ặ|Ầ|Ấ|Ẩ|Ẫ|Ậ)/", 'a', $title);
        $title = preg_replace("/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ể|Ễ|Ệ)/", 'e', $title);
        $title = preg_replace("/(ì|í|ị|ỉ|ĩ)/", 'i', $title);
        $title = preg_replace("/(-)/", '', $title);
        $title = preg_replace("/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|Ồ|Ố|Ổ|Ỗ|Ộ|Ờ|Ớ|Ở|Ỡ|Ợ)/", 'o', $title);
        $title = preg_replace("/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|Ù|Ú|Ủ|Ũ|Ụ|Ừ|Ứ|Ử|Ữ|Ự)/", 'u', $title);
        $title = preg_replace("/(ỳ|ý|ỵ|ỷ|ỹ|Ỳ|Ý|Ỷ|Ỹ|Ỵ)/", 'y', $title);
        $title = preg_replace("/(đ)/", 'd', $title);
        $title = preg_replace("/(Đ)/", 'd', $title);
        $title = preg_replace("/[^a-zA-Z0-9\/_|+ -]/", '', $title);
        $title = preg_replace($url_pattern , '-', $title);
        $title = preg_replace("/(--)/",'-',$title);
        return $title;
    }

    public function permalink($id,$type)
    {
        global $db;
        $fs = "";
        switch($type)
        {
            case "book":
            {
                $db->query("SELECT * FROM xiaob_book WHERE bookid = ".$id."");
                $bl = $db->fetch_object($first_row = true);
                $fs = $id."-".$this->bodau($bl->bookname);
                break;
            }
            case "cat":
            {
                $db->query("SELECT * FROM xiaob_cat WHERE catid = ".$id."");
                $bl = $db->fetch_object($first_row = true);
                $fs = $id."-".$this->bodau($bl->catname);
                break;
            }
            case "subj":
            {
                $db->query("SELECT * FROM xiaob_subj WHERE subjid = ".$id."");
                $bl = $db->fetch_object($first_row = true);
                $fs = $id."-".$this->bodau($bl->subjname);
                break;
            }
            case "bst":
            {
                $db->query("SELECT * FROM xiaob_bst_flat WHERE id = ".$id);
                $bst = $db->fetch_object($first_row = true);
                $fs = $id."-".$this->bodau($bst->tenbst);
                break;
            }
            case "schoollevel":
            {
                $db->query("SELECT * FROM xiaob_school_level WHERE id = ".$id);
                $bst = $db->fetch_object($first_row = true);
                $fs = $id."-".$this->bodau($bst->levelname);
                break;
            }
            case "grade":
            {
                $db->query("SELECT * FROM xiaob_grade WHERE id = ".$id);
                $bst = $db->fetch_object($first_row = true);
                $fs = $id."-".$this->bodau($bst->gradename);
                break;
            }
            default:
                break;
        }
        return $fs;
    }
    public function get_bst($xid)
    {
        if(isset($xid) && $xid != "")
        {
            global $db;
            $db->query("SELECT * FROM xiaob_bst_flat WHERE xid = '".$xid."'");
            return $db->fetch_object();
        }
        else
        {
            return null;
        }
    }
    private function URNR($min, $max, $quantity) {
        $numbers = range($min, $max);
        shuffle($numbers);
        return array_slice($numbers, 0, $quantity);
    }
    public function random_bst()
    {
        global $db;
        $db->query("SELECT * FROM xiaob_bst_flat ORDER BY xview DESC");
        $c = $db->num_row();
        $b = $this->URNR(1,$c,3);
        return $b;

    }
    public function get_bst_list($bstid)
    {
        global $db;
        $db->query("SELECT * FROM xiaob_bst WHERE mabst = ".$bstid." ORDER BY bookid DESC LIMIT 4");
        return $db->fetch_object();
    }
    public function bst_info($id)
    {
        global $db;
        $db->query("SELECT * FROM xiaob_bst_flat WHERE id = ".$id);
        return $db->fetch_object($first_row = true);
    }
    public function get_top_post($num)
    {
        global $db;
        $db->query("SELECT * FROM xiaob_memlog ORDER BY upload DESC LIMIT ".$num);
        return $db->fetch_object();
    }
    public function get_subject_list()
    {
        global $db;
        $db->query("SELECT * FROM xiaob_subj");
        return $db->fetch_object();
    }
    public function get_book_by_subject($subjectid,$limit = 3)
    {
        global $db;
        $db->query("SELECT * FROM xiaob_book WHERE booksubj = ".$subjectid." ORDER BY bookid DESC LIMIT ".$limit);
        return $db->fetch_object();
    }
    public function get_newest_book_by_subject($subjectid)
    {
        global $db;
        $db->query("SELECT * FROM xiaob_book WHERE booksubj = ".$subjectid." ORDER BY bookid DESC");
        return $db->fetch_object($first_row = true);
    }
    public function get_top_book_by_category($catid,$limit = 3)
    {
        global $db;
        $db->query("SELECT * FROM xiaob_book WHERE bookcat = ".$catid." ORDER BY bookid DESC LIMIT ".$limit);
        return $db->fetch_object();
    }
    public function get_grade_by_level($levelid)
    {
        global $db;
        $db->query("SELECT * FROM xiaob_level_grade WHERE levelid = ".$levelid);
        return $db->fetch_object();
    }
    public function get_top_member_by_score($top = 5)
    {
        //8317808
        global $db;
        $db->query("SELECT * FROM xdata_score WHERE appid = '8317808' ORDER BY score DESC LIMIT ".$top);
        return $db->fetch_object();
    }
    public function get_event_info($eventid)
    {
        global $db;
        $db->query("SELECT * FROM xiaob_event WHERE id = ".$eventid);
        return $db->fetch_object($first_row = true);
    }
    public function bookcount($w)
    {
        global $db;
        $db->query("SELECT * FROM xiaob_book WHERE ".$w);
        return $db->num_row();
    }
    public function analytic_page($str)
    {
        $ids = explode("-", $str);
        return $ids[1];
    }

}