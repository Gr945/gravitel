const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.Port || 2224
const userRouter = require('./routers/userRouter')
const diagramRouter = require('./routers/diagramRouter')


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use('/',userRouter)
app.use('/diagram',diagramRouter)

app.listen(port, () => {
  console.log(`Server in port ${port}`)
  })
