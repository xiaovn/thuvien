<?php
/**
 * Project: xvn.
 * File: member.class.php.
 * Author: Ken Zaki
 * Email: kenzaki@xiao.vn
 * Create Date: 6:31 AM - 8/4/13
 * Website: www.xiao.vn
 */
Class member{


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
            self::$instance = new member();
        }
        return self::$instance;
    }

    /**
     *
     * @set undefined vars
     *
     * @param string $index
     *
     * @param mixed $value
     *
     * @return void
     *
     */
    public function sex($sex)
    {
        if(isset($sex) && $sex != "")
        {
            if($sex == 1)
            {
                return "Nam";
            }
            elseif($sex == 0)
            {
                return "Nữ";
            }
            else
            {
                return "Khác";
            }
        }
        else
        {
            return "";
        }
    }
    public function get_member_info($xid,$xfunc)
    {
        global $db;
        $blog = $db->query("SELECT ".$xfunc." FROM xdata_info WHERE xid=".$xid);
        $me = $db->fetch_object($first_row = true);
        return $me->$xfunc;
    }
    public function account($xid,$info)
    {
        if(isset($xid) && $xid != "" && isset($info) && $info != "")
        {
            global $db;
            $db->query("SELECT ".$info." FROM xdata_account WHERE xid = '".$xid."'");
            $acc = $db->fetch_object($first_row = true);
            return $acc->$info;
        }
        else
        {
            return "";
        }
    }
    public function get_score($xid,$appid)
    {
        if(isset($xid) && $xid != "" && isset($appid) && $appid != "")
        {
            global $db;
            $db->query("SELECT score FROM xdata_score WHERE xid = '".$xid."' AND appid = '".$appid."'");
            if($db->num_row())
            {
                $ifo = $db->fetch_object($first_row = true);
                return $ifo->score;
            }
            else
            {
                return "0";
            }
        }
        else
        {
            return "0";
        }
    }
    public function get_rank_of_xid($xid, $appid)
    {

        if(isset($xid) && $xid != "" && isset($appid) && $appid != "")
        {
            global $db;
            $db->query("SELECT score, FIND_IN_SET( score, ( SELECT GROUP_CONCAT( score ORDER BY score DESC ) FROM xdata_score ) ) AS rank  FROM xdata_score WHERE xid = '".$xid."' AND appid = '".$appid."'");

            if($db->num_row())
            {
                $ifo = $db->fetch_object($first_row = true);
                return $ifo->rank;
            }
            else
            {
                return "0";
            }
        }
        else
        {
            return "0";
        }
    }
    public function get_max_score($appid)
    {
        if(isset($appid) && $appid != "")
        {
            global $db;
            $db->query("SELECT MAX(score) as maxs FROM xdata_score WHERE appid = '".$appid."'");

            if($db->num_row())
            {
                $ifo = $db->fetch_object($first_row = true);
                return $ifo->maxs;
            }
            else
            {
                return "0";
            }
        }
        else
        {
            return "0";
        }
    }
    public function bio($xid,$info)
    {
        if(isset($xid) && $xid != "" && isset($info) && $info != "")
        {
            global $db;
            $db->query("SELECT ".$info." FROM xdata_bio WHERE xid = ".$xid);
            $ifo = $db->fetch_object($first_row = true);
            return $ifo->$info;
        }
        else
        {
            return "";
        }
    }
    public function info($xid,$info)
    {
        if(isset($xid) && $xid != "" && isset($info) && $info != "")
        {
            global $db;
            $db->query("SELECT ".$info." FROM xdata_info WHERE xid = ".$xid);
            $ifo = $db->fetch_object($first_row = true);
            return $ifo->$info;
        }
        else
        {
            return "";
        }
    }
    public function xgroup($groupid)
    {
        if(isset($groupid) && $groupid != "")
        {
            global $db;
            $db->query("SELECT groupname FROM xdata_account_group WHERE groupid = ".$groupid);
            $ifo = $db->fetch_object($first_row = true);
            return $ifo->groupname;
        }
        else
        {
            return "";
        }
    }
    public function dantoc($madantoc)
    {
        if(isset($madantoc) && $madantoc != "")
        {
            global $db;
            $db->query("SELECT tendantoc FROM xdata_dantoc WHERE madantoc = '".$madantoc."'");
            $ifo = $db->fetch_object($first_row = true);
            return $ifo->tendantoc;
        }
        else
        {
            return "";
        }
    }
    public function tongiao($matongiao)
    {
        if(isset($matongiao) && $matongiao != "")
        {
            global $db;
            $db->query("SELECT tentongiao FROM xdata_tongiao WHERE matongiao = ".$matongiao);
            $ifo = $db->fetch_object($first_row = true);
            return $ifo->tentongiao;
        }
        else
        {
            return "";
        }
    }
    public function tinh($matinh)
    {
        if(isset($matinh) && $matinh != "")
        {
            global $db;
            $db->query("SELECT tentinh FROM xdata_tinhthanh WHERE matinh = ".$matinh);
            $ifo = $db->fetch_object($first_row = true);
            return $ifo->tentinh;
        }
        else
        {
            return "";
        }
    }
    public function huyen($mahuyen)
    {
        if(isset($mahuyen) && $mahuyen != "")
        {
            global $db;
            $db->query("SELECT tenhuyen FROM xdata_huyen WHERE mahuyen = ".$mahuyen);
            $ifo = $db->fetch_object($first_row = true);
            return $ifo->tenhuyen;
        }
        else
        {
            return "";
        }
    }
    public function xa($maxa)
    {
        if(isset($maxa) && $maxa != "")
        {
            global $db;
            $db->query("SELECT tenxa FROM xdata_xa WHERE maxa = ".$maxa);
            $ifo = $db->fetch_object($first_row = true);
            return $ifo->tenxa;
        }
        else
        {
            return "";
        }
    }
    public function honnhan($mahonnhan)
    {
        if(isset($mahonnhan) && $mahonnhan != "")
        {
            global $db;
            $db->query("SELECT tinhtranghonnhan FROM xdata_honnhan WHERE mahonnhan = ".$mahonnhan);
            $ifo = $db->fetch_object($first_row = true);
            return $ifo->tinhtranghonnhan;
        }
        else
        {
            return "";
        }
    }
    public function get_activity($xid)
    {
        global $db;
        $db->query("SELECT * FROM xdata_activity WHERE xid=".$xid." ORDER BY id DESC LIMIT 5");
        return $db->fetch_object();
    }
    public function get_banbe($xid)
    {
        global $db;
        $db->query("SELECT * FROM xdata_friend WHERE xid1 =".$xid." ORDER BY id DESC LIMIT 5");
        return $db->fetch_object();
    }
    public function get_app_log($xid)
    {
        global $db;
        $db->query("SELECT * FROM xdata_app_log WHERE xid =".$xid." LIMIT 5");
        return $db->fetch_object();
    }
    public function memcount($type)
    {
        if(isset($type) && $type != "")
        {
            //Query student
            global $db;
            $db->query("SELECT * FROM xdata_account WHERE xgroup  = '".$type."'");
            return $db->num_row();
        }
        else
        {
            return null;
        }
    }
    public function checkfriend($xid1, $xid2)
    {
        if($xid1 == $xid2)
        {
            return false;
        }
        elseif(isset($xid1) && isset($xid2) && $xid1 != "" && $xid2 != "")
        {
            global $db;
            $db->query("SELECT * FROM xdata_friend WHERE (xid1 = ".$xid1." AND xid2 =".$xid2.") OR (xid1 = ".$xid2." AND xid2 = ".$xid1.")");
            if($db->num_row())
            {
                return false;
            }
            else
            {
                return true;
            }
        }
        else
        {
            return false;
        }
    }
    public function checkuser($xid)
    {
        if(isset($xid) && $xid != "")
        {
            global $db;
            $db->query("SELECT * FROM xdata_account WHERE xid = '".$xid."' OR username ='".$xid."' OR email = '".$xid."'" );
            if($db->num_row())
            {
                $mem = $db->fetch_object($first_row = true);
                return $mem->xid;
            }
            else
            {
                return null;
            }
        }
        else
        {
            return null;
        }
    }
    public function bank($xid,$info)
    {
        if(isset($xid) && $xid != "" && isset($info) && $info != "")
        {
            global $db;
            $db->query("SELECT * FROM xdata_bank WHERE xid = '".$xid."'" );
            if($db->num_row())
            {
                $mem = $db->fetch_object($first_row = true);
                return $mem->xcoin;
            }
            else
            {
                return null;
            }
        }
        else
        {
            return null;
        }
    }
    //Hàm chức năng xem club
    public function get_loaiclub($loaiclub)
    {
        if(isset($loaiclub) && $loaiclub != "")
        {
            global $db;
            $db->query("SELECT clb_group_name FROM xdata_clb_group WHERE clb_group_id = ".$loaiclub);
            $ifo = $db->fetch_object($first_row = true);
            return $ifo->clb_group_name;
        }
        else
        {
            return "";
        }
    }
    public function checkfollow($xid1, $xid2)
    {
        if($xid1 == $xid2)
        {
            return 1;
        }
        elseif(isset($xid1) && isset($xid2) && $xid1 != "" && $xid2 != "")
        {
            global $db;
            $db->query("SELECT * FROM xdata_follow WHERE (xid = ".$xid1." AND follow =".$xid2.")");
            if($db->num_row())
            {
                return 2;
            }
            else
            {
                return 3;
            }
        }
        else
        {
            return false;
        }
    }
    public function check_subs($email)
    {
        global $db;
        $db->query("SELECT * FROM xdata_subscribe WHERE xemail = '".$email."'");
        if($db->num_row())
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}