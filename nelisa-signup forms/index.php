<!DOCTYPE html>
<html lang="en">              
 
<head>
<title>YOU'RE MORE THAN WELCOME TO JOIN!</title>
</head>

<body>
<form name="reg" action="code_exec.php" onsubmit="return validationForm()" method="post">
    <table width="274" border="0" align="center" cellpadding="2" cellspacing="0">
                <tr>
                    <td width="95"><div align="right">First name:</div></td>
                    <td width="171"><input type="text" name="fname"/></td>
                </tr>
                <tr>
                    <td><div align="rigth">Last name:</div></td>
                    <td><input type="text" name="lname"></td>
                </tr>
                <tr>
                    <td><div align="right">Gender:</div></td>
                    <td><input type="text" name="mnane"></td>
                </tr>
                <tr>
                    <td><div align="rigth">Address:</div></td>
                    <td><input type="text" name="Address"></td>
                </tr>
                <tr>
                    <td><div align="right">Contact no.:</div></td>
                    <td><input type="text" name="contact"></td>
                </tr>
                <tr>
                    <td><div align="right">Picture:</div></td>
                    <td><input type="text" name="pic"></td>
                </tr>
                <tr>
                    <td><div align="right">Username.:</div></td>
                    <td><input type="text" name="username"></td>
                </tr>
                <tr>
                    <td><div align="right">Contact no.:</div></td>
                    <td><input type="text" name="contact"></td>
                </tr>
                <tr>
                    <td><div align="right">Password:</div></td>
                    <td><input type="text" name="password"></td>
                </tr>
                <tr>
                    <td><div align="right"></div></td>
                    <td><input name="submit" type="submit"/></td>
                </tr>
    </table>
</form>     
    <script type="text/javascript">
    function validateForm()
    {
    var a=document.forms["reg"]["fname"].value;
    var b=document.forms["reg"]["lname"].value;
    var c=document.forms["reg"]["mname"].value;
    var d=document.forms["reg"]["address"].value;
    var e=document.forms["reg"]["contact"].value;
    var f=document.forms["reg"]["pic"].value;
    var g=document.forms["reg"]["pic"].value;
    var h=document.forms["reg"]["pic"].value;
    if ((a==null || a=="") && (b==null || b=="") && (c==null || c=="") && (d==null || d=="") && (e==null || e=="") && (f==null || f==""))
    {
    alert("All Field must be filled out");
    return false;
    }
    if (a==null || a=="")
    {
    alert("First name must be filled out");
    return false;
    }
    if (b==null || b=="")
    {
    alert("Last name must be filled out");
    return false;
    }
    if (c==null || c=="")
    {
    alert("Gender name must be filled out");
    return false;
    }
    if (d==null || d=="")
    {
    alert("address must be filled out");
    return false;
    }
    if (e==null || e=="")
    {
    alert("contact must be filled out");
    return false;
    }
    if (f==null || f=="")
    {
    alert("picture must be filled out");
    return false;
    }
    if (g==null || g=="")
    {
    alert("username must be filled out");
    return false;
    }
    if (h==null || h=="")
    {
    alert("password must be filled out");
    return false;
    }
    }
    </script>
 
    </body>
 </html>           
