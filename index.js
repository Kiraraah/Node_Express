const express = require("express")
const path = require("path")

const app = express()

const caminho = path.join(__dirname, "Templates")

app.get('/usuarios/:id', (requisicao, resposta) => {
    const id = requisicao.params.id

    console.log(`Acessando dados do usúario ${id}`)

    resposta.sendFile(`${caminhoBase}/usuarios.html`)
})

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})
