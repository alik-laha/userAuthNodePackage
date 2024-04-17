import dotenv from 'dotenv'
import app from "./app.js"
dotenv.config()


app.listen(3000, () => {
    console.log(`server is runing on port 3000`)
})