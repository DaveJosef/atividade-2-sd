const app = require("./src/app");
const dotenv = require("dotenv");

// Carregando variaveis de ambiente
dotenv.config();

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`BooksFinder running in port ${PORT}`);
});
