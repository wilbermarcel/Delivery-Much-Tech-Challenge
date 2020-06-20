import express from 'express';
import recipesRouter from './routers/recipes.js';

const app = express();

app.use(express.json());
app.use('/recipes', recipesRouter);

app.listen(3000, '0.0.0.0');
