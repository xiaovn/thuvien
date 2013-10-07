<?php
/**
 * Project: thuvien.
 * File: viewController.php.
 * Author: Ken Zaki
 * Email: kenzaki@xiao.vn
 * Create Date: 09:54 - 07/10/2013
 * Website: www.xiao.vn
 */
Class viewController extends baseController
{
    public function index()
    {

    }
    public function doc($para)
    {
        $masach = $this->func->getid($para[1]);
        if($this->func->checkid($masach,"xiaob_book","bookid"))
        {
            $this->view->data['xdata'] = $masach;
            $this->view->show('view-doc');
        }
        else
        {
            $this->view->data['notifi'] = "Xin lỗi, không tồn tại tài liệu này!";
            $this->view->show('404');
        }
    }
}