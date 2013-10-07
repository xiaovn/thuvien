<?php

Class baseView {


/*
 * @Variables array
 * @access public
 */
public $data = array();
private static $instance;

/**
 *
 * @constructor
 *
 * @access public
 *
 * @return void
 *
 */
function __construct() {

}

public static function getInstance() {
	if (!self::$instance)
	{	
		self::$instance = new baseView();
	}
	return self::$instance;
}
	
 /**
 *
 * @set undefined vars
 *
 * @param string $index
 *
 * @param mixed $value
 *
 * @return void
 *
 */
 public function __set($index, $value)
 {
        $this->vars[$index] = $value;
 }


function show($name) {
	$path = __SITE_PATH . '/template/' .ThemeMaster. '/' . $name . '.php';

	if (file_exists($path) == false)
	{
		throw new Exception('Template not found in '. $path);
		return false;
	}

	// Load variables
	foreach ($this->data as $key => $value)
	{
		$$key = $value;
	}

	include ($path);               
}


}

?>
