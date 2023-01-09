const express = require("express");
const { createServer } = require("http");
const models = require("./models");
const cors = require("cors");
const breeds=require("./routers/breeds");
const app = express();
const corsOptions = {
	origin: "*",
	optionsSuccessStatus: 200,
};
app.use(express.json());
app.use(cors(corsOptions));

app.use("/breeds",breeds);


const port = process.env.PORT || 5000;
app.listen(port,()=>{
console.log("A szerver fut,",port);
})