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
    public function ajaxbaoxau()
    {
        if(isset($_POST['id']) && $_POST['id'] != "")
        {
            $bookid = $_POST['id'];
            global $db;
            $db->query("INSERT INTO xiaob_baoxau(bookid) VALUES(".$bookid.")");
        }
        else
        {
            echo 'ERROR';
        }
    }
    public function ajaxlike()
    {
        if(isset($_POST['id']) && $_POST['id'] != "")
        {
            $bookid = $_POST['id'];
            global $db;
            $db->query("INSERT INTO xiaob_yeuthich(bookid,xid) VALUES(".$bookid.",'".$_SESSION['xID']."')");
        }
        else
        {
            echo 'ERROR';
        }
    }
    public function ajaxrate()
    {
        $ip = $_SERVER['REMOTE_ADDR'];
        if(isset($_POST['id']) && $_POST['id'] != "")
        {
            $bookid = $_POST['id'];
            global $db;
            $db->query("SELECT * FROM xiaob_bookrate WHERE bookid = '".$bookid."' AND ipadd = '".$ip."'");
            if(!$db->num_row())
            {
                $this->model->get("m2027Model")->updatediem($bookid,$ip);

                $db->query("SELECT bookscore FROM xiaob_book WHERE bookid = ".$bookid);
                $b = $db->fetch_object($first_row = true);
                echo $b->bookscore;
            }
            else
            {
              echo 'ERROR';
            }

        }
        else
        {
            echo 'ERROR';
        }
    }
    public function doc($para)
    {
        $_SESSION['xID'] = '7221111111';
        $masach = $this->func->getid($para[1]);
        if($this->func->checkid($masach,"xiaob_book","bookid"))
        {
            $this->view->data['xdata'] = $masach;
            $this->model->get('m4011Model')->updateview($masach);
            $this->view->data['books'] = $books = $this->model->get('viewModel')->getbook($masach);
            $this->view->data['commentlist'] = $this->model->get('commentModel')->get_comment($masach);
            $this->view->data['baicungtacgia'] = $this->model->get('m4211Model')->baicungtacgia($books->bookpuber);
            $this->view->data['baicungmon'] = $this->model->get('m4231Model')->baicungmon($books->booksubj);
            $this->view->data['baicungchude'] = $this->model->get('m4331Model')->baicungchude($books->bookname);
            $this->view->data['tags'] = $this->model->get('m4606Model')->get_tags($masach);
            $this->view->show('view-doc');
        }
        else
        {
            $this->view->data['notifi'] = "Xin lỗi, không tồn tại tài liệu này!";
            $this->view->show('404');
        }
    }
    public function subject($para)
    {
        $mamon = $this->func->getid($para[1]);
        if($this->func->checkid($mamon,"xiaob_subj","subjid"))
        {
            $spp = 10;
            $page = 1;
            if(isset($_GET['page']) && $_GET['page'] != "")
            {
                $page = $_GET['page'];
            }
            $cp = $page - 1;
            $this->view->data['sodulieu']= $sodu_lieu = general::getInstance()->bookcount("booksubj = ".$mamon);
            $sotrang = $sodu_lieu/$spp;
            $sql = "SELECT * FROM xiaob_book WHERE booksubj = '".$mamon."' ORDER BY bookid DESC LIMIT ".$cp*$spp.",".$spp;
            $this->view->data['listbook'] = $this->model->get('m3201Model')->bookquery($sql,false);
            $this->view->data['mamon'] = $mamon;
            $this->view->data['count'] = $sodu_lieu;
            $this->view->data['sotrang'] = $sotrang;
            $this->view->show('subject');
        }
        else
        {
            $this->view->data['notifi'] = "Xin lỗi, không tồn tại môn này!";
            $this->view->show('404');
        }

    }
    public function category($para)
    {
        $cat = $this->func->getid($para[1]);
        if($this->func->checkid($cat,"xiaob_cat","catid"))
        {
            $this->view->show('category');
        }
        else
        {
            $this->view->data['notifi'] = "Xin lỗi, không tồn tại danh mục này!";
            $this->view->show('404');
        }
    }
}