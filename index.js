import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import cors from "cors"
import helmet from "helmet";
import productRouter from "./routes/products.js"
import userRouter from "./routes/users.js"
import config from "./config/default.js"
const dbString = config.dbConfig.uri

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(helmet());

app.use("/v1/product", productRouter)
app.use("/v1/user", userRouter)


mongoose.connect(dbString, {
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