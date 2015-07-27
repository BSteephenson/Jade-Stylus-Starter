var gulp = require('gulp')
var jade = require('gulp-jade')
var stylus = require('gulp-stylus')

var stylus_src = './src/**/*.styl'
var jade_src = './src/**/*.jade'

var build_dir = './build'

gulp.task('stylus', function(){
	gulp.src(stylus_src)
		.pipe(stylus())
		.pipe(gulp.dest(build_dir))
})

gulp.task('jade', function(){
	gulp.src(jade_src)
		.pipe(jade())
		.pipe(gulp.dest(build_dir))
})

gulp.task('watch', function(){
	gulp.watch(stylus_src, ['stylus'])
	gulp.watch(jade_src, ['jade'])
})

gulp.task('build', ['jade', 'stylus'])

gulp.task('default', ['jade', 'stylus', 'watch'])

