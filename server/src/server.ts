// server.ts
// env is loaded via `node --env-file=.env` in the start script
import { connectRedis , redisClient } from './config/connectredis.js';
import express, { Request, Response, Application } from 'express';
import { getDB } from './config/connectdb.js';

const app: Application = express();
const PORT = parseInt(process.env.PORT || '3000');

app.use(express.json());



await getDB();
await connectRedis()

app.get('/health', async (_req:Request, res:Response) => {
  try {
    const redisPing = await redisClient.ping();
    res.json({ ok: true, redis: redisPing === 'PONG' });
  } catch (err) {
    res.status(500).json({ ok: false, error: (err as Error).message });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});