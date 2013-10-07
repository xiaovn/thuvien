<?php

Class blogController Extends baseController {

	public function index() 
	{
		$this->view->data['blogs'] = $this->model->get('blogModel')->get_blogs();
		$this->view->data['blog_heading'] = 'This is the blog Index';
		$this->view->show('blog_index');
	}


	public function view($args){
		$id_blog = $args[1];
		$blog_detail = $this->model->get('blogModel')->get_blog_detail($id_blog);
		$this->view->data['blog_heading'] = $blog_detail->name;
		$this->view->data['blog_content'] = $blog_detail->content;
		$this->view->show('blog_view');
	}

}
?>
