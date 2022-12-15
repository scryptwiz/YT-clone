import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.js';

const app = express()
dotenv.config()

const connectDB = () => {
    mongoose
        .connect(process.env.MONGO)
        .then(() => {
            console.log("DB Connected");
        })
        .catch((err) => {
            throw err;
        })
}

app.use('/api/users', userRoutes)

app.listen(8800, () => {
    connectDB()
    console.log("Connected to server!");
})
