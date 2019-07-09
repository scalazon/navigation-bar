const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`The shenanigans have started on aisle ${port}`);
});
