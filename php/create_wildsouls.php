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

$sql = "create table if not exists wildsouls (
        idx int auto_increment not null,
        email varchar(100) not null,
        primary key(idx)
) ENGINE=InnoDB DEFAULT CHARSET=utf8";

$result = mysqli_query($conn,$sql);

include_once('footer.php');

?>

</body>
</html>




<!-- gjnr77.dothome.co.kr/portfolio2_wildsoul/php/create_wildsouls.php -->