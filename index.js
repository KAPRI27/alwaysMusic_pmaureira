// Importamos la librería de PostgreSQL
const { Pool } = require('pg');


// Función para conectarnos a la base de datos
const connection = async () => {
  // Creamos una instancia de la clase pool
//***CREAMOS EL OBJETO DE CONFIGURACIÓN***
const config = {
    host: 'localhost',
    database: 'always_music',
    user: 'pmaureira',
    password: 'M4ur3ir4!!Aa',
    port: 5432,
   }
//PASAMOS EL OBJETO AL CONSTRUCTOR DE LA CLASE POOL
const pool = new Pool(config );
  // Nos conectamos a la base de datos
  await pool.connect();


  //***PARA CORRER EL CODIGO HAY QUE DESCOMENTAR CADA INSTRUCCIÓN***/
  
/*
  // Realizamos una consulta a la base de datos que muestre MUESTRA LA TABLA alumnos
  const alumnos = await pool.query("SELECT * FROM alumnos");
  // Mostramos el resultado de la consulta
  console.log(alumnos.rows);
  // Cerramos la conexión a la base de datos
  await pool.end();
*/
  
/*
  // Realizamos una consulta a la base de datos que muestre la información del RUT '16.789.202-4' en este caso el alumno Sergio Mora
  const alumno_rut = await pool.query("SELECT * FROM alumnos WHERE rut = '16.789.202-4' ");
  // Mostramos el resultado de la consulta
  console.log(alumno_rut.rows);
  // Cerramos la conexión a la base de datos
  await pool.end();
*/

/*
  // Realizamos una consulta a la base de datos EDITANDO un alumno 

  const editar_alumno = await pool.query("UPDATE alumnos SET curso ='Guitarra' WHERE curso='Guitarra y Bajo';");
  // Mostramos el resultado de la consulta
  console.log(editar_alumno.rows);
  const alumnos = await pool.query("SELECT * FROM alumnos");
  console.log(alumnos.rows);
  // Cerramos la conexión a la base de datos
  await pool.end();
*/

/*
//Realizamos la consulta a la base AGREGANDO un Alumno nuevo
  const agregar_alumno = await pool.query("INSERT INTO alumnos (nombre, rut, curso, nivel) VALUES ('Mercedes Gamboa', '12.587.039-7', 'Canto', 10);");
// Mostramos el resultado de la consulta
  console.log(alumnos.rows);
// Cerramos la conexión a la base de datos
  await pool.end();
*/

/*
// Realizamos una consulta a la base de datos BORRANDO a un alumno rut = '14.745.441-1'
  const result = await pool.query("DELETE from alumnos WHERE rut ='14.745.441-1';");
// Mostramos la nueva tabla resultado de la consulta
  console.log(alumnos.rows);
// Cerramos la conexión a la base de datos
  await pool.end();
*/


};

// Llamamos a la función connection
connection();