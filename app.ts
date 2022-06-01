import express from 'express';
import morgan from 'morgan';
import swaggerUI from 'swagger-ui-express';
import * as dotenv from 'dotenv';

dotenv.config();

const app : express.Application = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded( { extended: false }));


import indexRouter from './routes';
import guideRouter from './routes/guide'
import signRouter from './routes/user'

import db from './models'

const { sequelize } = db;

import docs from './docs';

app.set('port', process.env.PORT || 3000);

sequelize.sync({ force : false })
.then(() =>{
    console.log('데이터베이스 연결 성공');
})
.catch((err) => {
    console.log(err);
});

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));
app.use('/', indexRouter);
app.use('/guide/', guideRouter);
app.use('/auth/', signRouter)

app.listen(app.get('port'), () =>{
    console.log(app.get('port'), '번 포트에서 대기중');
});