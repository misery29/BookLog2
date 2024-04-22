const mongoose = require("mongoose")

async function main(){
    
    try{

        await mongoose.connect("mongodb+srv://jaohds:jjKKRhna6VO3fMZA@cluster0.6sgtnod.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log('Conectado ao MongoDB')

    } catch (error){
        console.log('Erro ${error}')
    }

}

module.exports = main