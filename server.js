const express = require('express');

const app = express();

app.get('/', (req, res) =>
  res.json({ msg: 'wellcome to the ContactKeeper API...' })
);

app.use('/api/users', require('./routes/users.js'));
app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/contacts', require('./routes/contact.js'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
