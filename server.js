var express = require('express');
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});
var app = express();
app.set('port', process.env.PORT || 3000);

// 设置模板的后缀为handlebars
app.set('view engine', 'handlebars');
// 使用handlebars的引擎来渲染模板
app.engine('handlebars', handlebars.engine);
// 定义静态文件的文件目录
app.use(express.static(__dirname + '/public'));

// 中间件处理测试页面
// 如果不是在生产环境并且查询字段中有test，并且等于1
app.use(function(req, res, next){
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
    next();
});

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about', {
        pageTestScript: '/qa/tests-about.js'
    });
});

app.get('/tours/hood-river', (req, res) => {
    res.render('tours/hood-river');
});

app.get('/tours/oregon-coast', (req, res) => {
    res.render('tours/oregon-coast');
});

app.get('/tours/request-group-rate', (req, res) => {
    res.render('tours/request-group-rate');
});

// use 函数是express的中间件，用于对request以及response做处理
app.use((req, res) => {
    res.status(404);
    res.render('404');
});

// 定制500页面
app.use((err, req, res, next) => {
    res.status(500);
    res.render('500');
}); 

app.listen(app.get('port'), _ => {
    console.log(`Server started in http:localhost:${ app.get('port') }, Type 'ctrl-c' to terminate`);
});