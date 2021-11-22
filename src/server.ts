import express from 'express';

export const app: express.Application = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello world!');
});

app.listen(5000);
