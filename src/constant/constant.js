module.exports = {
    db: {
      dialect: "mysql",
      host: "localhost",
      port: "3306",
      db: "institute",
      username: "root",
      password: "Root@03",
    },
    PORT : process.env.PORT || 8000,
    SECRETE_KEY: "THISISSECREATEKEY",
    swaggerPORT: process.env.PORT || "localhost:8000",
  };
  