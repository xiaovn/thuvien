<?php
/**
 * Project: thuvien.
 * File: uploadController.php.
 * Author: Ken Zaki
 * Email: kenzaki@xiao.vn
 * Create Date: 18:46 - 05/10/2013
 * Website: www.xiao.vn
 */

Class uploadController extends baseController
{
    public function index()
    {
        $this->view->show('doc-upload');
    }
}