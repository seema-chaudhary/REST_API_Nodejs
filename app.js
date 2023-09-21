require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./api/users/user.router');

app.use(express.json());
app.use('/api/users', userRouter);

// app.get('/api', (req, res) => {
//     // res.send('Hello World!');
//     res.json({
//         success: 1,
//         message: 'Hello World! This is Api'
//     });
// });

app.listen(process.env.APP_PORT, () => {
    console.log('Server up and running on port ', process.env.APP_PORT);
});