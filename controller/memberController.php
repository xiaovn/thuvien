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
        $this->view->show('register');
    }
}