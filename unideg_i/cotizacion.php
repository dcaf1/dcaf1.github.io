<?php 
session_start();
include('config.php');
error_reporting(0);

?>

<!doctype html>
<html lang="es">

<head>
	<title>Iván HG</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="stylesheet" href="css/estilo.css" />
			<script src="js/script.js"></script>
			<script src="js/jquery.min.js"></script>
			<script src="js/jquery.dropotron.min.js"></script>
			<script src="js/jquery.scrollgress.min.js"></script>
			<script src="js/skel.min.js"></script>
			<script src="js/util.js"></script>



</head>
<body class="landing">

	<div id="page-wrapper">



<!-- 🍎 MENU -->
	
	<header id="header">
	
	
        
        <nav id="nav">
	<ul>

	<li><a href="index.html">Inicio</a></li>

	<li>
	<a href="#">Acerca</a>
	<ul>
	<li><a href="mision.html">Misión</a></li>
	<li><a href="vision.html">Visión</a></li>
	<li><a href="valores.html">Valores</a></li>
	<li><a href="politica.html">Política</a></li>
	</ul>
	</li>

	<li><a href="promociones.html">Promociones</a></li>

	<li>
	<a href="#">Galería</a>
	<ul>
	<li><a href="imagenes.html">Imágenes</a></li>
	<li><a href="videos.html">Videos</a></li>
	</ul>
	</li>

	<li><a href="cotizaciones.html"><span style="color: #ec9c84">Cotizaciones</span></a></li>

	<li><a href="contacto.html">Contácto</a></li>

	<li><a href="sesion.html">Iniciar sesión</a></li>

	</ul>
	</nav>

	</header>

	


<!-- 🍎 INTRO -->



<!-- 🍎 TABLAS -->
	<section class="box">

        <br>
	<h4>Destino turístico</h4>

	<div class="table-wrapper">

	<!-- 🍎 COTIZACIONES -->
<h3>

<img src="<?php $foto = $_POST['F1']; echo $foto; ?>" width="200" height="200" />
<br>
<?php 

$destino = $_POST['D1'];
$precio =  $_POST['P1'];
$persona = $_POST['S1']; 
$fecha1 =  new DateTime($_POST['fecha1']); 
$fecha2 =  new DateTime($_POST['fecha2']); 

echo "$destino \n";

$interval = $fecha1->diff($fecha2);
$dias = $interval->days;

$cotizacion = (($precio * $dias) * $persona); 


echo " \n$ $cotizacion"; 

?> 

</h3>

	</div>
	</div>

        <script src="js/script.js"></script>

</body>

</html>
