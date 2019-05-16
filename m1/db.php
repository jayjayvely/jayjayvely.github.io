 <?php
  session_start();
  
  $db = new mysqli("localhost","leeejay","wkdudrmfls123","leeejay");
  $db->set_charset("utf8");

  function mq($sql){
    global $db;
    return $db->query($sql);
  }

  ?>