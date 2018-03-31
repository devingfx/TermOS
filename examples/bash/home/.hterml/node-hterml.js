var mime = require('mime'),
    fs = require('fs');

base64 = function( data )
{
	return new Buffer( data ).toString('base64');
}

console.OSC = function( code )
{
	process.stdout.write( '\033]' + [].slice.call( arguments ).join(';') + '\x07');
}

console.DOM = function( ctx, html )
{
	console.OSC( 100, base64(html), ctx );
//	process.stdout.write( '\033]100;' + new Buffer( html ).toString('base64') + ';' + ctx + '\x07')
}

console.js = function( code )
{
	console.OSC( 101, base64(code) );
//	process.stdout.write( '\033]101;' + new Buffer( code ).toString('base64') + '\x07')
}

console.load = function( filename )
{
	console.OSC( 200,
	             require('path').resolve( filename ),
	             mime.lookup( filename ),
	             base64( fs.readFileSync(filename) )
	);
}

console.extend = function( code, js )
{
	console.OSC( 99, code, base64(js) );
}

