const gulp = require('gulp');
const jasmine = require('gulp-jasmine-phantom');

gulp.task('test', function() {
	gulp.src('test/spec/**/*.js')
	.pipe(jasmine({
		integration: true,
		keepRunner: 'test',
		includeStackTrace: true,
		jasmineVersion: '2.4',
		vendor: ['app/scripts/invitelist.js']
	}));
});
