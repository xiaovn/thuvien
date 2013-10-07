<?php
/**
 * Project: thuvien.
 * File: blankpage.php.
 * Author: Ken Zaki
 * Email: kenzaki@xiao.vn
 * Create Date: 12:22 - 05/10/2013
 * Website: www.xiao.vn
 */
include_once "header.php";
?>
</head>
<body>

<?php require_once "top.php";?>
<?php require_once "nav.php";?>
<div class="containt_center_top clear"></div>
<div class="containt_center_cen clear">
<table cellpadding="0" cellspacing="0" border="0">
<tr>
<td valign="top" class="containt_center_cen_left">

<?php require_once "breadcrumb.php";?>

<div class="comment_bai_hoc clear">

//Content here

</div>

</td>
<?php
include_once "sidebar.php";
?>
</tr>
</table>
</div>

<?php
include_once "footer.php";
?>