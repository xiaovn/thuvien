<?php
/**
 * Project: thuvien.
 * File: categoryController.php.
 * Author: Ken Zaki
 * Email: kenzaki@xiao.vn
 * Create Date: 12:42 - 05/10/2013
 * Website: www.xiao.vn
 */
Class categoryController extends baseController
{
    public function index()
    {
        $this->view->show('category');
    }
}