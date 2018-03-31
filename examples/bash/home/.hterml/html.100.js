function( parseState )
{
	//debugger;
	parseState.args = parseState.args[0].split(';');
	
	var ctx = parseState.args[1];
	try{
		ctx = eval( ctx );
	}catch(e){
		ctx = document.firstElementChild;
	}
	if( ctx && ctx.ownerDocument && !(ctx instanceof ctx.ownerDocument.defaultView.Node) )
		ctx = ctx.ownerDocument.firstElementChild;
	
	var DOM = function DOM( s, d )
		{
			var d = ( d || document ).createElement('div');
			d.innerHTML = s;
			return d.firstElementChild
		},
	    node = DOM( atob(parseState.args[0]), ctx.ownerDocument );
	ctx.appendChild( node );
	/*
	if( typeof ctx == 'function' )
		window[ctx]( node ); //callback
	else if( typeof ctx == 'string' )
		window[ctx] = node; //just save it
	*/
}
