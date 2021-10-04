import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://parqueadero:admin@cluster0.wcyyf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.set('useFindAndModify', false);
mongoose.connect(MONGO_URI || process.env.MONGODB_URL,{
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true,
});
