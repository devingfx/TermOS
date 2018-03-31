

window.loadScript = function( n, ctx )
{
	var fn;
	try{
		fn = eval( '(function(){'+n.innerHTML+'})' );
	}catch(e){}
	fn && fn.apply( ctx || window )
	
};
window.print = function( s )
{
	term_.io.print( s )
};


var Explorer = window.Explorer;
if( !window.Explorer )
{
	window.$Explorer = $( '<iframe id="Explorer"></iframe>' )
	                .prependTo('body');
	Explorer = window.Explorer = $Explorer[0].contentWindow;
}



$(Explorer.document).on("click","header Directory span", function()
{
	term_.io.sendString("cd "+this.title+"\nnode ~/.hterml/Unixplorer cwd\n")
});

$(Explorer.document).on("dblclick","FileList File", function()
{
	term_.io.sendString("cd "+this.title+"\nnode ~/.hterml/Unixplorer cwd\n");
});


Explorer.updateCWD = function(o)
{
	if(Explorer.cwd != o.cwd)
	{
		Explorer.cwd = o.cwd;	
		$("header Directory", Explorer.document)
			.html( o.cwd.split("/").map(function(f,i,a)
			{
				return '<span title="'+a.slice(0,i+1).join("/")+'">'+f+'</span>/'
			}).join(""));
		
		term_.io.sendString('node ~/.hterml/Unixplorer list\n');
	}
}
Explorer.updateFolder = function(o)
{
	console.log(o);
	this.currentFolder = o;
	// $("footer User").html(o.user);
	// $("footer Host").html(o.hostname);
	$("FileList", Explorer.document)
		.html( o.map(function(f,i,a)
		{
			return '<File title="'+f.path+'"><name>'+f.filename+'</name><size>'+f.size+'</size><mode>'+f.mode+'</mode></File>'
		}).join(""));
}
















