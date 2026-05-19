import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

const PORT = parseInt(process.env.PORT || '5000');

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.json({
    message: 'hai',
    status: 'healthy'
  });
});

app.listen(PORT, () => {
  console.log(` Server is running at http://localhost:${PORT}`);
});