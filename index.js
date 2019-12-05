const Koa = require('koa')
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const utils = require('./utils');
const cors = require('koa2-cors');



utils.walkFile('./sql/')



const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
    // ctx.router available
    ctx.body = 'hello, world';
});

router.get('/getRecommendMovieTypeList', (ctx, next) => {
    // ctx.router available
    ctx.body = [
        {
          type: 1,
          typeName: '热门导演',
          cover: '/assets/director.jpg',
          desc: '热爱导演',
        },
        {
          type: 2,
          typeName: '热门演员',
          cover: '/assets/actor.jpg',
          desc: '热爱演员',
        },
        {
          type: 3,
          typeName: 'IMDB Top 250',
          cover: '/assets/movie.jpg',
          desc: '影史电影排行',
        },
      ]
});


app.use(cors({
      origin: function (ctx) {
          if (ctx.url === '/test') {
              return "*"; // 允许来自所有域名请求
          }
          return '*'; // 这样就能只允许 http://localhost:8080 这个域名的请求了
      },
      exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
      maxAge: 5,
      credentials: true,
      allowMethods: ['GET', 'POST', 'DELETE'],
      allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
  }))
  .use(router.routes())
  .use(router.allowedMethods())
  .use(bodyParser())

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')
