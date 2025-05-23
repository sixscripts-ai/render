import express, { Request, Response, RequestHandler } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import agentRouter from './routes/agent';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/agent', agentRouter);

const healthCheck: RequestHandler = (_: Request, res: Response) => {
  res.send('Sixscripts AI Backend Running');
};

app.get('/', healthCheck);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});