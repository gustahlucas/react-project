import express from 'express';
import 'express-async-errors';
import { createConnection } from 'typeorm';

import { globalErrors } from './middlewares/globalErros';
import routes from './routes';

// createConnection('../ormconfig.json')
//   .then(async connection => {
const app = express();
const PORT = 3336;

app.use(express.json());
app.use(routes);
app.use(globalErrors);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
// })
// .catch(error => {
//   console.log('Unable to connect to the database', error);
// });
