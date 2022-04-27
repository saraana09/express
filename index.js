const express = require("express");
const bodyParser = require("body-parser")
const blogRouter = require('./routes/blogRouter')
const hwRoute = require('./routes/hwRoute')

const server = express();

const PORT = process.envPORT || 5000;

server.use(bodyParser.json())

server.use(express.json())

server.use("/blogs", blogRouter)
server.use("/homework", hwRoute)

server.get("/", (req, res)=>{
    res.status(200).json({message: "HELLO my WORLD"})
})


server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});