import 'dotenv/config';
import 'express-async-errors';

import express from 'express';
import cors from 'cors';

import errorHandler from '@/middlewares/ErrorHandler';
import routes from '@/routes';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', routes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
