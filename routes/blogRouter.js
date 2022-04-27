const fakeBlogData = [1, 2, 3, 4, 5, 6]

const express = require("express")

const blogRouter = express.Router()

blogRouter.route("/")
.get((req, res)=>{
    res.status(200).json({blogs: fakeBlogData})
})
.post((req, res)=>{
    const body = req.body
    fakeBlogData.push(body)
    res.status(201).json({blog:body})
})

blogRouter.route("/:id")
.get((req, res)=>{
    const id = req.params.id
    if(id >= fakeBlogData.length){
        res.status(404).json({message: "ID Doesn't Exist"})
    }else{
        res.status(200).json({blog: fakeBlogData[id]})
    }
})
.put((req, res)=>{
    const body = req.body
    const id = req.params.id

    if(body.name.length <= 8 || body.name.length > 20){
        res.status(400).json({message: "USer name must exceed 8 characters"})
    }else if(body.textContent.length <= 200 || body.textContent.length > 500){
        res.status(400).json({message: "Text must be between 200 and 500"})
    }else{
        fakeBlogData[id] = body
        res.status(202).json({blog:fakeBlogData[id]})
    }
    if(id >= fakeBlogData.length){
        res.status(404).json({message: "ID Doesn't Exist"})
    }else{
        res.status(200).json({blog: fakeBlogData[id]})
    }
})
.delete((req, res)=>{
    const id = req.params.id
    if(id >= fakeBlogData.length){
        res.status(404).json({message: "ID Doesn't Exist"})
    }else{
        fakeBlogData.splice(id, 1)
        res.status(204).json({message: "Succesfully Deleted"})
    }
})

module.exports = blogRouter