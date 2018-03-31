
$(document).on('click', 'footer Directory span', function()
{
	term_.io.sendString('ll '+this.title+'\n')
});

$(document).on('dblclick', 'footer Directory span', function()
{
	term_.io.sendString('cd '+this.title+'\n')
});

window.updateStatusBar = function(o)
{
	$('footer User').html(o.user);
	$('footer Host').html(o.hostname);
	$('footer Directory')
		.html( o.cwd.split('/').map(function(f,i,a)
			{
				return '<span title="'+a.slice(0,i+1).join('/')+'">'+f+'</span>/'
			}).join('')
		);
}
// require('fs').readdirSync('.').forEach(function(f)
// {
// 	console.js("btn = DOM('<button onclick=\"term_.io.sendString(this.cmd)\">"+f+"</button>');\
// 	btn.cmd = 'cd /\\nll\\n';\
// 	toolbar.appendChild(btn);")
	
// })
