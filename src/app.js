const express =  require('express')
const helmet =  require('helmet')
const cors =  require('cors')

const app =  express()

app.use(cors())
app.use(helmet())
app.use(express.json())

app.get('/', (req, res)=>{
  res.send('Rota de  teste  funcionando')
})

module.exports = app