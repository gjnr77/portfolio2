<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
<?php

include_once('header.php');

$email = $_POST['email'];

$sql = "insert into wildsouls (email) values('$email')";

$result = mysqli_query($conn,$sql);

if($result){
  echo 'insert success';
}


include_once('footer.php');


?>

</body>
</html>

<!-- gjnr77.dothome.co.kr/portfolio2_wildsoul/php/insert_wildsouls.php -->
<!-- gjnr77.dothome.co.kr/portfolio2_wildsoul -->

