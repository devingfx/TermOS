#!/bin/bash

termkit import bin/status-bar/status-bar.html
termkit js "document.querySelector('window').appendChild(window.statusBar=document.createElement('status-bar'))"

statusBar.update()
{
	
	if [ $? = 0 ]; then
		termkit js "document.querySelector('status-bar').style.background='#80BD01'"
		true;
	else
	termkit js "document.querySelector('status-bar').style.background='#BD012C'"
	return $?;
	fi
	
	
	termkit js "statusBar.update({ hostname: '$(hostname)', ip: '$(hostname -I)',  user: '$(whoami)', directory: '$(echo $PWD)', time: '$(date +%k:%M:%S)' })"
}
PS1='`statusBar.update`\n\$ ';




#echo "$(. ~/.hterml/status-bar/status-bar-update.sh)"
#PS1=$PS1"\$(. ~/.hterml/status-bar/status-bar-update.sh)"
#PS1=$PS1'\[\e]101;updateStatusBar({hostname:"\h",user:"\u",cwd:"\w",cmdId:"\!"})\a\]';
