<?php
/**
 * Project: thuvien.
 * File: memberController.php.
 * Author: Ken Zaki
 * Email: kenzaki@xiao.vn
 * Create Date: 18:50 - 05/10/2013
 * Website: www.xiao.vn
 */
Class memberController extends baseController
{
    public function index()
    {

    }
    public function register()
    {
        $email = "kenzakivn@live.com";
        global $db;
        $db->query("INSERT INTO xdata_subscribe(xemail) VALUES('".$email."')");
        $this->view->show('register');
    }
    public function ajaxsubs()
    {
        if(isset($_POST['email']) && $_POST['email'] != "")
        {
            $email = $_POST['email'];
            if(member::getInstance()->check_subs($email))
            {
                return false;
            }
            else
            {
                global $db;
                $db->query("INSERT INTO xdata_subscribe(xemail) VALUES('".$email."')");
            }
        }
        else
        {
            echo 'ERROR';
        }
    }
}