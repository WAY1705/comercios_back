import express, { Application } from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';


// rutes auth
import AuthController from './routes/auth'
// import PhotoController from './routes/photo'

// Initializations
const app: Application = express();

// settings
app.set('port', 3001 || process.env.PORT);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', AuthController);
// app.use('/api/photo', PhotoController);

// this folders for this application will be used to store public file images
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;
