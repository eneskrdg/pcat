const express = require('express');

const app = express();


app.get('/', (req, res) => {
  res.send('merhabaaa');
});
const port = 3001;
app.listen(port, () => {
  console.log(`Sunucu Portu ${port} ile çalıtı`);
});
