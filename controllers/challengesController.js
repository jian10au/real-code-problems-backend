const Challenge = require('../models/Challenge')

const index = async (req, res) => {
    try{
        res.send('index - challenges')

    } catch(error){
        res.status(404).send(error)
    }
}

const create = async(req, res) => {
    try{
       
    } catch(error){
        res.status(404).send(error)
    }
}

const show = async(req, res) => {
    try{
        res.send('challenges show')

    
    } catch(error){
        res.status(404).send(error)
    }
}

const update = async(req, res) => {
    try{
       
    } catch(error){
        res.status(404).send(error)
    }
}

const destroy = async(req, res) => {
    try{
     
    } catch(error){
        res.status(404).send(error)
    }
}

module.exports = {
    index,
    create,
    show,
    update,
    destroy
}