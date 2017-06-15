<html>
	<head>
		<?php 
			
			$nombre_t = $_POST["nombre"];
			
			$dato="Nombre: $nombre_t";

			$fichero = fopen("datos.txt", "a");
			fwrite($fichero, $dato . PHP_EOL);
		?>
	</head>
	<body>
		<div>
			<h3>Datos enviados</h3>
			<p><a href="diarioclase.html">Volver</a></p>
		</div>
	</body>
</html>