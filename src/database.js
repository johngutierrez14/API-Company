import mysql from "mysql2/promise";

try {
  const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "company_db",
    port: 3302,
  });

  module.exports = connection;
} catch (err) {
  console.log(err);
}