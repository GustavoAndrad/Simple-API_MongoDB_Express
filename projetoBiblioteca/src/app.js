import express from "express"
import conectaNDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de coneção ", erro)
});

conexao.once("open", () =>{
    console.log("Conexão com o banco feita com sucesso!")
})

const app = express();
routes(app)

export default app;