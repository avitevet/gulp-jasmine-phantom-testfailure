const gulp = require('gulp');
const jasmine = require('gulp-jasmine-phantom');

gulp.task('test', function() {
	gulp.src('test/spec/**/*.js')
	.pipe(jasmine({
		integration: true,
		keepRunner: 'test',
		includeStackTrace: true,
		vendor: ['app/scripts/invitelist.js']
	}));
});
