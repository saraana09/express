const students = ["Cintia", "Cynclaire", "Freedom", "Heran", "Mariela", "Monica", "Shuren", "Vicky"]
const express = require("express")

const hwRoute = express.Router()

hwRoute.route("/")
.get((req, res) => {
    res.status(200).json({message: "I am a student in PerScholas."})

})
.post((req, res) => {
    const formBody= req.body
    students.push(formBody.name)
    res.status(200).json({students: students})
})

hwRoute.route("/:idx")
.get((req, res) => {
    const idx = require.params.idx
    res.status(200).json({studentname:students[idx]})    
})
.put((req, res) => {
    const idx = req.params.idx
    const body = req.body

    students[idx] = body.name
    res.status(200).json({students})
    
})
.delete((req, res) => {
    const idx = req.params.idx   

    students[idx] = body.name
    students.splice(idx, 1)
    res.status(200).json({students})
    
})


module.exports = hwRoute