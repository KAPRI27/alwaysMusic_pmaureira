// Importamos la librería de PostgreSQL
const { Client } = require("pg");

// Función para conectarnos a la base de datos
const connection = async () => {
  // Capturamos los datos de Database, user y password desde la línea de comandos
/*
  const database = process.argv[2];
  const user = process.argv[3];
  const password = process.argv[4];
*/
  // Creamos una instancia de la clase Client con los datos capturados
  const client = new Client({
    host: "localhost",
    port: 5432,
    database: database,
    user: user,
    password: password,
  });

  // Nos conectamos a la base de datos
  await client.connect();

  // Realizamos una consulta a la base de datos
  const result = await client.query("SELECT * FROM users");
  // Mostramos el resultado de la consulta
  console.log(result.rows);
  // Cerramos la conexión a la base de datos
  await client.end();
};

// Llamamos a la función connection
connection();