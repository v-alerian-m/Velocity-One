<?php
//si pseudo = admin et password = admin
 if ($_GET["pseudo"] == "valerian" && $_GET["password"] == "ibanez"){
     echo true;
 }else{
     $result = array('error' => true);
     echo json_encode($result);
 }
?>