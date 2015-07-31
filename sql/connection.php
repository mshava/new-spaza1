<? php
$mysql_hostname = "localhost";
$msql_user = "root";
$mysql_password = "2197832";
$mysql_database = "user_login";
$prefix = "";
$bd = mysql_connection($mysql_user,$mysql_password) or die ("Could not connect database");
mysql_select_db($mysql_database,$bd) or die ("Could not select database");
?>