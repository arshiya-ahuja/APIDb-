const express = require('express')
const bodyParser = require('body-parser')
const { Agent, Intents, Entities, Context, KnowledgeBase, Document } = require('./sequelize')

const app = express()
app.use(bodyParser.json())


//agents
app.post('/api/Agent', (req, res) => {
    console.log(req.body)
    Agent.create(req.body)
        .then(user => res.json(user))
})

app.get('/api/Agent', (req, res) => {
    Agent.findAll().then(users => res.json(users))
})
//intents 
app.post('/api/Intent', (req, res) => {
    console.log(req.body)
    Agent.create(req.body)
        .then(user => res.json(user))
})

app.get('/api/Intent', (req, res) => {
    Agent.findAll().then(users => res.json(users))
})


const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})