var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config');

gulp.task('watch', function(){
	watch(config.less.all, function(){  //监听所有less
		gulp.start('less-dev'); 			//出现修改、立马执行less任务
	});
	watch(config.images.src, function(){  //监听所有image
		gulp.start('images'); 			
	});
	watch(config.html.src, function(){  //监听所有html
		gulp.start('html'); 			
	});
	watch(config.browserify.watch, function(){  //监听所有image
		gulp.start('browserify'); 			
	});
})