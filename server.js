const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const env = process.env.NODE_ENV || 'development'
const PORT = process.env.PORT || 3000

const userRoutes = require('./routes/user')
const taskRoutes = require('./routes/written_task')

app.get('/', (req,res) => {
    try {
      res.json('hello world')  
    } catch (error) {
        console.error(error)
    }
})

app.use('/api', userRoutes)
app.use('/api', taskRoutes)

app.listen(PORT, () => {
    console.log(`listening to localhost ${PORT}`)
})

