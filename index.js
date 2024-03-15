import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import cors from "cors"
import productRouter from "./routes/products.js"
import userRouter from "./routes/users.js"

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/v1/product", productRouter)
app.use("/v1/user", userRouter)


mongoose.connect('mongodb://127.0.0.1:27017/ditstek', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log("MongoDB connected successfully.");
});

app.listen(port, () => {
  console.log(`Server listening ${port}`)
})