//pls require the model here//

const index = async (req, res) => {
    try{
        res.send('hey111')

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