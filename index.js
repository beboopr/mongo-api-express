import express from 'express'
import { addNewFurniture, findFunitureByModel, getAllFurniture } from './src/furniture.js'

const app = express()
const port = 3030
app.use(express.json())

app.get('/', (req,res) => res.send('Working'))
app.post('/furniture', addNewFurniture)
app.get('/furniture', getAllFurniture)
app.get('/furniture/:search', findFunitureByModel)




app.listen(port, () => console.log(`Listening on http://localhost:${port}...`))