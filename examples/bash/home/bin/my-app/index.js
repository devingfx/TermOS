var args = require('minimist')( process.argv.slice(2) ),
    HTerML = require('../node-hterml.js'),
    fs = require('fs'),
    path = require('path'),
    Mode = require('stat-mode');



var appRoot = process.argv[1]+'/' || '/home/nodeOS/components/Unixplorer/';

function initUI()
{
	console.load( appRoot + '../jquery-1.9.0.min.js' );
	console.js( 'eval( FS["/home/zephilde/.hterml/jquery-1.9.0.min.js"].content )' );
	console.load( appRoot + 'jquery.dataTables.min.js' );
	
	console.DOM('document.head',
        '<style>\
                body {\
                        padding-top: 50%;\
                        box-sizing: border-box;\
                }\
                #Explorer {\
                        top:0;\
                        position: absolute;\
                        width: 100%;\
                        height: 50%;\
                        border: none;\
                        z-index: 100;\
                }\
                #terminal {\
                        position: absolute;\
                        bottom:0;\
                        height: 50%;\
                        width: 100%;\
                }\
        </style>');
}

function updateUI()
{
	console.log('ok update');
	console.load( appRoot + 'term.js' );
        console.load( appRoot + 'index.html' );
        console.js( 'eval( FS["'+appRoot+'term.js"].content )' );
	console.js( 'Explorer.document.body.innerHTML = FS["'+appRoot+'index.html"].content;');
        console.js( 'Explorer.eval( FS["/home/zephilde/.hterml/jquery-1.9.0.min.js"].content )' );
	console.js( 'Explorer.eval( FS["'+appRoot+'jquery.dataTables.min.js"].content )' );
	
	console.DOM('Explorer.document.head',
                    '<style>'+fs.readFileSync( appRoot+'Unixplorer.css','utf-8')+'</style>');
	
}
console.log(args, process.cwd(), process.argv);
if(!args._.length && !args.u && !args.update)
{
	//console.log(args, process.cwd(), process.argv);
	// Augment OSC length to transfer files
	//console.js('term_.vt.maxStringSequence = 100 * 1024 * 1024;'); // 100 Mb
	initUI();
	updateUI();
	
	// console.js('Explorer()');
	
	
	// console.js(
	// '$(document).on("click","footer Directory span", function(){term_.io.sendString("ll "+this.title+"\\n")});\
	// $(document).on("dblclick","footer Directory span", function(){term_.io.sendString("cd "+this.title+"\\n")});\
	// window.updateStatusBar=function(o){\
	// 	$("footer User").html(o.user);\
	// 	$("footer Host").html(o.hostname);\
	// 	$("footer Directory").html(o.cwd.split("/").map(function(f,i,a){\
	// 		return "<span title=\\""+a.slice(0,i+1).join("/")+"\\">"+f+"</span>/"\
	// 	}).join(""));\
	// }')
	// require('fs').readdirSync('.').forEach(function(f)
	// {
	// 	console.js("btn = DOM('<button onclick=\"term_.io.sendString(this.cmd)\">"+f+"</button>');\
	// 	btn.cmd = 'cd /\\nll\\n';\
	// 	toolbar.appendChild(btn);")
		
	// })
}

if( args.u || args.update )
{
	console.log('update arg');
	updateUI();
}

if( args._[0] == 'cwd' )
	console.js('Explorer.updateCWD({cwd:"'+process.cwd()+'"})')

else if( args._[0] == 'list' )
{
	var list = fs.readdirSync( process.cwd() )
			.map(function( file )
			{
				var stat = fs.statSync( file );
				stat.isDirectory = stat.isDirectory();
				stat.filename = file;
				stat.path = path.resolve( process.cwd()+'/'+file );
				stat.mode = new Mode(stat).toString()
				return stat;
			});
	console.js('Explorer.updateFolder('+JSON.stringify( list )+')')
}	










