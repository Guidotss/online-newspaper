import { port } from './types/portType';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import journalRoutes from './routes/journalRoutes';
import authRoutes from './routes/authRoutes'; 
import './dataBase/connect';

dotenv.config();


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(cors());

app.use('/api/v1/journal',journalRoutes);
app.use('/api/v1/journal/auth',authRoutes); 


const PORT:port = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});







