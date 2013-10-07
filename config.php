<?php
/**
 * Project: xvn.
 * File: config.php.
 * Author: Ken Zaki
 * Email: kenzaki@xiao.vn
 * Create Date: 2:28 PM - 7/30/13
 * Website: www.xiao.vn
 */
session_start();
//=============== Custom configuration ==================//
define('DB_NAME', 'xiaovn_xem'); //database name
define('DB_USER', 'root'); //database user
define('DB_PASSWORD', ''); //database password
define('DB_HOST', 'localhost'); //sql server

/*** define mailer ***/
define('MAIL_PROTOCOL', 'SMTP');
define('MAIL_HOST', 'smtp.gmail.com');
define('MAIL_ACC', 'passport@xiao.vn');
define('MAIL_PASS', 'anhmaiyeuem123');
define('MAIL_PORT', 465);
define('MAIL_AUTH', true);
define('MAIL_SECURE', 'ssl');
/*** define Theme ***/
define('ThemeMaster', 'thuviengiaoduc'); //Replace xpanel by your theme's name
define('AdminThemeMaster', 'xiaocontrol'); //Replace xpanel by your admin theme's name

/*** define site path ***/
define('XC_URL','http://localhost/thuvien');
//Replace http://localhost/xvn by your site URL on server
// Note: url start with http:// and not end with /
$siteurl = XC_URL;
/*** template path ***/
$template_path = XC_URL.'/template/'.ThemeMaster.'/'; //Warning: Don't change here
$admintemplate_path = XC_URL.'/template/'.AdminThemeMaster.'/'; //Warning: Don't change here

/*** Set Application Name ***/
$app_name = 'X.E.M - Xiao Education Management';
?>
