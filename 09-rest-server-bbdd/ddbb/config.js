const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        const MONGODB_CNN = 'mongodb+srv://adminMongoDB:yhou9UuesKfDzg5x@myclustersos.femfbk1.mongodb.net/?retryWrites=true&w=majority';
        await mongoose.connect(MONGODB_CNN, {
            useNewUrlParser:true,
            useUnifiedTopology: true
        });
        console.log('BBDD Online');
        
    } catch (error) {
        console.log(error);
        throw new Error('error en BBDD');
        
    }
}

module.exports = {
    dbConnection
}
