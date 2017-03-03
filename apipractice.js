<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>API Review</title>
</head>

<body>
  <script type="text/javascript" src="https://code.jquery.com/jquery-2.2.0.js"></script>
  <script type="text/javascript">

  $.ajax({
    url: "http://www.omdbapi.com/?t=Breakfast+at+Tiffany%27s&plot=full",
    method: "GET",

  }).done(function(response){
    console.log(response);

  });
    
    
  </script>

</body>

</html>