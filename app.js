import path from 'path';
import express, { Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { isIP } from 'net';
import auth from './src/Routers/auth.js'
import rootRouter from './src/Routers/index.js';


const app = express();

app.use(cors({
    credentials: true,
    origin: function (origin, callback) {
        callback(null, true);
    }
}));

app.use(bodyParser.urlencoded({
    limit: '500mb',
    extended: true
}));

app.use(bodyParser.json({ limit: '500mb' }));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../media')));
app.use(express.static(path.join(__dirname, '../build')));



app.use((req, res, next) => {
    if (isIP(req.hostname) == 0) {
        req.baseUri = req.protocol + '://' + req.hostname + '/';
    } else {
        if (!req.secure) {
            let port = app.get('port');
            req.baseUri = req.protocol + '://' + req.hostname + (port == 80 ? '' : (':' + port)) + '/';
        } else {
            let port = app.get('https_port');
            req.baseUri = req.protocol + '://' + req.hostname + (port == 443 ? '' : (':' + port)) + '/';
        }
    }
    next();
});
app.use('/api', rootRouter);

// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, '../build', 'index.html'));
// });
app.listen(3003, () => {
    console.log(`Example app listening at http://localhost:3003`)
})
export default app;