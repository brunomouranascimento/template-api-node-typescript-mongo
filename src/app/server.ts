import express, { Application } from 'express';
import compression from 'compression';
import cors from 'cors';

import routes from '@routes';

const app: Application = express();
const port = 3333 || process.env.PORT;

app.use(compression());
app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(port, () => {
  console.log(`✅ - API running on port ${port}`);
  console.log('➖ - Attempting to connect to Database');
});
