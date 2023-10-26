const express = require("express")
const path = require("path")

const app = express()

const caminho = path.join(__dirname, "Templates")

app.get('/', (requisição, resposta) => {
    resposta.send("Estou funcionando com o express")
    console.log(caminhoBAse)
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})
