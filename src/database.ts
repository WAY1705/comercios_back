import mongoose from 'mongoose'


mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://waimaral:TZrnvk0NnLLbMvFc@cluster0.3s4n1z4.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));

