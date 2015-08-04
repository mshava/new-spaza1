<? php
$mysql_hostname = "localhost";
$msql_user = "root";
$mysql_password = "2197832";
$mysql_database = "user_login";
$prefix = "";
$bd = mysql_connection($mysql_user,$mysql_password) or die ("Could not connect database");
mysql_select_db($mysql_database,$bd) or die ("Could not select database");
?>




<tr>
            <td colspan="2">
                <div align="center">
                    <?php 
                    $remarks=isset($_GET['remarks'])?$_GET['remarks']:"";
                    if ($remarks==null and $remarks=="")
                    {
                    echo 'Register Here';
                    }
                    if ($remarks=='success')
                    {
                    echo 'Registration Success';
                    }
                    ?>