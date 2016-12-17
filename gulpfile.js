
const babel = require( "gulp-babel" );
const gulp = require( "gulp" );
const plumber = require( "gulp-plumber" );
const rename = require( "gulp-rename" );
const sourcemap = require( "gulp-sourcemaps" );
const sass = require( "gulp-sass" );
const uglify = require( "gulp-uglify" );

gulp.task( "style", function styleTask( ){
	gulp.src( [
			"*.scss",
			"./*/*.scss",
			"!node_modules",
			"!bower_components",
			"!.git"
		] )
		.pipe( plumber( ) )
		.pipe( sourcemap.init( ) )
		.pipe( sass( { "outputStyle": "compressed" } ).on( "error", sass.logError ) )
		.pipe( sourcemap.write( ) )
		.pipe( gulp.dest( "./" ) );
} );

gulp.task( "script", function scriptTask( ){
	gulp.src( [
			"*.jsx",
			"./*/*.jsx",
			"!node_modules",
			"!bower_components",
			"!.git"
		] )
		.pipe( plumber( ) )
		.pipe( sourcemap.init( ) )
		.pipe( babel( ) )
		.pipe( uglify( ) )
		.pipe( rename( { "extname": ".js" } ) )
		.pipe( sourcemap.write( ) )
		.pipe( gulp.dest( "./" ) );
} );

gulp.task( "default", [ "style", "script" ] );
