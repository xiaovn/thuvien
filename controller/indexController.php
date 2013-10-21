<?php

Class indexController Extends baseController
{
	public function index()
    {
        $this->view->data['listbg'] = $this->model->get('m3316Model')->get_book_of_baigiang();
        $this->view->data['listtailieu'] = $this->model->get('m3317Model')->get_book_of_tailieu();
        $this->view->data['listdethi'] = $this->model->get('m3318Model')->get_book_of_dethi();
        $this->view->data['bstlist'] = $b = general::getInstance()->random_bst();
        $this->view->data['bst1'] = general::getInstance()->get_bst_list($b[0]);
        $this->view->data['bst2'] = general::getInstance()->get_bst_list($b[1]);
        $this->view->data['bst3'] = general::getInstance()->get_bst_list($b[2]);
        $this->view->show('index');
	}
}

?>
