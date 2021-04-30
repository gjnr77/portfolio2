<?php

include_once('header.php');

$sql = "select * from wildsouls";

$result = mysqli_query($conn,$sql);

if(mysqli_num_rows($result)>0){
  echo '';
}


include_once('footer.php');

?>