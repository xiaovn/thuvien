<?php
/**
 * Project: thuvien.
 * File: templatesController.php.
 * Author: Ken Zaki
 * Email: kenzaki@xiao.vn
 * Create Date: 12:32 - 05/10/2013
 * Website: www.xiao.vn
 */
Class templatesController extends baseController
{
    public function index()
    {
        $this->view->show('blankpage');
    }
}