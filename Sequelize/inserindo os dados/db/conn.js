const { Sequelize } = require("sequelize");
const sequilize = new Sequelize("nodesequelize2", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// try {
//   sequilize.authenticate();
//   console.log("Conectamos com sucesso com o Sequilize!");
// } catch (err) {
//   console.log("Não foi possível conectar:", error);
// }

module.exports = sequilize;
