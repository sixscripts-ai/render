import express from 'express';
import { Configuration, OpenAIApi } from 'openai';
import { exec } from 'child_process';

const router = express.Router();

const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

router.post('/generate', async (req, res) => {
  try {
    const { prompt } = req.body;
    const completion = await openai.createChatCompletion({ model: 'gpt-4', messages: [ { role: 'system', content: 'You are a fullstack app builder AI.' }, { role: 'user', content: prompt } ] });
    const output = completion.data.choices[0].message?.content;
    res.json({ output });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'OpenAI generation failed.' });
  }
});

router.post('/deploy', (req, res) => {
  exec('echo "Simulating deployment..." && sleep 2', (error, stdout, stderr) => {
    if (error) return res.status(500).json({ error: error.message });
    if (stderr) return res.status(500).json({ error: stderr });
    res.json({ message: stdout.trim() });
  });
});

export default router;