var gulp = require('gulp'),
    webserver = require('gulp-webserver');

gulp.task('server', function () {
    gulp.src('.')
    .pipe(webserver({
        port: 8080,
        host: 'localhost',
        middleware: function (req, res, next) {
            var url = require('url').parse(req.url);
            res.writeHead(200, {
                'Access-Control-Allow-Origin': '*'
            })
            if (url.pathname === '/getdata') {
                res.end(require('fs').readFileSync('app/data/data.json'));
            } else {
                res.end('NOT FOUNT 404');
            }
        }
    }))
})