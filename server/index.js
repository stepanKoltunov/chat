import express from 'express';
import mongoose from 'mongoose';

const DB_URL = `mongodb+srv://user:user@cluster0.p2yd4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const PORT = 5000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json('Все работает')
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)});
    } catch (e) {
        console.error(`Server error: ${PORT}. Problem: ${e.message}`)
    }
}

startApp()