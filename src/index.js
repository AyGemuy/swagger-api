
import app from './app.js';
import chalk from 'chalk';

app.set('port', process.env.PORT || 3000);
app.set('message', process.env.MESSAGE || "Hello!");

const port = app.get('port');
const message = app.get('message');

app.listen(port, () => {
  console.log(chalk.blue(`${message} ${port}`));
});
