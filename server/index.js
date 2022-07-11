import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://rishu:rishu123@cluster0.inc6j7t.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen)
    .catch(() => )
























    /**
     * 
     * surya
     * rohit
     * dhawan
     * hooda
     * kl
     * shreyas
     * virat
     * hardik
     * shivam
     * chahar
     * chakravarthy
     * axar
     * s bharath
     * shardul
     * kuldeep
     * mayank
     * harshal
     * rajat patidar
     * jiteah sharma
     * Shahbaz Ahmed
     * siraj
     * tewatia
     * shami
     */
