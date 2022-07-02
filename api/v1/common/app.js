const  express =  require('express')

const app= express()
const user_route = require('../User/user_router/user_route')
app.use('/api/v1',user_route)

app.use('/uploads', express.static('uploads'));

module.exports= app