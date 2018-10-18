const express = require('express');
const app = express();



app.get('/', (req, res) => {
  res.send('Oh Captain! My Captain!')
})




app.listen(3000, (req, res) => {
  console.log('Ayy im workin here')
})
