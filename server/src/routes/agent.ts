import express, { Request, Response } from 'express';
import OpenAI from 'openai';
import { exec } from 'child_process';

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

interface GenerateRequest {
  prompt: string;
}

router.post('/generate', async (req: Request<{}, {}, GenerateRequest>, res: Response) => {
  try {
    const { prompt } = req.body;
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a fullstack app builder AI.' },
        { role: 'user', content: prompt }
      ]
    });
    const output = completion.choices[0].message.content;
    res.json({ output });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'OpenAI generation failed.' });
  }
});

router.post('/deploy', (req: Request, res: Response) => {
  exec('echo "Simulating deployment..." && sleep 2', (error, stdout, stderr) => {
    if (error) return res.status(500).json({ error: error.message });
    if (stderr) return res.status(500).json({ error: stderr });
    res.json({ message: stdout.trim() });
  });
});

export default router;