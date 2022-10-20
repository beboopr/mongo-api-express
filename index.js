import express from 'express'

const app = express()
const port = 3030
app.use(express.json())

app.get('/', (req,res) => res.send('Working'))





app.listen(port, () => console.log(`Listening on http://localhost:${port}...`))