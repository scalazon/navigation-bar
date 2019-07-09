const app = require('./app');
const { PORT, HOST} = require('../config');

const port = PORT || 3000;
const host = HOST || '0.0.0.0';

app.listen(port, host, () => {
  console.log(`Navbar server running http://${host}:${port}`);
});
