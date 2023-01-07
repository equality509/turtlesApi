const express= require('express')

const app = express();

app.use(express.json());

const turtles = [
    {name: "Leonardo", role: "ninja"},
    {name: "Michaelangelo", role: "ninja"},
    {name: "Donatello", role: "ninja"},
    {name: "Raphael", role: "ninja"},
]

app.get('/', (req, res) => {
    res.json({ response: "hello world"})
})

app.get("/turtles", (req, res) => {
    // send the turtles array as JSON
    res.json(turtles)
})

app.get("/turtles/:index", (req, res) => {
    // send turtle as json
    res.json(turtles[req.params.index])
})

app.post("/turtles", (req, res) => {
    // push the request body into the array
    turtles.push(req.body)
    // send the turtles array as JSON
    res.json(turtles)
})

app.put("/turtles/:index", (req, res) => {
    // replace the turtle at the specified index with the request body
    turtles[req.params.index] = req.body
    // send the turtles array as JSON
    res.json(turtles)
})

app.delete("/turtles/:index", (req, res) => {
    // remove the turtle at the specifed index
    turtles.splice(req.params.index, 1)
    // send the turtles array as JSON
    res.json(turtles)
})

app.listen(1337,() => console.log('listening on port 1337'))