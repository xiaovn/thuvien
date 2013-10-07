<?php
Abstract Class baseController {

/*
 * @registry object
 */
protected $registry;
protected $model;
protected $view;

function __construct($registry) {
	$this->registry = $registry;
	$this->model = &baseModel::getInstance();
	$this->view  = &baseView::getInstance();
	$this->func  = &general::getInstance();
}


/**
 * @all controllers must contain an index method
 */
abstract function index();
}

?>
