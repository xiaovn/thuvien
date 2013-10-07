<?php

Class indexController Extends baseController {
	public function index() {
		/*** set a template variable ***/
			$this->view->data['welcome'] = 'Welcome to PHPRO MVC';
		/*** load the index template ***/
			$this->view->show('index');
	}

}

?>
