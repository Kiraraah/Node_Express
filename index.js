const express = require("express")
const path = require("path")

const app = express()

const caminho = path.join(__dirname, "Templates")

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})
