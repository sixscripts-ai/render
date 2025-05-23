import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import agentRouter from './routes/agent';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/agent', agentRouter);

app.get('/', (_, res) => res.send('Sixscripts AI Backend Running'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});