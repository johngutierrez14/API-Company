import { mysql } from "mysql2/promise";

try {
  const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_company",
    port: 3306,
  });

  connection.release();
} catch (err) {
  console.log(err);
}

module.exports = connection;
