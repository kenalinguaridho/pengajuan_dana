require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const indexRouter = require('./routes/indexRoute')

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }))

app.use('/app', indexRouter)

app.use((req, res, next) => {
    res.render('404')
})

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
})
