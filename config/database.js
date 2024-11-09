const mongoose = require("mongoose");

const connectDB = () => {
     
    mongoose.connect(
    "mongodb+srv://praveenudayagiri724:PRAVEEN@cluster0.lvusg.mongodb.net/praveendbHM?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

};
module.exports = connectDB;