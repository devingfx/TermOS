function( parseState )
{
	var args = parseState.args[0].split(';'),
	    filename = args[0],
	    mime = args[1],
	    data = args[2],
	    FS = window.FS = window.FS || {};
	
	FS[filename] = { data: data, content: atob(data), type: mime };
}
