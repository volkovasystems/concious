
const babel = require( "gulp-babel" );
const changed = require( "gulp-changed" );
const child = require( "child_process" );
const debug = require( "gulp-debug" );
const del = require( "del" );
const gulp = require( "gulp" );
const plumber = require( "gulp-plumber" );
const rename = require( "gulp-rename" );
const sourcemap = require( "gulp-sourcemaps" );
const sass = require( "gulp-sass" );
const uglify = require( "gulp-uglify" );
const watch = require( "gulp-watch" );
const vinylPath = require( "vinyl-paths" );

gulp.task( "style", function styleTask( ){
	del.sync( "concious.css" );

	return gulp.src( [
			"*.scss",
			"!./node_modules/**",
			"!./bower_components/**",
			"!.*"
		] )
		.pipe( plumber( ) )
		.pipe( changed( "./", { "extension": ".css" } ) )
		.pipe( debug( { "title": "File:" } ) )
		.pipe( sourcemap.init( { "identityMap": true } ) )
		.pipe( sass( { "outputStyle": "compressed" } ).on( "error", sass.logError ) )
		.pipe( sourcemap.write( { "includeContent": true } ) )
		.pipe( gulp.dest( "./" ) );
} );

gulp.task( "script", function scriptTask( ){
	return gulp.src( [
			"*.jsx",
			"./*/*.jsx",
			"!./node_modules/**",
			"!./bower_components/**",
			"!.*"
		] )
		.pipe( plumber( ) )
		.pipe( changed( "./", { "extension": ".js" } ) )
		.pipe( debug( { "title": "File:" } ) )
		.pipe( sourcemap.init( { "identityMap": true } ) )
		.pipe( babel( ) )
		.pipe( uglify( {
			"compress": {
				"keep_fargs": true,
				"keep_fnames": true,
				"warnings": false
			},
			"comments": false,
			"sourceMap": true,
			"mangle": false
		} ) )
		.pipe( rename( { "extname": ".js" } ) )
		.pipe( sourcemap.write( { "includeContent": true } ) )
		.pipe( gulp.dest( "./" ) );
} );

gulp.task( "default", [ "style", "script" ] );

gulp.task( "watch", function watchTask( ){
	let state = "idle";

	let rebuild = ( ) => {
		if( state == "running" ){
			return;
		}

		state = "running";

		child.execSync( "npm run test", { "cwd": process.cwd( ), "stdio": [ 0, 1, 2 ] } );

		state = "idle";
	};

	rebuild( );

	return watch( [
		"package.json",
		"bower.json",
		"test.html",
		"*.jsx",
		"./*/*.jsx",
		"*.scss",
		"./*/*.scss",
		"!./node_modules/**",
		"!./bower_components/**",
		"!.*"
	], { "readDelay": 1000 }, rebuild );
} );

gulp.task( "clean", function cleanTask( ){
	return gulp.src( [
		"*.js",
		"*.css",
		"./*/*.js",
		"./*/*.css",
		"*.log",
		"!gulpfile.js",
		"!webpack.config.js",
		"!./node_modules/**",
		"!./bower_components/**",
		"!.*"
	] )
	.pipe( plumber( ) )
	.pipe( debug( { "title": "File:" } ) )
	.pipe( vinylPath( del ) );
} );
