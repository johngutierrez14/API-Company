import mysql from "mysql2/promise";

const getPool = () => {
  const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_company",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  return pool;
};

export default getPool;
