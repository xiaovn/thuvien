<?php
/**
 * Project: thuvien.
 * File: header.php.
 * Author: Ken Zaki
 * Email: kenzaki@xiao.vn
 * Create Date: 10:54 - 04/10/2013
 * Website: www.xiao.vn
 */
include "config.php";
?>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-Equiv="Cache-Control" Content="no-cache">
    <meta http-Equiv="Pragma" Content="no-cache">
    <meta http-Equiv="Expires" Content="0">
    <title>Thư viện giáo dục - Thu vien giao duc - Thu vien tai nguyen giao duc mien phi - On thi toan - ly - hoa - sinh - anh van</title>
    <meta name="description" content="Mô tả"/>
    <meta name="keywords" content="Từ khóa"/>
    <link rel="shortcut icon" href="<?php echo $template_path;?>images/thuviengiaoduc.png"/>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js" type="text/javascript"></script>
    <!-- style tong hop -->
    <link rel="stylesheet" type="text/css" href="<?php echo $template_path;?>css/ta123_styles.css-v=3.css" />
    <!-- Load lib common -->
    <script language="JavaScript">
        <!--
        var dictionaries = "ev_ve";
        // -->
    </script>
    <script type="text/javascript" src="<?php echo $template_path;?>js/libraries.js" ></script>

    <script type="text/javascript" src="<?php echo $template_path;?>js/jquery.tinyscrollbar.min.js" ></script>
    <script type="text/javascript" src="<?php echo $template_path;?>js/easySlider1.7.js" ></script>
    <script type="text/javascript">
        $(document).ready(function(){
            $("#slider").easySlider({
                auto: true,
                continuous: true,
                numeric: true,
                pause:7000
            });
            $('#scrollbar1').tinyscrollbar();
        });
    </script>
    <script type="text/javascript" src="<?php echo $template_path;?>js/jquery_ready.js"></script>

    <!--[if lte IE 10]>
    <link rel="stylesheet" type="text/css" href="<?php echo $template_path;?>common.css">
    <![endif]-->
    <!--[if IE 6]>
    <link rel="stylesheet" type="text/css" href="<?php echo $template_path;?>ie6.css" >
    <![endif]-->
    <!--[if IE 7]>
    <link rel="stylesheet" type="text/css" href="<?php echo $template_path;?>ie7.css" >
    <![endif]-->
    <!--[if IE 8]>
    <link rel="stylesheet" type="text/css" href="<?php echo $template_path;?>ie8.css">
    <![endif]-->
    <!--[if IE 9]>
    <link rel="stylesheet" type="text/css" href="<?php echo $template_path;?>ie9.css">
    <![endif]-->
    <!-- Tienganh123 lib -->
    <!-- Chat 123 -->

    <link rel="stylesheet" type="text/css" href="<?php echo $template_path;?>css/chat_123.css"/>

    <!-- Chat 123 -->
    <!-- AUDIO PLAYER -->
    <script type="text/javascript" src="<?php echo $template_path;?>css/swfobject.js" ></script>
    <script src="<?php echo $template_path;?>js/libs_audio.js"></script>
    <script type="text/javascript" src="<?php echo $template_path;?>js/pickle.js"></script>

