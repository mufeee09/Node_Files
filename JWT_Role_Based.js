const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

const SECRET = 'secret';
const users = [{ id: 1, username: 'admin', password: 'admin', role: 'admin' }];

function auth(role) {
  return (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.sendStatus(401);
    try {
      const decoded = jwt.verify(token, SECRET);
      if (decoded.role !== role) return res.sendStatus(403);
      req.user = decoded;
      next();
    } catch {
      res.sendStatus(403);
    }
  };
}

app.post('/login', (req, res) => {
  const user = users.find(u => u.username === req.body.username && u.password === req.body.password);
  if (!user) return res.sendStatus(401);
  const token = jwt.sign({ id: user.id, role: user.role }, SECRET);
  res.json({ token });
});

app.get('/admin', auth('admin'), (req, res) => res.send('Hello Admin'));

app.listen(3000);
