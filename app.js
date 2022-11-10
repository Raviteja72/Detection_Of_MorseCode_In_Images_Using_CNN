const express = require('express');
const path = require('path');
const { sendMail } = require('./sendEmail');
const app = express();

app.use(express.json());

app.use('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'homepage.html'));
});

app.use('/c', (req, res) => {
  console.log('path :- ', path.join(__dirname, 'interns', 'c.html'));
  res.sendFile(path.join(__dirname, 'interns', 'c.html'));
});

app.use('/ds', (req, res) => {
  res.sendFile(path.join(__dirname, 'interns', 'ds.html'));
});

app.use('/dts', (req, res) => {
  res.sendFile(path.join(__dirname, 'interns', 'dts.html'));
});

app.use('/java', (req, res) => {
  res.sendFile(path.join(__dirname, 'interns', 'java.html'));
});

app.use('/ml', (req, res) => {
  res.sendFile(path.join(__dirname, 'interns', 'ml.html'));
});
app.use('/python', (req, res) => {
  res.sendFile(path.join(__dirname, 'interns', 'python.html'));
});
app.use('/wt', (req, res) => {
  res.sendFile(path.join(__dirname, 'interns', 'wt.html'));
});
app.use('/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'interns', 'form.html'));
});

app.post('/api/saveForm', (req, res) => {
  global.formData = req.body;
  return res.json('saved');
});

app.get('/send-mail', (req, res) => {
  console.log('form data :- ', global.formData);
  sendMail(global.formData.email, () => {
    console.log('Email Successfully sent ✅');
  });
  res.json({});
});

app.use('/quiz-c', express.static(path.join(__dirname, 'QUIZ', 'C')));

app.use('/quiz-ds', express.static(path.join(__dirname, 'QUIZ', 'C')));

app.use(
  '/quiz-dst',
  express.static(path.join(__dirname, 'QUIZ', 'DATA_STRUCTURES')),
);

app.use('/quiz-java', express.static(path.join(__dirname, 'QUIZ', 'JAVA')));

app.use(
  '/quiz-ml',
  express.static(path.join(__dirname, 'QUIZ', 'MACHINE_LEARNING')),
);

app.use('/quiz-python', express.static(path.join(__dirname, 'QUIZ', 'PYTHON')));

app.use(
  '/quiz-web',
  express.static(path.join(__dirname, 'QUIZ', 'WEB_TECNOLOGIES')),
);

app.listen(3000, () => {
  console.log('server is running at 3000');
});
