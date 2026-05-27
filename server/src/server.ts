// server.ts
// env is loaded via `node --env-file=.env` in the start script
import express, { Request, Response, Application } from 'express';
import { getDB } from './config/connectdb.js';

const app: Application = express();
const PORT = parseInt(process.env.PORT || '3000');

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.json({
    message: 'hai',
    status: 'healthy'
  });
});

await getDB();

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});